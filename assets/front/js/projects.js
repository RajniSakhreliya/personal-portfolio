async function loadProjects() {
  const container = document.getElementById("projects-container");

  try {
    const response = await fetch("/assets/front/projects.json");
    const projects = await response.json();

    projects.forEach((project) => {
      const projectHTML = `
        <div class="col-sm-6 col-lg-4 m-15px-tb">
          <div class="feature-box">
            <div class="d-flex icon">
              <img src="${project.image}" alt="${project.title}" />
            </div>
            <div class="feature-content media-body">
              <a href="projects/project-details.html?id=${project.id}">
                <h5>${project.title}</h5>
              </a>
              <p
                style="
                  display: -webkit-box;
                  -webkit-line-clamp: 4;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                "
              >
                ${project.description}
              </p>
              <a
                href="projects/project-details.html?id=${project.id}"
                class="px-btn px-btn-theme mt-3"
                type="submit"
              >
                <span>Read More</span>
              </a>
            </div>
          </div>
        </div>
      `;

      container.innerHTML += projectHTML;
    });
  } catch (error) {
    console.error("Error loading projects:", error);
  }
}

// Load projects when the DOM is ready
document.addEventListener("DOMContentLoaded", loadProjects);
