import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import { getTodos, getTodo, addTodo, actTodo } from '../api/api.js';

import App from '../App';
import TodoAdd from '../components/TodoAdd.jsx';
import TodoList from '../components/TodoList.jsx';
import TodoDetail from '../components/TodoDetail.jsx';
import Error404 from '../Error404.js';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route index={true} element={<TodoList/>} loader={getTodos} />
            <Route path='add' element={<TodoAdd/>} action={addTodo} />
            <Route  path=':key' 
                    element={<TodoDetail/>} 
                    loader={getTodo} 
                    action={actTodo} 
                    errorElement={<Error404 />}/>
        </Route>
    )
)

export default router;