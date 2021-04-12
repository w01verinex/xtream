const mongoose=require('mongoose');

const stream_infoSchema=new mongoose.Schema({
    emailId: {
        type:String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    }, {
    timestamps: true
});


const StreamInfo = mongoose.model('StreamInfo', stream_infoSchema);

module.exports = StreamInfo;