import './App.css'
import {postsData} from '../public/data'
import {PostsGrid} from './components/PostsGrid';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


function App() {
  
  return (
    <>
      <Header title= "Adopta a un perro"/>
      <hr />
      < PostsGrid posts={postsData} />

      <Footer />
    </>
  );
}

export default App
