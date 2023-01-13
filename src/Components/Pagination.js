import styles from './Pagination.module.css';

function Pagination({ totalPosts, postsPerPage, setCurrentPage }){

    let pages = [];
    
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i);
    }

    return(
        <nav aria-label="..." className={styles.nav}>
            <ul className="pagination pagination-lg justify-content-center flex-wrap">
                {pages.map((page, index) => {
                    return(
                        <li className="page-item" key={index} >
                            <a className="page-link" href="/#" onClick={() => setCurrentPage(page)}>{page}</a>
                        </li>
                    )
                })}
            </ul>        
        </nav>
        
    )
}

export default Pagination;