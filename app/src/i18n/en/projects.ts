export const projectsEn = {
  portfolio: {
    subtitle: 'Personal portfolio website showcasing projects and skills',
    intro:
      'Single Page Site designed to present my technical skills, projects, and professional experience in a clean and interactive interface.',
    description:
      'The portfolio features a responsive design, a multilingual interface (English, French, Japanese), and allows viewing previews of each project. It uses modern front-end technologies. Developed with Vue.js and TypeScript, it leverages Pinia for state management and Vue I18n for language switching, and is deployed on GitHub Pages.',
  },
  transcendence: {
    subtitle:
      'Social gaming platform featuring Pong and live chat, built as a Single Page Application',
    intro:
      'Full-stack Single Page Application developed by a five-member team as part of the 42 curriculum, implementing a real-time social gaming platform with integrated live chat.',
    description:
      'The platform provides JWT/OAuth authentication, user profiles, game statistics, matchmaking, tournaments, and a complete multiplayer system. The Pong game is rendered in 3D and supports both local and online modes, with optional gameplay modifiers. The interface is fully responsive and includes dark and light themes.',
  },
  cub3d: {
    subtitle: 'Mini game inspired by Wolfenstein 3D',
    intro: 'A duo project at 42 school, creating a 3D game using raycasting.',
    description:
      "This project aimed to create a mini-game inspired by Wolfenstein 3D, using raycasting to generate 3D effects in a 2D world. We implemented efficient rendering techniques with MinilibX (42's graphics library) and focused on delivering a seamless user experience with interactive elements, including mouse and keyboard controls, as well as door animations.",
  },
  camagru: {
    subtitle: 'Webcam photo-editing web app built on a custom MVC architecture',
    intro:
      'Photo-sharing web app built from scratch in PHP 8.5 with a custom MVC architecture and raw SQL.',
    description:
      'Users take a photo with their webcam or upload one, add stickers, text and filters, and share it in a public gallery where others can like and comment. The final image is composed on the server. The project also covers account management with email verification and password reset, protection against XSS and SQL injection through output escaping and prepared statements, and API documentation generated from PHPDoc comments.',
  },
  dockerInfra: {
    subtitle:
      'Multi-service Docker infrastructure, deployed to the cloud with Terraform and Ansible',
    intro: 'From Docker Compose on a local machine to a one-command cloud deployment.',
    description:
      'In Inception, WordPress, MariaDB and NGINX were each containerized from scratch and orchestrated with Docker Compose. Cloud-1 builds on it: Terraform provisions an AWS instance, and an Ansible playbook takes it from a fresh Ubuntu server to a running WordPress site in one command. The deployment is idempotent and survives reboots, secrets are kept in Ansible Vault, and only SSH, HTTP and HTTPS are exposed, with TLS.',
  },
  irc: {
    subtitle: 'IRC-based Chat Server and Interactive Bot System',
    intro: 'A collaborative project at 42 school in a team of three, inspired by IRC protocols.',
    description:
      'The project features a fully functional IRC server inspired by RFC1459, supporting private messaging, channel management, and user authentication. Additionally, an interactive bot was implemented to process user commands, while leveraging external API integrations for dynamic responses. This blend of functionality and humor brought a playful twist to the classic IRC experience, showcasing both technical skill and creative design.',
  },
  android: {
    subtitle: 'Two Android apps in Kotlin: a contact and SMS manager, and a 42 profile viewer',
    intro:
      'Two Android apps in Kotlin, built with two different approaches: one on the bare Android SDK, one with Jetpack Compose.',
    description:
      'ft_hangouts manages contacts and exchanges SMS with them, storing everything in a local SQLite database. It is built on the Android SDK only, without external libraries, to work directly with the activity lifecycle, system broadcasts, runtime permissions and intents. Swifty Companion looks up any 42 student through the 42 Intra API and displays their profile, level, projects and skills. Its interface is built with Jetpack Compose, and OAuth2 authentication, including token refresh, is handled transparently.',
  },
  ios: {
    subtitle:
      'Two iOS app prototypes in SwiftUI, from the Apple Foundation Program and Extended Program',
    intro:
      'Developed in teams during the Apple Foundation Program: Mobilix in a team of four, then Harmony in a fully remote team of five during the Extended Program.',
    description:
      'Mobilix, the first prototype, promotes soft mobility: users earn points by using partnered transportation services and can find and book nearby options on a map. Harmony, built with the MVVM pattern, fosters safe communication in unfamiliar environments and cross-cultural exchange. It features a news feed, culture-based community groups, cultural events, a chat and a profile page, along with an online quiz about different cultures.',
  },
  minishell: {
    subtitle: 'Implementation of a dynamic shell in C',
    intro: 'First duo project at 42 school, implementing a dynamic shell',
    description:
      'This project involved creating a dynamic shell in C, implementing features such as redirection, piping, signal handling, environment variable expansion, and essential builtins. It also focused on ensuring the shell was stable, with no segmentation faults or memory leaks.',
  },
  inception: {
    subtitle: 'Small multi-service infrastructure with Docker',
    intro:
      'A solo project at 42 school, focusing on creating a secure and scalable multi-service infrastructure.',
    description:
      'This project explored the principles of containerization and service orchestration. Using Docker and Docker Compose, I built a secure multi-service architecture that integrates essential components such as databases and web servers. The goal was to design a lightweight yet robust infrastructure suitable for modern applications.',
  },
  harmony: {
    subtitle: 'iOS application prototype using the VMMV model',
    intro:
      'An iOS app prototype developed during the Apple Foundation Extended Program as part of a 5-person remote team',
    description:
      'This iOS app prototype was developed in a fully remote team of five as part of the Apple Foundation Extended Program. The app is designed to foster safe communication in unfamiliar environments and encourage cross-cultural exchange. It features five main views: a news feed, community groups based on culture, cultural events, a chat feature, and a personal profile page. Additionally, we developed an online quiz to help users engage with and learn about different cultures.',
  },
  mobilix: {
    subtitle: 'iOS application prototype',
    intro: 'First iOS app prototype developed as part of the Apple Foundation Program',
    description:
      'Developed in a 4-person team during the Apple Foundation Program, Mobilix is an iOS app prototype designed to promote soft mobility. We implemented a system where users earn points by using partnered transportation services, with a map feature to locate and reserve available options nearby.',
  },
};
