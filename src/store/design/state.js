export const designState = {
    query: "",
    designs: [
        {
            name: "Cirrus",
            picture: require("../../assets/projects/design/cirrus.png"),
            place: "Cincinnati, USA",
            additional: {
                description: "Cirrus was installed five years after the completion of the seminal Lois & Richard Rosenthal Center for Contemporary Art in Cincinnati. Guiding the flow of circulation around the suspended galleries, its striated articulations unravel from the wall to the ground. The resulting series of voids give the sculpture its structure and define niches for sitting, reclining, leaning or lying.",
                poster: require('../../assets/projects/design/cirrus/poster.png'),
                photoMiddle: require('../../assets/projects/design/cirrus/photo1.png'),
                photoBottom: require('../../assets/projects/design/cirrus/photo2.png'),
                coordinates: [
                    'Cincinnati, USA',
                    'Lois & Richard Rosenthal Center',
                    'for Contemporary Art'
                ]
            }
        },
        {
            name: "Aura-Villa Malcontenta",
            picture: require("../../assets/projects/design/aura.png"),
            place: "Venice, Italy"
        },
        {
            name: "Bench",
            picture: require("../../assets/projects/design/bench.png"),
            place: "London, United Kingdom"
        },
        {
            name: "Aqua at Dover Street Market",
            picture: require("../../assets/projects/design/aqua.png"),
            place: "London, United Kingdom"
        }
    ]
}