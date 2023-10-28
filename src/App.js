import './App.css';
import { store } from './store/store';
import { Provider } from 'react-redux'
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

/**
 * This is the app's entrypoint
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
