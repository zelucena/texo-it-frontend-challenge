import './App.css';
import { store } from './store/store';
import { Provider } from 'react-redux'
import { RouterProvider } from "react-router-dom";
import { router } from "./bootstrap/router";

/**
 * This is the app's entrypoint. It's aware of the store and Bootstrap 5.
 * @returns {JSX.Element}
 * @constructor
 */

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </div>
    );
}

export default App;
