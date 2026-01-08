/* =========================================
   1. DATA STORE - COMPLETE QUESTION BANK
   ========================================= */
const questionBank = [
    // ==================== CHAPTER 1 ====================
    
    // Nervous Tissue
    {
        id: "C1Q1",
        chapter: 1,
        yield: "high",
        type: "single",
        text: "Action potential initiation occurs at the neuronal region that is most sensitive to small depolarizing currents due to channel density and geometry. Which structure best fits this description?",
        options: [
            { id: "A", text: "Distal dendritic tree", correct: false },
            { id: "B", text: "Perisomatic membrane", correct: false },
            { id: "C", text: "Axon hillock", correct: true },
            { id: "D", text: "Presynaptic terminal", correct: false },
            { id: "E", text: "Internodal axon segment", correct: false }
        ],
        explanation: "The axon hillock (trigger zone) has the highest density of voltage-gated Na⁺ channels and lowest threshold, making it the most excitable region.",
        imageQuery: "Axon hillock trigger zone structure"
    },
    {
        id: "C1Q2",
        chapter: 1,
        yield: "high",
        type: "single",
        text: "Slowed conduction in multiple sclerosis primarily reflects dysfunction of cells whose loss alters saltatory conduction without directly damaging axons. Which cell type(s) fulfill this role?",
        options: [
            { id: "A", text: "Astrocytes", correct: false },
            { id: "B", text: "Microglia", correct: false },
            { id: "C", text: "Oligodendrocytes", correct: true },
            { id: "D", text: "Schwann cells", correct: false },
            { id: "E", text: "Ependymal cells", correct: false }
        ],
        explanation: "Oligodendrocytes myelinate CNS axons; their loss disrupts saltatory conduction while initially sparing axons.",
        imageQuery: "Oligodendrocyte CNS myelination"
    },
    {
        id: "C1Q3",
        chapter: 1,
        yield: "high",
        type: "multi",
        text: "Which of the following cellular components are characteristic or functionally emphasized in neurons compared with most other somatic cells? Select all that apply.",
        options: [
            { id: "A", text: "Nissl bodies", correct: true },
            { id: "B", text: "Neurofilaments", correct: true },
            { id: "C", text: "Golgi apparatus", correct: false },
            { id: "D", text: "Mitochondria", correct: false },
            { id: "E", text: "Lysosomes", correct: false }
        ],
        explanation: "Nissl bodies and neurofilaments are neuron-specific specializations; the others are ubiquitous organelles.",
        imageQuery: "Nissl bodies neuron histology"
    },
    {
        id: "C1Q4",
        chapter: 1,
        yield: "high",
        type: "multi",
        text: "In a typical multipolar neuron, dendrites primarily serve which roles? Select all that apply.",
        options: [
            { id: "A", text: "Reception of synaptic input", correct: true },
            { id: "B", text: "Passive conduction toward the soma", correct: true },
            { id: "C", text: "Neurotransmitter release", correct: false },
            { id: "D", text: "Increase of receptive surface area", correct: true },
            { id: "E", text: "Generation of action potentials", correct: false }
        ],
        explanation: "Dendrites receive synaptic input and pass graded potentials toward the soma; they usually do not initiate action potentials.",
        imageQuery: "Neuron dendrite structure"
    },
    {
        id: "C1Q5",
        chapter: 1,
        yield: "high",
        type: "single",
        text: "A neuron's ability to respond to an adequate stimulus by altering its membrane potential depends primarily on which property?",
        options: [
            { id: "A", text: "Conductivity", correct: false },
            { id: "B", text: "Excitability", correct: true },
            { id: "C", text: "Elasticity", correct: false },
            { id: "D", text: "Contractility", correct: false },
            { id: "E", text: "Plasticity", correct: false }
        ],
        explanation: "Excitability refers to the ability to respond to stimuli by generating electrical changes.",
        imageQuery: "Neuron excitability diagram"
    },
    
    // Plasma Membrane & Transport
    {
        id: "C1Q6",
        chapter: 1,
        yield: "high",
        type: "single",
        text: "The principal diffusion barrier for ions and polar molecules across the plasma membrane is formed by which component?",
        options: [
            { id: "A", text: "Integral membrane proteins", correct: false },
            { id: "B", text: "Peripheral proteins", correct: false },
            { id: "C", text: "Phospholipid bilayer", correct: true },
            { id: "D", text: "Cholesterol", correct: false },
            { id: "E", text: "Glycoproteins", correct: false }
        ],
        explanation: "The hydrophobic core of the phospholipid bilayer restricts hydrophilic substance movement.",
        imageQuery: "Phospholipid bilayer membrane structure"
    },
    {
        id: "C1Q7",
        chapter: 1,
        yield: "high",
        type: "multi",
        text: "Acute inhibition of the Na⁺/K⁺-ATPase would be expected to cause which early ionic changes? Select all that apply.",
        options: [
            { id: "A", text: "Increase in intracellular Na⁺", correct: true },
            { id: "B", text: "Increase in intracellular K⁺", correct: false },
            { id: "C", text: "Decrease in intracellular K⁺", correct: true },
            { id: "D", text: "Reduction of resting membrane potential magnitude", correct: true },
            { id: "E", text: "Immediate cessation of action potentials", correct: false }
        ],
        explanation: "Na⁺ accumulates, K⁺ leaks out, and membrane potential becomes less negative; action potentials may persist initially.",
        imageQuery: "Na K ATPase pump mechanism"
    },
    {
        id: "C1Q8",
        chapter: 1,
        yield: "high",
        type: "multi",
        text: "Which transport processes occur without direct ATP consumption? Select all that apply.",
        options: [
            { id: "A", text: "Simple diffusion", correct: true },
            { id: "B", text: "Facilitated diffusion", correct: true },
            { id: "C", text: "Secondary active transport", correct: false },
            { id: "D", text: "Osmosis", correct: true },
            { id: "E", text: "Endocytosis", correct: false }
        ],
        explanation: "These rely on concentration or osmotic gradients; secondary active transport depends indirectly on ATP.",
        imageQuery: "Membrane transport mechanisms"
    },
    {
        id: "C1Q9",
        chapter: 1,
        yield: "high",
        type: "multi",
        text: "Which changes would increase membrane fluidity under physiological conditions? Select all that apply.",
        options: [
            { id: "A", text: "Increased temperature", correct: true },
            { id: "B", text: "Increased saturated fatty acids", correct: false },
            { id: "C", text: "Increased unsaturated fatty acids", correct: true },
            { id: "D", text: "Decreased cholesterol content", correct: true },
            { id: "E", text: "Increased protein density", correct: false }
        ],
        explanation: "Heat, unsaturation, and reduced cholesterol increase lipid mobility.",
        imageQuery: "Membrane fluidity factors"
    },
    {
        id: "C1Q10",
        chapter: 1,
        yield: "high",
        type: "single",
        text: "In diabetes insipidus, impaired water reabsorption in the collecting duct is most directly due to failure of which mechanism?",
        options: [
            { id: "A", text: "Active Na⁺ reabsorption", correct: false },
            { id: "B", text: "Facilitated diffusion of solutes", correct: false },
            { id: "C", text: "Osmotic water movement via aquaporins", correct: true },
            { id: "D", text: "Simple diffusion across lipid bilayer", correct: false },
            { id: "E", text: "Vesicular transport of proteins", correct: false }
        ],
        explanation: "ADH deficiency prevents aquaporin insertion, impairing osmotic water reabsorption.",
        imageQuery: "Aquaporin water transport"
    },
    
    // Nervous System
    {
        id: "C1Q11",
        chapter: 1,
        yield: "high",
        type: "single",
        text: "Which structures together define the central nervous system?",
        options: [
            { id: "A", text: "Brain only", correct: false },
            { id: "B", text: "Spinal cord only", correct: false },
            { id: "C", text: "Brain and spinal cord", correct: true },
            { id: "D", text: "Brain and cranial nerves", correct: false },
            { id: "E", text: "Spinal cord and spinal nerves", correct: false }
        ],
        explanation: "The CNS consists exclusively of brain and spinal cord.",
        imageQuery: "Central nervous system diagram"
    },
    {
        id: "C1Q12",
        chapter: 1,
        yield: "high",
        type: "single",
        text: "Which nerves emerge directly from the spinal cord rather than the brain?",
        options: [
            { id: "A", text: "Cranial nerves", correct: false },
            { id: "B", text: "Spinal nerves", correct: true },
            { id: "C", text: "Optic nerves", correct: false },
            { id: "D", text: "Vagus nerves", correct: false },
            { id: "E", text: "Facial nerves", correct: false }
        ],
        explanation: "Spinal nerves arise from the spinal cord; cranial nerves originate from the brain/brainstem.",
        imageQuery: "Spinal nerves anatomy"
    },
    {
        id: "C1Q13",
        chapter: 1,
        yield: "high",
        type: "multi",
        text: "Which processes are core functions of the nervous system? Select all that apply.",
        options: [
            { id: "A", text: "Sensory input", correct: true },
            { id: "B", text: "Integration of information", correct: true },
            { id: "C", text: "Motor output", correct: true },
            { id: "D", text: "Long-term energy storage", correct: false },
            { id: "E", text: "Nutrient absorption", correct: false }
        ],
        explanation: "These three define neural function; the others belong to metabolic systems.",
        imageQuery: "Nervous system functions"
    },
    {
        id: "C1Q14",
        chapter: 1,
        yield: "high",
        type: "single",
        text: "A lesion selectively affecting ascending pathways would most directly impair which function?",
        options: [
            { id: "A", text: "Voluntary motor control", correct: false },
            { id: "B", text: "Sensory perception", correct: true },
            { id: "C", text: "Autonomic regulation", correct: false },
            { id: "D", text: "Endocrine signaling", correct: false },
            { id: "E", text: "Cardiac pacemaker activity", correct: false }
        ],
        explanation: "Ascending pathways carry sensory information to the CNS.",
        imageQuery: "Ascending sensory pathways"
    },
    {
        id: "C1Q15",
        chapter: 1,
        yield: "high",
        type: "multi",
        text: "Which fiber types exhibit the highest conduction velocity? Select all that apply.",
        options: [
            { id: "A", text: "A-alpha fibers", correct: true },
            { id: "B", text: "Ia afferent fibers", correct: true },
            { id: "C", text: "A-delta fibers", correct: false },
            { id: "D", text: "B fibers", correct: false },
            { id: "E", text: "C fibers", correct: false }
        ],
        explanation: "Large-diameter, heavily myelinated fibers conduct fastest.",
        imageQuery: "Nerve fiber conduction velocities"
    },
    
    // Body Fluids
    {
        id: "C1Q16",
        chapter: 1,
        yield: "low",
        type: "single",
        text: "Total body water in a healthy adult male typically represents approximately what fraction of body weight?",
        options: [
            { id: "A", text: "40%", correct: false },
            { id: "B", text: "50%", correct: false },
            { id: "C", text: "60%", correct: true },
            { id: "D", text: "70%", correct: false },
            { id: "E", text: "80%", correct: false }
        ],
        explanation: "Adult males average ~60% total body water.",
        imageQuery: "Body water percentage chart"
    },
    {
        id: "C1Q17",
        chapter: 1,
        yield: "low",
        type: "multi",
        text: "Which substances are appropriate for measuring extracellular fluid volume? Select all that apply.",
        options: [
            { id: "A", text: "Inulin", correct: true },
            { id: "B", text: "Mannitol", correct: true },
            { id: "C", text: "Deuterium oxide", correct: false },
            { id: "D", text: "Evans blue", correct: false },
            { id: "E", text: "Antipyrine", correct: false }
        ],
        explanation: "ECF tracers do not enter cells; D₂O and antipyrine measure TBW.",
        imageQuery: "Extracellular fluid measurement"
    },
    
    // Bioenergetics
    {
        id: "C1Q18",
        chapter: 1,
        yield: "low",
        type: "multi",
        text: "ATP primarily serves which roles in cellular energetics? Select all that apply.",
        options: [
            { id: "A", text: "Direct energy currency", correct: true },
            { id: "B", text: "Long-term energy storage", correct: false },
            { id: "C", text: "Coupling exergonic and endergonic reactions", correct: true },
            { id: "D", text: "Thermal insulation", correct: false },
            { id: "E", text: "Regulation of membrane fluidity", correct: false }
        ],
        explanation: "ATP links energy release to energy-requiring processes.",
        imageQuery: "ATP cellular energy"
    },
    {
        id: "C1Q19",
        chapter: 1,
        yield: "low",
        type: "multi",
        text: "Which methods estimate energy expenditure based on heat production or its metabolic equivalents? Select all that apply.",
        options: [
            { id: "A", text: "Direct calorimetry", correct: true },
            { id: "B", text: "Indirect calorimetry", correct: true },
            { id: "C", text: "Respiratory quotient calculation", correct: false },
            { id: "D", text: "Food calorimetry", correct: false },
            { id: "E", text: "Balance studies", correct: false }
        ],
        explanation: "Direct measures heat; indirect estimates via O₂ consumption and CO₂ production.",
        imageQuery: "Calorimetry methods"
    },
    
    // ==================== CHAPTER 2 ====================
    
    // LESSON 1: RESTING POTENTIAL
    {
        id: "C2_RP_001",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "A neuron at rest has a membrane potential of -70 mV. Which of the following best explains why this value is closer to the potassium equilibrium potential (-90 mV) than to the sodium equilibrium potential (+60 mV)?",
        options: [
            { id: "A", text: "The Na⁺/K⁺ pump transports more Na⁺ out than K⁺ in", correct: false },
            { id: "B", text: "The membrane has higher permeability to K⁺ at rest", correct: true },
            { id: "C", text: "Protein anions in the cytoplasm attract K⁺ ions", correct: false },
            { id: "D", text: "Voltage-gated K⁺ channels are open at rest", correct: false },
            { id: "E", text: "Chloride influx counteracts sodium entry", correct: false }
        ],
        explanation: "At rest, the membrane is approximately 25-30 times more permeable to K⁺ than Na⁺ due to leak channels. This high K⁺ permeability makes the resting potential approach (but not reach) the K⁺ equilibrium potential of -90 mV, settling around -70 mV due to some Na⁺ leak.",
        imageQuery: "Membrane potential potassium permeability"
    },
    {
        id: "C2_RP_002",
        chapter: 2,
        yield: "high",
        type: "multi",
        text: "A researcher uses the Nernst equation to calculate ion equilibrium potentials in a neuron. Which of the following statements regarding equilibrium potentials are correct? Select all that apply.",
        options: [
            { id: "A", text: "ENa is approximately +60 mV due to higher extracellular Na⁺ concentration", correct: true },
            { id: "B", text: "EK is approximately -90 mV due to higher intracellular K⁺ concentration", correct: true },
            { id: "C", text: "ECl is approximately -88 mV and contributes passively to membrane potential", correct: true },
            { id: "D", text: "The Goldman-Hodgkin-Katz equation considers only Na⁺ and K⁺ permeabilities", correct: false },
            { id: "E", text: "Equilibrium potential represents the voltage where net ion flux is zero", correct: true }
        ],
        explanation: "ENa (+60 mV), EK (-90 mV), and ECl (-88 mV) are correctly stated. ECl distribution is largely passive. The GHK equation actually includes Na⁺, K⁺, AND Cl⁻ permeabilities (D is incorrect). Equilibrium potential is where electrochemical forces balance (E correct).",
        imageQuery: "Nernst equation ion equilibrium"
    },
    {
        id: "C2_RP_003",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "During voltage clamp experiments on a squid giant axon, tetrodotoxin (TTX) is applied. The membrane is then depolarized from -70 mV to 0 mV. Which current component will be eliminated?",
        options: [
            { id: "A", text: "Early outward current", correct: false },
            { id: "B", text: "Early inward current", correct: true },
            { id: "C", text: "Late outward current", correct: false },
            { id: "D", text: "Leak current", correct: false },
            { id: "E", text: "Capacitive current", correct: false }
        ],
        explanation: "TTX selectively blocks voltage-gated Na⁺ channels, eliminating the early (transient) inward Na⁺ current seen during depolarization. The late outward current (K⁺) remains intact. This pharmacological dissection was crucial in Hodgkin-Huxley's work.",
        imageQuery: "TTX sodium channel block"
    },
    {
        id: "C2_RP_004",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "The Na⁺/K⁺ pump contributes to the resting membrane potential by which mechanism?",
        options: [
            { id: "A", text: "Creating concentration gradients that drive passive ion movement through leak channels", correct: true },
            { id: "B", text: "Directly generating a -70 mV potential through electrogenic transport", correct: false },
            { id: "C", text: "Opening voltage-gated K⁺ channels", correct: false },
            { id: "D", text: "Blocking Na⁺ leak channels", correct: false },
            { id: "E", text: "Hyperpolarizing the membrane to -90 mV", correct: false }
        ],
        explanation: "The pump's primary contribution is establishing Na⁺ and K⁺ concentration gradients. These gradients drive passive ion flux through leak channels, which directly generates most of the resting potential. The pump itself contributes only ~5 mV directly through its 3:2 electrogenic transport ratio.",
        imageQuery: "Na K pump mechanism"
    },
    {
        id: "C2_RP_005",
        chapter: 2,
        yield: "high",
        type: "multi",
        text: "A medical student examines factors maintaining the resting potential of a neuron. Which of the following contribute to establishing or maintaining the -70 mV resting potential? Select all that apply.",
        options: [
            { id: "A", text: "High K⁺ leak channel conductance", correct: true },
            { id: "B", text: "Na⁺/K⁺-ATPase activity", correct: true },
            { id: "C", text: "Impermeable intracellular protein anions", correct: true },
            { id: "D", text: "Equal permeability to Na⁺ and K⁺", correct: false },
            { id: "E", text: "Voltage-gated Na⁺ channel inactivation", correct: false }
        ],
        explanation: "K⁺ leak channels (A), the Na⁺/K⁺ pump (B), and impermeable anions (C) all contribute. The membrane is NOT equally permeable to Na⁺ and K⁺ at rest—K⁺ permeability dominates (D incorrect). Voltage-gated Na⁺ channels are closed (not inactivated) at rest (E incorrect).",
        imageQuery: "Resting potential factors"
    },
    {
        id: "C2_RP_006",
        chapter: 2,
        yield: "low",
        type: "single",
        text: "Which technique allows measurement of ionic currents through a single ion channel in a patch of membrane?",
        options: [
            { id: "A", text: "Voltage clamp", correct: false },
            { id: "B", text: "Current clamp", correct: false },
            { id: "C", text: "Patch clamp", correct: true },
            { id: "D", text: "Whole-cell recording", correct: false },
            { id: "E", text: "Sharp electrode recording", correct: false }
        ],
        explanation: "Patch clamp technique (developed by Neher and Sakmann, Nobel Prize 1991) allows recording from single channels in a membrane patch. Voltage clamp measures total membrane current from thousands of channels.",
        imageQuery: "Patch clamp technique"
    },
    
    // LESSON 2: ACTION POTENTIAL
    {
        id: "C2_AP_001",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "During the rising phase of an action potential, voltage-gated Na⁺ channels are in which state?",
        options: [
            { id: "A", text: "Closed (resting state)", correct: false },
            { id: "B", text: "Open (activated state)", correct: true },
            { id: "C", text: "Inactivated state", correct: false },
            { id: "D", text: "Transitioning from inactivated to closed", correct: false },
            { id: "E", text: "Permanently refractory", correct: false }
        ],
        explanation: "During the rapid upstroke (depolarization phase), Na⁺ channels are open/activated, allowing massive Na⁺ influx. They transition to the inactivated state within ~1 ms, then return to closed (resting) state during repolarization, ready for reactivation.",
        imageQuery: "Sodium channel states"
    },
    {
        id: "C2_AP_002",
        chapter: 2,
        yield: "high",
        type: "multi",
        text: "A neuron fires an action potential. During the absolute refractory period, which of the following are true? Select all that apply.",
        options: [
            { id: "A", text: "Na⁺ channels are predominantly in the inactivated state", correct: true },
            { id: "B", text: "No stimulus, regardless of strength, can trigger another action potential", correct: true },
            { id: "C", text: "K⁺ channels are maximally open", correct: false },
            { id: "D", text: "The membrane potential is more negative than resting potential", correct: false },
            { id: "E", text: "This period ensures unidirectional propagation of action potentials", correct: true }
        ],
        explanation: "During absolute refractory period (ARP), Na⁺ channels are inactivated (A, B correct), preventing re-excitation and ensuring one-way conduction (E). K⁺ channels open progressively but aren't maximally open until late repolarization (C incorrect). The membrane may still be depolarized during early ARP (D incorrect).",
        imageQuery: "Absolute refractory period"
    },
    {
        id: "C2_AP_003",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "An experimental drug blocks voltage-gated K⁺ channels. What effect would this have on the action potential?",
        options: [
            { id: "A", text: "No action potential can be generated", correct: false },
            { id: "B", text: "Prolonged repolarization phase", correct: true },
            { id: "C", text: "Reduced amplitude of the spike", correct: false },
            { id: "D", text: "Elimination of the afterhyperpolarization", correct: false },
            { id: "E", text: "Faster conduction velocity", correct: false }
        ],
        explanation: "Blocking K⁺ channels prevents or delays repolarization, prolonging the action potential duration. This is similar to the effect of tetraethylammonium (TEA). The spike can still occur via Na⁺ channels, but the cell struggles to return to resting potential.",
        imageQuery: "Potassium channel block effect"
    },
    {
        id: "C2_AP_004",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "In myelinated nerve fibers, action potentials propagate via saltatory conduction. This mechanism primarily increases conduction velocity by:",
        options: [
            { id: "A", text: "Increasing the number of Na⁺ channels per unit length", correct: false },
            { id: "B", text: "Reducing membrane capacitance in myelinated segments", correct: false },
            { id: "C", text: "Allowing the action potential to 'jump' between nodes of Ranvier", correct: true },
            { id: "D", text: "Increasing the diameter of the axon", correct: false },
            { id: "E", text: "Decreasing the threshold potential", correct: false }
        ],
        explanation: "Saltatory conduction occurs because myelin insulates internodal segments, forcing current to flow to the next node of Ranvier where high-density Na⁺ channels regenerate the action potential. This 'jumping' dramatically increases conduction speed (up to 50× faster than unmyelinated fibers).",
        imageQuery: "Saltatory conduction nodes of Ranvier"
    },
    {
        id: "C2_AP_005",
        chapter: 2,
        yield: "high",
        type: "multi",
        text: "The all-or-none principle of action potentials means that: Select all that apply.",
        options: [
            { id: "A", text: "Subthreshold stimuli produce no action potential", correct: true },
            { id: "B", text: "Once threshold is reached, the action potential amplitude is constant", correct: true },
            { id: "C", text: "Stronger stimuli produce larger amplitude action potentials", correct: false },
            { id: "D", text: "Action potential amplitude is independent of stimulus strength above threshold", correct: true },
            { id: "E", text: "Increasing stimulus frequency increases individual spike amplitude", correct: false }
        ],
        explanation: "The all-or-none law states that subthreshold stimuli fail (A), but once threshold is crossed, the action potential reaches maximum amplitude regardless of stimulus strength (B, D). Stimulus intensity is coded by FREQUENCY, not amplitude (C, E incorrect).",
        imageQuery: "All or none principle"
    },
    {
        id: "C2_AP_006",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "A patient's nerve conduction study shows slowed conduction velocities with normal amplitude. This pattern is most consistent with:",
        options: [
            { id: "A", text: "Axonal degeneration", correct: false },
            { id: "B", text: "Demyelination", correct: true },
            { id: "C", text: "Neuromuscular junction disorder", correct: false },
            { id: "D", text: "Presynaptic terminal damage", correct: false },
            { id: "E", text: "Reduced Na⁺ channel density", correct: false }
        ],
        explanation: "Demyelination (loss of myelin) slows conduction velocity but preserves axon integrity, maintaining relatively normal amplitudes. Axonal degeneration reduces amplitude. This distinction is crucial in diagnosing neuropathies (demyelinating vs. axonal).",
        imageQuery: "Demyelination nerve conduction"
    },
    {
        id: "C2_AP_007",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "The undershoot (afterhyperpolarization) following an action potential is primarily caused by:",
        options: [
            { id: "A", text: "Continued Na⁺ influx", correct: false },
            { id: "B", text: "Slow inactivation of Na⁺ channels", correct: false },
            { id: "C", text: "Continued K⁺ efflux through slow-closing K⁺ channels", correct: true },
            { id: "D", text: "Activation of Cl⁻ channels", correct: false },
            { id: "E", text: "Enhanced Na⁺/K⁺ pump activity", correct: false }
        ],
        explanation: "Voltage-gated K⁺ channels open during repolarization but close slowly, allowing continued K⁺ efflux even after the membrane potential passes through resting level, creating temporary hyperpolarization (undershoot). This corresponds to the relative refractory period.",
        imageQuery: "Afterhyperpolarization mechanism"
    },
    {
        id: "C2_AP_008",
        chapter: 2,
        yield: "low",
        type: "single",
        text: "The strength-duration curve relates stimulus intensity to duration needed to reach threshold. The minimum current intensity required to elicit an action potential with infinite duration is called:",
        options: [
            { id: "A", text: "Chronaxie", correct: false },
            { id: "B", text: "Rheobase", correct: true },
            { id: "C", text: "Threshold", correct: false },
            { id: "D", text: "Utilization time", correct: false },
            { id: "E", text: "Accommodation", correct: false }
        ],
        explanation: "Rheobase is the minimum current intensity that can eventually trigger an action potential given infinite time. Chronaxie is the duration needed at twice the rheobase intensity.",
        imageQuery: "Strength duration curve"
    },
    
    // LESSON 3: SYNAPTIC TRANSMISSION
    {
        id: "C2_ST_001",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "Botulinum toxin causes flaccid paralysis by:",
        options: [
            { id: "A", text: "Blocking acetylcholine receptors on the motor endplate", correct: false },
            { id: "B", text: "Cleaving SNAP-25 and preventing neurotransmitter release", correct: true },
            { id: "C", text: "Inhibiting acetylcholinesterase activity", correct: false },
            { id: "D", text: "Blocking voltage-gated Ca²⁺ channels", correct: false },
            { id: "E", text: "Destroying motor neuron cell bodies", correct: false }
        ],
        explanation: "Botulinum toxin cleaves presynaptic proteins (SNAP-25, synaptobrevin, or syntaxin depending on serotype), preventing SNARE complex formation and blocking acetylcholine vesicle exocytosis at the neuromuscular junction, causing paralysis.",
        imageQuery: "Botulinum toxin mechanism"
    },
    {
        id: "C2_ST_002",
        chapter: 2,
        yield: "high",
        type: "multi",
        text: "At a chemical synapse, which events are directly Ca²⁺-dependent? Select all that apply.",
        options: [
            { id: "A", text: "Neurotransmitter synthesis", correct: false },
            { id: "B", text: "Vesicle fusion with presynaptic membrane", correct: true },
            { id: "C", text: "Neurotransmitter diffusion across synaptic cleft", correct: false },
            { id: "D", text: "Vesicle mobilization to active zone", correct: true },
            { id: "E", text: "Opening of postsynaptic ligand-gated ion channels", correct: false }
        ],
        explanation: "Ca²⁺ influx through voltage-gated channels triggers vesicle mobilization (D) and membrane fusion/exocytosis (B). Synthesis occurs constitutively (A), diffusion is passive (C), and postsynaptic channels respond to neurotransmitter, not Ca²⁺ (E).",
        imageQuery: "Calcium synaptic transmission"
    },
    {
        id: "C2_ST_003",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "Lambert-Eaton myasthenic syndrome involves autoantibodies against which target?",
        options: [
            { id: "A", text: "Acetylcholine receptors (nicotinic)", correct: false },
            { id: "B", text: "Presynaptic voltage-gated Ca²⁺ channels", correct: true },
            { id: "C", text: "Acetylcholinesterase", correct: false },
            { id: "D", text: "Na⁺ channels in motor neurons", correct: false },
            { id: "E", text: "Ryanodine receptors", correct: false }
        ],
        explanation: "Lambert-Eaton syndrome features antibodies against presynaptic P/Q-type voltage-gated Ca²⁺ channels, reducing Ca²⁺ influx and thus acetylcholine release. This differs from myasthenia gravis (antibodies against postsynaptic AChR). Often associated with small cell lung cancer.",
        imageQuery: "Lambert Eaton syndrome"
    },
    {
        id: "C2_ST_004",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "An EPSP (excitatory postsynaptic potential) differs from an action potential in that an EPSP:",
        options: [
            { id: "A", text: "Is an all-or-none phenomenon", correct: false },
            { id: "B", text: "Requires voltage-gated Na⁺ channels", correct: false },
            { id: "C", text: "Is graded and decremental", correct: true },
            { id: "D", text: "Cannot summate temporally", correct: false },
            { id: "E", text: "Propagates without decrement", correct: false }
        ],
        explanation: "EPSPs are graded (amplitude varies with input strength), decremental (decay with distance), and summatable. Action potentials are all-or-none, non-decremental, and require voltage-gated channels. EPSPs use ligand-gated channels.",
        imageQuery: "EPSP vs action potential"
    },
    {
        id: "C2_ST_005",
        chapter: 2,
        yield: "high",
        type: "multi",
        text: "Which statements regarding ionotropic versus metabotropic receptors are correct? Select all that apply.",
        options: [
            { id: "A", text: "Ionotropic receptors mediate faster synaptic responses", correct: true },
            { id: "B", text: "Metabotropic receptors are coupled to G-proteins", correct: true },
            { id: "C", text: "NMDA receptors are ionotropic glutamate receptors", correct: true },
            { id: "D", text: "All GABA receptors are ionotropic", correct: false },
            { id: "E", text: "Metabotropic effects involve second messenger cascades", correct: true }
        ],
        explanation: "Ionotropic receptors (ligand-gated ion channels) produce fast responses (A). Metabotropic receptors use G-proteins (B) and second messengers (E). NMDA is ionotropic (C). However, GABA has both ionotropic (GABA-A) and metabotropic (GABA-B) receptors, so D is incorrect.",
        imageQuery: "Ionotropic metabotropic receptors"
    },
    {
        id: "C2_ST_006",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "Acetylcholine is primarily eliminated from the synaptic cleft at the neuromuscular junction by:",
        options: [
            { id: "A", text: "Reuptake into the presynaptic terminal", correct: false },
            { id: "B", text: "Diffusion into surrounding tissue", correct: false },
            { id: "C", text: "Enzymatic breakdown by acetylcholinesterase", correct: true },
            { id: "D", text: "Uptake into glial cells", correct: false },
            { id: "E", text: "Receptor-mediated endocytosis", correct: false }
        ],
        explanation: "Acetylcholinesterase rapidly hydrolyzes ACh into acetate and choline in the synaptic cleft. The choline is then taken back up into the presynaptic terminal for ACh resynthesis. This differs from most other neurotransmitters, which are terminated by reuptake.",
        imageQuery: "Acetylcholinesterase mechanism"
    },
    {
        id: "C2_ST_007",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "At an inhibitory synapse, opening of Cl⁻ channels causes membrane hyperpolarization. This moves the membrane potential:",
        options: [
            { id: "A", text: "Closer to threshold", correct: false },
            { id: "B", text: "Further from threshold", correct: true },
            { id: "C", text: "To exactly -90 mV", correct: false },
            { id: "D", text: "To 0 mV", correct: false },
            { id: "E", text: "Above threshold", correct: false }
        ],
        explanation: "Cl⁻ influx (or K⁺ efflux) hyperpolarizes the membrane, moving it further from the action potential threshold (-50 mV), making the neuron less likely to fire. This is an IPSP (inhibitory postsynaptic potential). ECl is around -88 mV.",
        imageQuery: "IPSP inhibitory synapse"
    },
    {
        id: "C2_ST_008",
        chapter: 2,
        yield: "high",
        type: "multi",
        text: "Regarding synaptic integration, which statements are accurate? Select all that apply.",
        options: [
            { id: "A", text: "Spatial summation involves EPSPs from multiple synapses arriving simultaneously", correct: true },
            { id: "B", text: "Temporal summation requires high-frequency stimulation of a single synapse", correct: true },
            { id: "C", text: "IPSPs can cancel out EPSPs during summation", correct: true },
            { id: "D", text: "Summation occurs at axon terminals", correct: false },
            { id: "E", text: "The axon initial segment has the lowest threshold for action potential generation", correct: true }
        ],
        explanation: "Spatial (A) and temporal (B) summation integrate inputs. IPSPs can indeed offset EPSPs (C). The axon hillock/initial segment, not terminals, has high Na⁺ channel density and lowest threshold (E correct, D incorrect).",
        imageQuery: "Synaptic summation"
    },
    {
        id: "C2_ST_009",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "A drug that blocks synaptotagmin would most likely:",
        options: [
            { id: "A", text: "Prevent action potential propagation", correct: false },
            { id: "B", text: "Block Ca²⁺ channels", correct: false },
            { id: "C", text: "Inhibit vesicle fusion and neurotransmitter release", correct: true },
            { id: "D", text: "Enhance neurotransmitter reuptake", correct: false },
            { id: "E", text: "Block postsynaptic receptors", correct: false }
        ],
        explanation: "Synaptotagmin is the Ca²⁺ sensor protein on synaptic vesicles. When Ca²⁺ binds, it triggers SNARE-mediated membrane fusion. Blocking synaptotagmin prevents Ca²⁺-triggered exocytosis, thus blocking neurotransmitter release.",
        imageQuery: "Synaptotagmin vesicle fusion"
    },
    {
        id: "C2_ST_010",
        chapter: 2,
        yield: "low",
        type: "single",
        text: "Electrical synapses differ from chemical synapses in that electrical synapses:",
        options: [
            { id: "A", text: "Have a wider synaptic cleft (20-30 nm)", correct: false },
            { id: "B", text: "Use gap junctions for direct ionic coupling", correct: true },
            { id: "C", text: "Have slower transmission (0.5-1 ms delay)", correct: false },
            { id: "D", text: "Are always unidirectional", correct: false },
            { id: "E", text: "Require neurotransmitter release", correct: false }
        ],
        explanation: "Electrical synapses use gap junctions (~2 nm gap) for direct current flow, allowing faster, often bidirectional transmission. Chemical synapses have wider clefts (20-30 nm), synaptic delay, and are unidirectional.",
        imageQuery: "Electrical vs chemical synapses"
    },
    {
        id: "C2_ST_011",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "Myasthenia gravis is treated with acetylcholinesterase inhibitors because they:",
        options: [
            { id: "A", text: "Increase acetylcholine synthesis", correct: false },
            { id: "B", text: "Prolong acetylcholine presence in the synaptic cleft", correct: true },
            { id: "C", text: "Block antibody production", correct: false },
            { id: "D", text: "Open more nicotinic receptors", correct: false },
            { id: "E", text: "Enhance Ca²⁺ influx into presynaptic terminals", correct: false }
        ],
        explanation: "In myasthenia gravis, autoantibodies reduce functional nicotinic receptors at the neuromuscular junction. Acetylcholinesterase inhibitors (e.g., pyridostigmine) prevent ACh breakdown, allowing it to remain longer in the cleft and bind to remaining receptors repeatedly, improving transmission.",
        imageQuery: "Myasthenia gravis treatment"
    },
    
    // LESSON 4: SKELETAL MUSCLE CONTRACTION
    {
        id: "C2_MC_001",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "During muscle contraction, which band of the sarcomere shortens?",
        options: [
            { id: "A", text: "A band", correct: false },
            { id: "B", text: "I band", correct: false },
            { id: "C", text: "H zone", correct: false },
            { id: "D", text: "Both I band and H zone", correct: true },
            { id: "E", text: "M line", correct: false }
        ],
        explanation: "During contraction, actin filaments slide past myosin, reducing the I band (where only actin exists) and H zone (where only myosin exists). The A band length remains constant as it represents the full length of myosin filaments.",
        imageQuery: "Sarcomere contraction bands diagram"
    },
    {
        id: "C2_MC_002",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "In the absence of ATP, myosin heads remain bound to actin, a condition known as:",
        options: [
            { id: "A", text: "Tetanus", correct: false },
            { id: "B", text: "Rigor mortis", correct: true },
            { id: "C", text: "Muscle fatigue", correct: false },
            { id: "D", text: "Isometric contraction", correct: false },
            { id: "E", text: "Summation", correct: false }
        ],
        explanation: "ATP binding to myosin causes myosin-actin detachment. Without ATP (as after death), myosin heads stay attached, creating rigid muscles (rigor mortis). ATP is required for both the power stroke AND detachment.",
        imageQuery: "Rigor mortis ATP mechanism"
    },
    {
        id: "C2_MC_003",
        chapter: 2,
        yield: "high",
        type: "multi",
        text: "Which proteins are components of the thin filament in skeletal muscle? Select all that apply.",
        options: [
            { id: "A", text: "Actin", correct: true },
            { id: "B", text: "Myosin", correct: false },
            { id: "C", text: "Tropomyosin", correct: true },
            { id: "D", text: "Troponin", correct: true },
            { id: "E", text: "Titin", correct: false }
        ],
        explanation: "Thin filaments consist of F-actin (polymerized G-actin), tropomyosin (wraps around actin), and troponin complex (TnC, TnI, TnT). Myosin forms thick filaments (B incorrect). Titin is an elastic protein connecting Z-lines to myosin (E incorrect).",
        imageQuery: "Thin filament proteins"
    },
    {
        id: "C2_MC_004",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "The role of Ca²⁺ in skeletal muscle contraction is to:",
        options: [
            { id: "A", text: "Directly power the myosin power stroke", correct: false },
            { id: "B", text: "Bind to troponin C, exposing myosin-binding sites on actin", correct: true },
            { id: "C", text: "Activate myosin ATPase", correct: false },
            { id: "D", text: "Open ryanodine receptors", correct: false },
            { id: "E", text: "Depolarize the T-tubule membrane", correct: false }
        ],
        explanation: "Ca²⁺ binds to troponin C (TnC), causing a conformational change that moves tropomyosin away from myosin-binding sites on actin, allowing cross-bridge formation. Ca²⁺ doesn't directly power contraction—ATP does.",
        imageQuery: "Troponin calcium binding mechanism"
    },
    {
        id: "C2_MC_005",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "Excitation-contraction coupling in skeletal muscle involves transmission of the signal from the T-tubule to the sarcoplasmic reticulum. This occurs through:",
        options: [
            { id: "A", text: "Gap junctions", correct: false },
            { id: "B", text: "Direct electrical coupling", correct: false },
            { id: "C", text: "Mechanical linkage via dihydropyridine receptor-ryanodine receptor interaction", correct: true },
            { id: "D", text: "Diffusion of Ca²⁺ from T-tubules", correct: false },
            { id: "E", text: "Neurotransmitter release", correct: false }
        ],
        explanation: "The dihydropyridine receptor (DHPR, L-type Ca²⁺ channel) in the T-tubule membrane mechanically couples to the ryanodine receptor (RyR) in the sarcoplasmic reticulum membrane. T-tubule depolarization causes DHPR conformational change, which opens RyR, releasing Ca²⁺.",
        imageQuery: "Excitation contraction coupling"
    },
    {
        id: "C2_MC_006",
        chapter: 2,
        yield: "high",
        type: "multi",
        text: "Regarding muscle energy metabolism, which statements are correct? Select all that apply.",
        options: [
            { id: "A", text: "Phosphocreatine provides immediate ATP regeneration for ~15 seconds", correct: true },
            { id: "B", text: "Glycolysis produces 36 ATP per glucose molecule", correct: false },
            { id: "C", text: "Oxidative phosphorylation requires oxygen and provides sustained energy", correct: true },
            { id: "D", text: "Direct phosphorylation is faster than oxidative metabolism", correct: true },
            { id: "E", text: "Lactic acid accumulation occurs during anaerobic glycolysis", correct: true }
        ],
        explanation: "Phosphocreatine → rapid ATP (A), lasts ~15 sec (D fast). Glycolysis produces only 2 ATP/glucose (B incorrect). Oxidative phosphorylation yields ~36 ATP/glucose with O₂ (C). Glycolysis produces lactate anaerobically (E).",
        imageQuery: "Muscle energy metabolism"
    },
    {
        id: "C2_MC_007",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "The length-tension relationship of skeletal muscle indicates that maximum tension is generated when:",
        options: [
            { id: "A", text: "The sarcomere is maximally stretched (3.5 μm)", correct: false },
            { id: "B", text: "There is optimal overlap between actin and myosin (~2.2 μm)", correct: true },
            { id: "C", text: "The sarcomere is maximally shortened (1.0 μm)", correct: false },
            { id: "D", text: "The H zone is widest", correct: false },
            { id: "E", text: "No actin-myosin overlap exists", correct: false }
        ],
        explanation: "Maximum tension occurs at optimal sarcomere length (~2.0-2.2 μm) where maximum actin-myosin cross-bridge formation is possible. Too short → actin filaments interfere. Too long → reduced overlap → fewer cross-bridges.",
        imageQuery: "Length tension relationship"
    },
    {
        id: "C2_MC_008",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "Tetanic contraction in skeletal muscle occurs when:",
        options: [
            { id: "A", text: "Single stimuli are delivered at low frequency", correct: false },
            { id: "B", text: "Stimulation frequency is high enough to prevent relaxation between contractions", correct: true },
            { id: "C", text: "The muscle is maximally stretched", correct: false },
            { id: "D", text: "ATP is depleted", correct: false },
            { id: "E", text: "Ca²⁺ channels are blocked", correct: false }
        ],
        explanation: "Tetanus (sustained contraction) results from high-frequency stimulation (40-100 Hz) where Ca²⁺ remains elevated and successive contractions fuse. Individual twitches summate temporally, eliminating relaxation phases.",
        imageQuery: "Tetanic contraction"
    },
    {
        id: "C2_MC_009",
        chapter: 2,
        yield: "high",
        type: "multi",
        text: "Type I (slow oxidative) muscle fibers are characterized by: Select all that apply.",
        options: [
            { id: "A", text: "High myoglobin content", correct: true },
            { id: "B", text: "Many mitochondria", correct: true },
            { id: "C", text: "Resistance to fatigue", correct: true },
            { id: "D", text: "Fast contraction speed", correct: false },
            { id: "E", text: "Reliance on glycolytic metabolism", correct: false }
        ],
        explanation: "Type I fibers are slow, fatigue-resistant, with high mitochondria (B), myoglobin (A), and oxidative capacity (C). They're slow-contracting (D incorrect) and use oxidative, not glycolytic metabolism (E incorrect). Type IIB fibers are fast glycolytic.",
        imageQuery: "Muscle fiber types"
    },
    {
        id: "C2_MC_010",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "During isometric contraction:",
        options: [
            { id: "A", text: "The muscle shortens while generating constant tension", correct: false },
            { id: "B", text: "Muscle length remains constant despite tension generation", correct: true },
            { id: "C", text: "No ATP is consumed", correct: false },
            { id: "D", text: "Cross-bridges do not form", correct: false },
            { id: "E", text: "The load is moved", correct: false }
        ],
        explanation: "In isometric contraction, muscle generates tension without length change (e.g., holding a weight stationary). Cross-bridges cycle but don't achieve net filament sliding. ATP is still consumed. Load is not moved (unlike isotonic contraction).",
        imageQuery: "Isometric contraction"
    },
    {
        id: "C2_MC_011",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "The sarcoplasmic reticulum's primary function in muscle contraction is:",
        options: [
            { id: "A", text: "Generate action potentials", correct: false },
            { id: "B", text: "Store and release Ca²⁺", correct: true },
            { id: "C", text: "Synthesize ATP", correct: false },
            { id: "D", text: "Produce acetylcholine", correct: false },
            { id: "E", text: "Anchor myofilaments", correct: false }
        ],
        explanation: "The sarcoplasmic reticulum (SR) stores Ca²⁺ in its terminal cisternae at high concentration. Upon stimulation, it releases Ca²⁺ to trigger contraction, then pumps it back (via SERCA pumps) to cause relaxation.",
        imageQuery: "Sarcoplasmic reticulum function"
    },
    {
        id: "C2_MC_012",
        chapter: 2,
        yield: "low",
        type: "single",
        text: "The M line in the sarcomere is primarily composed of:",
        options: [
            { id: "A", text: "Actin", correct: false },
            { id: "B", text: "Tropomyosin", correct: false },
            { id: "C", text: "Myomesin", correct: true },
            { id: "D", text: "Troponin", correct: false },
            { id: "E", text: "Nebulin", correct: false }
        ],
        explanation: "The M line consists of proteins (myomesin, obscurin) that form a network connecting thick myosin filaments together in the center of the sarcomere, maintaining their alignment.",
        imageQuery: "M line sarcomere"
    },
    {
        id: "C2_MC_013",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "Which component acts as a molecular spring, contributing to muscle elasticity and returning the sarcomere to resting length?",
        options: [
            { id: "A", text: "Myosin", correct: false },
            { id: "B", text: "Actin", correct: false },
            { id: "C", text: "Titin", correct: true },
            { id: "D", text: "Tropomyosin", correct: false },
            { id: "E", text: "Dystrophin", correct: false }
        ],
        explanation: "Titin (connectin) is a giant elastic protein extending from Z-line to M-line, running through myosin filaments. It acts as a molecular spring, providing passive tension and restoring sarcomere length after stretch.",
        imageQuery: "Titin muscle elasticity"
    },
    
    // LESSON 5: AUTONOMIC NERVOUS SYSTEM
    {
        id: "C2_ANS_001",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "All preganglionic neurons of the autonomic nervous system release which neurotransmitter?",
        options: [
            { id: "A", text: "Norepinephrine", correct: false },
            { id: "B", text: "Epinephrine", correct: false },
            { id: "C", text: "Acetylcholine", correct: true },
            { id: "D", text: "Dopamine", correct: false },
            { id: "E", text: "Serotonin", correct: false }
        ],
        explanation: "Both sympathetic and parasympathetic preganglionic neurons are cholinergic, releasing acetylcholine (ACh). The difference emerges postgangionically: parasympathetic postganglionic neurons are cholinergic, while sympathetic postganglionic neurons are mostly noradrenergic (with exceptions like sweat glands).",
        imageQuery: "Autonomic nervous system neurotransmitters"
    },
    {
        id: "C2_ANS_002",
        chapter: 2,
        yield: "high",
        type: "multi",
        text: "Which receptors are activated by acetylcholine in the autonomic nervous system? Select all that apply.",
        options: [
            { id: "A", text: "Nicotinic receptors at autonomic ganglia", correct: true },
            { id: "B", text: "Muscarinic receptors at target organs (parasympathetic)", correct: true },
            { id: "C", text: "Alpha-adrenergic receptors", correct: false },
            { id: "D", text: "Nicotinic receptors at the neuromuscular junction", correct: false },
            { id: "E", text: "Muscarinic receptors at sweat glands (sympathetic)", correct: true }
        ],
        explanation: "ACh acts on nicotinic receptors at ALL autonomic ganglia (A) and at neuromuscular junctions (D—but that's somatic, not autonomic). ACh acts on muscarinic receptors at parasympathetic targets (B) and at sympathetic sweat glands (E). Alpha receptors respond to norepinephrine (C incorrect for ACh).",
        imageQuery: "Acetylcholine receptors autonomic"
    },
    {
        id: "C2_ANS_003",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "Activation of β2-adrenergic receptors in bronchial smooth muscle causes:",
        options: [
            { id: "A", text: "Bronchoconstriction", correct: false },
            { id: "B", text: "Bronchodilation", correct: true },
            { id: "C", text: "Increased mucus secretion", correct: false },
            { id: "D", text: "Decreased heart rate", correct: false },
            { id: "E", text: "Vasoconstriction", correct: false }
        ],
        explanation: "β2-adrenergic receptors mediate smooth muscle relaxation. In the lungs, β2 activation → bronchodilation. This is why β2 agonists (albuterol) treat asthma. β1 receptors affect the heart (rate, contractility).",
        imageQuery: "Beta 2 adrenergic bronchodilation"
    },
    {
        id: "C2_ANS_004",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "The adrenal medulla differs from typical sympathetic ganglia in that:",
        options: [
            { id: "A", text: "It receives parasympathetic innervation", correct: false },
            { id: "B", text: "Its chromaffin cells act as postganglionic neurons, secreting hormones into blood", correct: true },
            { id: "C", text: "It releases only norepinephrine", correct: false },
            { id: "D", text: "It has no blood supply", correct: false },
            { id: "E", text: "It contains nicotinic receptors", correct: false }
        ],
        explanation: "Chromaffin cells of the adrenal medulla are modified postganglionic sympathetic neurons that secrete epinephrine (80%) and norepinephrine (20%) directly into bloodstream as hormones, not at synapses. They do have nicotinic receptors activated by preganglionic ACh.",
        imageQuery: "Adrenal medulla chromaffin cells"
    },
    {
        id: "C2_ANS_005",
        chapter: 2,
        yield: "high",
        type: "multi",
        text: "The parasympathetic nervous system originates from which regions? Select all that apply.",
        options: [
            { id: "A", text: "Cranial nerves III, VII, IX, X", correct: true },
            { id: "B", text: "Thoracolumbar spinal segments (T1-L3)", correct: false },
            { id: "C", text: "Sacral spinal segments (S2-S4)", correct: true },
            { id: "D", text: "Cervical spinal segments", correct: false },
            { id: "E", text: "Edinger-Westphal nucleus", correct: true }
        ],
        explanation: "Parasympathetic outflow is craniosacral: cranial (A, including Edinger-Westphal in CN III—E) and sacral (C, S2-S4). Thoracolumbar (B) is sympathetic origin. Cervical segments (D) don't contain parasympathetic cell bodies.",
        imageQuery: "Parasympathetic nervous system origins"
    },
    {
        id: "C2_ANS_006",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "M2 muscarinic receptors in the heart mediate:",
        options: [
            { id: "A", text: "Increased heart rate", correct: false },
            { id: "B", text: "Increased contractility", correct: false },
            { id: "C", text: "Decreased heart rate and conduction velocity", correct: true },
            { id: "D", text: "Bronchodilation", correct: false },
            { id: "E", text: "Pupil dilation", correct: false }
        ],
        explanation: "M2 receptors are coupled to Gi proteins, which decrease cAMP and open K⁺ channels, hyperpolarizing cardiac pacemaker cells. This slows heart rate (negative chronotropy) and AV conduction (negative dromotropy). Vagal stimulation → bradycardia.",
        imageQuery: "M2 muscarinic heart"
    },
    {
        id: "C2_ANS_007",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "The ratio of preganglionic to postganglionic neurons differs between sympathetic and parasympathetic divisions. The sympathetic system has:",
        options: [
            { id: "A", text: "1:1 ratio, allowing precise localized responses", correct: false },
            { id: "B", text: "1:20-30 ratio, allowing widespread responses", correct: true },
            { id: "C", text: "20:1 ratio", correct: false },
            { id: "D", text: "Equal distribution to parasympathetic", correct: false },
            { id: "E", text: "No divergence", correct: false }
        ],
        explanation: "Each sympathetic preganglionic fiber synapses with ~20-30 postganglionic neurons, causing diffuse, widespread activation (fight-or-flight response). Parasympathetic has ~1:1 ratio, allowing more localized, targeted effects.",
        imageQuery: "Sympathetic divergence ratio"
    },
    {
        id: "C2_ANS_008",
        chapter: 2,
        yield: "high",
        type: "multi",
        text: "Which organs receive predominantly sympathetic innervation (little or no parasympathetic)? Select all that apply.",
        options: [
            { id: "A", text: "Sweat glands", correct: true },
            { id: "B", text: "Heart", correct: false },
            { id: "C", text: "Most blood vessels", correct: true },
            { id: "D", text: "Bronchial smooth muscle", correct: false },
            { id: "E", text: "Pilomotor muscles", correct: true }
        ],
        explanation: "Sweat glands (A), most blood vessels (C), and pilomotor muscles (E) have exclusively sympathetic innervation. Heart (B) and bronchi (D) have dual innervation (both sympathetic and parasympathetic).",
        imageQuery: "Sympathetic only innervation"
    },
    {
        id: "C2_ANS_009",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "α1-adrenergic receptor activation in vascular smooth muscle causes:",
        options: [
            { id: "A", text: "Vasodilation", correct: false },
            { id: "B", text: "Vasoconstriction", correct: true },
            { id: "C", text: "Decreased blood pressure", correct: false },
            { id: "D", text: "Bronchodilation", correct: false },
            { id: "E", text: "Decreased peripheral resistance", correct: false }
        ],
        explanation: "α1 receptors are coupled to Gq → phospholipase C → IP₃ → Ca²⁺ release → smooth muscle contraction. In vessels, this causes vasoconstriction, increased peripheral resistance, and increased blood pressure. This is the mechanism of many decongestants (phenylephrine).",
        imageQuery: "Alpha 1 adrenergic receptor mechanism"
    },
    {
        id: "C2_ANS_010",
        chapter: 2,
        yield: "low",
        type: "single",
        text: "The nucleus tractus solitarius (NTS) in the medulla oblongata primarily functions to:",
        options: [
            { id: "A", text: "Initiate voluntary movement", correct: false },
            { id: "B", text: "Integrate visceral sensory information", correct: true },
            { id: "C", text: "Control temperature regulation exclusively", correct: false },
            { id: "D", text: "Produce growth hormone", correct: false },
            { id: "E", text: "Store memories", correct: false }
        ],
        explanation: "The NTS receives visceral afferents (taste, baroreceptors, chemoreceptors) and integrates autonomic reflexes (cardiovascular, respiratory, gastrointestinal). It's a critical relay for homeostatic control, working with the hypothalamus.",
        imageQuery: "Nucleus tractus solitarius"
    },
    {
        id: "C2_ANS_011",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "During a sympathetic stress response, which metabolic change occurs?",
        options: [
            { id: "A", text: "Increased glycogen synthesis", correct: false },
            { id: "B", text: "Decreased blood glucose", correct: false },
            { id: "C", text: "Increased glycolysis and blood glucose", correct: true },
            { id: "D", text: "Decreased metabolic rate", correct: false },
            { id: "E", text: "Increased insulin secretion", correct: false }
        ],
        explanation: "Sympathetic activation mobilizes energy: stimulates glycogenolysis and gluconeogenesis (raising blood glucose), increases lipolysis, and elevates metabolic rate. This provides fuel for 'fight-or-flight.' Insulin secretion is inhibited (α2 receptors on pancreatic β-cells).",
        imageQuery: "Sympathetic metabolic effects"
    },
    
    // LESSON 6: ELECTROPHYSIOLOGY INTEGRATION
    {
        id: "C2_INT_001",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "A patient with hyperkalemia (elevated extracellular K⁺) would be expected to have:",
        options: [
            { id: "A", text: "Hyperpolarized resting membrane potential", correct: false },
            { id: "B", text: "Depolarized resting membrane potential", correct: true },
            { id: "C", text: "No change in resting potential", correct: false },
            { id: "D", text: "Increased action potential amplitude", correct: false },
            { id: "E", text: "Faster conduction velocity", correct: false }
        ],
        explanation: "Elevated extracellular K⁺ decreases the K⁺ concentration gradient, making EK less negative (Nernst equation). Since resting potential approaches EK, the membrane depolarizes. Severe hyperkalemia can inactivate Na⁺ channels, preventing action potentials (cardiac arrhythmias).",
        imageQuery: "Hyperkalemia membrane potential"
    },
    {
        id: "C2_INT_002",
        chapter: 2,
        yield: "high",
        type: "multi",
        text: "A toxin blocks voltage-gated Ca²⁺ channels at a presynaptic terminal. Which processes would be impaired? Select all that apply.",
        options: [
            { id: "A", text: "Action potential propagation in the presynaptic axon", correct: false },
            { id: "B", text: "Neurotransmitter vesicle fusion and release", correct: true },
            { id: "C", text: "Postsynaptic receptor activation", correct: false },
            { id: "D", text: "Muscle contraction if this is a neuromuscular junction", correct: true },
            { id: "E", text: "Resting membrane potential maintenance", correct: false }
        ],
        explanation: "Blocking presynaptic Ca²⁺ channels prevents Ca²⁺ influx → no vesicle fusion → no neurotransmitter release (B). At neuromuscular junction, this prevents ACh release → no muscle contraction (D). Action potential propagation uses Na⁺/K⁺ channels (A unaffected). Postsynaptic receptors aren't directly affected, just not activated due to lack of transmitter.",
        imageQuery: "Calcium channel block presynaptic"
    },
    {
        id: "C2_INT_003",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "Local anesthetics like lidocaine work by:",
        options: [
            { id: "A", text: "Blocking K⁺ channels", correct: false },
            { id: "B", text: "Blocking voltage-gated Na⁺ channels", correct: true },
            { id: "C", text: "Enhancing GABA transmission", correct: false },
            { id: "D", text: "Blocking Ca²⁺ channels", correct: false },
            { id: "E", text: "Activating opioid receptors", correct: false }
        ],
        explanation: "Local anesthetics block voltage-gated Na⁺ channels, preventing action potential generation and propagation in sensory neurons, causing reversible loss of sensation. They preferentially affect small-diameter pain fibers (A-δ and C fibers).",
        imageQuery: "Lidocaine sodium channel block"
    },
    {
        id: "C2_INT_004",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "Hypocalcemia (low extracellular Ca²⁺) can cause spontaneous action potentials and tetany because:",
        options: [
            { id: "A", text: "Ca²⁺ blocks Na⁺ channels at rest", correct: false },
            { id: "B", text: "Low Ca²⁺ increases Na⁺ channel excitability, lowering threshold", correct: true },
            { id: "C", text: "Ca²⁺ is required for action potential generation", correct: false },
            { id: "D", text: "Low Ca²⁺ opens K⁺ channels", correct: false },
            { id: "E", text: "Ca²⁺ hyperpolarizes the membrane", correct: false }
        ],
        explanation: "Extracellular Ca²⁺ normally stabilizes voltage-gated Na⁺ channels, keeping them closed at rest. Low Ca²⁺ → increased Na⁺ channel excitability → spontaneous opening → depolarization → uncontrolled muscle contractions (tetany). This differs from tetanus (sustained contraction from high-frequency stimulation).",
        imageQuery: "Hypocalcemia tetany mechanism"
    },
    {
        id: "C2_INT_005",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "A drug that inhibits acetylcholinesterase would be expected to:",
        options: [
            { id: "A", text: "Decrease synaptic transmission at the neuromuscular junction", correct: false },
            { id: "B", text: "Prolong the duration of ACh in the synaptic cleft", correct: true },
            { id: "C", text: "Block nicotinic receptors", correct: false },
            { id: "D", text: "Cause muscle paralysis", correct: false },
            { id: "E", text: "Reduce muscle strength", correct: false }
        ],
        explanation: "Acetylcholinesterase inhibitors (e.g., neostigmine, pyridostigmine) prevent ACh breakdown, increasing its duration and concentration in the cleft. This enhances neuromuscular transmission, useful in myasthenia gravis. Excessive inhibition → overstimulation → fasciculations, then paralysis (cholinergic crisis).",
        imageQuery: "Acetylcholinesterase inhibitor"
    },
    {
        id: "C2_INT_006",
        chapter: 2,
        yield: "high",
        type: "multi",
        text: "Regarding neuromuscular transmission, which are accurate? Select all that apply.",
        options: [
            { id: "A", text: "ACh is released from presynaptic motor neuron terminals", correct: true },
            { id: "B", text: "Nicotinic receptors at the motor endplate are ionotropic", correct: true },
            { id: "C", text: "The endplate potential is normally suprathreshold", correct: true },
            { id: "D", text: "Muscle action potentials propagate bidirectionally from the endplate", correct: true },
            { id: "E", text: "One motor neuron innervates all fibers in a muscle", correct: false }
        ],
        explanation: "ACh release (A), nicotinic ionotropic receptors (B), and suprathreshold endplate potential (C) are correct. Muscle action potentials propagate in BOTH directions from the central endplate (D correct). One motor neuron innervates only a subset of muscle fibers forming one motor unit (E incorrect).",
        imageQuery: "Neuromuscular transmission"
    },
    {
        id: "C2_INT_007",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "A patient presents with muscle weakness that worsens with repeated use and improves with rest. Antibodies against which receptor are most likely present?",
        options: [
            { id: "A", text: "GABA receptors", correct: false },
            { id: "B", text: "Nicotinic acetylcholine receptors", correct: true },
            { id: "C", text: "Voltage-gated Ca²⁺ channels", correct: false },
            { id: "D", text: "Muscarinic receptors", correct: false },
            { id: "E", text: "NMDA receptors", correct: false }
        ],
        explanation: "This describes myasthenia gravis—autoantibodies against postsynaptic nicotinic AChRs at the neuromuscular junction reduce receptor number. Repeated stimulation depletes ACh, worsening transmission. Rest allows ACh resynthesis. Lambert-Eaton targets presynaptic Ca²⁺ channels (C).",
        imageQuery: "Myasthenia gravis mechanism"
    },
    {
        id: "C2_INT_008",
        chapter: 2,
        yield: "low",
        type: "single",
        text: "The chronaxie in strength-duration curves represents:",
        options: [
            { id: "A", text: "The minimum current to elicit an action potential with infinite duration", correct: false },
            { id: "B", text: "The duration required at twice the rheobase intensity", correct: true },
            { id: "C", text: "The absolute refractory period", correct: false },
            { id: "D", text: "The maximum firing frequency", correct: false },
            { id: "E", text: "The conduction velocity", correct: false }
        ],
        explanation: "Chronaxie is the stimulus duration needed at twice the rheobase current to reach threshold. It's a measure of tissue excitability. Rheobase is the minimum intensity with infinite duration (A). These concepts are used in cardiac pacing and nerve stimulation.",
        imageQuery: "Chronaxie rheobase"
    },
    {
        id: "C2_INT_009",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "During the relative refractory period of an action potential:",
        options: [
            { id: "A", text: "No stimulus can elicit another action potential", correct: false },
            { id: "B", text: "A stronger-than-normal stimulus can trigger an action potential", correct: true },
            { id: "C", text: "Na⁺ channels are completely inactivated", correct: false },
            { id: "D", text: "The membrane is at resting potential", correct: false },
            { id: "E", text: "K⁺ channels are all closed", correct: false }
        ],
        explanation: "During the relative refractory period (RRP, corresponds to afterhyperpolarization), some Na⁺ channels have recovered from inactivation but the membrane is hyperpolarized. A stronger stimulus can overcome this and trigger an action potential. In absolute refractory period, NO stimulus works.",
        imageQuery: "Relative refractory period"
    },
    {
        id: "C2_INT_010",
        chapter: 2,
        yield: "high",
        type: "single",
        text: "Which fiber type has the fastest conduction velocity?",
        options: [
            { id: "A", text: "Type C fibers (unmyelinated, small diameter)", correct: false },
            { id: "B", text: "Type A-α fibers (myelinated, large diameter)", correct: true },
            { id: "C", text: "Type A-δ fibers (myelinated, small diameter)", correct: false },
            { id: "D", text: "Type B fibers (lightly myelinated)", correct: false },
            { id: "E", text: "All have equal velocity", correct: false }
        ],
        explanation: "Conduction velocity increases with myelination and diameter. A-α fibers (motor neurons, proprioception) are large, heavily myelinated → fastest (70-120 m/s). C fibers (pain, autonomic) are unmyelinated, smallest → slowest (0.5-2 m/s). A-δ are intermediate.",
        imageQuery: "Nerve fiber conduction velocity"
    }
];

/* =========================================
   2. APPLICATION STATE
   ========================================= */
const app = {
    currentQuestions: [],
    currentIndex: 0,
    userAnswers: {}, 
    timer: null,
    timeRemaining: 900, 
    mode: null,
    
    // ================= INIT =================
    init: () => {
        app.loadStats();
        // Check local storage for persistent data
        if(!localStorage.getItem('physioRelearn')) {
            localStorage.setItem('physioRelearn', JSON.stringify({}));
        }
    },

    loadStats: () => {
        const best = localStorage.getItem('physioBestScore') || 0;
        document.getElementById('best-score').innerText = `${best}/20`;
        
        const relearnData = JSON.parse(localStorage.getItem('physioRelearn') || '{}');
        const count = Object.keys(relearnData).length;
        document.getElementById('relearn-count').innerText = count;
    },

    // ================= NAVIGATION =================
    showScreen: (screenId) => {
        document.querySelectorAll('.screen').forEach(s => {
            s.classList.remove('active');
            s.classList.add('hidden');
        });
        const el = document.getElementById(screenId);
        if(el) {
            el.classList.remove('hidden');
            el.classList.add('active');
        }
    },

    openModal: () => {
        document.getElementById('chapter-modal').classList.remove('hidden');
    },
    
    closeModal: () => {
        document.getElementById('chapter-modal').classList.add('hidden');
    },

    goHome: () => {
        clearInterval(app.timer);
        const timerEl = document.getElementById('global-timer');
        if(timerEl) timerEl.classList.add('hidden');
        app.loadStats();
        app.showScreen('home-screen');
    },

    // ================= SETUP QUIZ =================
    startSetup: (mode) => {
        app.mode = mode;
        const chapters = [...new Set(questionBank.map(q => q.chapter))];
        const list = document.getElementById('chapter-list');
        list.innerHTML = `
            <button class="chapter-btn" onclick="app.launchQuiz('all')">
                <strong>Mixed Chapters</strong> (Full Review)
            </button>
        `;
        chapters.forEach(ch => {
            list.innerHTML += `
                <button class="chapter-btn" onclick="app.launchQuiz(${ch})">
                    <strong>Chapter ${ch}</strong>
                </button>
            `;
        });
        app.openModal();
    },

    startRelearn: () => {
        app.mode = 'relearn';
        const relearnData = JSON.parse(localStorage.getItem('physioRelearn') || '{}');
        const ids = Object.keys(relearnData);
        
        if (ids.length === 0) {
            alert("Great job! No questions currently marked for re-learning.");
            return;
        }

        app.currentQuestions = questionBank.filter(q => ids.includes(q.id));
        app.currentQuestions.sort(() => Math.random() - 0.5);
        
        app.beginSession();
    },

    launchQuiz: (chapter) => {
        app.closeModal();
        let pool = questionBank;
        
        if (chapter !== 'all') {
            pool = pool.filter(q => q.chapter === chapter);
        }

        if (app.mode === 'exam') {
            const highYield = pool.filter(q => q.yield === 'high');
            const lowYield = pool.filter(q => q.yield === 'low');
            app.currentQuestions = [...highYield, ...lowYield].sort(() => Math.random() - 0.5).slice(0, 30);
        } else {
            app.currentQuestions = pool.sort(() => Math.random() - 0.5).slice(0, 15);
        }

        if (app.currentQuestions.length === 0) {
            alert("No questions available for this selection.");
            return;
        }

        app.beginSession();
    },

    beginSession: () => {
        app.currentIndex = 0;
        app.userAnswers = {};
        app.timeRemaining = 900; 
        
        const timerEl = document.getElementById('global-timer');
        if(timerEl) timerEl.classList.remove('hidden');
        
        app.startTimer();
        app.showScreen('quiz-screen');
        app.renderQuestion();
    },

    startTimer: () => {
        clearInterval(app.timer);
        const display = document.getElementById('global-timer');
        
        app.timer = setInterval(() => {
            app.timeRemaining--;
            const m = Math.floor(app.timeRemaining / 60);
            const s = app.timeRemaining % 60;
            display.innerText = `${m}:${s < 10 ? '0'+s : s}`;
            
            if (app.timeRemaining <= 0) {
                app.finishQuiz();
            }
        }, 1000);
    },

    // ================= RENDER QUIZ =================
    renderQuestion: () => {
        const q = app.currentQuestions[app.currentIndex];
        
        document.getElementById('q-tracker').innerText = `Q ${app.currentIndex + 1}/${app.currentQuestions.length}`;
        document.getElementById('progress-bar').style.width = `${((app.currentIndex) / app.currentQuestions.length) * 100}%`;
        document.getElementById('q-text').innerText = q.text;
        
        const badgeContainer = document.getElementById('q-badges');
        badgeContainer.innerHTML = `<span class="badge ${q.yield === 'high' ? 'high-yield' : 'low-yield'}">${q.yield === 'high' ? 'High Yield' : 'Low Yield'}</span>`;
        if (q.type === 'multi') {
            badgeContainer.innerHTML += ` <span class="badge" style="background:#eee;color:#333">Select All That Apply</span>`;
        }

        const container = document.getElementById('options-container');
        container.innerHTML = '';
        
        const displayOptions = [...q.options].sort(() => Math.random() - 0.5);
        
        displayOptions.forEach(opt => {
            const isSelected = (app.userAnswers[q.id] || []).includes(opt.id);
            container.innerHTML += `
                <button class="option-btn ${isSelected ? 'selected' : ''}" 
                    onclick="app.handleAnswer('${q.id}', '${opt.id}', '${q.type}')">
                    ${opt.text}
                </button>
            `;
        });
    },

    handleAnswer: (qId, optId, type) => {
        if (!app.userAnswers[qId]) app.userAnswers[qId] = [];

        if (type === 'single') {
            app.userAnswers[qId] = [optId];
        } else {
            const index = app.userAnswers[qId].indexOf(optId);
            if (index > -1) {
                app.userAnswers[qId].splice(index, 1);
            } else {
                app.userAnswers[qId].push(optId);
            }
        }
        app.renderQuestion(); 
    },

    nextQuestion: () => {
        if (app.currentIndex < app.currentQuestions.length - 1) {
            app.currentIndex++;
            app.renderQuestion();
        } else {
            app.finishQuiz();
        }
    },

    // ================= GRADING =================
    finishQuiz: () => {
        clearInterval(app.timer);
        
        let totalRawScore = 0;
        let maxRawScore = app.currentQuestions.length; 
        let relearnData = JSON.parse(localStorage.getItem('physioRelearn') || '{}');

        app.currentQuestions.forEach(q => {
            const userSelections = app.userAnswers[q.id] || [];
            const correctOptions = q.options.filter(o => o.correct).map(o => o.id);
            
            let qScore = 0;
            let isCorrect = false;
            
            if (q.type === 'single') {
                if (userSelections.length > 0 && correctOptions.includes(userSelections[0])) {
                    qScore = 1;
                    isCorrect = true;
                }
            } else {
                let correctHits = 0;
                let wrongHits = 0;
                
                userSelections.forEach(sel => {
                    if (correctOptions.includes(sel)) correctHits++;
                    else wrongHits++;
                });

                const weightPerCorrect = 1 / correctOptions.length;
                const penalty = 0.5;

                let rawCalc = (correctHits * weightPerCorrect) - (wrongHits * penalty);
                qScore = Math.max(0, rawCalc); 
                if (qScore === 1) isCorrect = true;
            }

            totalRawScore += qScore;

            if (!isCorrect) {
                relearnData[q.id] = (relearnData[q.id] || 0) + 1;
            } else {
                if (relearnData[q.id]) delete relearnData[q.id];
            }
        });

        localStorage.setItem('physioRelearn', JSON.stringify(relearnData));

        const scaledScore = Math.round((totalRawScore / maxRawScore) * 20);
        
        const oldBest = parseInt(localStorage.getItem('physioBestScore') || 0);
        if (scaledScore > oldBest) localStorage.setItem('physioBestScore', scaledScore);

        document.getElementById('final-score').innerText = scaledScore;
        
        const feedback = scaledScore >= 16 ? "Outstanding Medical Knowledge!" : 
                         scaledScore >= 12 ? "Good, but needs review." : 
                         "Time to hit the books!";
        document.getElementById('feedback-msg').innerText = feedback;

        app.showScreen('result-screen');
    },

    retakeQuiz: () => {
        app.beginSession();
    },

    // ================= REVIEW =================
    reviewQuiz: () => {
        app.showScreen('review-screen');
        const list = document.getElementById('review-list');
        list.innerHTML = '';

        app.currentQuestions.forEach((q, idx) => {
            const userSelections = app.userAnswers[q.id] || [];
            const correctIds = q.options.filter(o => o.correct).map(o => o.id);
            
            let isPerfect = false;
            if (q.type === 'single') {
                isPerfect = userSelections[0] === correctIds[0];
            } else {
                isPerfect = userSelections.length === correctIds.length && 
                            userSelections.every(val => correctIds.includes(val));
            }

            let optionsHTML = '';
            q.options.forEach(opt => {
                let statusClass = '';
                const selected = userSelections.includes(opt.id);
                
                if (opt.correct) statusClass = 'color: var(--success); font-weight:bold;'; 
                if (selected && !opt.correct) statusClass = 'color: var(--error); text-decoration: line-through;'; 

                optionsHTML += `<div style="${statusClass}">
                    ${selected ? '●' : '○'} ${opt.text} ${opt.correct ? '✓' : ''}
                </div>`;
            });

            list.innerHTML += `
                <div class="review-item ${isPerfect ? 'correct' : 'wrong'}">
                    <h4>${idx + 1}. ${q.text}</h4>
                    <div style="margin: 10px 0; padding-left:10px; border-left: 2px solid #eee;">
                        ${optionsHTML}
                    </div>
                    <div class="explanation">
                        <strong>Explanation:</strong> ${q.explanation}
                        <div class="image-trigger"></div>
                    </div>
                </div>
            `;
        });
    },

    showResults: () => {
        app.showScreen('result-screen');
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', app.init);