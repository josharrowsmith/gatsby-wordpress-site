import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'


const ListLink = props => (
  <li>
    <Link activeClassName="active" to={props.to}>{props.children}</Link>
  </li>
)

const Navigation = () => (
  <nav >
    <ul>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/projects/">Projects</ListLink>
      <ListLink to="/blog/">Blog</ListLink>
    </ul>
  </nav>
)

const Header = () => (
  <div >
    <Link to="/">
      <div className="name">Josh Arrowsmith</div>
    </Link>
    <Navigation />
  </div>
)

const TemplateWrapper = ({ children }) => {

  return (
    <div className="">
      <Helmet
        title="Josh Arrowsmith - Front End Developer"
        meta={[
          {
            name: 'description',
            content: 'Josh Arrowsmith - Front End Web Developer',
          },
          {
            name: 'keywords',
            content:
            'RESTFUL API',
          },
        ]}
      />
      <Header />
      <div>{children()}</div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
