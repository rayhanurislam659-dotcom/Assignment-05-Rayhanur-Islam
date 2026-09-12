const menuBtn = document.getElementById("menuBtn");
const navInner = document.querySelector(".nav-inner");
menuBtn.addEventListener("click", function () {
    navInner.classList.toggle("menu-open");
});
const technologies = [
    {
        name: "React",
        icon: "⚛",
        iconClass: "icon-react",
        badge: "Popular",
        category: "Frontend",
        level: "Beginner-Friendly",
        rating: "4.9",
        description: "A declarative, component-based JavaScript library for building modern user interfaces."
    },
    {
        name: "Vue.js",
        icon: "V",
        iconClass: "icon-vue",
        badge: "Versatile",
        category: "Frontend",
        level: "Beginner-Friendly",
        rating: "4.8",
        description: "An approachable, performant, and versatile framework for building web user interfaces."
    },
    {
        name: "Svelte",
        icon: "S",
        iconClass: "icon-svelte",
        badge: "Fast",
        category: "Frontend",
        level: "Intermediate",
        rating: "4.8",
        description: "Cybernetically enhanced web apps with compile-time reactivity."
    },
    {
        name: "Next.js",
        icon: "N",
        iconClass: "icon-next",
        badge: "",
        category: "Frontend",
        level: "Intermediate",
        rating: "4.9",
        description: "The React framework for full-stack web applications."
    },
    {
        name: "Node.js",
        icon: "JS",
        iconClass: "icon-node",
        badge: "Standard",
        category: "Backend",
        level: "Intermediate",
        rating: "4.8",
        description: "An asynchronous event-driven JavaScript runtime."
    },
    {
        name: "PostgreSQL",
        icon: "PG",
        iconClass: "icon-postgres",
        badge: "Top SQL",
        category: "Database",
        level: "Intermediate",
        rating: "4.9",
        description: "A powerful, open-source object-relational database system."
    },
    {
        name: "Redis",
        icon: "R",
        iconClass: "icon-redis",
        badge: "Cache",
        category: "Database",
        level: "Intermediate",
        rating: "4.8",
        description: "In-memory data structure store used as a high-speed database and cache."
    },
    {
        name: "JavaScript",
        icon: "JS",
        iconClass: "icon-js",
        badge: "Ubiquitous",
        category: "Language",
        level: "Beginner-Friendly",
        rating: "4.9",
        description: "The versatile scripting language powering dynamic behavior across the web."
    },
    {
        name: "TypeScript",
        icon: "TS",
        iconClass: "icon-ts",
        badge: "Essential",
        category: "Language",
        level: "Intermediate",
        rating: "4.9",
        description: "A strongly typed programming language that builds on JavaScript."
    },
    {
        name: "Java",
        icon: "☕",
        iconClass: "icon-java",
        badge: "Robust",
        category: "Language",
        level: "Intermediate",
        rating: "4.6",
        description: "A secure, object-oriented programming language."
    },
    {
        name: "Tailwind CSS",
        icon: "≈",
        iconClass: "icon-tailwind",
        badge: "Modern",
        category: "Styling",
        level: "Beginner-Friendly",
        rating: "4.9",
        description: "A utility-first CSS framework for building custom UI."
    },
    {
        name: "Docker",
        icon: "D",
        iconClass: "icon-docker",
        badge: "Containers",
        category: "Tooling",
        level: "Intermediate",
        rating: "4.9",
        description: "A platform designed to build, share, and run containerized applications."
    }
];

const techGrid = document.getElementById("techGrid");
const stackList = document.getElementById("stackList");
const selectedCount = document.getElementById("selectedCount");
const removeAll = document.getElementById("removeAll");

let selectedStack = [];

function renderTechnologies() {
    techGrid.innerHTML = "";
    technologies.forEach((tech) => {
        const card = document.createElement("article");
        card.className = "tech-card";
        const isSelected = selectedStack.some(
            item => item.name === tech.name
        );

        card.innerHTML = `
            <div class="card-top">

                <div class="tech-icon ${tech.iconClass}">
                    ${tech.icon}
                </div>
                ${
                    tech.badge
                        ? `<span class="badge">${tech.badge}</span>`
                        : ""
                }
            </div>

            <h3>${tech.name}</h3>

            <p>${tech.description}</p>

            <div class="card-info">
                <span>${tech.category}</span>
                <span>${tech.level}</span>
                <span class="rating">★ ${tech.rating}</span>
            </div>

            <button
                class="add-btn"
                data-name="${tech.name}"
                ${isSelected ? "disabled" : ""}
            >
                ${isSelected ? "Added to Stack" : "Add to Stack"}
            </button>
        `;

        techGrid.appendChild(card);
    });
}

function addToStack(name) {

    const tech = technologies.find(
        item => item.name === name
    );

    if (!tech) return;

    const alreadyAdded = selectedStack.some(
        item => item.name === tech.name
    );

    if (alreadyAdded) return;

    selectedStack.push(tech);

    renderTechnologies();
    renderStack();
}

function renderStack() {

    selectedCount.textContent = selectedStack.length;

    if (selectedStack.length === 0) {

        stackList.innerHTML = `
            <div class="empty-stack">
                No technologies selected yet.
            </div>
        `;

        return;
    }

    stackList.innerHTML = "";

    selectedStack.forEach((tech) => {

        const item = document.createElement("div");

        item.className = "stack-item";

        item.innerHTML = `
         <div class="stack-tech">

        <div class="tech-icon ${tech.iconClass}">
            ${tech.icon}
        </div>

        <div>
            <strong>${tech.name}</strong>
            <small>${tech.category}</small>
        </div>

    </div>

    <button
        class="stack-remove"
        data-name="${tech.name}"
        title="Remove"
    >
        &times;
    </button>
`;

        stackList.appendChild(item);
    });
}

techGrid.addEventListener("click", function(event) {

    if (event.target.classList.contains("add-btn")) {

        const name = event.target.dataset.name;

        addToStack(name);
    }

});

stackList.addEventListener("click", function(event) {

    if (event.target.classList.contains("stack-remove")) {

        const name = event.target.dataset.name;

        selectedStack = selectedStack.filter(
            tech => tech.name !== name
        );

        renderTechnologies();
        renderStack();
    }

});

removeAll.addEventListener("click", function() {

    if (selectedStack.length === 0) return;

    const confirmRemove = confirm(
        "Remove all selected technologies?"
    );

    if (!confirmRemove) return;
    selectedStack = [];
    renderTechnologies();
    renderStack();
});
renderTechnologies();
renderStack();