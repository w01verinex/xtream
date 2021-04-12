import React from 'react'
import{connect} from 'react-redux';
import {fetchStream,editStream,fetchStreams} from '../../actions';
import {Field,reduxForm,} from 'redux-form';




/*class  StreamEdit extends React.Component{

    componentDidMount(){
        this.props.fetchStreams();
    }
    render(){
    if(!this.props.stream)
    return <div>please wait</div>;
    return (
        <div>
            {this.props.stream.title}
            {this.props.stream.description}
        </div>
    );
    }
    
}

const mapStateToProps=(state,ownProps)=>{
    return { stream:state.stream[ownProps.match.params.id]};
};


export default connect(mapStateToProps,{fetchStreams})(StreamEdit) ;
*/

class StreamEdit extends React.Component{

    
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

    renderInput=({input,label,meta})=>{
        const className=`six wide field ${meta.error&&meta.touched?'error':''}`
        return(
            <div className={className}>
                <label>{label}</label>
                <input className='focus input' autoComplete='off' placeholder='Give a suitable title to your stream'{...input}/>
                {this.renderError(meta)}
            </div>
            
        );
    }
    renderTextArea=({input,label,meta})=>{
        const className=`seven wide field ${meta.error&&meta.touched?'error':''}`
        return(
            <div className={className}>
                <label>{label}</label>
                <textarea className='focus input'   autoComplete='off' placeholder='Describe you new stream' rows='4' {...input}/>
                {this.renderError(meta)}
            </div>
            
        );
    }
    onSubmit=(formValues)=>{
        const newValues={
            title:formValues.title,
            description:formValues.description,
            emailId:window.gapi.auth2.getAuthInstance().currentUser.get().getId()
        };
       
        this.props.editStream(this.props.stream._id,newValues);

        
        
    }
    renderName=()=>{
        if(!this.props.stream){
        return (<div>Edit</div>);}
        return <div><div className="ui red header">Edit </div> {this.props.stream.title}</div>;
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
            <form className='ui inverted form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name='title' component={this.renderInput} label='Enter stream title'/>
                    <Field name='description' component={this.renderTextArea} label='Enter stream description'/>

                    <button className="ui inverted red animated large button" tabIndex="0">
                        <div className="visible content">
                            
                                 Save Changes
                            
                           
                            
                            </div>
                        <div className="hidden content">
                            <i className="settings white icon"></i>
                        </div>
                    </button>
            </form>
        </div>
        
    );
    }
    
}

const validate=(formValues)=>{
    const errors={};
    if(!formValues.title){
        errors.title='Please provide a title';
    }
    if(!formValues.description){
        errors.description='please provide a description of your stream'
    }
    return errors;
}

const formWrapped= reduxForm({
        form:'editStream',
        validate:validate
    })(StreamEdit);


const mapStateToProps=(state,ownProps)=>{
    return { stream:state.stream[ownProps.match.params.id]};
};

export default connect(mapStateToProps,{fetchStream,fetchStreams,editStream})(formWrapped);