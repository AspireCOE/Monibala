//import event emitter from events
const EventEmitter = require("node:events");
const emitter=new EventEmitter();
emitter.on("ongoingevent",(venue,organizer)=>{
    console.log("event organized by $(organizer) will be taking place at $(venue)");

})
emitter.on("ongoingevent",(venue)=>{
    if(venue=="chennai"){
        console.log("accomodation will be provided");
    }
})
emitter.emit("ongoingevents","chennai","aspire")