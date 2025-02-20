const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const projects = [
    {
        title: "Velozy (SaaS Company)",
        description: "Website created for a SaaS company offering advanced solutions.",
        image: "chrome-capture-2025-0-24.png",
        category: "web"
    },
    {
        title: "SafeSpaceRwanda",
        description: "Collaborated with a co-founder to develop a mental health support page.",
        image: "logo 3.jpg",
        category: "web"
    },
    {
        title: "Maurizia Family Business",
        description: "Developed a page for a family business to showcase services and products.",
        image: "mauriza.jpg",
        category: "web"
    }
];

const projectList = document.querySelector('.project-list');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;
    projectList.appendChild(projectCard);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});
