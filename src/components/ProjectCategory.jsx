import React from 'react';


const ProjectCategory = ({projectUniqueCategory, setProjectData}) => {
  console.log(projectUniqueCategory);
  return (
   <section className='project-btn-category-section'>
      <div className="project-btn-container">
        {projectUniqueCategory.map( (btnCategory, index) => <button className= {`btn ${btnCategory === projectUniqueCategory? 'active-btn': 'null'}`}
        key={btnCategory}
        onClick={() => setProjectData(btnCategory)}
        >
          {btnCategory}
          </button>
          )}
      </div>
   </section>
  )
}

export default ProjectCategory
