import React from 'react'
import {connect} from 'react-redux'
import {fetchStream} from '../../actions'
import flv from 'flv.js'

class  StreamShow extends React.Component{

    constructor(props){
        super(props);
        this.videoRef=React.createRef();
    }

    componentDidMount(){
        
        this.props.fetchStream(this.props.match.params.id);

        this.buildPlayer();        
    }
    componentDidUpdate(){
        this.buildPlayer(); 
    }
    componentWillUnmount(){
        this.player.destroy();
    }
    buildPlayer(){
        if(this.player||!this.props.stream){
            return;
        }
        this.player=flv.createPlayer({
            type:'flv',
            url:`http://localhost:8000/live/${this.props.match.params.id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }


    rendertitle(){
        if(!this.props.stream)return <div>Stream</div>;
          return(
              <div >
                  <video  ref={this.videoRef} style={{width:'50%'}} controls  />
                  <div className='ui grey inverted segment'>{this.props.stream.title}</div> 
                    <div className='ui red raised segment'>{this.props.stream.description}</div>
              </div>
                
               
               );
    }
    render(){


        return(
            <div>
                {this.rendertitle()}
            </div>
        );
    }
}

const mapStateToProps=(state,ownProps)=>{
    return {stream:state.stream[ownProps.match.params.id]};
}
export default connect(mapStateToProps,{fetchStream}) (StreamShow);