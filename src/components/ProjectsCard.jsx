import { useState } from 'react';
import { FaGithubSquare} from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectsCard = ({img, techUsed, desc,url, github, projectName, index}) => {
  const [readMore, setReadMore] = useState(false);
  const [readMoreTech, setReadMoreTech] = useState(false);

  return (
    <article className="big-project-card">

    <img className='project-image' src= {img}/>
    
    <div className="project-desc-container">
    
      <p className="project-name"><span>Project name:</span>{projectName}</p>
    
      <h5 className="technology-used"><span>Technologies used:</span> {readMoreTech? techUsed : `${techUsed.substring(0,20)}...`}
      <button className='info-btn-tech' onClick={() => setReadMoreTech(!readMoreTech)}>
          {readMoreTech ? 'show less' : '  read more'}
        </button>
      
      </h5>
    
      <p  className="project-details"><span>Project description:</span>
      {readMore? desc : `${desc.substring(0,150)}...`}
      <button className='info-btn' onClick={() => setReadMore(!readMore)}>
          {readMore ? 'show less' : '  read more'}
        </button>
      </p>
    
    <div className="project-links-host-container">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <TbWorldWww className='host-website'/>
      </a>
    
      <a href= {github} target="_blank" rel="noopener noreferrer">
        <FaGithubSquare className='github-code-base'/>
      </a>
    </div>
    </div>
       </article>
  )
}

export default ProjectsCard
