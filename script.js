const API = "/projects";

// 📥 Load projects
async function loadProjects() {
    const res = await fetch(API);
    const data = await res.json();

    const container = document.getElementById("projects");
    container.innerHTML = "";

    data.forEach(p => {
        container.innerHTML += `
            <div class="project">
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                
            </div>
        `;
    });
}

//

// 🚀 Initial load
loadProjects();