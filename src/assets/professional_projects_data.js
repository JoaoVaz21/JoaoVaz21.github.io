import profile_img from '../assets/profile_img.png'
import menu_close from '../assets/menu_close.svg'
import vr_intructor from './VrInstructor/thumbnail.png'
import vr_intructor_video from './VrInstructor/video.mp4'

import solitaireKitchen_thumbnail from './KitchenSolitaire/thumbnail.png'
import solitaireKitchen_01 from './KitchenSolitaire/01.png'
import solitaireKitchen_02 from './KitchenSolitaire/02.png'
import solitaireKitchen_03 from './KitchenSolitaire/03.png'
import solitaireKitchen_video from './KitchenSolitaire/video.mp4'
import bubbleShooter_01 from './BubbleShooter/01.png'
import bubbleShooter_02 from './BubbleShooter/02.png'
import bubbleShooter_03 from './BubbleShooter/03.png'
import bubbleShooter_04 from './BubbleShooter/04.png'
import bubbleShooter_05 from './BubbleShooter/05.png'
import bubbleShooter_video from './BubbleShooter/video.mp4'
import familyFeud_01 from './FamilyFeud/01.png'
import familyFeud_02 from './FamilyFeud/02.png'
import familyFeud_03 from './FamilyFeud/03.png'
import familyFeud_04 from './FamilyFeud/04.png'
import familyFeud_video from './FamilyFeud/video.mp4'
import wordWipe_01 from './WordWipe/01.png'
import wordWipe_02 from './WordWipe/02.png'
import wordWipe_03 from './WordWipe/03.png'
import wordWipe_04 from './WordWipe/04.png'
import wordWipe_video from './WordWipe/video.mp4'
import journeyMatch_01 from './JourneyMatch/01.png'
import journeyMatch_02 from './JourneyMatch/02.png'
import journeyMatch_03 from './JourneyMatch/03.png'
import journeyMatch_04 from './JourneyMatch/04.png'
import journeyMatch_video from './JourneyMatch/video.mp4'
const professional_projects_data = [{
    p_number: 1,
    p_name: "solitaire Kitchen",
    p_small_description: "A solitaire game in a kitchen",
    p_big_description: ["This is a HTML5 solitaire game based on the likes of Grand Harvest Solitaire.", 
        "It was developed for 5 months and it counts with 150+ levels, different level types and card types as well as boosts and hourly rewards.", 
        "It was made by a small team with only two developers and my focus was more on the gameplay features as well as in-game animations."
    ],
    p_image: solitaireKitchen_thumbnail,
    p_images: [
        { type: "video", src: solitaireKitchen_video },
        { type: "image", src: solitaireKitchen_01 },
        { type: "image", src: solitaireKitchen_02 },
        { type: "image", src: solitaireKitchen_03 }

    ],
    p_demo_link: "https://www.arkadium.com/games/solitaire-kitchen/",
},
{
    p_number: 2,
    p_name: "Journey Match 3D",
    p_small_description: "A match 3 game",
    p_big_description: ["Journey match is a match 3 game made in Unity. It started as a match 3 with mahjong tiles made for mobile first and then progressed to be a saga find and match 3 game for HTML5.",
        "With hundreds of levels and some power-ups added to the mix we have a recipe for hundres of hours of fun!",
        "In this project I was in a team with 3 software engineers and I focused on prototyping new features and powerups, doing the chest system creating and costumizing the analytics system of the game. This last one was customizable enough to have multiple analytic providers working at the same time."
    ],
    p_image: journeyMatch_01,
    p_images: [
        { type: "video", src: journeyMatch_video },
        { type: "image", src: journeyMatch_01 },
        { type: "image", src: journeyMatch_02 },
        { type: "image", src: journeyMatch_03 },
        { type: "image", src: journeyMatch_04 },


    ],
    p_demo_link: "https://www.arkadium.com/games/journey-match-3d/",
},
{
    p_number: 3,
    p_name: "Bubble shooter Nest",
    p_small_description: "A bubble shooting game",
    p_big_description: ["Bubble shooter is a classic genre loved by many. This particular version has been live for a long time and has a big base of players playing it everyday.",
    "My job on this game was to implement micro transations and power ups to the game. So we came up with 2 boosts, a lightning one that transforms the bubble into lightning and lets it pass throw bubbles and a melt one that melts ice bubbles. A revive was also made for when the user uses all his moves.",
    "After that the game was improved even more. In order to retain more users a internal framework was used to add both daily rewards and missions."],
    p_image: bubbleShooter_03,
    p_images: [
        { type: "video", src: bubbleShooter_video },
        { type: "image", src: bubbleShooter_01 },
        { type: "image", src: bubbleShooter_02 },
        { type: "image", src: bubbleShooter_03 },
        { type: "image", src: bubbleShooter_04 },
        { type: "image", src: bubbleShooter_05 },


    ],
    p_demo_link: "https://www.gamelab.com/games/bubble-shooter-nest",
},
{
    p_number: 4,
    p_name: "Word Wipe Nest",
    p_small_description: "A word finding",
    p_big_description: ["Word Wipe is a game where you need to find words on a grid in order to clear lines.",
    "My job on this game was to implement micro transations and power ups to the game. We came up with a revive that gives more time to the user as well as two boosts. A shuffle boost that takes all the letters on the grid and shuffles them around and a lookup boost that once turned on tells the user if, given a minimum of 3 words, he can still get a bigger word. A whole layout change of the game was also necessary since previously the game only had one boost, the bomb.",
    "After that the game was improved even more. In order to retain more users a internal framework was used to add daily rewards."
],
    p_image: wordWipe_03,
    p_images: [
        { type: "video", src: wordWipe_video },
        { type: "image", src: wordWipe_01 },
        { type: "image", src: wordWipe_02 },
        { type: "image", src: wordWipe_03 },
        { type: "image", src: wordWipe_04 },


    ],
    p_demo_link: "https://www.gamelab.com/games/word-wipe-nest",
},
{
    p_number: 5,
    p_name: "Family Feud",
    p_small_description: "A question game",
    p_big_description:["Family Feud is a game based on the hit show Family Feud. In this game needs to try to guess what x amount of people answered to a certain question. Give more correct answers than your opponent (and faster) and you will be the winner.",
        "My job on this game was to implement micro transations. For that a 'reveal' boost was made. This reveal boost allows the player to see the first letter of the most valuable hidden answer.",
        "An overall bugfixing and improvement of the game was also done."
    ],
    p_image: familyFeud_02,
    p_images: [
        { type: "video", src: familyFeud_video },
        { type: "image", src: familyFeud_01 },
        { type: "image", src: familyFeud_02 },
        { type: "image", src: familyFeud_03 },
        { type: "image", src: familyFeud_04 }

    ],
    p_demo_link: "https://www.arkadium.com/games/family-feud/",
},
{
    p_number: 6,
    p_name: "VR Instructor",
    p_small_description: "A virtual reality instructor",
    p_big_description: ["This project was done during my internish at FARO and it was my first Virtual Reality project and first use of the Unreal Engine.", 
        "The objective was to create some kind of training tool where FARO users could learn how to properly execute the needed workflows with FARO's hardware.", 
        "For that I designed and developed a VR application on UE4 that consisted on a series of tutorials that demonstrated teached the user how to execute the required workflow."

    ],
    p_image: vr_intructor,
    p_images: [
        { type: "video", src: vr_intructor_video },
    ],
},
]
export default professional_projects_data;