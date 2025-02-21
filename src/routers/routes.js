import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import { getTodos, getTodo, addTodo, actTodo, register, login, logout } from '../api/api.js';

import App from '../App';
import TodoAdd from '../components/TodoAdd.jsx';
import TodoList from '../components/TodoList.jsx';
import TodoDetail from '../components/TodoDetail.jsx';
import Error404 from '../Error404.js';
import Register from '../components/Register.jsx';
import Login from '../components/Login.jsx';

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
            <Route path='register' element={<Register />} action={register}/>
            <Route path='login' element={<Login />} action={login}/>
            <Route path='logout' loader={logout}/>
        </Route>
    )
)

export default router;