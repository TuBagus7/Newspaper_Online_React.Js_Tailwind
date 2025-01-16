import { useState, useEffect} from 'react';
import './App.css'
import Card from './components/Card';
import axios from 'axios';
const App = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const url = 'https://api-berita-indonesia.vercel.app/cnn/teknologi/';
      const response = await axios.get(url);
      setPosts(response?.data?.data?.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, [])
  console.log(posts);
  return (
    <>
    <main className='md:p-10 p-5'>
      <h1 className="text-2xl font-semibold text-center">Berita Teknologi Terkini</h1>
      <div className= 'mt-12 grid md:grid-cols-4 gap-6'>
      {posts?.map((post, index) => {
        return <Card item={post} key={index} />
})}
      </div>
    </main>
    </>
  )
}

export default App;
