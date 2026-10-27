export const projectsFr = {
  portfolio: {
    subtitle: 'Site portfolio personnel présentant projets et compétences',
    intro:
      'Single Page Site conçu pour présenter mes compétences techniques, mes projets et mes expériences professionnelles avec une interface claire et interactive.',
    description:
      'Le portfolio propose un design responsive, une interface multilingue (anglais, français et japonais), et permet de consulter les aperçus de chaque projet. Il intègre des technologies modernes front-end. Il est développé avec Vue.js et TypeScript, utilise Pinia pour la gestion d’état et Vue I18n pour la gestion des langues. Déployé sur GitHub Pages.',
  },
  transcendence: {
    subtitle:
      'Plateforme de jeu social avec Pong et chat en temps réel, développée en Single Page Application',
    intro:
      'Application full-stack développée par une équipe de cinq personnes dans le cadre du cursus 42, mettant en œuvre une plateforme de jeu social en temps réel avec chat intégré.',
    description:
      'La plateforme propose une authentification JWT/OAuth, des profils utilisateurs, des statistiques de jeu, du matchmaking, des tournois et un système multijoueur complet. Le jeu Pong est rendu en 3D et jouable en modes local et en ligne, avec des modificateurs de gameplay optionnels. L’interface est responsive et propose des thèmes clair et sombre.',
  },
  cub3d: {
    subtitle: 'Mini-jeu inspiré de Wolfenstein 3D',
    intro: 'Projet en binôme à 42, consistant à créer un jeu 3D basé sur le raycasting.',
    description:
      'Le but était de développer un mini-jeu inspiré de Wolfenstein 3D en utilisant le raycasting pour générer un rendu 3D à partir d’un environnement 2D. Le projet s’appuie sur MinilibX (bibliothèque graphique de 42) et inclut des interactions complètes via clavier et souris, ainsi que des animations de portes.',
  },
  camagru: {
    subtitle:
      'Application web de retouche photo par webcam, basée sur une architecture MVC sans framework',
    intro:
      'Application de retouche et partage de photos avec une architecture MVC sans framework et des requêtes SQL natives',
    description:
      "L'utilisateur prend une photo avec sa webcam ou en importe une, ajoute stickers, texte et filtres, puis la partage dans une galerie publique où les autres utilisateurs peuvent aimer et commenter. L'image finale est composée côté serveur. Le projet comprend aussi la gestion des comptes avec vérification par e-mail et réinitialisation du mot de passe, la protection contre les attaques XSS et les injections SQL grâce à l'échappement des sorties et aux requêtes préparées, ainsi qu'une documentation d'API générée à partir des commentaires PHPDoc.",
  },
  dockerInfra: {
    subtitle:
      'Infrastructure Docker multi-services, déployée dans le cloud avec Terraform et Ansible',
    intro: 'Conteneurisation avec Docker et déploiement automatisé sur AWS ',
    description:
      "Dans Inception, WordPress, MariaDB et NGINX ont chacun été conteneurisés de zéro et orchestrés avec Docker Compose. Cloud-1 prolonge ce travail : Terraform provisionne une instance AWS, puis un playbook Ansible amène un serveur Ubuntu vierge jusqu'à un site WordPress fonctionnel, en une seule commande. Le déploiement est idempotent et résiste aux redémarrages, les secrets sont stockés dans Ansible Vault, et seuls SSH, HTTP et HTTPS sont exposés, avec TLS.",
  },
  irc: {
    subtitle: 'Serveur de chat IRC et système de bot interactif',
    intro: 'Projet collaboratif à 42, réalisé en équipe de trois, inspiré des protocoles IRC.',
    description:
      'Le projet comprend un serveur IRC pleinement fonctionnel inspiré de la RFC1459, avec messagerie privée, gestion des canaux et authentification des utilisateurs. Un bot interactif a également été développé pour traiter des commandes utilisateurs et exploiter des API externes afin de générer des réponses dynamiques, apportant une dimension ludique au projet.',
  },
  android: {
    subtitle:
      'Deux applications Android en Kotlin : gestion de contacts et SMS, et consultation de profils 42',
    intro:
      'Deux applications Android en Kotlin, développées selon deux approches différentes : une sur le SDK Android seul, une autre avec Jetpack Compose',
    description:
      "ft_hangouts permet de gérer des contacts et d'échanger des SMS avec eux, toutes les données étant stockées dans une base SQLite locale. L'application repose uniquement sur le SDK Android, sans bibliothèque externe, afin de travailler directement avec le cycle de vie des activités, les broadcasts système, les permissions à l'exécution et les intents. Swifty Companion recherche n'importe quel étudiant de 42 via l'API Intra et affiche son profil, son niveau, ses projets et ses compétences. Son interface est construite avec Jetpack Compose, et l'authentification OAuth2, y compris le renouvellement du jeton, est gérée de façon transparente.",
  },
  ios: {
    subtitle:
      "Deux prototypes d'applications iOS en SwiftUI, issus de l'Apple Foundation Program et l'Extended Program",
    intro:
      "Développés en équipe lors de l'Apple Foundation Program : Mobilix en équipe de quatre, puis Harmony au sein d'une équipe en distanciel de cinq personnes lors de l'Extended Program.",
    description:
      "Mobilix, le premier prototype, vise à promouvoir la mobilité douce : l'utilisation de services de transport partenaires rapporte des points, et une carte permet de localiser et réserver les options disponibles à proximité. Harmony, construit selon l'architecture MVVM, favorise une communication sécurisée dans des environnements inconnus et les échanges interculturels. L'application comprend un fil d'actualité, des groupes communautaires par culture, des événements culturels, une messagerie et un profil, ainsi qu'un quiz en ligne sur différentes cultures.",
  },
  minishell: {
    subtitle: 'Implémentation d’un shell dynamique en C',
    intro: 'Premier projet en binôme à 42, visant à implémenter un shell dynamique.',
    description:
      'Ce projet consiste à développer un shell en C intégrant la redirection, le piping, la gestion des signaux, l’expansion des variables d’environnement et les commandes internes essentielles, avec une attention particulière portée à la stabilité et à l’absence de fuites mémoire.',
  },
  inception: {
    subtitle: 'Infrastructure multi-services légère avec Docker',
    intro:
      'Projet solo à 42, axé sur la création d’une infrastructure multi-services sécurisée et scalable.',
    description:
      'Ce projet explore les principes de la conteneurisation et de l’orchestration de services. À l’aide de Docker et Docker Compose, une architecture multi-services sécurisée intégrant bases de données et serveurs web a été conçue, avec pour objectif une infrastructure légère et robuste adaptée aux applications modernes.',
  },
  harmony: {
    subtitle: 'Prototype d’application iOS utilisant le modèle MVVM',
    intro:
      'Prototype d’application iOS développé lors de l’Apple Foundation Extended Program au sein d’une équipe distante de cinq personnes.',
    description:
      'Ce prototype vise à favoriser une communication sécurisée dans des environnements inconnus et à encourager les échanges interculturels. L’application comprend cinq vues principales : fil d’actualité, groupes communautaires par culture, événements culturels, messagerie et profil personnel. Un quiz en ligne a également été développé pour stimuler l’engagement et l’apprentissage culturel.',
  },
  mobilix: {
    subtitle: 'Prototype d’application iOS',
    intro:
      'Premier prototype d’application iOS développé dans le cadre de l’Apple Foundation Program.',
    description:
      'Développée en équipe de quatre, Mobilix est une application iOS visant à promouvoir la mobilité douce. Elle intègre un système de points récompensant l’utilisation de services de transport partenaires, ainsi qu’une carte permettant de localiser et réserver les options disponibles à proximité.',
  },
};
