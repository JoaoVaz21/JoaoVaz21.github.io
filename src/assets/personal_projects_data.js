import celestialnoid_thumbnail from './Celestialnoid/thumbnail.png'
import celestialnoid_image1 from './Celestialnoid/01.png'
import celestialnoid_image2 from './Celestialnoid/02.png'
import celestialnoid_image3 from './Celestialnoid/03.png'
import celestialnoid_image4 from './Celestialnoid/04.png'
import celestialnoid_image5 from './Celestialnoid/05.png'
import tnij_thumbnail from './TNIJ/thumbnail.png'
import tnij_image1 from './TNIJ/01.png'
import tnij_image2 from './TNIJ/02.png'
import tnij_image3 from './TNIJ/03.png'
import tnij_image4 from './TNIJ/04.png'
import tnij_image5 from './TNIJ/05.png'
import epicGazette_thumbnail from './EpicGazette/thumbnail.png'
import epicGazette_video from './EpicGazette/video.mp4'
import elfieMurderino_thumbnail from './ElfieMurderino/thumbnail.png'
import elfieMurderino_01 from './ElfieMurderino/01.png'
import elfieMurderino_02 from './ElfieMurderino/02.png'
import sketchLands_thumbnail from './SketchLands/thumbnail.png'
import sketchLands_01 from './SketchLands/01.png'
import sketchLands_02 from './SketchLands/02.png'
import sketchLands_03 from './SketchLands/03.png'
import arChess_thumbnail from './ARChess/thumbnail.png'
import arChess_AR from './ARChess/ar.mp4'
import arChess_Multiplayer from './ARChess/multiplayer.mp4'
import arChess_01 from './ARChess/01.png'
import arChess_02 from './ARChess/02.png'
import jackOfAllArms_thumbnail from './JackOfAllArms/thumbnail.png'
import jackOfAllArms_01 from './JackOfAllArms/01.png'
import jackOfAllArms_02 from './JackOfAllArms/02.png'
import jackOfAllArms_03 from './JackOfAllArms/03.png'


const personal_projects_data = [
    {
        p_number: 1,
        p_name: "Sketch Lands",
        p_small_description: "Draw your way to the goal!",
        p_big_description: ["Sketch lands is a small prototype of a 2d platform where you are provided with ink and can draw your own platforms.",
            "I've started by trying to do my own physics based movement controller, and when that was done I decided to check how to do dynamic meshes, and integrate that as a game mechanic.",
            "Then, after those features were prototype and developped, I was inspired by the sketches kids do on their school notebooks, and decided to do a game with that in mind for both level design and art.",
            "For this project I tried to go on a solo dev approach and do all the game design, programming and artwork by myself. Only the music did I use third party assets, but then changed a bit and integrated them in the game.",
        ],
        p_image: sketchLands_thumbnail,
        p_images: [
            { type: "image", src: sketchLands_01 },
            { type: "image", src: sketchLands_02 },
            { type: "image", src: sketchLands_03 },

        ],
        p_demo_link: "https://umaarvore.itch.io/sketchlands",
        p_source_code: "https://github.com/JoaoVaz21/Sketchlands"
    },
    {
        p_number: 2,
        p_name: "Epic Gazette",
        p_small_description: "An epic point and click newspapper",
        p_big_description: ["This was a project made for the Pizza Jam where we chose the theme 'Crime-Stoppers'.",
            "The concept was of a hero that could stop time for a few seconds, and so he would move every day objects to stop criminals. Those accomplishments would then appear on the local news, making the user a new unknown vigilante of the town.",
            "In each level the time would be stopped for a few seconds in order to complete the level user has to drag and drop the objects on the correct locations so that the criminals are detained.",
            "This project finished in 8th place and it was a very fun experience."
        ],
        p_image: epicGazette_thumbnail,
        p_images: [
            { type: "video", src: epicGazette_video },
        ],
        p_demo_link: "https://umaarvore.itch.io/epic-gazette",
        p_source_code: "https://github.com/JoaoVaz21/PizzaJam"
    },
    {
        p_number: 3,
        p_name: "Elfie Murderino",
        p_small_description: "Try to escape Santa's factory",
        p_big_description: ["This was a small project made for the Score space Jam in 48 hours.",
            "The rules of the Jam were that it had to be an arcade game we it had to integrate a scoreboard using the lootLocker Api.",
            "Since there was no theme but it was christmas, my team decided to do a simple escape game where you are an elf tired of the tirany inside of santa's factory.",
            "We took inspiration on games like 'the hardest game ever'. For this reason, the mechanics of the game are pretty straight forward, you just move around, but the way the levels are designed and the obstacles are set up, garantee a curve in challenge and fun."
        ],
        p_image: elfieMurderino_thumbnail,
        p_images: [
            { type: "image", src: elfieMurderino_01 },
            { type: "image", src: elfieMurderino_02 },
        ],
        p_demo_link: "https://umaarvore.itch.io/elfiemurderino",
        p_source_code: "https://github.com/JoaoVaz21/ScoreJam"
    },
    {
        p_number: 4,
        p_name: "AR Chess",
        p_small_description: "An AR multiplayer chess experience",
        p_big_description: ["AR chess was a small attempt to better understand both Unity online multiplayer systems and augmented reality.",
            "I've started by implemented a normal chess game, with all the rules and a simple AI that moved available pieces at random, just to validate the game states.",
            "Afterwards, it was time to implement the client and server logic. To keep things simple, one of the players also serves as the host.",
            "Lastly it was time to implement the AR, for this a new controller was made with some preparations steps before the actual game start, like finding a plane, and placing the board. Afterwards the game is ready to be played and it works just as before.",
        ],
        p_image: arChess_thumbnail,
        p_images: [
            { type: "video", src: arChess_Multiplayer },
            { type: "image", src: arChess_01 },
            { type: "video", src: arChess_AR },
            { type: "image", src: arChess_02 },
        ],
        p_source_code: "https://github.com/JoaoVaz21/ARChess"
    },
    {
        p_number: 5,
        p_name: "Jack of All Arms",
        p_small_description: "A hack and slash combo system prototype",
        p_big_description: [
            "Having Prince of Persia as a big influence, I wanted to create a system where there were multiple types of weapons each with it's own attacks and it was possible to mix and match the weapons in order to do new combos.",
            "For that, I created an easy way to create combos using a sequence of steps. Each step has a weapon types and attributes like damage and effects. It also has an index to easily identify the step and later connect it with it's corresponding animation.",
            "Jack of All Arms is a small prototype to demonstrate that system where you can see the use of a primary weapon, a sword, and two secondary weapons, axe and knife, that can either be thrown or used together with the sword to make different combos.",
        ],
        p_image: jackOfAllArms_thumbnail,
        p_images: [
            { type: "image", src: jackOfAllArms_01 },
            { type: "image", src: jackOfAllArms_02 },
            { type: "image", src: jackOfAllArms_03 },
        ],
        p_demo_link: "https://umaarvore.itch.io/jack-of-all-arms",
        p_source_code: "https://github.com/JoaoVaz21/Jack-Of-All-Arms"
    },
    {
        p_number: 6,
        p_name: "Celestialnoid",
        p_small_description: "A breakout clone with procedural generated levels.",
        p_big_description: ["My first published game!",
            "Wanting to create something from start to finish on Unity, I decided to do a breakout/arkanoid for Android devices.",
            "The key factor when developing this was to make it so the player would never get the sensation of repetion. With that in mind I thought of what would make this project different ... a level maker that would randonmly generate levels according with certain parameters. Everytime the player begins the game, he will get a totally different level. The same will happen when the player finishes the level, increasing the difficulty parameters with each level."
        ],
        p_image: celestialnoid_thumbnail,
        p_images: [
            { type: "image", src: celestialnoid_image1 },
            { type: "image", src: celestialnoid_image2 },
            { type: "image", src: celestialnoid_image3 },
            { type: "image", src: celestialnoid_image4 },
            { type: "image", src: celestialnoid_image5 },


        ],
        p_demo_link: "https://play.google.com/store/apps/details?id=com.JustAnotherGameDev.Celestialnoid",
        p_source_code: "https://github.com/JoaoVaz21/SuperArkanoid"
    },
    {
        p_number: 7,
        p_name: "Totally Not Indiana Jones",
        p_small_description: "A top down adventure prototype",
        p_big_description: ["My first game jam project! A few years ago a coleague contacted me to participate in a university game jam. I had never been in a game jam, and never used the technologies mandatory for that game jam: LUA and Pico-8, so I thought it would be a great idea to join :) ",
            "In this project we all did a bit of everything, level design, the sprites, and sounds, story writing and the programing itself. ",
            "In the end we decided to make a 2d top-down puzzle game  with two levels that the user would have to traverse and solve the traps and kill snakes, as well as a final boss.",
            "It wasn't a perfect game but everyone that tried it had a lot of fun and it was my first experience in a team creating a game."
        ],
        p_image: tnij_thumbnail,
        p_images: [
            { type: "image", src: tnij_image1 },
            { type: "image", src: tnij_image2 },
            { type: "image", src: tnij_image3 },
            { type: "image", src: tnij_image4 },
            { type: "image", src: tnij_image5 }

        ],
        p_source_code: "https://github.com/JoaoVaz21/Totally_Not_Indiana_Jones"
    },

]
export default personal_projects_data;