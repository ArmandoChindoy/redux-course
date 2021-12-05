import React from 'react'
import AppRoutes from './routes'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

const App = () => (
    <Provider store={store}>
        <React.StrictMode>
            <AppRoutes/>
        </React.StrictMode>
    </Provider>
)
export default App
