import styles from './CryptoCard.module.css';
 
 function CryptoCard({ image, name, price}) {
    
    return (
        <div className={styles.card}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}</p>
            </div>
        </div>
        
        
    )
    
 }

 export default CryptoCard;