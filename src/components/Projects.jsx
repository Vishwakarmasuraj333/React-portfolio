import React from 'react';
import './Projects.css';

const projectList = [
  { id: 1, title: 'Portfolio Website', desc: 'A personal portfolio built with React.', image: 'https://storage.ko-fi.com/cdn/useruploads/display/d00cd9ec-c858-4976-bd15-1917b3ef2118_thumbnail.jpg', link: '#' },
  { id: 2, title: 'E-commerce App', desc: 'React app for online shopping.', image: 'https://tse4.mm.bing.net/th/id/OIP.6rMLJw5m3lWY4fdwBDxv-QHaEk?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3', link: '#' },
  { id: 3, title: 'Todo App', desc: 'Manage tasks efficiently with React.', image: 'https://mir-s3-cdn-cf.behance.net/projects/404/d449d187056783.Y3JvcCwxNDAwLDEwOTUsMCwyNw.jpg', link: '#' },
  { id: 4, title: 'Blog Platform', desc: 'A blog website using React and API.', image: 'https://www.wpbeginner.com/wp-content/uploads/2024/09/choose-best-blogging-platforms-og.png', link: '#' },
  { id: 5, title: 'Weather App', desc: 'Check weather in any city using API.', image: 'https://raw.githubusercontent.com/codestronaut/flutter-clima-weather-app/main/assets/preview.png', link: '#' },
  { id: 6, title: 'Chat App', desc: 'Real-time chat app using React & Firebase.', image: 'https://images.appypie.com/wp-content/uploads/2023/11/14131659/1-Best-Chat-Apps.jpg', link: '#' },
  { id: 7, title: 'Movie App', desc: 'Browse movies using React and TMDB API.', image: 'https://tse3.mm.bing.net/th/id/OIP.I3bX8tI79FhZqI0E3lrn8gHaFa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3', link: '#' },
  { id: 8, title: 'Calculator', desc: 'Simple calculator built with React.', image: 'https://i.ytimg.com/vi/kUGPKrl5eW0/maxresdefault.jpg', link: '#' },
];

function Projects() {
  return (
    <section className="projects" id="#Projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.link} className="btn" target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
