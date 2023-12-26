import React from 'react';
import consultantImg from '../public/assets/projects/consultant.png';
import travelImg from '../public/assets/projects/travel.png';
import bioskopImg from '../public/assets/projects/bioskop.png';
import movieImg from '../public/assets/projects/movie.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#ffdf00]">Proyek</p>
        <h2 className="py-4">Proyek Saya</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title="Landing Page Consultant" backgroundImg={consultantImg} projectUrl="/consultant" tech="bootstrap" />
          <ProjectItem title="Trip travel" backgroundImg={travelImg} projectUrl="/travel" tech="React JS" />
          <ProjectItem
            title='Bioskop'
            backgroundImg={bioskopImg}
            projectUrl='/bioskop'
            tech='React JS'

          />
          <ProjectItem
            title='Movie'
            backgroundImg={movieImg}
            projectUrl='/movie'
            tech='React JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
