import React from 'react'
import {fetchStreams} from '../../actions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'



class StreamList extends React.Component{

    componentDidMount(){
            this.props.fetchStreams();
  
        }

    renderButtons(stream){
        if(stream.emailId===this.props.currentUserId){
            return(
                <div className="right floated content">
                    <Link to={`stream/edit/${stream._id}`}>
                    <div className="ui large blue button"><i className="ui large edit icon"></i></div>
                    </Link>
                    <Link to={`stream/delete/${stream._id}`}>
                    <div className="ui large red button"><i className="ui large trash alternate icon"></i></div>
                    </Link>         
                                
                </div>
            );
        }
    }
    renderCreate(){
        if(this.props.isSignedIn){
            return(
                <div>
                    <Link to='/stream/create' className="ui green right floated big button">
                        create a new Stream
                    </Link>
                </div>
            );
        }
    }
    renderList(){
        console.log(this.props.streams);
        return(
           this.props.streams.map(stream=>{
               return (
                   
                       <div className="item" key={stream._id}>
                           {
                              this.renderButtons(stream)
                           }
                            
                            <i className="ui inverted black big icon video"></i>
                            <div className="content">
                                <Link to={`/stream/${stream._id}`}   className="ui red big header">
                                    {stream.title}
                                </Link> 

                                <div class="ui grey raised segment">
                                    {stream.description}
                                </div>
                                
                            </div>
                            
                        </div>
                   
               
               );
           })
           
            );

    };

    render(){
        return(
            <div className="ui very relaxed bordered list">{this.renderList()}
            {this.renderCreate()}
            
            </div>
            
        );
    }
}
const mapStateToProps=(state)=>{
    return({
        streams:Object.values(state.stream),
        currentUserId:state.auth.userId,
        isSignedIn:state.auth.isSignedIn
    });
}
export default connect(mapStateToProps,{fetchStreams})(StreamList);
