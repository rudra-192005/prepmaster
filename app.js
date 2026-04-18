// ========================================
// PrepMaster — Main Application Logic
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    // ===== State =====
    let currentExam = null;       // 'neet' or 'jee'
    let currentSubject = null;    // 'physics', 'chemistry', etc.
    let currentTopic = null;      // null = all topics
    let quizQuestions = [];       // questions for current quiz
    let currentQuestionIndex = 0;
    let selectedOption = null;
    let answered = false;
    let quizResults = [];         // { question, selectedOption, isCorrect, isSkipped }
    let timerSeconds = 0;
    let timerInterval = null;
    let totalScore = parseInt(localStorage.getItem('pm_totalScore') || '0');
    let streak = parseInt(localStorage.getItem('pm_streak') || '0');
    let performance = JSON.parse(localStorage.getItem('pm_performance') || '{}');

    // ===== DOM Elements =====
    const screens = document.querySelectorAll('.screen');
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');

    // Update header
    document.getElementById('totalScore').textContent = totalScore;
    document.getElementById('streakCount').textContent = streak;

    // ===== Navigation =====
    function showScreen(screenId) {
        screens.forEach(s => s.classList.remove('active'));
        document.getElementById('screen-' + screenId).classList.add('active');
        window.scrollTo(0, 0);
    }

    // Back buttons
    document.querySelectorAll('.back-btn[data-goto]').forEach(btn => {
        btn.addEventListener('click', () => showScreen(btn.dataset.goto));
    });

    // ===== Toast =====
    function showToast(msg) {
        toastMsg.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
    }

    // ===== EXAM SELECTION =====
    document.querySelectorAll('.exam-card').forEach(card => {
        card.addEventListener('click', () => {
            currentExam = card.dataset.exam;
            renderSubjects();
            showScreen('subjects');
        });
    });

    // ===== SUBJECT SELECTION =====
    function renderSubjects() {
        const subjectsGrid = document.getElementById('subjectsGrid');
        const subjects = SUBJECTS[currentExam];
        const examName = currentExam === 'neet' ? 'NEET' : 'IIT JEE';

        document.getElementById('examTitle').textContent = `${examName} — Select Subject`;
        document.getElementById('examSubtitle').textContent = 'Choose a subject to practice';

        subjectsGrid.innerHTML = '';

        Object.entries(subjects).forEach(([key, subj]) => {
            const questions = getQuestionsForExam(currentExam, key);
            const attempted = (performance[`${currentExam}_${key}`] || {}).attempted || 0;
            const correct = (performance[`${currentExam}_${key}`] || {}).correct || 0;
            const pct = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

            const card = document.createElement('div');
            card.className = 'subject-card';
            card.innerHTML = `
                <span class="subj-icon">${subj.icon}</span>
                <h3>${subj.name}</h3>
                <span class="subj-count">${questions.length} Questions</span>
                <div class="subj-progress">
                    <div class="subj-progress-fill" style="width: ${pct}%; background: ${pct >= 70 ? 'var(--gradient-correct)' : pct >= 40 ? 'linear-gradient(135deg, var(--accent-amber), #FBBF24)' : 'var(--gradient-wrong)'}"></div>
                </div>
                ${attempted > 0 ? `<span class="subj-count">${pct}% accuracy (${attempted} attempted)</span>` : ''}
            `;
            card.addEventListener('click', () => {
                currentSubject = key;
                renderTopics();
                showScreen('topics');
            });
            subjectsGrid.appendChild(card);
        });
    }

    // ===== TOPIC SELECTION =====
    function renderTopics() {
        const topicsGrid = document.getElementById('topicsGrid');
        const subjName = SUBJECTS[currentExam][currentSubject].name;

        document.getElementById('subjectTitle').textContent = `${subjName} — Select Topic`;
        document.getElementById('subjectSubtitle').textContent = 'Pick a topic or take a mixed test';

        const topics = getTopicsForSubject(currentExam, currentSubject);
        topicsGrid.innerHTML = '';

        const colors = ['#6366F1', '#06B6D4', '#10B981', '#F59E0B', '#8B5CF6', '#F43F5E', '#EC4899'];

        topics.forEach((topic, i) => {
            const card = document.createElement('div');
            card.className = 'topic-card';
            card.innerHTML = `
                <div class="topic-dot" style="background: ${colors[i % colors.length]}"></div>
                <div>
                    <h4>${topic.name}</h4>
                    <span class="topic-qcount">${topic.count} questions • ${topic.chapter}</span>
                </div>
            `;
            card.addEventListener('click', () => {
                currentTopic = topic.name;
                startQuiz();
            });
            topicsGrid.appendChild(card);
        });

        // Mixed test button
        document.getElementById('mixedTestBtn').onclick = () => {
            currentTopic = null;
            startQuiz();
        };
    }

    // ===== QUIZ =====
    function startQuiz() {
        let questions = getQuestionsForExam(currentExam, currentSubject);

        if (currentTopic) {
            questions = questions.filter(q => q.topic === currentTopic);
        }

        // Shuffle questions
        quizQuestions = shuffleArray([...questions]).slice(0, 10); // Max 10 per test

        currentQuestionIndex = 0;
        selectedOption = null;
        answered = false;
        quizResults = [];
        timerSeconds = 0;

        // Start timer
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            timerSeconds++;
            document.getElementById('timerDisplay').textContent = formatTime(timerSeconds);
        }, 1000);

        document.getElementById('quizTopicBadge').textContent = currentTopic || 'Mixed';
        showScreen('quiz');
        renderQuestion();
    }

    function renderQuestion() {
        const q = quizQuestions[currentQuestionIndex];
        const total = quizQuestions.length;

        document.getElementById('qNumber').textContent = `Q.${currentQuestionIndex + 1}`;
        document.getElementById('qTopic').textContent = q.topic;
        document.getElementById('qDifficulty').textContent = q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1);
        document.getElementById('qDifficulty').className = `q-difficulty ${q.difficulty}`;
        document.getElementById('questionText').textContent = q.question;
        document.getElementById('quizProgress').textContent = `${currentQuestionIndex + 1}/${total}`;
        document.getElementById('quizProgressFill').style.width = `${((currentQuestionIndex + 1) / total) * 100}%`;

        // Reset state
        selectedOption = null;
        answered = false;
        document.getElementById('submitAnswerBtn').disabled = true;
        document.getElementById('submitAnswerBtn').textContent = 'Check Answer';
        document.getElementById('solutionPanel').style.display = 'none';
        document.getElementById('skipBtn').style.display = 'inline-flex';

        // Render options
        const optionsList = document.getElementById('optionsList');
        const letters = ['A', 'B', 'C', 'D'];
        optionsList.innerHTML = '';

        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `
                <span class="option-letter">${letters[i]}</span>
                <span class="option-text">${opt}</span>
                <span class="option-icon"></span>
            `;
            btn.addEventListener('click', () => {
                if (answered) return;
                selectOption(i);
            });
            optionsList.appendChild(btn);
        });
    }

    function selectOption(index) {
        selectedOption = index;
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach((btn, i) => {
            btn.classList.toggle('selected', i === index);
        });
        document.getElementById('submitAnswerBtn').disabled = false;
    }

    // Submit Answer
    document.getElementById('submitAnswerBtn').addEventListener('click', () => {
        if (answered) return;
        if (selectedOption === null) return;

        answered = true;
        const q = quizQuestions[currentQuestionIndex];
        const isCorrect = selectedOption === q.correct;

        // Record result
        quizResults.push({
            question: q,
            selectedOption: selectedOption,
            isCorrect: isCorrect,
            isSkipped: false
        });

        // Highlight options
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach((btn, i) => {
            btn.classList.add('disabled');
            if (i === q.correct) {
                btn.classList.add('correct');
                btn.querySelector('.option-icon').textContent = '✅';
            }
            if (i === selectedOption && !isCorrect) {
                btn.classList.add('wrong');
                btn.querySelector('.option-icon').textContent = '❌';
            }
            if (i !== q.correct && i !== selectedOption) {
                btn.classList.add('dimmed');
            }
        });

        // Update score
        if (isCorrect) {
            totalScore += q.difficulty === 'hard' ? 4 : q.difficulty === 'medium' ? 3 : 2;
            streak++;
        } else {
            streak = 0;
        }
        document.getElementById('totalScore').textContent = totalScore;
        document.getElementById('streakCount').textContent = streak;
        localStorage.setItem('pm_totalScore', totalScore.toString());
        localStorage.setItem('pm_streak', streak.toString());

        // Show solution
        showSolution(q, isCorrect, false);

        // Hide skip button
        document.getElementById('skipBtn').style.display = 'none';
        document.getElementById('submitAnswerBtn').textContent = 'Answered ✓';
        document.getElementById('submitAnswerBtn').disabled = true;
    });

    // Skip
    document.getElementById('skipBtn').addEventListener('click', () => {
        if (answered) return;

        answered = true;
        const q = quizQuestions[currentQuestionIndex];

        quizResults.push({
            question: q,
            selectedOption: null,
            isCorrect: false,
            isSkipped: true
        });

        // Highlight correct answer
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach((btn, i) => {
            btn.classList.add('disabled');
            if (i === q.correct) {
                btn.classList.add('correct');
                btn.querySelector('.option-icon').textContent = '✅';
            } else {
                btn.classList.add('dimmed');
            }
        });

        streak = 0;
        document.getElementById('streakCount').textContent = streak;
        localStorage.setItem('pm_streak', '0');

        showSolution(q, false, true);
        document.getElementById('skipBtn').style.display = 'none';
        document.getElementById('submitAnswerBtn').textContent = 'Skipped';
        document.getElementById('submitAnswerBtn').disabled = true;
    });

    function showSolution(q, isCorrect, isSkipped) {
        const panel = document.getElementById('solutionPanel');
        const header = document.getElementById('solutionHeader');
        const topicInfo = document.getElementById('solutionTopicInfo');
        const explanation = document.getElementById('solutionExplanation');

        panel.style.display = 'block';

        // Header
        if (isSkipped) {
            header.className = 'solution-header skipped';
            header.innerHTML = `<span class="solution-icon">⏭️</span><span class="solution-title">Question Skipped — Here's the answer</span>`;
        } else if (isCorrect) {
            header.className = 'solution-header correct';
            header.innerHTML = `<span class="solution-icon">🎉</span><span class="solution-title">Correct! Well done!</span>`;
        } else {
            header.className = 'solution-header wrong';
            header.innerHTML = `<span class="solution-icon">❌</span><span class="solution-title">Incorrect — Let's learn from this</span>`;
        }

        // Topic info
        topicInfo.innerHTML = `
            <span class="topic-label">Topic:</span>
            <span class="topic-value">${q.topic}</span>
            <span class="topic-label">Chapter:</span>
            <span class="chapter-value">${q.chapter}</span>
        `;

        // Explanation
        const letters = ['A', 'B', 'C', 'D'];
        explanation.innerHTML = `
            <strong>Correct Answer: (${letters[q.correct]}) ${q.options[q.correct]}</strong><br><br>
            ${q.solution}
        `;

        // Scroll to solution
        setTimeout(() => {
            panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }

    // Next Question
    document.getElementById('nextQuestionBtn').addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex >= quizQuestions.length) {
            endQuiz();
        } else {
            renderQuestion();
            document.querySelector('.question-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    // Quit Quiz
    document.getElementById('quitQuizBtn').addEventListener('click', () => {
        if (confirm('Are you sure you want to quit? Your progress will be lost.')) {
            clearInterval(timerInterval);
            showScreen('home');
        }
    });

    // ===== END QUIZ / RESULTS =====
    function endQuiz() {
        clearInterval(timerInterval);

        const total = quizResults.length;
        const correct = quizResults.filter(r => r.isCorrect).length;
        const wrong = quizResults.filter(r => !r.isCorrect && !r.isSkipped).length;
        const skipped = quizResults.filter(r => r.isSkipped).length;
        const percentage = Math.round((correct / total) * 100);

        // Update performance
        const perfKey = `${currentExam}_${currentSubject}`;
        if (!performance[perfKey]) performance[perfKey] = { attempted: 0, correct: 0 };
        performance[perfKey].attempted += total;
        performance[perfKey].correct += correct;
        localStorage.setItem('pm_performance', JSON.stringify(performance));

        // Results Header
        const resultClass = percentage >= 70 ? 'good' : percentage >= 40 ? 'avg' : 'poor';
        const circumference = 2 * Math.PI * 78;
        const offset = circumference - (percentage / 100) * circumference;

        const message = percentage >= 80 ? '🏆 Excellent Performance!' :
                       percentage >= 60 ? '👍 Good Job!' :
                       percentage >= 40 ? '💪 Keep Practicing!' :
                       '📚 Need More Practice!';

        document.getElementById('resultsHeader').innerHTML = `
            <div class="score-circle">
                <svg viewBox="0 0 180 180" width="180" height="180">
                    <defs>
                        <linearGradient id="scoreGradGood" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#10B981"/><stop offset="1" stop-color="#34D399"/></linearGradient>
                        <linearGradient id="scoreGradAvg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#F59E0B"/><stop offset="1" stop-color="#FBBF24"/></linearGradient>
                        <linearGradient id="scoreGradPoor" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#F43F5E"/><stop offset="1" stop-color="#FB7185"/></linearGradient>
                    </defs>
                    <circle class="circle-bg" cx="90" cy="90" r="78"/>
                    <circle class="circle-fill ${resultClass}" cx="90" cy="90" r="78"
                        stroke-dasharray="${circumference}"
                        stroke-dashoffset="${circumference}"
                        style="transition: stroke-dashoffset 1.5s ease;"
                    />
                </svg>
                <div>
                    <span class="score-value">${percentage}%</span>
                    <span class="score-label">${correct}/${total} correct</span>
                </div>
            </div>
            <p class="result-message">${message}</p>
            <p class="result-submessage">${SUBJECTS[currentExam][currentSubject].name} • ${currentTopic || 'Mixed Topics'}</p>
        `;

        // Animate circle
        setTimeout(() => {
            const circle = document.querySelector('.circle-fill');
            if (circle) circle.style.strokeDashoffset = offset;
        }, 100);

        // Stats
        document.getElementById('resultsStats').innerHTML = `
            <div class="result-stat correct">
                <span class="result-stat-val">${correct}</span>
                <span class="result-stat-label">Correct</span>
            </div>
            <div class="result-stat wrong">
                <span class="result-stat-val">${wrong}</span>
                <span class="result-stat-label">Wrong</span>
            </div>
            <div class="result-stat skipped">
                <span class="result-stat-val">${skipped}</span>
                <span class="result-stat-label">Skipped</span>
            </div>
            <div class="result-stat time">
                <span class="result-stat-val">${formatTime(timerSeconds)}</span>
                <span class="result-stat-label">Time</span>
            </div>
        `;

        showScreen('results');
    }

    // Review Answers Button
    document.getElementById('reviewAnswersBtn').addEventListener('click', () => {
        renderReview('all');
        showScreen('review');
    });

    // Retry
    document.getElementById('retryTestBtn').addEventListener('click', () => {
        startQuiz();
    });

    // Home
    document.getElementById('homeBtn').addEventListener('click', () => {
        updatePerformanceDisplay();
        showScreen('home');
    });

    // Back from review
    document.getElementById('backFromReview').addEventListener('click', () => {
        showScreen('results');
    });

    // ===== REVIEW =====
    function renderReview(filter) {
        const reviewList = document.getElementById('reviewList');
        reviewList.innerHTML = '';

        let filtered = quizResults;
        if (filter === 'wrong') filtered = quizResults.filter(r => !r.isCorrect && !r.isSkipped);
        if (filter === 'correct') filtered = quizResults.filter(r => r.isCorrect);
        if (filter === 'skipped') filtered = quizResults.filter(r => r.isSkipped);

        if (filtered.length === 0) {
            reviewList.innerHTML = `<div style="text-align:center;padding:40px;color:var(--text-muted);">No questions in this category</div>`;
            return;
        }

        const letters = ['A', 'B', 'C', 'D'];

        filtered.forEach((result, idx) => {
            const q = result.question;
            const statusIcon = result.isSkipped ? '⏭️' : result.isCorrect ? '✅' : '❌';

            const item = document.createElement('div');
            item.className = 'review-item';
            item.innerHTML = `
                <div class="review-item-header">
                    <span class="review-status">${statusIcon}</span>
                    <span class="review-q-text">${q.question}</span>
                    <span class="review-toggle">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><polyline points="6 9 12 15 18 9"/></svg>
                    </span>
                </div>
                <div class="review-item-body">
                    <div class="review-options">
                        ${q.options.map((opt, i) => {
                            let classes = 'review-option';
                            if (i === result.selectedOption && !result.isCorrect) classes += ' was-selected';
                            if (i === q.correct) classes += ' is-correct';
                            return `<div class="${classes}">
                                <span class="ro-letter">${letters[i]}.</span>
                                <span>${opt}</span>
                                ${i === q.correct ? ' <strong style="color:var(--accent-emerald);margin-left:auto;">✓ Correct</strong>' : ''}
                                ${i === result.selectedOption && !result.isCorrect ? ' <span style="color:var(--accent-rose);margin-left:auto;">Your answer</span>' : ''}
                            </div>`;
                        }).join('')}
                    </div>
                    <div style="margin:12px 0 8px;">
                        <span class="topic-label">Topic:</span>
                        <span class="topic-value">${q.topic}</span>
                        <span class="topic-label" style="margin-left:8px;">Chapter:</span>
                        <span class="chapter-value">${q.chapter}</span>
                    </div>
                    <div class="review-solution">
                        <strong>Solution:</strong><br><br>${q.solution}
                    </div>
                </div>
            `;

            item.querySelector('.review-item-header').addEventListener('click', () => {
                item.classList.toggle('open');
            });

            reviewList.appendChild(item);
        });
    }

    // Review filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderReview(btn.dataset.filter);
        });
    });

    // ===== PERFORMANCE DISPLAY =====
    function updatePerformanceDisplay() {
        const perfSection = document.getElementById('recentPerfSection');
        const perfGrid = document.getElementById('performanceGrid');

        const keys = Object.keys(performance);
        if (keys.length === 0) {
            perfSection.style.display = 'none';
            perfGrid.style.display = 'none';
            return;
        }

        perfSection.style.display = 'block';
        perfGrid.style.display = 'grid';
        perfGrid.innerHTML = '';

        keys.forEach(key => {
            const [exam, subject] = key.split('_');
            const data = performance[key];
            const pct = Math.round((data.correct / data.attempted) * 100);
            const label = `${exam.toUpperCase()} - ${subject.charAt(0).toUpperCase() + subject.slice(1)}`;
            const barClass = pct >= 70 ? 'good' : pct >= 40 ? 'avg' : 'poor';

            const card = document.createElement('div');
            card.className = 'perf-card';
            card.innerHTML = `
                <h4>${label}</h4>
                <div class="perf-bar"><div class="perf-bar-fill ${barClass}" style="width: ${pct}%"></div></div>
                <span class="perf-score">${data.correct}/${data.attempted} correct (${pct}%)</span>
            `;
            perfGrid.appendChild(card);
        });
    }

    // ===== UTILITIES =====
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }

    // Initial setup
    updatePerformanceDisplay();

});
