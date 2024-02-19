import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>       
       <h1 className='text-center font-bold text-3xl'>This is a React app</h1>
       {loading && <h1>Loading...</h1>}
       {error && <h1>Something went wrong</h1>}
       
       <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="m-4 w-48 h-58 border border-gray-400 p-4"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-82 object-contain mb-2"
            />
            <div className="text-sm truncate">{product.title}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
