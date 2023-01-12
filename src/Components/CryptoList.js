import CryptoCard from "./CryptoCard";

function CryptoList({ coinsData }){

    return(
        <div>                     
            {coinsData.map((coin, index) => {
                return(
                    <CryptoCard key={index} image={coin.image} name={coin.name} price={coin.current_price} />
                )
            })}
        </div>
    )
}

export default CryptoList;