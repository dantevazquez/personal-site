import collectSound from '../assets/collect.wav';
import eatingSound from '../assets/eating.mp3';
import stepSound from '../assets/step.wav';
import aboutImg from '../assets/about.png'
import resume from '../assets/resume.pdf'


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
			"I am currently a fourth-year student at UC San Diego studying Urban Planning, but my goal is to transition into a career in Software Development. I've refined my coding skills by earning an Associate's Degree in Computer Science from Saddleback College and completing a coding bootcamp at Fullstack Academy. Additionally, I am actively working on personal projects to stay up-to-date with new technologies and tools.",

		image: aboutImg,
		resume: resume,
	},

	projects: [
		{
			title: "Rotten Potatoes",
			description:
				"A movie review website where a user is view and write reviews on a catalog of over 10,000 movies. Implemented the frontend of this project using React-JS and the backend using Postgresql and Express JS",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://movie-reviews-n8mv.onrender.com",
		},

		{
			title: "Swell Calculator",
			description:
				"Created the frontend for a wave/swell forecast model used to assist forecasters. The forecaster input known data such as wind speed, fetch lengths and wind duration and is returned a model that can be used to determine the size of waves near shore",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://swellcalculator.netlify.app",
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
				"You're already viewing it, but feel free to check out the code! I created the homescreen without the use of a game engine using only React",
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
			link: "https://pokemon-deck-builder.onrender.com",
		},
		{
			title: "Destroy the Core",
			description:
				"Minecraft Plugin I made a while back inorder to teach myself how to code. The plugin is a minigame where players compete to break a block aka the core. First player to break the core x amount of times wins the game. The game keeps track of how many times a user has broken the core and rewards the winner with in game items ",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
			linkText: "View Project",
			link: "https://github.com/dantevazquez/DestroyTheCore",
		},

	
	],

	sounds: {
		eating: eatingSound,
		collect: collectSound,
		step: stepSound,
	}
};

export default INFO;
