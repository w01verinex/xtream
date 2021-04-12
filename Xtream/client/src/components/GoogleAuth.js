import React from 'react'
import {signIn,signOut} from '../actions'
import {connect} from 'react-redux'

class GoogleAuth extends React.Component{
    
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init(
                {
                    clientId:'857854385142-j1ngeso90jtnt8p9ho6uvpg34sfcdfs1.apps.googleusercontent.com',
                    scope:'email'
                }
            ).then(
                this.auth=window.gapi.auth2.getAuthInstance(),
                this.onChangeAuth(this.auth.isSignedIn.get()),
                this.auth.isSignedIn.listen(this.onChangeAuth)
            );
        });
    }   

    onChangeAuth=(isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }
        
    }

    LoginButton(){
        if(this.props.isSignedIn){
            return(
                <div>
                    <img className='ui mini avatar image' src={window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getImageUrl()} />
                    <span>
                        <button className='ui red small google button' onClick={this.auth.signOut}>
                        Sign Out
                        </button>
                    </span>
                    
                    
                </div>
                  );
        }
        else if(this.props.isSignedIn===null)
        {
            return(
                <button className='ui red small google button' >
                    <i className='google icon'/>
                   Loading</button>
            );
        }
        else{
            return(
                <button className='ui red small google button' onClick={this.auth.signIn}>
                    <i className='google icon'/>
                   Sign  In</button>
            );
        }
    }
    render(){
        return(
            <div>
                {this.LoginButton()}
            </div>
        );
    }

}
const mapStateToProps=(state)=>{
    return {
        isSignedIn:state.auth.isSignedIn 
    };
}



export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);