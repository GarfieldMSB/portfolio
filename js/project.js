const contenedorProyectos = document.querySelector('.container-projects')


const projects = [
    {
        title: 'Login',
        github: 'https://github.com/GarfieldMSB/login-frontend',
        githubPages: 'https://garfieldmsb.github.io/login-frontend/',
        description: 'Aplicacion de autenticacion para entrar a aplicacion con rutas publicas y privadas',
        technologies: '',
        pathImg: 'img/login.png',
        altImg: 'Proyecto login'
    },
    {
        title: 'Administrador de citas veterinaria',
        github: 'https://github.com/GarfieldMSB/login-frontend',
        githubPages: 'https://garfieldmsb.github.io/login-frontend/',
        description: 'Aplicacion para agregar, editar y eliminar citas de veterinaria',
        technologies: '',
        pathImg: 'img/administradorCitas.png',
        altImg: 'Proyecto administrador de citas veterinaria'
    }
]

const project = () => {
    document.addEventListener('DOMContentLoaded', printProjets(projects));
}

const printProjets = (projects) => {

    //Iterar sobre los proyectos existentes e insertar en el html
    projects.map(project => {
        const {title, github, githubPages, description, technologies, pathImg, altImg} = project;

        // Crear card que contiene el proyecto
        const cardProyect = document.createElement('div')
        cardProyect.classList.add('card');
        cardProyect.innerHTML = `
            <div class="card-img">
                <img src="${pathImg}" alt="${altImg}"></a>
            </div>
            <div class="card-title">
                <h2>${title}</h2>
            </div>
            <div class="card-description">
                <p>${description}</p>
            </div>
            <div class='card-footer'>
                <div class="card-btn-container">
                    <a href="${githubPages}" class="card-btn">
                        <i class="fa-solid fa-link fa-xl"></i>
                    </a>
                    <a href="${github}" class="card-btn">
                        <i class="fa-brands fa-github fa-xl"></i>
                    </a>
                </div>
            </div>
        `
        // Insertar proyecto en el html
        contenedorProyectos.appendChild(cardProyect)


    });
};


export default project;