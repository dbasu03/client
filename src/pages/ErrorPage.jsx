import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='error-page'>
        <div className="center">
            <Link to="/" className='btn primary'>Go to Home page</Link>
        </div>
    </section>
  )
}

export default ErrorPage