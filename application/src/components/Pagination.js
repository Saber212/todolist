import React from 'react'; 
import {Container} from 'react-bootstrap';

 const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumber = []; 

    for(let i = 1; i<=Math.ceil(totalPosts/postsPerPage); i++){
        pageNumber.push(i)
    }

    return(
        <Container>
        <nav>
            <ul className="pagination">
                {pageNumber.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)}href="#" className="page-link">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
        </Container>
    )
}
export default Pagination; 