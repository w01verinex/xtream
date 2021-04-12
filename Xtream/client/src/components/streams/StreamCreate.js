
import React from 'react'
import {Field,reduxForm,} from 'redux-form'
import {connect} from 'react-redux'
import {createStream} from '../../actions'



class StreamCreate extends React.Component{

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
                <textarea className='focus input' autoComplete='off' placeholder='Describe you new stream' rows='4' {...input}/>
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
       
        this.props.createStream(newValues);

        
        
    }

    render(){
        console.log(this.props);
        
    return (
        <div className='ui grey inverted segment'>
                    <h2 className="ui center aligned icon header">
                        <i className="settings black icon"></i>
                        <i className="video black icon"></i>
                        <div className="content">
                            create a new 'STREAM'
                            <div className="sub header"></div>
                        </div>
                    </h2>
            <form className='ui inverted form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name='title' component={this.renderInput} label='Enter stream title'/>
                    <Field name='description' component={this.renderTextArea} label='Enter stream description'/>

                    <button className="ui red animated large button" tabIndex="0">
                        <div className="visible content">
                            
                                 create
                            
                           
                            
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
        form:'createStream',
        validate:validate
    })(StreamCreate);


export default connect(null,{createStream})(formWrapped);