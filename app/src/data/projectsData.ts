import type { ProjectItem } from 'src/models/project';

export const projectItems: ProjectItem[] = [
    {
    id: 1,
    title: "ft_transcendence",
    subtitle: "Social gaming platform featuring Pong and live chat, built as a Single Page Application",
    intro: "Full-stack Single Page Application developed by a five-member team as part of the 42 curriculum, implementing a real-time social gaming platform with integrated live chat.",
    image: "/img/portfolio/transcendence.jpg",
    description: "It provides JWT/OAuth authentication, user profiles, game statistics, matchmaking, tournaments, and a complete multiplayer system. Built with vanilla JavaScript, Django, and PostgreSQL, containerized with docker-compose, and served over HTTPS. The Pong game is rendered with Three.js using custom Blender models, supporting both local and online modes with optional gameplay modifiers. The UI is responsive and includes dark/light themes.",
    techLanguage: "JavaScript, Django/Python",
    techTools: "Single Page Application, RESTful API, WebSocket, Docker, PostgreSQL",
    github: "https://github.com/ysengoku/42-ft_transcendence"
  },
  {
    id: 2,
    title: "ft_irc",
    subtitle: "IRC-based Chat Server and Interactive Bot System",
    intro: "A collaborative project at 42 school in a team of three, inspired by IRC protocols.",
    image: "/img/portfolio/irc.jpg",
    description: "The project features a fully functional IRC server inspired by RFC1459, supporting private messaging, channel management, and user authentication. Additionally, an interactive bot was implemented to process user commands, while leveraging external API integrations for dynamic responses. This blend of functionality and humor brought a playful twist to the classic IRC experience, showcasing both technical skill and creative design.",
    techLanguage: "C++98 (no external libraries)",
    techTools: "Sockets, API calls",
    github: "https://github.com/faboussard/42-irc"
  },
  {
    id: 3,
    title: "Inception",
    subtitle: "Small multi-service infrastructure with Docker",
    intro: "A solo project at 42 school, focusing on creating a secure and scalable multi-service infrastructure.",
    image: "/img/portfolio/2.jpg",
    description: "This project explored the principles of containerization and service orchestration. Using Docker and Docker Compose, I built a secure multi-service architecture that integrates essential components such as databases and web servers. The goal was to design a lightweight yet robust infrastructure suitable for modern applications.",
    techLanguage: "",
    techTools: "Docker, Docker Compose",
    github: "https://github.com/ysengoku/42-Inception"
  },
  {
    id: 4,
    title: "Cub3D",
    subtitle: "Mini game inspired by Wolfenstein 3D",
    intro: "A duo project at 42 school, creating a 3D game using raycasting.",
    image: "/img/portfolio/3.jpg",
    description: "This project aimed to create a mini-game inspired by Wolfenstein 3D, using raycasting to generate 3D effects in a 2D world. We implemented efficient rendering techniques with MinilibX (42’s graphics library) and focused on delivering a seamless user experience with interactive elements, including mouse and keyboard controls, as well as door animations.",
    techLanguage: "C",
    techTools: "Raycasting, MinilibX (graphics library for 42)",
    github: "https://github.com/ysengoku/42-cub3d"
  },
  {
    id: 5,
    title: "Minishell",
    subtitle: "Implementation of a dynamic shell in C",
    intro: "First duo project at 42 school, implementing a dynamic shell",
    image: "/img/portfolio/4.jpg",
    description: "This project involved creating a dynamic shell in C, implementing features such as redirection, piping, signal handling, environment variable expansion, and essential builtins. It also focused on ensuring the shell was stable, with no segmentation faults or memory leaks.",
    techLanguage: "C",
    techTools: "Unix API, POSIX",
    github: "https://github.com/ysengoku/42-minishell"
  },
  {
    id: 6,
    title: "Harmony",
    subtitle: "iOS application prototype using the VMMV model",
    intro: "An iOS app prototype developed during the Apple Foundation Extended Program as part of a 5-person remote team",
    image: "/img/portfolio/5.jpg",
    description: "This iOS app prototype was developed in a fully remote team of five as part of the Apple Foundation Extended Program. The app is designed to foster safe communication in unfamiliar environments and encourage cross-cultural exchange. It features five main views: a news feed, community groups based on culture, cultural events, a chat feature, and a personal profile page. Additionally, we developed an online quiz to help users engage with and learn about different cultures.",
    techLanguage: "Swift, SwiftUI",
    techTools: "MVVM design pattern, UX/UI design",
    github: "https://github.com/ysengoku/iOSApp_AFPExtended-Harmony"
  },
    {
    id: 7,
    title: "ft_transcendence",
    subtitle: "Social gaming platform featuring Pong and live chat, built as a Single Page Application",
    intro: "Full-stack Single Page Application developed by a five-member team as part of the 42 curriculum, implementing a real-time social gaming platform with integrated live chat.",
    image: "/img/portfolio/transcendence.jpg",
    description: "It provides JWT/OAuth authentication, user profiles, game statistics, matchmaking, tournaments, and a complete multiplayer system. Built with vanilla JavaScript, Django, and PostgreSQL, containerized with docker-compose, and served over HTTPS. The Pong game is rendered with Three.js using custom Blender models, supporting both local and online modes with optional gameplay modifiers. The UI is responsive and includes dark/light themes.",
    techLanguage: "JavaScript, Django/Python",
    techTools: "Single Page Application, RESTful API, WebSocket, Docker, PostgreSQL",
    github: "https://github.com/ysengoku/42-ft_transcendence"
  },
  {
    id: 6,
    title: "Mobilix",
    subtitle: "iOS application prototype",
    intro: "First iOS app prototype developed as part of the Apple Foundation Program",
    image: "/img/portfolio/6.jpg",
    description: "Developed in a 4-person team during the Apple Foundation Program, Mobilix is an iOS app prototype designed to promote soft mobility. We implemented a system where users earn points by using partnered transportation services, with a map feature to locate and reserve available options nearby.",
    techLanguage: "Swift, SwiftUI",
    techTools: "UX/UI design",
    github: "https://github.com/ysengoku/iOSApp_AFP-Mobilix"
  }
];
