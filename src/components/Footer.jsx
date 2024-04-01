import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <ul className="footer__categories">
            <li><Link to="/posts/categories/Papers">Papers</Link></li>
            <li><Link to="/posts/categories/Articles">Articles</Link></li>
            <li><Link to="/posts/categories/Comics">Comics</Link></li>
            <li><Link to="/posts/categories/Photography">Photography</Link></li>
            <li><Link to="/posts/categories/Quiz">Quiz</Link></li>
            <li><Link to="/posts/categories/Cartoons">Cartoons</Link></li>
            <li><Link to="/posts/categories/Crossword">Crossword</Link></li>

        </ul>
    </footer>
  )
}

export default Footer