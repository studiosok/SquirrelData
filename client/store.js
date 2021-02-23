import { createStore, applyMiddleware } from 'redux'
import squirrelReducer from './reducer'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const store = createStore(
    squirrelReducer,
    applyMiddleware(
        thunkMiddleware,
        createLogger()
    )
)

export default store