import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Wrapper = styled.nav`
    padding-left: 35px;
<<<<<<< HEAD
`

const A = styled(({ primary, children, ...rest }) => <Link {...rest}>{children}</Link>)`
    color: ${(props) => props.primary ? 'white' : '#FFF'};
    text-decoration: none;
    margin-right: 25px;
    font-size: 1.2rem;
    transition: all .2s ease-in-out;
    padding: 9px 0 7px;
    font-weight: 700;
    

    &:hover,
    &.active {
        border-bottom: 3px solid #fff;
    }
=======
    margin-top: 20px;   
>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955
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
<<<<<<< HEAD
    <A 
=======
    <Link 
>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955
        key={slug} 
        to={`/${slug}`} 
        primary={primary || active}
        className={isCurrentPage(currentPage, `/${slug}`)}
        dangerouslySetInnerHTML={{ __html: title }}
    />
)

const renderCategoryLink = ({ slug, name, primary, currentPage, active }) => (
<<<<<<< HEAD
    <A 
=======
    <Link 
>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955
        key={slug} 
        to={`/category/${slug}`} 
        primary={primary || active}
        className={isCurrentPage(currentPage, `/category/${slug}`)}
        dangerouslySetInnerHTML={{ __html: name }}
    />
)


const Nav = ({ pages, categories, primary, currentPage, active }) => (
    <Wrapper className={active && 'active'}>
<<<<<<< HEAD
        <A to={'/'} 
           primary={primary || active} 
           className={isCurrentPage(currentPage, `/`)}>
        Home
        </A>
=======
        <Link to={'/'} 
           primary={primary || active} 
           className={isCurrentPage(currentPage, `/`)}>
        Home
        </Link>
        
>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955
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
<<<<<<< HEAD
=======

>>>>>>> 26d9e03ab49d67690300c96cf0e70115d5403955
    </Wrapper>
)

export default Nav
