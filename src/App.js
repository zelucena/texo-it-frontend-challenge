import './App.css';
import { store } from './store/store';
import { Provider } from 'react-redux'
import BootstrapLayout from './bootstrap/layout/Default';

/**
 * This is the app's entrypoint. It's aware of the store and Bootstrap 5.
 * @returns {JSX.Element}
 * @constructor
 */

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
