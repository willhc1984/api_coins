import styles from './Pagination.module.css';

function Pagination({ totalPosts, postsPerPage, setCurrentPage }){

    let pages = [];
    
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i);
    }

    return(
        <nav aria-label="..." className={styles.nav}>
            <ul class="pagination pagination-lg justify-content-center">
                {pages.map((page, index) => {
                    return(
                        <li class="page-item" >
                            <a class="page-link" href="/#" onClick={() => setCurrentPage(page)}>{page}</a>
                        </li>
                    )
                })}
            </ul>        
        </nav>
        
    )
}

export default Pagination;