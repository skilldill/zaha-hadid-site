export const interiorDesignState = {
    query: "",
    designs: [
        {
            name: "Il Makiage Pavilion",
            place: "New York City, USA",
            poster: require("../../assets/projects/interiorDesign/makiage.png"),
            additional: {
                poster: require("../../assets/projects/interiorDesign/makiage/poster.png"),
                photos: [
                    require("../../assets/projects/interiorDesign/makiage/photo_1.png"),
                    require("../../assets/projects/interiorDesign/makiage/photo_2.png"),
                    require("../../assets/projects/interiorDesign/makiage/photo_3.png")
                ],
                description: `Il Makiage’s proprietary formulations are the foundation of an 800-piece makeup collection created with uncompromising attention to detail.
                “The brand’s distinctive DNA celebrates intelligent, strong, confident women. We spent the last five years developing products that would live up to her high standards.” explains Oran Holtzman, the company’s co-founder and CEO.
                 Il Makiage has launched the collection with a pavilion at 490 Broadway by Zaha Hadid Architects that is informed by the label’s characteristically bold graphic identity.`,
            }
        },
        {
            name: "Stuart Weitzman Flagship Store",
            place: "Milan, Italy",
            poster: require("../../assets/projects/interiorDesign/flagship_store.png")
        },
        {
            name: "Serpentine Sackler Gallery",
            place: "Kensington Gardens, London, UK",
            poster: require("../../assets/projects/interiorDesign/serpentine_gallery.png")
        },
        {
            name: "Neil Barrett Flagship Store",
            place: "Tokyo, Japan",
            poster: require("../../assets/projects/interiorDesign/neil_barret.png")
        }
    ]
}