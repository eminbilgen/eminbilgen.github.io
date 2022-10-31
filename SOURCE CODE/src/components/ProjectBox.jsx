import React from 'react'
function ProjectBox(url, title, img) {
  return (
    <a href={url}>
        <h1>
            {title}
        </h1>
        <img alt="Project Image" src={img}/>
    </a>
  )
}

export default ProjectBox