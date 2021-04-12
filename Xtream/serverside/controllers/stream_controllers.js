const StreamInfo =require('../models/stream_info');



module.exports.create=(req,res)=>{
    StreamInfo.findOne({emailId:req.body.emailId,title:req.body.title},(err,streamInfo)=>{
        if(err){console.log('error finding this stream info');return;}
        if(streamInfo)
        {
            console.log('stream already exist');
            return;
        }
        if(!streamInfo)
        {
            StreamInfo.create(req.body);
        }
    });
    
    res.send("hello prateek");
}

module.exports.fetchstreams=(req,res)=>{
    StreamInfo.find({},(err,streamInfo)=>{
        if(err){console.log('error finding this stream info');return;}
        if(streamInfo)
        {
            console.log(streamInfo);
            res.json(streamInfo);
        }
        
    });
    

}

module.exports.fetchstream=(req,res)=>{
    StreamInfo.findById(req.params.id,(err,streamInfo)=>{
        if(err){console.log('error finding this stream info');return;}
        if(streamInfo)
        {
            console.log(streamInfo);
            res.json(streamInfo);
        }
        console.log("are betichod");
    });
    

}

module.exports.edit=(req,res)=>{
    
    StreamInfo.findByIdAndUpdate(req.params.id,req.body, function (err, stream) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            console.log("Deleted : ", stream.id); 
        } 
    }); 

    res.send("hello prateek");
}

module.exports.delete=(req,res)=>{
    
    StreamInfo.findByIdAndDelete(req.params.id, function (err, stream) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            console.log("Deleted : ", stream.id); 
        } 
    }); 
    
    res.send("hello prateek");
}
