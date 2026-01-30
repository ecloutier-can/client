export interface MuscleData {
    slug: string;
    name: string;
    description: string;
    function: string;
    latin_name?: string;
    antagonist?: string;
    exercises: string[];
}

export const musclesDb: Record<string, MuscleData> = {
    chest: {
        slug: "chest",
        name: "Pectoraux",
        latin_name: "Pectoralis major",
        description: "Le grand pectoral est un muscle large et puissant en forme d'éventail qui recouvre la partie supérieure de la poitrine.",
        function: "Adduction horizontale, rotation interne et flexion de l'épaule.",
        antagonist: "Deltoïde postérieur, Trapèzes",
        exercises: ["Développé couché", "Écartés", "Pompes"]
    },
    abs: {
        slug: "abs",
        name: "Abdominaux",
        latin_name: "Rectus abdominis",
        description: "Le grand droit est le muscle superficiel de la paroi abdominale antérieure, responsable du 'six-pack'.",
        function: "Flexion du tronc (colonne vertébrale) et compression des viscères.",
        antagonist: "Érecteurs du rachis",
        exercises: ["Crunches", "Gainage", "Levés de jambes"]
    },
    quadriceps: {
        slug: "quadriceps",
        name: "Quadriceps",
        latin_name: "Quadriceps femoris",
        description: "Le groupe musculaire le plus volumineux du corps humain, situé à l'avant de la cuisse.",
        function: "Extension du genou et flexion de la hanche.",
        antagonist: "Ischio-jambiers",
        exercises: ["Squats", "Fentes", "Presse à cuisses"]
    },
    biceps: {
        slug: "biceps",
        name: "Biceps",
        latin_name: "Biceps brachii",
        description: "Muscle à deux chefs situé sur la face antérieure du bras.",
        function: "Flexion du coude et supination de l'avant-bras.",
        antagonist: "Triceps",
        exercises: ["Curl haltères", "Curl barre Z", "Tractions"]
    },
    triceps: {
        slug: "triceps",
        name: "Triceps",
        latin_name: "Triceps brachii",
        description: "Muscle à trois chefs situé sur la face postérieure du bras.",
        function: "Extension du coude.",
        antagonist: "Biceps",
        exercises: ["Extensions poulie", "Dips", "Barre au front"]
    },
    deltoids: {
        slug: "deltoids",
        name: "Deltoïdes",
        latin_name: "Deltoideus",
        description: "Muscle triangulaire qui recouvre l'articulation de l'épaule.",
        function: "Abduction de l'épaule, flexion et extension selon le faisceau.",
        antagonist: "Grand dorsal",
        exercises: ["Développé militaire", "Élévations latérales", "Oiseau"]
    },
    obliques: {
        slug: "obliques",
        name: "Obliques",
        latin_name: "Obliquus externus abdominis",
        description: "Muscles situés sur les côtés de l'abdomen.",
        function: "Rotation et inclinaison latérale du tronc.",
        antagonist: "Oblique opposé",
        exercises: ["Russian twists", "Flexions latérales", "Bicycle crunches"]
    },
    neck: {
        slug: "neck",
        name: "Cou",
        latin_name: "Sternocleidomastoideus",
        description: "Muscles supportant la tête et permettant sa mobilité.",
        function: "Flexion, rotation et inclinaison de la tête.",
        exercises: ["Isométrie du cou", "Flexions cervicales"]
    },
    trapezius: {
        slug: "trapezius",
        name: "Trapèzes",
        latin_name: "Trapezius",
        description: "Vaste muscle de la partie supérieure du dos en forme de trapèze.",
        function: "Élévation et rotation de l'omoplate, extension de la nuque.",
        exercises: ["Haussements d'épaules (Shrugs)", "Tirage visage (Facepulls)"]
    },
    adductors: {
        slug: "adductors",
        name: "Adducteurs",
        latin_name: "Adductor group",
        description: "Groupe de muscles situés à l'intérieur de la cuisse.",
        function: "Adduction de la hanche.",
        antagonist: "Abducteurs (Moyen fessier)",
        exercises: ["Machine adducteurs", "Fentes latérales"]
    },
    calves: {
        slug: "calves",
        name: "Mollets",
        latin_name: "Gastrocnemius & Soleus",
        description: "Muscles de la partie postérieure de la jambe.",
        function: "Flexion plantaire de la cheville.",
        antagonist: "Jambier antérieur",
        exercises: ["Extensions mollets debout", "Extensions mollets assis"]
    },
    forearm: {
        slug: "forearm",
        name: "Avant-bras",
        latin_name: "Brachioradialis & Flexors",
        description: "Muscles gérant les mouvements du poignet et des doigts.",
        function: "Flexion/extension du poignet et préhension.",
        exercises: ["Curl inversé", "Wrist curls", "Suspension à la barre"]
    },
    hamstring: {
        slug: "hamstring",
        name: "Ischio-jambiers",
        latin_name: "Biceps femoris, Semitendinosus",
        description: "Groupe musculaire à l'arrière de la cuisse.",
        function: "Flexion du genou et extension de la hanche.",
        antagonist: "Quadriceps",
        exercises: ["Leg curl", "Soulevé de terre roumain"]
    },
    gluteal: {
        slug: "gluteal",
        name: "Fessiers",
        latin_name: "Gluteus maximus",
        description: "Muscle le plus puissant, forme les fesses.",
        function: "Extension de la hanche.",
        antagonist: "Psoas",
        exercises: ["Hip thrust", "Squats", "Fentes"]
    },
    "upper-back": {
        slug: "upper-back",
        name: "Haut du dos",
        latin_name: "Latissimus dorsi & Rhomboids",
        description: "Inclut le grand dorsal et les rhomboïdes.",
        function: "Tirage des bras vers l'arrière et adduction des omoplates.",
        exercises: ["Tractions", "Rowing barre", "Tirage vertical"]
    },
    "lower-back": {
        slug: "lower-back",
        name: "Bas du dos",
        latin_name: "Erector spinae",
        description: "Muscles le long de la colonne vertébrale lombaire.",
        function: "Extension du tronc.",
        antagonist: "Abdominaux",
        exercises: ["Hyperextensions", "Soulevé de terre"]
    },
    tibialis: {
        slug: "tibialis",
        name: "Jambier antérieur",
        latin_name: "Tibialis anterior",
        description: "Muscle situé à l'avant de la jambe, le long du tibia.",
        function: "Dorsiflexion du pied.",
        antagonist: "Mollets",
        exercises: ["Tib réha", "Marche sur les talons"]
    },
    head: {
        slug: "head",
        name: "Tête",
        description: "Structure osseuse et musculaire de la tête.",
        function: "Soutien et protection des organes sensoriels.",
        exercises: []
    },
    hair: {
        slug: "hair",
        name: "Cheveux",
        description: "Phanères recouvrant le cuir chevelu.",
        function: "Protection thermique et sensorielle.",
        exercises: []
    },
    hands: {
        slug: "hands",
        name: "Mains",
        description: "Extrémités des membres supérieurs.",
        function: "Manipulation et préhension.",
        exercises: ["Farmer walk", "Grip training"]
    },
    feet: {
        slug: "feet",
        name: "Pieds",
        description: "Extrémités des membres inférieurs.",
        function: "Support du poids et locomotion.",
        exercises: []
    },
    ankles: {
        slug: "ankles",
        name: "Chevilles",
        description: "Articulation entre la jambe et le pied.",
        function: "Mobilité du pied.",
        exercises: ["Mobilité cheville"]
    },
    knees: {
        slug: "knees",
        name: "Genoux",
        description: "Articulation entre la cuisse et la jambe.",
        function: "Flexion/extension de la jambe.",
        exercises: []
    }
};
