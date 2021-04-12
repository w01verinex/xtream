import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import GoogleAuth from './GoogleAuth'
import logo from './images/Xtreamlogo.jpg'
class Header extends React.Component{
    
    render(){
        return (
        <div className="ui red    menu">

           <Link to='/'className="massive active item">
           <img className='ui mini circular image' src={logo}   alt='image not found' />
                <b>xtream</b>
            </Link>
            
            <div className="right menu">
                <Link to='/' className="active item">
                    All Streams
                </Link>


                <a className="active item">
                    <GoogleAuth/>
                </a>
                


            </div>
        </div>
            
    );
        };
    
}

const mapStateToProps=(state)=>{
    return({
        
        isSignedIn:state.auth.isSignedIn
    });
}
export default connect(mapStateToProps)(Header);