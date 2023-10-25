import './App.css';
import { store } from './store/store';
import { Provider } from 'react-redux'
import BootstrapLayout from './bootstrap/Layout';


function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <BootstrapLayout />
        </Provider>
    </div>
  );
}

export default App;
