import './App.css';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <AllRoutes>
     <Home />
     <Footer />
     </AllRoutes>
    </div>
  );
}

export default App;
