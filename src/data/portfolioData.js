const portafolioData = [
  {
    imgSrc: "/preview/template.png",
    titulo: "HSK orientation women",
    skills: [], //"React", "StyledComponents"
    descripcion:
      "Développement d'un système intelligent pour l'orientation scolaire et professionnelle des jeunes filles",
    demoURL: "#",
    repoURL: "#",
    anim: "fade-right",
  },
  {
    imgSrc: "/preview/template.png",
    titulo: "CDTIC Stage",
    skills: [],
    descripcion: "Plateforme de gestion de stage au CDTIC",
    demoURL: "#",
    repoURL: "#",
    anim: "fade-up",
  },
  // {
  //   imgSrc: "/preview/template.png",
  //   titulo: "Woconnex",
  //   skills: [],
  //   descripcion:
  //     "Plateforme de mise en valeur des talents chez la jeunes fille developper lors du CITS",
  //   demoURL: "#",
  //   repoURL: "#",
  //   anim: "fade-down",
  // },
  // {
  //   imgSrc: "/preview/template.png",
  //   titulo: "Anedal",
  //   skills: [],
  //   descripcion:
  //     "Plateforme de e-learning pour la communauté developper lors du hachathon ",
  //   demoURL: "#",
  //   repoURL: "#",
  //   anim: "fade-up",
  // },
  // {
  //   imgSrc:
  //     "https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100",
  //   titulo: "Alura Geek",
  //   skills: ["JavaScript", "CSS"],
  //   descripcion: "Final project for the One Oracle Next Education Program. Educational programming video website demonstrating CRUD requests.",
  //   demoURL: "https://alura-geek-ruddy.vercel.app/",
  //   repoURL: "https://github.com/SofiDevO/alura-geek",
  //   anim: "fade-up",
  // },
  // {
  //   imgSrc:
  //     "https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100",
  //   titulo: "React ORG",
  //   skills: ["React", "CSS"],
  //   descripcion: "Final project for the One Oracle Next Education Program. Educational programming video website demonstrating CRUD requests.",
  //   demoURL: "https://react-org-delta.vercel.app/",
  //   repoURL: "https://github.com/SofiDevO/react-org",
  //   anim: "fade-left",
  // },
  // {
  //   imgSrc:
  //     "https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100",
  //   titulo: "My Portfolio",
  //   skills: ["Astro", "React", "JavaScript"],
  //   descripcion: "Final project for the One Oracle Next Education Program. Educational programming video website demonstrating CRUD requests.",
  //   demoURL: "https://sofidev-portfolio-astro-delta.vercel.app/",
  //   repoURL: "https://github.com/SofiDevO/sofidev-portfolio-astro",
  //   anim: "fade-right",
  // },
  // {
  //   imgSrc:
  //     "https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100",
  //   titulo: "Eco Store",
  //   skills: ["Sass", "JavaScript"],
  //   descripcion: "Made with sass for the,Sass fundamentals course",
  //   demoURL: "https://sofidevo.github.io/eco-store-sass/",
  //   repoURL: "https://github.com/SofiDevO/eco-store-sass",
  //   anim: "fade-up",
  // },
  // {
  //   imgSrc:
  //     "https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100",
  //   titulo: "fruto & Fruta",
  //   skills: ["Bootstrap", "JavaScript"],
  //   descripcion: "Made with Bootstrap for the, Bootstrap  course",
  //   demoURL: "https://sofidevo.github.io/bootstrap-curso/",
  //   repoURL: "https://github.com/SofiDevO/bootstrap-curso",
  //   anim: "fade-left",
  // },

  // {
  //   imgSrc:
  //     "https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100",
  //   titulo: "Message Encryptor",
  //   skills: ["JavaScript", "CSS"],
  //   descripcion:
  //     "Incididunt amet proident id elit id excepteur anim ullamco cillum eiusmod esse consequat veniam. Eu reprehenderit quis deserunt ea non deserunt dolor consequat fugiat. \n\n Consectetur deserunt dolor do dolore occaecat reprehenderit ipsum ex.",
  //   demoURL: "https://sofidevo.github.io/encriptador-mensajes/",
  //   repoURL: "https://github.com/SofiDevO/encriptador-mensajes",
  //   anim: "fade-up",
  // },
];

const skillIcons = {
  JavaScript: "skill-icons:javascript",
  React: "skill-icons:react-dark",
  Astro: "skill-icons:astro",
  CSS: "skill-icons:css",
  Sass: "skill-icons:sass",
  StyledComponents: "skill-icons:styledcomponents",
  Bootstrap: "devicon:bootstrap",
  /*  Tailwind: "skill-icons:tailwindcss-dark", */
};
const skillsIconsMapped = portafolioData.map((item) => {
  return {
    ...item,
    skills: item.skills.map((skiil) => skillIcons[skiil]),
  };
});

export { portafolioData, skillsIconsMapped };
