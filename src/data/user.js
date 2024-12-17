import eatingSound from '../assets/eating.mp3';
import aboutImg from '../assets/about.png'
import resume from '../assets/resume.pdf'
import runSound from '../assets/run.ogg'

const INFO = {
	main: {
		title: "Dante Vazquez Portfolio",
		name: "Dante Vazquez",
		email: "dantevazquezrivera@gmail.com",
	},

	socials: {
		github: "https://github.com/dantevazquez",
		linkedin: "https://linkedin.com/in/dante-vazquez",
	},

	homepage: {
		title: "Dante Vazquez",
		description:
			"",
	},

	about: {
		title: "Hi! My name is Dante Vazquez",
		description:
			"I currently work as an Equipment Maintenance Technician at Google through Astreya, where I provide IT support and technical assistance. My goal is to transition into a career in Software Development. To achieve this, I earned an Associate's Degree in Computer Science from Saddleback College and completed a coding bootcamp at Fullstack Academy. I continue to enhance my coding skills by actively working on personal projects and staying up-to-date with the latest technologies and tools.",

		image: aboutImg,
		resume: resume,
	},

	projects: [

		{
			title: "Pocket Surf",
			description:
				"Co-Developed a mobile surfing game for IOS and Android in C# using the game engine Unity",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png",
			linkText: "View Project",
			link: "https://play.google.com/store/apps/details?id=com.DevsDevelop.PocketSurf",
		},
		{
			title: "Swell Calculator",
			description:
				"Ocean wave/swell forecasting tool built with React and MaterialUI",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://swellcalculator.netlify.app",
		},
		{
			title: "Rotten Potatoes",
			description:
				"A movie review website where a user is view and write reviews on a catalog of over 10,000 movies. Implemented the frontend of this project using React-JS and the backend using Postgresql and Express JS",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/dantevazquez/Movie-Reviews",
		},

		{
			title: "Yahtzee",
			description:
				"Recreated the game yahtzee using the C library raylib.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/cpp/cpp.png",
			linkText: "View Project",
			link: "https://github.com/dantevazquez/yahtzee",
		},

		{
			title: "Personal Website",
			description:
				"You're already viewing it, but feel free to check out the code!",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/dantevazquez/personal-site",
		},

		{
			title: "Pokemon Deck Builder",
			description:
				"Website where users are able to build pokemon decks and share them. This was a group project I helped make during my time at FullStack Academy. ",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/dantevazquez/pokemon-react",
		},
		{
			title: "Destroy the Core",
			description:
				"Minecraft mini-game plugin",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
			linkText: "View Project",
			link: "https://github.com/dantevazquez/DestroyTheCore",
		},

	
	],

	sounds: {
		eating: eatingSound,
		run: runSound,
	},

	collisionObjects: [
        {
            positions: [990, 1020],
            newPosition: 1000,
            dialogPage: 'about'
        },
        {
            positions: [1990, 2020],
            newPosition: 2000,
            dialogPage: 'projects'
        }
    ],
};

export default INFO;
