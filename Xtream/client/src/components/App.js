import React from 'react'
import {Router,Route,Switch} from 'react-router-dom'
import StreamShow from './streams/StreamShow'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import Header from './Header'
import history from '../history';

//857854385142-j1ngeso90jtnt8p9ho6uvpg34sfcdfs1.apps.googleusercontent.com
const App=()=>{
    return(
        <div>
            
            <Router history={history}>
            <div>
                <Header/>
                <Switch>
                    <Route path='/' exact component={StreamList}/>
                
                    <Route path='/stream/delete/:id' exact component={StreamDelete}/>
                    <Route path='/stream/edit/:id' exact component={StreamEdit}/>
                    <Route path='/stream/create' exact component={StreamCreate}/>
                    <Route path='/stream/:id' exact component={StreamShow}/>
                </Switch>
                

            </div>
            </Router>
        </div>
    ); 
} 

export default App;