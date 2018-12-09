import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Wrapper = styled.nav`
    padding-left: 35px;
    margin-top: 20px;   
`

const INVALID_PAGES = ['uncategorized'];

const isCurrentPage = (currentPage, path) => {
    return currentPage === path ? 'active' : '';
}

const isValidPage = ({ node }) => {
    const slug = node.slug || node.title;
    return !INVALID_PAGES.find((v) => v  === slug);
}

const renderPageLink = ({ slug, title, primary, currentPage, active }) => (
    <Link 
        key={slug} 
        to={`/${slug}`} 
        primary={primary || active}
        className={isCurrentPage(currentPage, `/${slug}`)}
        dangerouslySetInnerHTML={{ __html: title }}
    />
)

const renderCategoryLink = ({ slug, name, primary, currentPage, active }) => (
    <Link 
        key={slug} 
        to={`/category/${slug}`} 
        primary={primary || active}
        className={isCurrentPage(currentPage, `/category/${slug}`)}
        dangerouslySetInnerHTML={{ __html: name }}
    />
)


const Nav = ({ pages, categories, primary, currentPage, active }) => (
    <Wrapper className={active && 'active'}>
        <Link to={'/'} 
           primary={primary || active} 
           className={isCurrentPage(currentPage, `/`)}>
        Home
        </Link>
        
        {categories && 
            categories.edges
                .filter(isValidPage)
                .map((edge) => renderCategoryLink({ ...edge.node, primary, currentPage, active }))
        }
        
        {pages && 
            pages.edges
                .filter(isValidPage)
                .map((edge) => renderPageLink({ ...edge.node, primary, currentPage, active }))
        }

    </Wrapper>
)

export default Nav
