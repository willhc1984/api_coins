import { useEffect, useState } from 'react';
import './App.css';
import CryptoList from './Components/CryptoList';

function App() {

  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false', {
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json',
        }
    })
    .then(response => response.json()
    .then(data => setCoinsData(data)))
  }, [])

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

  console.log(currentPosts);

  return (
    <div className="row d-flex justify-content-center">
      <h1>Crypto-Coin List</h1>
      <CryptoList coinsData={currentPosts} />
    </div>
  );
}

export default App;
