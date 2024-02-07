export const TAGS = {
    HTML: {
        id:1,
        name: "Html",
        class: "bg-red-500 ",
        icon: "Html5",
    },
    CSS: {
        id:2,
        name: "CSS",
        class: "bg-blue-500 ",
        icon: "Css",
    },
    JS: {
        id:3,
        name: "Javascript",
        class: "bg-yellow-400",
        icon: "Javascript",
    },
    ANGULAR: {
        id:4,
        name: "Angular",
        class: "bg-red-900 ",
        icon: "Angular",
    },
    PHP:{
        id:5,
        name: "Php",
        class: "bg-indigo-500 ",
        icon: "Php", 
    },
    SYMFONY:{
        id:6,
        name: "Symfony",
        class: "bg-green-500 ",
        icon: "Symfony",
    }
}


export const ProjectsData = [

    {
        id: 1,
        title: " Gestión y Seguimiento del Despacho de Fertilizantes - Diproagro C.A.",
        description: 'Diproagro C.A. es una empresa agropecuaria venezolana que usa un sistema web para gestionar el despacho de fertilizantes. El sistema web está hecho con PHP, Javascript, HTML y CSS, y fue desarrollado por un grupo de programadores, entre los que me encuentro.',
        technologies: [TAGS.HTML,TAGS.CSS,TAGS.JS,TAGS.PHP,TAGS.SYMFONY],
        image:"projects/DPA.webp",
        height:'md:h-16',
        github: '',
        link: ''
    },
    {
        id: 2,
        title: "Gestión y Seguimiento de Evaluaciones - Diproagro C.A.",
        cover: 'clavellinas/portada.png',
        photos: ["clavellinas/portada.png", "clavellinas/1.png", "clavellinas/2.png", "clavellinas/3.png", "clavellinas/4.png", "clavellinas/5.png"],
        description: 'Gestión y Seguimiento de Evaluaciones es un sistema web que evalúa y reporta el desempeño de los trabajadores de Diproagro C.A. El sistema web está hecho con PHP, Javascript, HTML y CSS. Desarrollé soluciones innovadoras para este sistema junto con mi equipo de trabajo.',
        technologies: [TAGS.HTML,TAGS.CSS,TAGS.JS,TAGS.PHP],
        image:"projects/EVAL.webp",
        height:'md:h-16',
        github: '',
        link: ''
    },
    {
        id: 3,
        title: "DIGITAL PARTNERS SOLUTIONS, C.A. - Emporium",
        cover: 'condesalud/portada.png',
        photos: ["condesalud/portada.png", "condesalud/1l.png", "condesalud/2l.png", "condesalud/3l.png"],
        description: 'Emporium es un sistema de e-commerce con landing page. Participé en la creación de soluciones de este sistema junto con el grupo DIGITAL PARTNERS SOLUTIONS, C.A. El sistema se adapta a diversos negocios y mercados, y está hecho con Angular y PHP.',
        technologies: [TAGS.HTML,TAGS.ANGULAR,TAGS.PHP,TAGS.SYMFONY],
        image:"projects/Emporium.webp",
        height:'md:h-auto',
        github: '',
        link: ''
    },
    {
        id: 4,
        title: "DIGITAL PARTNERS SOLUTIONS, C.A. - WAYÁ+",
        cover: 'condesalud/portada.png',
        photos: ["condesalud/portada.png", "condesalud/1l.png", "condesalud/2l.png", "condesalud/3l.png"],
        description: 'Wayá es un sistema de e-business B2B2C. Desarrollé este sistema junto con el grupo DIGITAL PARTNERS SOLUTIONS, C.A. Wayá cuenta con varios módulos que le dan una ventaja competitiva en el mercado online. Estuvo bajo mi cargo todas las soluciones frontend, usando Angular como framework.',
        technologies: [TAGS.HTML,TAGS.ANGULAR,TAGS.PHP],
        image:"projects/WAYA.webp",
        height:'md:h-auto',
        github: '',
        link: ''
    }
];

