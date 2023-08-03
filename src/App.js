import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {


  return (
    
     <>

    <Navbar  title= "textUtils"   about="About Us"/>
    
    <div className='container'>
    <TextForm heading =" Enter Text to Analyze" />
    </div>
   

    </> 
   
  );  
}

export default App;
