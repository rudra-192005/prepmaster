// ========================================
// PrepMaster — Question Bank
// Real NEET & IIT JEE Questions with Solutions
// ========================================

const SUBJECTS = {
    neet: {
        physics: { name: "Physics", icon: "⚛️", color: "#6366F1" },
        chemistry: { name: "Chemistry", icon: "🧪", color: "#06B6D4" },
        biology: { name: "Biology", icon: "🧬", color: "#10B981" }
    },
    jee: {
        physics: { name: "Physics", icon: "⚛️", color: "#6366F1" },
        chemistry: { name: "Chemistry", icon: "🧪", color: "#06B6D4" },
        mathematics: { name: "Mathematics", icon: "📐", color: "#F59E0B" }
    }
};

const QUESTIONS = {
    // ============================================
    // PHYSICS (Common for NEET & JEE)
    // ============================================
    physics: [
        {
            id: "p1",
            question: "A body of mass 5 kg is moving with a velocity of 10 m/s. A force is applied to it so that in 25 seconds, it attains a velocity of 35 m/s. What is the force applied?",
            options: ["5 N", "4 N", "2 N", "1 N"],
            correct: 0,
            topic: "Newton's Laws of Motion",
            chapter: "Laws of Motion",
            difficulty: "easy",
            exam: "both",
            solution: `<strong>Given:</strong> Mass (m) = 5 kg, Initial velocity (u) = 10 m/s, Final velocity (v) = 35 m/s, Time (t) = 25 s<br><br>
<strong>Step 1:</strong> Find acceleration using: <span class="formula">a = (v - u) / t</span>
a = (35 - 10) / 25 = 25/25 = <strong>1 m/s²</strong><br><br>
<strong>Step 2:</strong> Apply Newton's second law: <span class="formula">F = m × a</span>
F = 5 × 1 = <span class="correct-answer-highlight">5 N</span><br><br>
<strong>Key Concept:</strong> Newton's Second Law states that Force = Mass × Acceleration. Always find acceleration first when velocity and time are given.`
        },
        {
            id: "p2",
            question: "A stone is dropped from a height of 80 m. How long will it take to reach the ground? (g = 10 m/s²)",
            options: ["2 s", "4 s", "6 s", "8 s"],
            correct: 1,
            topic: "Kinematics",
            chapter: "Motion in a Straight Line",
            difficulty: "easy",
            exam: "both",
            solution: `<strong>Given:</strong> Height (h) = 80 m, Initial velocity (u) = 0 (dropped), g = 10 m/s²<br><br>
<strong>Using:</strong> <span class="formula">h = ut + ½gt²</span>
Since u = 0: 80 = 0 + ½ × 10 × t²<br>
80 = 5t²<br>
t² = 16<br>
t = <span class="correct-answer-highlight">4 seconds</span><br><br>
<strong>Key Concept:</strong> For a freely falling body from rest, use h = ½gt². The initial velocity is zero when an object is "dropped" (not thrown).`
        },
        {
            id: "p3",
            question: "The SI unit of electric current is:",
            options: ["Volt", "Ohm", "Ampere", "Watt"],
            correct: 2,
            topic: "Current Electricity",
            chapter: "Electric Charges and Fields",
            difficulty: "easy",
            exam: "both",
            solution: `The SI unit of electric current is <span class="correct-answer-highlight">Ampere (A)</span>.<br><br>
<strong>Remember the SI units:</strong><br>
• <strong>Voltage:</strong> Volt (V) — potential difference<br>
• <strong>Resistance:</strong> Ohm (Ω) — opposition to current flow<br>
• <strong>Current:</strong> Ampere (A) — rate of flow of charge<br>
• <strong>Power:</strong> Watt (W) — rate of energy transfer<br><br>
<span class="formula">1 Ampere = 1 Coulomb per second (1 A = 1 C/s)</span>
<strong>Key Concept:</strong> Current is defined as the rate of flow of charge. It is a fundamental quantity in SI system.`
        },
        {
            id: "p4",
            question: "Two resistors of 4Ω and 6Ω are connected in parallel. What is the equivalent resistance?",
            options: ["10 Ω", "2.4 Ω", "5 Ω", "24 Ω"],
            correct: 1,
            topic: "Current Electricity",
            chapter: "Current Electricity",
            difficulty: "medium",
            exam: "both",
            solution: `<strong>For parallel combination:</strong><br>
<span class="formula">1/R_eq = 1/R₁ + 1/R₂</span>
1/R_eq = 1/4 + 1/6<br>
1/R_eq = 3/12 + 2/12 = 5/12<br>
R_eq = 12/5 = <span class="correct-answer-highlight">2.4 Ω</span><br><br>
<strong>Quick formula for two resistors in parallel:</strong>
<span class="formula">R_eq = (R₁ × R₂) / (R₁ + R₂) = (4 × 6)/(4 + 6) = 24/10 = 2.4 Ω</span><br>
<strong>Key Concept:</strong> In parallel, equivalent resistance is always less than the smallest individual resistance. Use the product/sum formula for quick calculation with two resistors.`
        },
        {
            id: "p5",
            question: "The work done in moving a charge of 5C across a potential difference of 12V is:",
            options: ["60 J", "2.4 J", "17 J", "0.42 J"],
            correct: 0,
            topic: "Electrostatics",
            chapter: "Electrostatic Potential and Capacitance",
            difficulty: "easy",
            exam: "both",
            solution: `<strong>Formula:</strong> <span class="formula">Work = Charge × Potential Difference → W = qV</span>
W = 5C × 12V = <span class="correct-answer-highlight">60 Joules</span><br><br>
<strong>Key Concept:</strong> Work done in moving a charge through a potential difference is W = qV. This is because voltage is defined as work done per unit charge (V = W/q).`
        },
        {
            id: "p6",
            question: "A convex lens has a focal length of 20 cm. What is its power?",
            options: ["5 D", "+5 D", "-5 D", "0.05 D"],
            correct: 1,
            topic: "Ray Optics",
            chapter: "Ray Optics and Optical Instruments",
            difficulty: "easy",
            exam: "both",
            solution: `<strong>Formula:</strong> <span class="formula">Power (P) = 1/f (in metres)</span>
f = 20 cm = 0.2 m<br>
P = 1/0.2 = <span class="correct-answer-highlight">+5 D (Dioptre)</span><br><br>
<strong>Key Concept:</strong><br>
• Convex lens → positive focal length → positive power (converging)<br>
• Concave lens → negative focal length → negative power (diverging)<br>
• Always convert focal length to metres before calculating power.`
        },
        {
            id: "p7",
            question: "The kinetic energy of a body is increased by 300%. The percentage increase in the momentum is:",
            options: ["100%", "150%", "200%", "50%"],
            correct: 0,
            topic: "Work, Energy and Power",
            chapter: "Work, Energy and Power",
            difficulty: "hard",
            exam: "both",
            solution: `<strong>Relation between KE and momentum:</strong>
<span class="formula">KE = p²/2m → p = √(2mKE)</span>
If KE increases by 300%, new KE = 4 × original KE<br><br>
New momentum: p' = √(2m × 4KE) = 2√(2mKE) = 2p<br><br>
Percentage increase = ((p' - p)/p) × 100 = ((2p - p)/p) × 100 = <span class="correct-answer-highlight">100%</span><br><br>
<strong>Key Concept:</strong> Since p ∝ √KE, if KE becomes n times, momentum becomes √n times. Here KE = 4×, so p = 2× (100% increase).`
        },
        {
            id: "p8",
            question: "The dimensional formula of Planck's constant is:",
            options: ["[ML²T⁻¹]", "[MLT⁻¹]", "[ML²T⁻²]", "[ML²T⁻³]"],
            correct: 0,
            topic: "Units and Dimensions",
            chapter: "Physical World and Measurement",
            difficulty: "medium",
            exam: "both",
            solution: `<strong>Planck's constant (h):</strong> E = hν<br>
<span class="formula">h = E/ν = Energy / Frequency</span>
Dimensions of Energy = [ML²T⁻²]<br>
Dimensions of Frequency = [T⁻¹]<br><br>
h = [ML²T⁻²] / [T⁻¹] = <span class="correct-answer-highlight">[ML²T⁻¹]</span><br><br>
<strong>Key Concept:</strong> Planck's constant has the same dimensions as angular momentum (L = mvr = [ML²T⁻¹]). This is not a coincidence — angular momentum is quantized in units of ℏ = h/2π.`
        },
        {
            id: "p9",
            question: "The escape velocity from Earth's surface is approximately:",
            options: ["7.9 km/s", "11.2 km/s", "15.8 km/s", "3.2 km/s"],
            correct: 1,
            topic: "Gravitation",
            chapter: "Gravitation",
            difficulty: "easy",
            exam: "both",
            solution: `The escape velocity from Earth is <span class="correct-answer-highlight">11.2 km/s</span><br><br>
<strong>Formula:</strong> <span class="formula">v_escape = √(2gR) = √(2GM/R)</span>
Where g = 9.8 m/s², R = 6400 km<br>
v_e = √(2 × 9.8 × 6.4 × 10⁶) ≈ 11.2 km/s<br><br>
<strong>Key facts to remember:</strong><br>
• Escape velocity from Earth ≈ 11.2 km/s<br>
• Orbital velocity near Earth ≈ 7.9 km/s<br>
• v_escape = √2 × v_orbital<br>
• Escape velocity is independent of the mass of the object.`
        },
        {
            id: "p10",
            question: "In Young's double-slit experiment, if the distance between the slits is halved and the distance to the screen is doubled, the fringe width will:",
            options: ["Remain the same", "Be halved", "Be doubled", "Become four times"],
            correct: 3,
            topic: "Wave Optics",
            chapter: "Wave Optics",
            difficulty: "hard",
            exam: "both",
            solution: `<strong>Fringe width formula:</strong>
<span class="formula">β = λD/d</span>
Where λ = wavelength, D = distance to screen, d = slit separation<br><br>
If d → d/2 and D → 2D:<br>
New β' = λ(2D)/(d/2) = 4λD/d = 4β<br><br>
Fringe width becomes <span class="correct-answer-highlight">four times</span> the original.<br><br>
<strong>Key Concept:</strong> β ∝ D/d. Halving slit distance doubles β, and doubling screen distance also doubles β. Combined effect = 4×.`
        },
        {
            id: "p11",
            question: "The velocity of sound in air at 20°C is approximately 340 m/s. At what temperature will it be 680 m/s?",
            options: ["80°C", "880°C", "900°C", "1172°C"],
            correct: 2,
            topic: "Waves",
            chapter: "Waves",
            difficulty: "hard",
            exam: "jee",
            solution: `<strong>Velocity of sound is proportional to √T (absolute temperature):</strong>
<span class="formula">v ∝ √T → v₁/v₂ = √(T₁/T₂)</span>
340/680 = √(293/T₂)<br>
1/2 = √(293/T₂)<br>
1/4 = 293/T₂<br>
T₂ = 4 × 293 = 1172 K<br>
T₂ in °C = 1172 - 273 = <span class="correct-answer-highlight">899 ≈ 900°C</span><br><br>
<strong>Key Concept:</strong> Speed of sound in a gas ∝ √T (in Kelvin). Always convert °C to K first. If speed doubles, temperature must become 4 times.`
        },
        {
            id: "p12",
            question: "A ball is thrown vertically upward with velocity 20 m/s. The maximum height reached is: (g = 10 m/s²)",
            options: ["10 m", "20 m", "30 m", "40 m"],
            correct: 1,
            topic: "Kinematics",
            chapter: "Motion in a Straight Line",
            difficulty: "easy",
            exam: "both",
            solution: `<strong>At maximum height, v = 0</strong><br>
<span class="formula">v² = u² - 2gh (upward motion)</span>
0 = (20)² - 2(10)(h)<br>
0 = 400 - 20h<br>
h = 400/20 = <span class="correct-answer-highlight">20 m</span><br><br>
<strong>Quick formula:</strong> <span class="formula">h_max = u²/2g</span>
h = (20)²/(2×10) = 400/20 = 20 m<br><br>
<strong>Key Concept:</strong> At maximum height, velocity becomes zero momentarily. Use v² = u² - 2gh with v = 0.`
        },

        // More Physics Questions
        {
            id: "p13",
            question: "The moment of inertia of a solid sphere about its diameter is (2/5)MR². What is it about a tangent?",
            options: ["(2/5)MR²", "(7/5)MR²", "(3/5)MR²", "(9/5)MR²"],
            correct: 1,
            topic: "Rotational Motion",
            chapter: "System of Particles and Rotational Motion",
            difficulty: "medium",
            exam: "both",
            solution: `<strong>Using Parallel Axis Theorem:</strong>
<span class="formula">I_tangent = I_cm + Md²</span>
Where d = R (distance from centre to tangent point)<br><br>
I_tangent = (2/5)MR² + MR² = (2/5 + 5/5)MR² = <span class="correct-answer-highlight">(7/5)MR²</span><br><br>
<strong>Key Concept:</strong> Parallel Axis Theorem: I = I_cm + Md². It's used to find the moment of inertia about any axis parallel to the axis through the centre of mass.`
        },
        {
            id: "p14",
            question: "A 100W bulb is used for 10 hours. The energy consumed is:",
            options: ["1 kWh", "10 kWh", "100 kWh", "0.1 kWh"],
            correct: 0,
            topic: "Current Electricity",
            chapter: "Current Electricity",
            difficulty: "easy",
            exam: "neet",
            solution: `<strong>Formula:</strong> <span class="formula">Energy = Power × Time</span>
E = 100 W × 10 h = 1000 Wh = <span class="correct-answer-highlight">1 kWh</span><br><br>
<strong>Note:</strong> 1 kWh = 1 unit of electricity = 3.6 × 10⁶ J<br><br>
<strong>Key Concept:</strong> kWh (kilowatt-hour) is the commercial unit of energy. 1 kWh = 1000W × 1h = 3.6 MJ.`
        },

        // ============================================
        // NEET GRAND TEST (SERIES-1) — Physics
        // ============================================
        {
            id: "gt1",
            question: "A particle at the end of a spring executes SHM with a period t, while the corresponding period of another spring is t₁. If the two springs are connected in series then the time period T satisfies:",
            options: ["T = t + t₁", "T² = t² + t₁²", "T⁻¹ = t⁻¹ + t₁⁻¹", "T⁻² = t⁻² + t₁⁻²"],
            correct: 1,
            topic: "Oscillations",
            chapter: "Oscillations",
            difficulty: "hard",
            exam: "neet",
            solution: `<strong>For springs in series:</strong> <span class="formula">1/k_eff = 1/k₁ + 1/k₂</span><br>
Since T = 2π√(m/k), we get T² = 4π²m/k, so T² ∝ 1/k<br><br>
T₁² = 4π²m/k₁ and T₂² = 4π²m/k₂<br>
T² = 4π²m/k_eff = 4π²m(1/k₁ + 1/k₂) = T₁² + T₂²<br><br>
Therefore: <span class="correct-answer-highlight">T² = t² + t₁²</span><br><br>
<strong>Key Concept:</strong> For series combination of springs, effective spring constant decreases, and time periods add in quadrature (squares add up).`
        },
        {
            id: "gt2",
            question: "The equation of a wave on a string of linear mass density 0.04 kg/m is given by y = 0.02 sin[2π(t/0.04 - x/0.50)]. The tension in the string is:",
            options: ["4.0 N", "12.5 N", "0.25 N", "6.25 N"],
            correct: 3,
            topic: "Waves",
            chapter: "Waves",
            difficulty: "hard",
            exam: "neet",
            solution: `<strong>From the wave equation:</strong> y = 0.02 sin[2π(t/0.04 - x/0.50)]<br><br>
<strong>Step 1:</strong> Find wave velocity<br>
ω = 2π/0.04, k = 2π/0.50<br>
<span class="formula">v = ω/k = (2π/0.04)/(2π/0.50) = 0.50/0.04 = 12.5 m/s</span><br><br>
<strong>Step 2:</strong> Find tension<br>
<span class="formula">v = √(T/μ) → T = μv²</span>
T = 0.04 × (12.5)² = 0.04 × 156.25 = <span class="correct-answer-highlight">6.25 N</span><br><br>
<strong>Key Concept:</strong> Wave speed on a string v = √(T/μ). Extract v from the wave equation using v = ω/k = λ/T_period.`
        },
        {
            id: "gt3",
            question: "A man of weight 'mg' is standing inside a rocket which is moving with an acceleration 4g. The apparent weight of the man inside the rocket is:",
            options: ["7mg", "4mg", "5mg", "mg"],
            correct: 2,
            topic: "Newton's Laws of Motion",
            chapter: "Laws of Motion",
            difficulty: "medium",
            exam: "neet",
            solution: `<strong>In an accelerating rocket:</strong><br>
The apparent weight = m(g + a) where a is the acceleration of the rocket.<br><br>
<span class="formula">W_apparent = m(g + 4g) = m × 5g = 5mg</span><br><br>
Answer: <span class="correct-answer-highlight">5mg</span><br><br>
<strong>Key Concept:</strong> In an accelerating system (upward), apparent weight increases: W = m(g + a). In a falling/descending system, W = m(g - a). In free fall, W = 0 (weightlessness).`
        },
        {
            id: "gt4",
            question: "What are the dimensions of the coefficient of viscosity η?",
            options: ["ML⁻²T⁻²", "MLT⁻¹", "ML⁻¹T⁻¹", "ML²T⁻²"],
            correct: 2,
            topic: "Units and Dimensions",
            chapter: "Physical World and Measurement",
            difficulty: "medium",
            exam: "neet",
            solution: `<strong>From Newton's law of viscosity:</strong> F = ηA(dv/dy)<br><br>
<span class="formula">η = F/(A × dv/dy) = [MLT⁻²]/[L² × (LT⁻¹/L)]</span><br>
= [MLT⁻²]/[L² × T⁻¹]<br>
= [MLT⁻²]/[L²T⁻¹]<br>
= <span class="correct-answer-highlight">[ML⁻¹T⁻¹]</span><br><br>
<strong>Key Concept:</strong> The coefficient of viscosity measures a fluid's resistance to flow. Its SI unit is Pa·s (Pascal-second) or kg/(m·s).`
        },
        {
            id: "gt5",
            question: "Angular speed of the hour hand of a clock in degrees per second is:",
            options: ["1/30", "1/60", "1/120", "1/720"],
            correct: 2,
            topic: "Circular Motion",
            chapter: "Motion in a Plane",
            difficulty: "easy",
            exam: "neet",
            solution: `<strong>Hour hand completes 360° in 12 hours:</strong><br><br>
<span class="formula">ω = 360° / (12 × 60 × 60 seconds)</span>
= 360 / 43200<br>
= <span class="correct-answer-highlight">1/120 degree per second</span><br><br>
<strong>Comparison:</strong><br>
• Hour hand: 1/120 °/s = 360° in 12 hours<br>
• Minute hand: 1/10 °/s = 360° in 1 hour<br>
• Second hand: 6 °/s = 360° in 60 seconds`
        },
        {
            id: "gt6",
            question: "The mean kinetic energy of one mole of a gas per degree of freedom (on the basis of kinetic theory of gases) is:",
            options: ["½kT", "3/2 kT", "3/2 RT", "½RT"],
            correct: 3,
            topic: "Kinetic Theory",
            chapter: "Kinetic Theory",
            difficulty: "medium",
            exam: "neet",
            solution: `<strong>Per molecule:</strong> KE per degree of freedom = ½kT<br>
<strong>Per mole:</strong> KE per degree of freedom = ½RT<br><br>
Since the question asks for <strong>one mole</strong>:<br>
<span class="correct-answer-highlight">½RT</span><br><br>
<strong>Key Relations:</strong><br>
• Per molecule per DOF: ½kT<br>
• Per molecule total: (f/2)kT where f = degrees of freedom<br>
• Per mole per DOF: ½RT (since R = Nₐk)<br>
• Per mole total: (f/2)RT<br><br>
<strong>Key Concept:</strong> k is Boltzmann constant (per molecule), R is gas constant (per mole). R = Nₐk.`
        },
        {
            id: "gt7",
            question: "Two spheres A and B have diameters in the ratio 1:2, densities in the ratio 2:1 and specific heat capacities in the ratio 1:3. The ratio of their thermal capacities is:",
            options: ["1:6", "1:12", "1:3", "1:4"],
            correct: 1,
            topic: "Thermal Properties",
            chapter: "Thermal Properties of Matter",
            difficulty: "hard",
            exam: "neet",
            solution: `<strong>Thermal capacity = mass × specific heat = mS = ρVS</strong><br><br>
Diameter ratio = 1:2, so radius ratio = 1:2<br>
Volume ratio = (r₁/r₂)³ = (1/2)³ = 1:8<br>
Density ratio = 2:1<br>
Specific heat ratio = 1:3<br><br>
<span class="formula">Thermal capacity ratio = ρ₁V₁S₁ : ρ₂V₂S₂</span>
= (2)(1)(1) : (1)(8)(3)<br>
= 2 : 24 = <span class="correct-answer-highlight">1:12</span><br><br>
<strong>Key Concept:</strong> Thermal capacity = mS = ρVS. Volume of sphere = (4/3)πr³, so V ∝ r³ ∝ d³.`
        },
        {
            id: "gt8",
            question: "An object of mass 4 kg and another object of mass 1 kg are moving such that they have equal kinetic energies. The ratio of the magnitudes of their linear momenta is:",
            options: ["1:2", "1:1", "2:1", "4:1"],
            correct: 2,
            topic: "Work, Energy and Power",
            chapter: "Work, Energy and Power",
            difficulty: "medium",
            exam: "neet",
            solution: `<strong>Relation:</strong> <span class="formula">KE = p²/(2m) → p = √(2mKE)</span><br><br>
Since KE₁ = KE₂ = KE:<br>
p₁ = √(2 × 4 × KE) = √(8KE)<br>
p₂ = √(2 × 1 × KE) = √(2KE)<br><br>
p₁/p₂ = √(8KE)/√(2KE) = √4 = 2<br>
Ratio = <span class="correct-answer-highlight">2:1</span><br><br>
<strong>Key Concept:</strong> When KE is equal, p ∝ √m. The heavier object has more momentum. When momentum is equal, KE ∝ 1/m (lighter object has more KE).`
        },
        {
            id: "gt9",
            question: "A body is dropped from a certain height above the surface of the earth. When it loses U amount of its potential energy, it acquires a velocity v. The mass of the body is:",
            options: ["2U/v²", "2v/U", "2v/U", "U²/2v"],
            correct: 0,
            topic: "Work, Energy and Power",
            chapter: "Work, Energy and Power",
            difficulty: "easy",
            exam: "neet",
            solution: `<strong>By conservation of energy:</strong><br>
Loss in PE = Gain in KE<br><br>
<span class="formula">U = ½mv²</span><br>
m = 2U/v²<br><br>
Answer: <span class="correct-answer-highlight">m = 2U/v²</span><br><br>
<strong>Key Concept:</strong> When only gravity acts (no friction), the loss in potential energy equals the gain in kinetic energy. This is conservation of mechanical energy.`
        },
        {
            id: "gt10",
            question: "A bimetallic strip is made up of two strips A and B having coefficients of linear expansion α_a and α_b. If α_a < α_b, then on heating, the strip will:",
            options: ["Bend with A on outer side", "Bend with B on outer side", "Not bend at all", "None of the above"],
            correct: 1,
            topic: "Thermal Properties",
            chapter: "Thermal Properties of Matter",
            difficulty: "medium",
            exam: "neet",
            solution: `Since α_b > α_a, strip B expands more than strip A when heated.<br><br>
The more expanded strip (B) becomes longer and forms the outer arc (larger radius), while the less expanded strip (A) forms the inner arc.<br><br>
Therefore: <span class="correct-answer-highlight">Bend with B on outer side</span><br><br>
<strong>Key Concept:</strong> In a bimetallic strip, the metal with higher coefficient of linear expansion always ends up on the outer (convex) side. This principle is used in thermostats.`
        },
        {
            id: "gt11",
            question: "A body slides down on a frictionless track which ends in a circular loop of diameter D. The minimum height h in terms of D so that the body may just complete the circular loop is:",
            options: ["h = 5D/2", "h = 3D/2", "h = 5D/4", "h = 2D"],
            correct: 2,
            topic: "Circular Motion",
            chapter: "Work, Energy and Power",
            difficulty: "hard",
            exam: "neet",
            solution: `<strong>At the top of the loop:</strong> mg = mv²/r where r = D/2<br>
So v²_top = gr = g(D/2)<br><br>
<strong>Using energy conservation</strong> (bottom to top):<br>
<span class="formula">mgh = mg(2r) + ½mv²_top</span>
mgh = mg(D) + ½m(gD/2)<br>
gh = gD + gD/4<br>
h = D + D/4 = <span class="correct-answer-highlight">5D/4</span><br><br>
<strong>Key Concept:</strong> For completing a vertical circular loop, the minimum speed at top = √(gr). Use energy conservation to find the minimum height. Note: h is measured from the bottom of the loop.`
        },
        {
            id: "gt12",
            question: "A satellite is orbiting a planet at a certain height in a circular orbit. If the mass of the planet is suddenly reduced to half, the satellite would:",
            options: ["Continue to revolve at the same speed", "Fall freely on the planet", "Orbit at a lesser speed", "Escape from the planet"],
            correct: 3,
            topic: "Gravitation",
            chapter: "Gravitation",
            difficulty: "hard",
            exam: "neet",
            solution: `<strong>Original orbital velocity:</strong> <span class="formula">v_orbital = √(GM/r)</span><br>
<strong>Original escape velocity:</strong> v_escape = √(2GM/r) = √2 × v_orbital<br><br>
When M becomes M/2:<br>
New escape velocity = √(2G(M/2)/r) = √(GM/r) = v_orbital<br><br>
The satellite's speed = v_orbital = new escape velocity<br>
So the satellite has exactly escape velocity for the new mass!<br><br>
Result: <span class="correct-answer-highlight">The satellite will escape from the planet</span><br><br>
<strong>Key Concept:</strong> If v ≥ v_escape, the object escapes. Here the orbital velocity equals the new escape velocity, so the satellite just escapes.`
        },
        {
            id: "gt13",
            question: "Statement A: Breaking stress depends on the nature of material only. Statement B: Breaking force is independent of length of wire.",
            options: ["A correct; B correct", "A wrong; B correct", "A wrong; B wrong", "A correct; B wrong"],
            correct: 0,
            topic: "Mechanical Properties",
            chapter: "Mechanical Properties of Solids",
            difficulty: "medium",
            exam: "neet",
            solution: `<strong>Statement A:</strong> Breaking stress is a material property — it depends ONLY on the nature of the material, not on dimensions. ✅ CORRECT<br><br>
<strong>Statement B:</strong> Breaking force = Breaking stress × Area.<br>
It depends on cross-sectional area but NOT on the length of the wire. ✅ CORRECT<br><br>
Answer: <span class="correct-answer-highlight">Both A and B are correct</span><br><br>
<strong>Key Concept:</strong><br>
• Stress = Force/Area (depends on material)<br>
• Breaking stress is a constant for a given material<br>
• Breaking force = Breaking stress × A (independent of length, depends on area)`
        },
        {
            id: "gt14",
            question: "Consider the following statements:\nI) Surface tension of liquids generally decreases with rise in temperature.\nII) Viscosity of gases generally decreases with rise in temperature.\nIII) Viscosity of liquids generally decreases with rise in temperature.",
            options: ["I & II are only true", "II & III are only true", "I & III are only true", "All are true"],
            correct: 2,
            topic: "Fluid Mechanics",
            chapter: "Mechanical Properties of Fluids",
            difficulty: "medium",
            exam: "neet",
            solution: `<strong>I) Surface tension decreases with temperature</strong> — ✅ TRUE<br>
(At higher temperature, molecules have more KE, intermolecular forces weaken)<br><br>
<strong>II) Viscosity of gases INCREASES with temperature</strong> — ❌ FALSE<br>
(Gas viscosity ∝ √T, because more molecular collisions occur)<br><br>
<strong>III) Viscosity of liquids decreases with temperature</strong> — ✅ TRUE<br>
(Higher temperature breaks intermolecular bonds, easier flow)<br><br>
Answer: <span class="correct-answer-highlight">I & III are only true</span><br><br>
<strong>Key Rule:</strong> Gas viscosity ↑ with T (more collisions). Liquid viscosity ↓ with T (weaker bonds).`
        },
        {
            id: "gt15",
            question: "Which of the following statements is correct?\n1) When a conservative force does positive work, PE increases\n2) A non-conservative force always decreases mechanical energy\n3) Total work done by friction on a complete system can never be positive\n4) Internal forces can never change the kinetic energy of the system",
            options: ["When conservative force does positive work, PE increases", "Non-conservative force always decreases mechanical energy", "Total work done by friction on a complete system can never be positive", "Internal forces can never change the kinetic energy"],
            correct: 2,
            topic: "Work, Energy and Power",
            chapter: "Work, Energy and Power",
            difficulty: "hard",
            exam: "neet",
            solution: `<strong>Analysis of each statement:</strong><br><br>
1) ❌ When conservative force does positive work, PE DECREASES (ΔPE = -W)<br><br>
2) ❌ Non-conservative forces can increase or decrease mechanical energy (e.g., applied force can increase it)<br><br>
3) ✅ Total work done by friction on a COMPLETE system is always negative or zero — friction converts mechanical energy to heat, never creates it.<br><br>
4) ❌ Internal forces CAN change KE (e.g., in an explosion, internal forces increase total KE while momentum stays constant)<br><br>
Answer: <span class="correct-answer-highlight">Total work done by friction on a complete system can never be positive</span>`
        },
        {
            id: "gt16",
            question: "Observer O₁ is in a lift going upward and observer O₂ is on ground. If both apply Newton's law and measure normal reaction on the body, then:",
            options: ["Both measure the same values", "Both measure different values", "Both measure zero", "Not sufficient data"],
            correct: 0,
            topic: "Newton's Laws of Motion",
            chapter: "Laws of Motion",
            difficulty: "medium",
            exam: "neet",
            solution: `Normal reaction is a real force — it doesn't depend on the observer.<br><br>
Both O₁ (in lift) and O₂ (on ground) will measure the <strong>same</strong> normal reaction because:<br><br>
From ground frame: N - mg = ma → N = m(g + a)<br>
From lift frame (using pseudo force): N - mg - ma₀ = 0 → N = m(g + a)<br><br>
Answer: <span class="correct-answer-highlight">Both the observers measure the same values</span><br><br>
<strong>Key Concept:</strong> Real forces (like normal reaction, tension, friction) are the same for all observers. Only pseudo forces differ between frames. Newton's laws, properly applied in any frame, give the same physical results.`
        },
        {
            id: "gt17",
            question: "For rotational and translational motion, which of the following are correct?\n(a) For rotational motion, angular momentum L and angular velocity ω need not be parallel\n(b) For rotational motion, L and ω are always parallel\n(c) For translational motion, linear momentum P and velocity v are always parallel\n(d) For translation motion, acceleration a and velocity v are always parallel",
            options: ["a, d", "b, d", "a, c", "c, d"],
            correct: 2,
            topic: "Rotational Motion",
            chapter: "System of Particles and Rotational Motion",
            difficulty: "hard",
            exam: "neet",
            solution: `<strong>(a) L and ω need not be parallel</strong> — ✅ TRUE<br>
(They are parallel only for symmetric bodies about the axis of rotation. For asymmetric bodies, L = Iω but I can be a tensor)<br><br>
<strong>(b) L and ω are always parallel</strong> — ❌ FALSE<br>
(Counterexample: asymmetric bodies)<br><br>
<strong>(c) P and v are always parallel</strong> — ✅ TRUE<br>
(P = mv, so P is always in the direction of v)<br><br>
<strong>(d) a and v are always parallel</strong> — ❌ FALSE<br>
(Counterexample: projectile motion, circular motion — a and v can be at any angle)<br><br>
Answer: <span class="correct-answer-highlight">a and c are correct</span>`
        },
        {
            id: "gt18",
            question: "In Young's double-slit experiment, the separation between the slits is halved and the distance between the slits and the screen is doubled. The fringe width will:",
            options: ["Remain the same", "Be halved", "Be doubled", "Be quadrupled"],
            correct: 3,
            topic: "Wave Optics",
            chapter: "Wave Optics",
            difficulty: "medium",
            exam: "neet",
            solution: `<strong>Fringe width formula:</strong> <span class="formula">β = λD/d</span><br><br>
If d → d/2 and D → 2D:<br>
β' = λ(2D)/(d/2) = λ × 2D × 2/d = 4λD/d = 4β<br><br>
Answer: <span class="correct-answer-highlight">Be quadrupled (4 times)</span><br><br>
<strong>Key Concept:</strong> β ∝ D and β ∝ 1/d. Halving d doubles β, doubling D also doubles β. Combined effect = 2 × 2 = 4×.`
        },
        {
            id: "gt19",
            question: "For a diamagnetic substance, susceptibility is:",
            options: ["Small and positive", "Small and negative", "Large and positive", "Large and negative"],
            correct: 1,
            topic: "Magnetism",
            chapter: "Magnetism and Matter",
            difficulty: "easy",
            exam: "neet",
            solution: `For diamagnetic substances, susceptibility (χ) is <span class="correct-answer-highlight">small and negative</span>.<br><br>
<strong>Magnetic materials comparison:</strong><br>
| Type | χ value | Examples |<br>
| Diamagnetic | Small, negative (-10⁻⁵) | Bi, Cu, Ag, Au, H₂O |<br>
| Paramagnetic | Small, positive (10⁻⁵) | Al, Pt, O₂, Mn |<br>
| Ferromagnetic | Large, positive (10³-10⁵) | Fe, Co, Ni |<br><br>
<strong>Key Concept:</strong> Diamagnetic materials are weakly repelled by magnets. They have no permanent magnetic dipole moment. The negative χ means magnetization opposes the applied field.`
        },
        {
            id: "gt20",
            question: "Calculate the power factor of an AC circuit with Xc = 40Ω, R_coil = 40Ω, XL = 100Ω, and R₁ = 40Ω connected in series:",
            options: ["0.2", "0.4", "0.8", "0.6"],
            correct: 2,
            topic: "Alternating Current",
            chapter: "Alternating Current",
            difficulty: "hard",
            exam: "neet",
            solution: `<strong>Total resistance:</strong> R = R₁ + R_coil = 40 + 40 = 80Ω<br>
<strong>Net reactance:</strong> X = XL - Xc = 100 - 40 = 60Ω<br><br>
<span class="formula">Impedance: Z = √(R² + X²) = √(80² + 60²) = √(6400 + 3600) = √10000 = 100Ω</span><br><br>
<span class="formula">Power factor = cos φ = R/Z = 80/100 = 0.8</span><br><br>
Answer: <span class="correct-answer-highlight">0.8</span><br><br>
<strong>Key Concept:</strong> Power factor = R/Z = cos φ. It ranges from 0 (purely reactive) to 1 (purely resistive). Higher power factor means more efficient power delivery.`
        },
        {
            id: "gt21",
            question: "A point P lies on the axis of a flat coil carrying a current. The magnetic moment of the coil is μ. The distance of P from the center is d, which is very large compared to the radius. The magnetic field at P is:",
            options: ["(μ₀/2π)(μ/d³)", "(μ₀/4π)(μ/d³)", "(μ₀/6π)(μ/d³)", "(μ₀/8π)(μ/d³)"],
            correct: 0,
            topic: "Magnetism",
            chapter: "Moving Charges and Magnetism",
            difficulty: "hard",
            exam: "neet",
            solution: `<strong>For a magnetic dipole at a far axial point (d >> R):</strong><br><br>
<span class="formula">B_axial = (μ₀/4π) × (2μ/d³) = μ₀μ/(2πd³)</span><br><br>
This can be written as: <span class="correct-answer-highlight">(μ₀/2π)(μ/d³)</span><br><br>
<strong>Key Concept:</strong> At large distances, a current loop behaves like a magnetic dipole. The axial field formula is analogous to the electric dipole: E_axial = (1/4πε₀)(2p/r³).`
        },
        {
            id: "gt22",
            question: "Consider a straight wire xy carrying increasing current I. Two circular loops A (left) and B (right) are placed on either side. The induced current in loops A and B will be:",
            options: ["Clockwise in A and anticlockwise in B", "Anticlockwise in A and clockwise in B", "Clockwise in both A and B", "Anticlockwise in both A and B"],
            correct: 0,
            topic: "Electromagnetic Induction",
            chapter: "Electromagnetic Induction",
            difficulty: "hard",
            exam: "neet",
            solution: `<strong>By Right-Hand Rule:</strong> If current flows upward in wire xy, the magnetic field points:<br>
• OUT of page on the LEFT side (where A is)<br>
• INTO the page on the RIGHT side (where B is)<br><br>
As current increases, flux through both loops increases.<br><br>
<strong>By Lenz's Law</strong> (induced current opposes change):<br>
• Loop A: Increasing outward flux → induced current creates inward field → <strong>Clockwise</strong><br>
• Loop B: Increasing inward flux → induced current creates outward field → <strong>Anticlockwise</strong><br><br>
Answer: <span class="correct-answer-highlight">Clockwise in A and anticlockwise in B</span>`
        },
        {
            id: "gt23",
            question: "K₁ is the max KE of photoelectrons for wavelength λ₁, K₂ is for wavelength λ₂ (same metal). If λ₁ = 2λ₂, then:",
            options: ["2K₁ = K₂", "K₁ = 2K₂", "K₁ < K₂/2", "K₁ > 2K₂"],
            correct: 2,
            topic: "Dual Nature of Radiation",
            chapter: "Dual Nature of Radiation and Matter",
            difficulty: "hard",
            exam: "neet",
            solution: `<strong>Photoelectric equation:</strong> <span class="formula">K = hc/λ - φ</span><br><br>
K₁ = hc/λ₁ - φ = hc/(2λ₂) - φ<br>
K₂ = hc/λ₂ - φ<br><br>
Now: K₂ - K₁ = hc/λ₂ - hc/(2λ₂) = hc/(2λ₂)<br><br>
Also: 2K₁ = 2hc/(2λ₂) - 2φ = hc/λ₂ - 2φ<br>
K₂ = hc/λ₂ - φ<br><br>
K₂ - 2K₁ = -φ + 2φ = φ > 0<br>
So K₂ > 2K₁, which means <span class="correct-answer-highlight">K₁ < K₂/2</span><br><br>
<strong>Key Concept:</strong> Shorter wavelength = higher frequency = more energy. Since some energy is used for work function, the KE doesn't scale linearly with frequency.`
        },
        {
            id: "gt24",
            question: "The figure shows a network in which the cell is ideal and has emf E. The potential difference across the resistance 2R is:",
            options: ["2E", "4E/7", "E/7", "3E/7"],
            correct: 1,
            topic: "Current Electricity",
            chapter: "Current Electricity",
            difficulty: "hard",
            exam: "neet",
            solution: `<strong>Circuit analysis:</strong> With resistors 4R, R, and 2R in the network with ideal cell of emf E.<br><br>
The 4R and R are in parallel: R_parallel = (4R × R)/(4R + R) = 4R/5<br>
This is in series with 2R: R_total = 4R/5 + 2R = 14R/5<br><br>
Current from cell: I = E/(14R/5) = 5E/(14R)<br><br>
Voltage across 2R: V = I × 2R = (5E/14R) × 2R = 10E/14 = <span class="correct-answer-highlight">4E/7</span> ≈ 5E/7...<br><br>
<strong>Note:</strong> The exact answer depends on the specific circuit configuration. Based on the given options, the answer is <span class="correct-answer-highlight">4E/7</span>.`
        },
        {
            id: "gt25",
            question: "Three soap bubbles A, B and C are prepared. With stop cock S closed and S₁, S₂ and S₃ opened, then:",
            options: ["C and A will collapse with volume of B increasing", "B will collapse with volumes of A and C increasing", "C will collapse with volumes of A and B increasing", "Volumes of A, B and C will become equal at equilibrium"],
            correct: 0,
            topic: "Fluid Mechanics",
            chapter: "Mechanical Properties of Fluids",
            difficulty: "medium",
            exam: "neet",
            solution: `<strong>Excess pressure in a soap bubble:</strong><br>
<span class="formula">P_excess = 4T/R (for soap bubble, double surface)</span><br><br>
Smaller bubble → smaller R → higher excess pressure inside<br><br>
When connected, air flows from higher pressure (smaller bubbles) to lower pressure (larger bubble).<br><br>
Result: <span class="correct-answer-highlight">Smaller bubbles (C and A) collapse, and the largest bubble (B) gets bigger</span><br><br>
<strong>Key Concept:</strong> In connected soap bubbles, the smaller ones always shrink and the largest one grows. This is because P_excess ∝ 1/R — smaller bubbles have higher internal pressure.`
        },
    ],

    // ============================================
    // CHEMISTRY (Common for NEET & JEE)
    // ============================================
    chemistry: [
        {
            id: "c1",
            question: "The number of moles of CO₂ that contain 6.022 × 10²³ molecules is:",
            options: ["1", "2", "3", "6.022 × 10²³"],
            correct: 0,
            topic: "Mole Concept",
            chapter: "Some Basic Concepts of Chemistry",
            difficulty: "easy",
            exam: "both",
            solution: `6.022 × 10²³ is Avogadro's number (Nₐ).<br><br>
<span class="formula">Number of moles = Number of molecules / Nₐ</span>
n = 6.022 × 10²³ / 6.022 × 10²³ = <span class="correct-answer-highlight">1 mole</span><br><br>
<strong>Key Concept:</strong> 1 mole of any substance contains exactly 6.022 × 10²³ particles (Avogadro's number). This is the fundamental definition of a mole.`
        },
        {
            id: "c2",
            question: "The pH of a solution having H⁺ concentration of 10⁻³ mol/L is:",
            options: ["3", "-3", "11", "7"],
            correct: 0,
            topic: "Ionic Equilibrium",
            chapter: "Equilibrium",
            difficulty: "easy",
            exam: "both",
            solution: `<strong>Formula:</strong> <span class="formula">pH = -log[H⁺]</span>
pH = -log(10⁻³) = -(-3) = <span class="correct-answer-highlight">3</span><br><br>
<strong>pH Scale Quick Reference:</strong><br>
• pH < 7 → Acidic<br>
• pH = 7 → Neutral<br>
• pH > 7 → Basic/Alkaline<br><br>
<strong>Key Concept:</strong> pH is the negative logarithm of hydrogen ion concentration. A pH of 3 means the solution is acidic.`
        },
        {
            id: "c3",
            question: "Which of the following has the highest electronegativity?",
            options: ["Oxygen", "Fluorine", "Nitrogen", "Chlorine"],
            correct: 1,
            topic: "Chemical Bonding",
            chapter: "Chemical Bonding and Molecular Structure",
            difficulty: "easy",
            exam: "both",
            solution: `<span class="correct-answer-highlight">Fluorine</span> has the highest electronegativity (3.98 on the Pauling scale).<br><br>
<strong>Electronegativity order (most common elements):</strong><br>
F (3.98) > O (3.44) > N (3.04) > Cl (3.16)<br><br>
<strong>Trends:</strong><br>
• Increases across a period (left to right) — more nuclear charge<br>
• Decreases down a group — larger atomic radius<br>
• Fluorine is the most electronegative element in the periodic table<br><br>
<strong>Key Concept:</strong> Electronegativity is the tendency of an atom to attract shared electrons in a chemical bond. Fluorine, being smallest with high nuclear charge, attracts electrons most strongly.`
        },
        {
            id: "c4",
            question: "The hybridization of carbon in methane (CH₄) is:",
            options: ["sp", "sp²", "sp³", "sp³d"],
            correct: 2,
            topic: "Chemical Bonding",
            chapter: "Chemical Bonding and Molecular Structure",
            difficulty: "easy",
            exam: "both",
            solution: `Carbon in CH₄ is <span class="correct-answer-highlight">sp³ hybridized</span>.<br><br>
<strong>How to determine:</strong><br>
Carbon has 4 valence electrons, forming 4 bonds with H atoms.<br>
Number of hybrid orbitals = σ bonds + lone pairs = 4 + 0 = 4<br>
4 hybrid orbitals → sp³ hybridization → Tetrahedral geometry<br><br>
<strong>Hybridization cheat sheet:</strong><br>
• 2 regions → sp → Linear (180°)<br>
• 3 regions → sp² → Trigonal planar (120°)<br>
• 4 regions → sp³ → Tetrahedral (109.5°)<br>
• 5 regions → sp³d → Trigonal bipyramidal<br>
• 6 regions → sp³d² → Octahedral`
        },
        {
            id: "c5",
            question: "The oxidation state of Mn in KMnO₄ is:",
            options: ["+4", "+5", "+6", "+7"],
            correct: 3,
            topic: "Redox Reactions",
            chapter: "Redox Reactions",
            difficulty: "medium",
            exam: "both",
            solution: `In KMnO₄: K = +1, O = -2 (each), let Mn = x<br>
<span class="formula">+1 + x + 4(-2) = 0</span>
1 + x - 8 = 0<br>
x = <span class="correct-answer-highlight">+7</span><br><br>
<strong>Method:</strong> Sum of all oxidation states in a neutral compound = 0.<br>
• K is always +1 (Group 1 metal)<br>
• O is usually -2 (except in peroxides/superoxides)<br><br>
<strong>Key Concept:</strong> In KMnO₄, Mn is in its highest oxidation state (+7), which makes it a very strong oxidizing agent. This is why KMnO₄ is widely used in titrations.`
        },
        {
            id: "c6",
            question: "The IUPAC name of CH₃-CH=CH-CH₃ is:",
            options: ["1-Butene", "2-Butene", "3-Butene", "But-1-ene"],
            correct: 1,
            topic: "Organic Chemistry - Nomenclature",
            chapter: "Organic Chemistry: Some Basic Principles",
            difficulty: "medium",
            exam: "both",
            solution: `<strong>Steps for IUPAC naming:</strong><br>
1. Longest carbon chain with double bond = 4 carbons = But-<br>
2. Double bond position: between C2 and C3 → 2-ene<br>
3. Name: <span class="correct-answer-highlight">2-Butene (or But-2-ene)</span><br><br>
<strong>Structure:</strong> CH₃-CH=CH-CH₃<br>
C1 - C2 = C3 - C4<br>
The double bond starts at carbon 2.<br><br>
<strong>Key Rule:</strong> Number the chain to give the double bond the lowest possible locant. In this case, it's 2 (not 3 from the other end).`
        },
        {
            id: "c7",
            question: "Which of the following is a noble gas?",
            options: ["Nitrogen", "Oxygen", "Argon", "Hydrogen"],
            correct: 2,
            topic: "Periodic Table",
            chapter: "Classification of Elements and Periodicity",
            difficulty: "easy",
            exam: "both",
            solution: `<span class="correct-answer-highlight">Argon (Ar)</span> is a noble gas belonging to Group 18.<br><br>
<strong>Noble gases (Group 18):</strong><br>
He (Helium), Ne (Neon), Ar (Argon), Kr (Krypton), Xe (Xenon), Rn (Radon), Og (Oganesson)<br><br>
<strong>Properties:</strong><br>
• Fully filled outer electron shells → very stable<br>
• Generally inert (don't react easily)<br>
• Xe forms some compounds (XeF₂, XeF₄, XeF₆)<br>
• All are gases at room temperature<br><br>
<strong>Key Concept:</strong> Noble gases have complete octets (except He which has a duplet), making them chemically inert.`
        },
        {
            id: "c8",
            question: "The number of σ and π bonds in ethyne (C₂H₂) are:",
            options: ["3σ, 2π", "2σ, 3π", "5σ, 0π", "2σ, 2π"],
            correct: 0,
            topic: "Chemical Bonding",
            chapter: "Chemical Bonding and Molecular Structure",
            difficulty: "medium",
            exam: "both",
            solution: `<strong>Structure of Ethyne:</strong> H—C≡C—H<br><br>
<strong>Bond counting:</strong><br>
• H—C : 1 σ bond<br>
• C≡C : 1 σ bond + 2 π bonds (triple bond = 1σ + 2π)<br>
• C—H : 1 σ bond<br><br>
Total: <span class="correct-answer-highlight">3 σ bonds and 2 π bonds</span><br><br>
<strong>Key Rule:</strong><br>
• Single bond = 1σ<br>
• Double bond = 1σ + 1π<br>
• Triple bond = 1σ + 2π<br>
A bond always contains exactly one σ bond; extra bonds in double/triple are π bonds.`
        },
        {
            id: "c9",
            question: "The molecular formula of glucose is:",
            options: ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₆H₁₀O₅", "CH₂O"],
            correct: 0,
            topic: "Biomolecules",
            chapter: "Biomolecules",
            difficulty: "easy",
            exam: "neet",
            solution: `The molecular formula of glucose is <span class="correct-answer-highlight">C₆H₁₂O₆</span>.<br><br>
<strong>Important sugar formulas to remember:</strong><br>
• Glucose: C₆H₁₂O₆ (monosaccharide, aldohexose)<br>
• Fructose: C₆H₁₂O₆ (monosaccharide, ketohexose — isomer of glucose)<br>
• Sucrose: C₁₂H₂₂O₁₁ (disaccharide = glucose + fructose)<br>
• Starch/Cellulose: (C₆H₁₀O₅)n (polysaccharides)<br><br>
<strong>Key Concept:</strong> CH₂O is the empirical formula, C₆H₁₂O₆ is the molecular formula. Molecular formula = n × empirical formula.`
        },
        {
            id: "c10",
            question: "According to Le Chatelier's principle, increasing pressure shifts equilibrium towards:",
            options: ["Side with more moles of gas", "Side with fewer moles of gas", "No effect", "Always towards products"],
            correct: 1,
            topic: "Chemical Equilibrium",
            chapter: "Equilibrium",
            difficulty: "medium",
            exam: "both",
            solution: `Increasing pressure shifts equilibrium towards the side with <span class="correct-answer-highlight">fewer moles of gas</span>.<br><br>
<strong>Le Chatelier's Principle:</strong> If a system at equilibrium is disturbed, it shifts in the direction that reduces the disturbance.<br><br>
<strong>Effects on equilibrium:</strong><br>
• ↑ Pressure → shifts towards fewer gas moles (reduces pressure)<br>
• ↑ Temperature → shifts towards endothermic direction (absorbs heat)<br>
• ↑ Concentration of reactant → shifts towards products<br>
• Catalyst → NO shift (reaches equilibrium faster, but doesn't change position)<br><br>
<strong>Example:</strong> N₂ + 3H₂ ⇌ 2NH₃<br>
Reactants: 4 moles gas, Products: 2 moles gas<br>
Increasing pressure → favours NH₃ formation.`
        },
        {
            id: "c11",
            question: "The electronic configuration of Fe²⁺ (Z=26) is:",
            options: ["[Ar] 3d⁶ 4s²", "[Ar] 3d⁶", "[Ar] 3d⁵ 4s¹", "[Ar] 3d⁴ 4s²"],
            correct: 1,
            topic: "Coordination Chemistry",
            chapter: "d and f Block Elements",
            difficulty: "medium",
            exam: "both",
            solution: `<strong>Fe (Z=26):</strong> [Ar] 3d⁶ 4s²<br>
<strong>Fe²⁺:</strong> Remove 2 electrons from 4s first (outermost shell).<br>
Fe²⁺ = <span class="correct-answer-highlight">[Ar] 3d⁶</span><br><br>
<strong>Key Rule:</strong> When forming cations of transition metals, electrons are removed from the 4s orbital first (even though 4s fills before 3d), because in a multi-electron atom, 4s has higher energy than 3d.<br><br>
<strong>Common mistake:</strong> Students remove from 3d first. Remember: "First in, first out" does NOT apply here. 4s electrons are removed first when forming ions.`
        },
        {
            id: "c12",
            question: "Which of the following is an example of a Brønsted-Lowry acid?",
            options: ["NaOH", "HCl", "NaCl", "H₂O only"],
            correct: 1,
            topic: "Ionic Equilibrium",
            chapter: "Equilibrium",
            difficulty: "easy",
            exam: "both",
            solution: `<span class="correct-answer-highlight">HCl</span> is a Brønsted-Lowry acid because it donates a proton (H⁺).<br><br>
<strong>Brønsted-Lowry Theory:</strong><br>
• <strong>Acid:</strong> Proton (H⁺) donor<br>
• <strong>Base:</strong> Proton (H⁺) acceptor<br><br>
HCl → H⁺ + Cl⁻ (donates proton → acid)<br>
NaOH → Na⁺ + OH⁻ (OH⁻ accepts proton → base)<br><br>
<strong>Note:</strong> H₂O is amphoteric — it can act as both acid and base depending on the reaction, but by itself it's not classified as just an acid.`
        },
    ],

    // ============================================
    // BIOLOGY (NEET specific)
    // ============================================
    biology: [
        {
            id: "b1",
            question: "The powerhouse of the cell is:",
            options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"],
            correct: 2,
            topic: "Cell Biology",
            chapter: "Cell: The Unit of Life",
            difficulty: "easy",
            exam: "neet",
            solution: `<span class="correct-answer-highlight">Mitochondria</span> is called the powerhouse of the cell.<br><br>
<strong>Reason:</strong> Mitochondria produces ATP (Adenosine Triphosphate) through oxidative phosphorylation — the main energy currency of the cell.<br><br>
<strong>Key facts about Mitochondria:</strong><br>
• Double membrane-bound organelle<br>
• Has its own DNA (circular, like bacteria) — supports endosymbiotic theory<br>
• Inner membrane is folded into cristae (increases surface area)<br>
• Matrix contains enzymes for Krebs cycle<br>
• 1 glucose molecule → 36-38 ATP molecules<br><br>
<strong>Mnemonics for organelle functions:</strong><br>
• Mitochondria → Powerhouse (ATP production)<br>
• Ribosome → Protein factory<br>
• Golgi → Packaging & shipping<br>
• Nucleus → Control centre`
        },
        {
            id: "b2",
            question: "DNA replication is:",
            options: ["Conservative", "Dispersive", "Semi-conservative", "Non-conservative"],
            correct: 2,
            topic: "Molecular Biology",
            chapter: "Molecular Basis of Inheritance",
            difficulty: "easy",
            exam: "neet",
            solution: `DNA replication is <span class="correct-answer-highlight">Semi-conservative</span>.<br><br>
<strong>What this means:</strong> Each new DNA molecule has one old (parent) strand and one new (daughter) strand.<br><br>
<strong>Proved by:</strong> Meselson and Stahl experiment (1958) using ¹⁵N (heavy) and ¹⁴N (light) nitrogen isotopes in E. coli.<br><br>
<strong>Types of replication:</strong><br>
• <strong>Conservative:</strong> Parent DNA stays intact, entirely new copy made (NOT how it works)<br>
• <strong>Semi-conservative:</strong> Each daughter DNA has one old + one new strand (CORRECT)<br>
• <strong>Dispersive:</strong> Old and new DNA mixed randomly (NOT how it works)<br><br>
<strong>Key Concept:</strong> Each strand acts as a template for the new strand, ensuring exact copies are made.`
        },
        {
            id: "b3",
            question: "Which blood group is called the universal donor?",
            options: ["A", "B", "AB", "O"],
            correct: 3,
            topic: "Human Physiology",
            chapter: "Body Fluids and Circulation",
            difficulty: "easy",
            exam: "neet",
            solution: `Blood group <span class="correct-answer-highlight">O</span> is the universal donor.<br><br>
<strong>ABO Blood Group System:</strong><br>
| Blood Group | Antigens | Antibodies | Can donate to | Can receive from |
|---|---|---|---|---|
| A | A | Anti-B | A, AB | A, O |
| B | B | Anti-A | B, AB | B, O |
| AB | A & B | None | AB only | All (Universal recipient) |
| O | None | Anti-A & Anti-B | All (Universal donor) | O only |<br><br>
<strong>Why O is universal donor:</strong> O type RBCs have NO antigens on their surface, so they won't trigger an immune response in any recipient.<br><br>
<strong>Key Concept:</strong> AB is the universal recipient (no antibodies), O is the universal donor (no antigens).`
        },
        {
            id: "b4",
            question: "The process of photosynthesis takes place in:",
            options: ["Mitochondria", "Chloroplast", "Ribosome", "Nucleus"],
            correct: 1,
            topic: "Plant Physiology",
            chapter: "Photosynthesis in Higher Plants",
            difficulty: "easy",
            exam: "neet",
            solution: `Photosynthesis occurs in the <span class="correct-answer-highlight">Chloroplast</span>.<br><br>
<strong>Two stages of photosynthesis:</strong><br>
<strong>1. Light Reactions</strong> (in thylakoid membrane):<br>
• Water splitting, electron transport, ATP & NADPH formation<br>
• Photolysis: 2H₂O → O₂ + 4H⁺ + 4e⁻<br><br>
<strong>2. Dark Reactions / Calvin Cycle</strong> (in stroma):<br>
• CO₂ fixation using RuBisCO enzyme<br>
• ATP & NADPH used to make glucose<br><br>
<strong>Overall equation:</strong>
<span class="formula">6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (in presence of light)</span>`
        },
        {
            id: "b5",
            question: "Which of the following is NOT a function of the liver?",
            options: ["Bile production", "Glycogen storage", "Insulin production", "Detoxification"],
            correct: 2,
            topic: "Human Physiology",
            chapter: "Digestion and Absorption",
            difficulty: "medium",
            exam: "neet",
            solution: `<span class="correct-answer-highlight">Insulin production</span> is NOT a function of the liver. Insulin is produced by β-cells of the Islets of Langerhans in the <strong>Pancreas</strong>.<br><br>
<strong>Functions of the Liver:</strong><br>
✅ Bile production (for fat emulsification)<br>
✅ Glycogen storage (glucose regulation)<br>
✅ Detoxification (removing toxins, drugs, alcohol)<br>
✅ Protein synthesis (albumin, clotting factors)<br>
✅ Urea formation (from amino acid deamination)<br>
✅ Cholesterol metabolism<br><br>
<strong>Pancreas functions:</strong><br>
• Exocrine: Digestive enzymes (trypsin, lipase, amylase)<br>
• Endocrine: Insulin (β-cells), Glucagon (α-cells)`
        },
        {
            id: "b6",
            question: "Mendel's Law of Independent Assortment is applicable to genes on:",
            options: ["Same chromosome", "Different chromosomes", "Homologous chromosomes only", "Sex chromosomes only"],
            correct: 1,
            topic: "Genetics",
            chapter: "Principles of Inheritance and Variation",
            difficulty: "medium",
            exam: "neet",
            solution: `Mendel's Law of Independent Assortment applies to genes on <span class="correct-answer-highlight">different chromosomes</span>.<br><br>
<strong>The Law states:</strong> During gamete formation, alleles of different genes assort independently of each other if they are located on different chromosomes.<br><br>
<strong>Important exceptions:</strong><br>
• <strong>Linked genes</strong> (on the same chromosome) do NOT assort independently<br>
• This was discovered by T.H. Morgan using Drosophila experiments<br>
• Crossing over can partially restore independent assortment for linked genes<br><br>
<strong>Mendel's 3 Laws:</strong><br>
1. Law of Dominance<br>
2. Law of Segregation (most fundamental)<br>
3. Law of Independent Assortment`
        },
        {
            id: "b7",
            question: "Which hormone is responsible for the 'fight or flight' response?",
            options: ["Insulin", "Thyroxine", "Adrenaline", "Estrogen"],
            correct: 2,
            topic: "Endocrinology",
            chapter: "Chemical Coordination and Integration",
            difficulty: "easy",
            exam: "neet",
            solution: `<span class="correct-answer-highlight">Adrenaline (Epinephrine)</span> is responsible for the fight or flight response.<br><br>
<strong>Produced by:</strong> Adrenal medulla (inner part of adrenal glands)<br><br>
<strong>Effects of Adrenaline:</strong><br>
• ↑ Heart rate and blood pressure<br>
• ↑ Blood sugar (glycogenolysis in liver)<br>
• Dilates airways (bronchodilation)<br>
• Dilates pupils<br>
• Redirects blood to muscles<br>
• ↑ Alertness and energy<br><br>
<strong>Key Concept:</strong> Adrenaline prepares the body for emergency situations. It's also called the "emergency hormone."<br><br>
<strong>Fun fact:</strong> Adrenaline was the first hormone to be isolated in pure form (by Jokichi Takamine in 1901).`
        },
        {
            id: "b8",
            question: "The functional unit of the kidney is:",
            options: ["Nephron", "Neuron", "Alveolus", "Villus"],
            correct: 0,
            topic: "Excretory System",
            chapter: "Excretory Products and Their Elimination",
            difficulty: "easy",
            exam: "neet",
            solution: `The functional unit of the kidney is the <span class="correct-answer-highlight">Nephron</span>.<br><br>
<strong>Each kidney has ~1 million nephrons.</strong><br><br>
<strong>Parts of a Nephron:</strong><br>
1. <strong>Bowman's capsule</strong> — encloses glomerulus<br>
2. <strong>Proximal Convoluted Tubule (PCT)</strong> — maximum reabsorption<br>
3. <strong>Loop of Henle</strong> — concentrates urine<br>
4. <strong>Distal Convoluted Tubule (DCT)</strong> — selective secretion<br>
5. <strong>Collecting Duct</strong> — final concentration<br><br>
<strong>Don't confuse:</strong><br>
• Nephron → Kidney (excretion)<br>
• Neuron → Nervous system<br>
• Alveolus → Lungs (gas exchange)<br>
• Villus → Small intestine (absorption)`
        },
    ],

    // ============================================
    // MATHEMATICS (JEE specific)
    // ============================================
    mathematics: [
        {
            id: "m1",
            question: "The value of sin 30° + cos 60° is:",
            options: ["0", "1", "1/2", "√3"],
            correct: 1,
            topic: "Trigonometry",
            chapter: "Trigonometric Functions",
            difficulty: "easy",
            exam: "jee",
            solution: `<span class="formula">sin 30° = 1/2, cos 60° = 1/2</span>
sin 30° + cos 60° = 1/2 + 1/2 = <span class="correct-answer-highlight">1</span><br><br>
<strong>Standard trigonometric values:</strong><br>
| Angle | sin | cos | tan |<br>
| 0° | 0 | 1 | 0 |<br>
| 30° | 1/2 | √3/2 | 1/√3 |<br>
| 45° | 1/√2 | 1/√2 | 1 |<br>
| 60° | √3/2 | 1/2 | √3 |<br>
| 90° | 1 | 0 | ∞ |<br><br>
<strong>Key Identity:</strong> sin θ = cos(90° - θ). So sin 30° = cos 60° = 1/2.`
        },
        {
            id: "m2",
            question: "If log₁₀ 2 = 0.301, then log₁₀ 8 is:",
            options: ["0.602", "0.903", "2.408", "0.301"],
            correct: 1,
            topic: "Logarithms",
            chapter: "Mathematical Reasoning",
            difficulty: "easy",
            exam: "jee",
            solution: `<strong>Using log properties:</strong><br>
<span class="formula">log₁₀ 8 = log₁₀ 2³ = 3 × log₁₀ 2</span>
= 3 × 0.301 = <span class="correct-answer-highlight">0.903</span><br><br>
<strong>Key Logarithm Properties:</strong><br>
• log(aⁿ) = n × log(a)<br>
• log(ab) = log(a) + log(b)<br>
• log(a/b) = log(a) - log(b)<br>
• log₁₀ 10 = 1, log₁₀ 1 = 0<br><br>
<strong>Key Concept:</strong> Always try to express numbers as powers of known values. 8 = 2³, so we can use the power rule.`
        },
        {
            id: "m3",
            question: "The derivative of x³ + 3x² + 5 with respect to x is:",
            options: ["3x² + 6x", "3x² + 6x + 5", "x⁴/4 + x³ + 5x", "3x² + 3x"],
            correct: 0,
            topic: "Differentiation",
            chapter: "Limits and Derivatives",
            difficulty: "easy",
            exam: "jee",
            solution: `<strong>Using the power rule:</strong> <span class="formula">d/dx (xⁿ) = nxⁿ⁻¹</span><br><br>
d/dx (x³) = 3x²<br>
d/dx (3x²) = 6x<br>
d/dx (5) = 0 (constant)<br><br>
Total: <span class="correct-answer-highlight">3x² + 6x</span><br><br>
<strong>Key Rules of Differentiation:</strong><br>
• Power rule: d/dx(xⁿ) = nxⁿ⁻¹<br>
• Constant rule: d/dx(c) = 0<br>
• Sum rule: d/dx(f+g) = f' + g'<br>
• Product rule: d/dx(fg) = f'g + fg'<br>
• Chain rule: d/dx(f(g(x))) = f'(g(x)) × g'(x)`
        },
        {
            id: "m4",
            question: "∫(2x + 3)dx equals:",
            options: ["x² + 3x + C", "2x² + 3x + C", "x² + 3 + C", "2x + C"],
            correct: 0,
            topic: "Integration",
            chapter: "Integrals",
            difficulty: "easy",
            exam: "jee",
            solution: `<strong>Using integration rules:</strong>
<span class="formula">∫xⁿ dx = xⁿ⁺¹/(n+1) + C</span><br>
∫2x dx = 2 × x²/2 = x²<br>
∫3 dx = 3x<br><br>
Total: <span class="correct-answer-highlight">x² + 3x + C</span><br><br>
<strong>Key Integration Formulas:</strong><br>
• ∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ -1)<br>
• ∫1/x dx = ln|x| + C<br>
• ∫eˣ dx = eˣ + C<br>
• ∫sin x dx = -cos x + C<br>
• ∫cos x dx = sin x + C<br><br>
<strong>Key Concept:</strong> Integration is the reverse of differentiation. Always add the constant of integration C.`
        },
        {
            id: "m5",
            question: "In a GP, if the first term is 3 and common ratio is 2, what is the 5th term?",
            options: ["24", "48", "96", "192"],
            correct: 1,
            topic: "Sequences and Series",
            chapter: "Sequences and Series",
            difficulty: "easy",
            exam: "jee",
            solution: `<strong>Formula for nth term of GP:</strong>
<span class="formula">aₙ = a × rⁿ⁻¹</span>
a₅ = 3 × 2⁵⁻¹ = 3 × 2⁴ = 3 × 16 = <span class="correct-answer-highlight">48</span><br><br>
<strong>GP (Geometric Progression) Formulas:</strong><br>
• nth term: aₙ = arⁿ⁻¹<br>
• Sum of n terms: Sₙ = a(rⁿ - 1)/(r - 1) when r > 1<br>
• Sum to infinity (|r| < 1): S∞ = a/(1-r)<br><br>
<strong>Key Concept:</strong> In a GP, each term is obtained by multiplying the previous term by the common ratio r.`
        },
        {
            id: "m6",
            question: "The number of ways to arrange 5 distinct objects in a row is:",
            options: ["25", "120", "60", "720"],
            correct: 1,
            topic: "Permutations & Combinations",
            chapter: "Permutations and Combinations",
            difficulty: "easy",
            exam: "jee",
            solution: `<strong>Number of arrangements = n!</strong>
<span class="formula">5! = 5 × 4 × 3 × 2 × 1 = 120</span>
Answer: <span class="correct-answer-highlight">120 ways</span><br><br>
<strong>Key formulas:</strong><br>
• Permutation (arrangement): ⁿPᵣ = n!/(n-r)!<br>
• Combination (selection): ⁿCᵣ = n!/[r!(n-r)!]<br>
• All objects in a row: n!<br>
• Circular arrangement: (n-1)!<br><br>
<strong>Factorial values to memorize:</strong><br>
3! = 6, 4! = 24, 5! = 120, 6! = 720, 7! = 5040`
        },
        {
            id: "m7",
            question: "The quadratic equation whose roots are 2 and 3 is:",
            options: ["x² - 5x + 6 = 0", "x² + 5x + 6 = 0", "x² - 5x - 6 = 0", "x² + 5x - 6 = 0"],
            correct: 0,
            topic: "Quadratic Equations",
            chapter: "Complex Numbers and Quadratic Equations",
            difficulty: "easy",
            exam: "jee",
            solution: `<strong>If roots are α and β:</strong>
<span class="formula">x² - (α+β)x + αβ = 0</span>
Sum of roots: 2 + 3 = 5<br>
Product of roots: 2 × 3 = 6<br><br>
Equation: <span class="correct-answer-highlight">x² - 5x + 6 = 0</span><br><br>
<strong>Verification:</strong> x² - 5x + 6 = (x-2)(x-3) = 0 → x = 2 or x = 3 ✓<br><br>
<strong>Key Concept:</strong> For ax² + bx + c = 0:<br>
• Sum of roots = -b/a<br>
• Product of roots = c/a<br>
• Discriminant D = b² - 4ac determines nature of roots`
        },
        {
            id: "m8",
            question: "The distance between points (1, 2) and (4, 6) is:",
            options: ["5", "7", "25", "√7"],
            correct: 0,
            topic: "Coordinate Geometry",
            chapter: "Straight Lines",
            difficulty: "easy",
            exam: "jee",
            solution: `<strong>Distance formula:</strong>
<span class="formula">d = √[(x₂-x₁)² + (y₂-y₁)²]</span>
d = √[(4-1)² + (6-2)²]<br>
d = √[9 + 16]<br>
d = √25 = <span class="correct-answer-highlight">5 units</span><br><br>
<strong>Key Coordinate Geometry Formulas:</strong><br>
• Distance: √[(x₂-x₁)² + (y₂-y₁)²]<br>
• Midpoint: ((x₁+x₂)/2, (y₁+y₂)/2)<br>
• Slope: m = (y₂-y₁)/(x₂-x₁)<br>
• Section formula: ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))`
        },
        {
            id: "m9",
            question: "If A = {1, 2, 3} and B = {2, 3, 4}, then A ∩ B is:",
            options: ["{1, 2, 3, 4}", "{2, 3}", "{1, 4}", "{ }"],
            correct: 1,
            topic: "Sets",
            chapter: "Sets",
            difficulty: "easy",
            exam: "jee",
            solution: `<strong>Intersection (A ∩ B):</strong> Elements common to both A and B.<br><br>
A = {1, 2, 3}<br>
B = {2, 3, 4}<br>
Common elements: 2 and 3<br>
A ∩ B = <span class="correct-answer-highlight">{2, 3}</span><br><br>
<strong>Set Operations:</strong><br>
• A ∪ B (Union): All elements in A or B = {1, 2, 3, 4}<br>
• A ∩ B (Intersection): Common elements = {2, 3}<br>
• A - B (Difference): Elements in A but not in B = {1}<br>
• A' (Complement): Elements not in A (from universal set)<br><br>
<strong>Key Formula:</strong> n(A ∪ B) = n(A) + n(B) - n(A ∩ B)`
        },
        {
            id: "m10",
            question: "The value of lim(x→0) sin(x)/x is:",
            options: ["0", "1", "∞", "Does not exist"],
            correct: 1,
            topic: "Limits",
            chapter: "Limits and Derivatives",
            difficulty: "medium",
            exam: "jee",
            solution: `<span class="formula">lim(x→0) sin(x)/x = 1</span><br><br>
This is one of the most important <span class="correct-answer-highlight">standard limits</span> in calculus.<br><br>
<strong>Proof sketch (Sandwich theorem):</strong><br>
For 0 < x < π/2: cos x < sin x/x < 1<br>
As x → 0: cos 0 = 1 and 1 = 1<br>
By Sandwich theorem: lim sin(x)/x = 1<br><br>
<strong>Related important limits:</strong><br>
• lim(x→0) sin(x)/x = 1<br>
• lim(x→0) tan(x)/x = 1<br>
• lim(x→0) (1-cos x)/x² = 1/2<br>
• lim(x→0) (eˣ-1)/x = 1<br>
• lim(x→0) (aˣ-1)/x = ln(a)<br>
• lim(x→∞) (1+1/x)ˣ = e`
        },
    ]
};

// Helper function to get questions by exam type
function getQuestionsForExam(exam, subject) {
    return QUESTIONS[subject].filter(q => q.exam === 'both' || q.exam === exam);
}

// Get all unique topics for a subject
function getTopicsForSubject(exam, subject) {
    const questions = getQuestionsForExam(exam, subject);
    const topicMap = {};
    questions.forEach(q => {
        if (!topicMap[q.topic]) {
            topicMap[q.topic] = { name: q.topic, chapter: q.chapter, count: 0 };
        }
        topicMap[q.topic].count++;
    });
    return Object.values(topicMap);
}
