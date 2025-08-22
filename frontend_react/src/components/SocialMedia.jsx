import React from 'react'

import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
const SocialMedia = () => {
  return (
    <div className='app__social'>
       <div>
        <a href="https://github.com/najibullah-platforms" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/najibullah-platforms-3b47b8373/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.upwork.com/nx/create-profile/resume-import" target="_blank" rel="noopener noreferrer">
          <SiUpwork />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
