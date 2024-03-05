import collectSound from '../assets/collect.wav';
import eatingSound from '../assets/eating.mp3';
import stepSound from '../assets/step.wav';
import aboutImg from '../assets/about.png'

const INFO = {
	main: {
		title: "Dante Vazquez Portfolio",
		name: "Dante Vazquez",
		email: "dantevazquezrivera@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/dantevazquez",
		linkedin: "https://linkedin.com/in/dante-vazquez",
	},

	homepage: {
		title: "Dante Vazquez",
		description:
			"I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
	},

	about: {
		title: "I’m Dante Vazquez and I don't know what to write here",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing at in tellus integer. Cursus euismod quis viverra nibh cras pulvinar mattis. Sagittis eu volutpat odio facilisis mauris sit amet massa. Lorem sed risus ultricies tristique nulla aliquet. Orci phasellus egestas tellus rutrum tellus pellentesque. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. At erat pellentesque adipiscing commodo. Semper quis lectus nulla at volutpat diam ut. Sapien eget mi proin sed libero enim. At volutpat diam ut venenatis. Vestibulum morbi blandit cursus risus at ultrices. Ut ornare lectus sit amet est placerat in egestas. A lacus vestibulum sed arcu non odio euismod lacinia at. A erat nam at lectus urna duis. Tincidunt id aliquet risus feugiat. Donec ultrices tincidunt arcu non sodales neque sodales ut. Enim facilisis gravida neque convallis a cras semper auctor neque.",

		image: aboutImg,
	},

	projects: [
		{
			title: "Project 1",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 2",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 3",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 4",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Project 5",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},
	],

	sounds: {
		eating: eatingSound,
		collect: collectSound,
		step: stepSound,
	}
};

export default INFO;
