import React from 'react'
import ErrorPoster from "../Assets/errorpage.svg"
import { Link } from 'react-router-dom'
function ErrorPage() {
  return (
    <div className='error-poster-container'>
      <img src={ErrorPoster} />
      <div className="back-to-start">
        <Link className="back-to-start-link" to="/"><i class="fa-solid fa-chevron-left"></i> Back</Link>
      </div>
    </div>
  )
}

export default ErrorPage