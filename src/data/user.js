import eatingSound from '../assets/eating.mp3';
import aboutImg from '../assets/about.png'
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
			"I'm a software developer. I started my career working at Astreya where I was contracted to do IT work at Google. I have since transitioned to running my business careysites.com, where I create websites and host them.",

		image: aboutImg,
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
			title: "Restaurant Online Ordering",
			description:
				"App that allows a restaurant owner to set a menu and receive orders and payments via Stripe. App is also bundled with a in-restaurant order receiver which can be shown upon request.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://sparkly-llama-fc8a48.netlify.app/",
		},
		{
			title: "Yahtzee",
			description:
				"Recreated the game yahtzee using the C library raylib.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/cpp/cpp.png",
			linkText: "View Project (Not live. No money to host)",
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
			title: "Destroy the Core",
			description:
				"Minecraft mini-game plugin",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
			linkText: "View Project (Not live. No money to host)",
			link: "https://github.com/dantevazquez/DestroyTheCore",
		},
	],

	sounds: {
		eating: eatingSound,
		run: runSound,
	},

	collisionObjects: [
		{
			positions: [1490, 1520],
			newPosition: 1500,
			dialogPage: 'about'
		},
		{
			positions: [2490, 2520],
			newPosition: 2500,
			dialogPage: 'projects'
		}
	],
};

export default INFO;
