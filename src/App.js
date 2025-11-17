import logo from './logo.svg';
import './App.css';
import DishContextProvider from './context/DishContextProvider';
import ShowDishes from './components/ShowDishes';
import AddDish from './components/AddDish';

function App() {
  return (
    <DishContextProvider>
    <div className="App">
       <ShowDishes />
       <AddDish/>
       <footer>
        &copy; 2025 All rights reserved.
        &reg;
        &nbsp;
       </footer>
    </div>
    </DishContextProvider>
  );
}

export default App;
