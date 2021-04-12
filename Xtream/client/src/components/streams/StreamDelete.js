import React from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteStream,fetchStream} from '../../actions';
import {Field,reduxForm,} from 'redux-form';

class StreamDelete extends React.Component{

    
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }
    renderError=({error,touched})=>{
        if(touched&&error){
            return(
                <div className='ui error message'>
                    <div className='header'>
                        {error}
                    </div>
                </div>
            );
        }
    }

    onSubmit=()=>{
        this.props.deleteStream(this.props.stream._id);

    }
    renderName=()=>{
        if(!this.props.stream){
        return (<div>Delete</div>);}
        return <div><div className="ui white header">Are you sure you want to delete  </div> {this.props.stream.title}</div>;
    }

    render(){
        console.log(this.props.stream);
        
    return (
        <div className='ui grey inverted segment'>
                    <h2 className="ui center aligned icon header">
                        <i className="settings black icon"></i>
                        <i className="video black icon"></i>
                        <div className="content">
                            {this.renderName()}
                            <div className="sub header"></div>
                        </div>
                    </h2>
                    <div>
                        <form className='ui inverted form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>

                            <button className="ui red animated large right floated button" tabIndex="0">
                                <div className="visible content">
                                    Delete
                                    
                                    </div>
                                <div className="hidden content">
                                    <i className="trash white icon"></i>
                                </div>
                            </button>
                        </form>
                    </div>
            
            <div>
                
                
                        <Link to="/">
                        <button className="ui inverted animated large button" tabIndex="0">
                            <div className="visible content">
                                Cancel
                                
                                </div>
                            <div className="hidden content">
                                <i class="arrow alternate circle left icon"> </i>
                            </div>
                        </button>
                        </Link>
                
                
                
            </div>
        </div>
        
    );
    }
    
}


const formWrapped= reduxForm({
        form:'deleteStream',
    })(StreamDelete);


const mapStateToProps=(state,ownProps)=>{
    return { stream:state.stream[ownProps.match.params.id]};
};

export default connect(mapStateToProps,{fetchStream,deleteStream})(formWrapped);