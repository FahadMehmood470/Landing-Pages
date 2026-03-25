let events=require("events")
let EventEmitter=new events.EventEmitter()
EventEmitter.on( 'connection',()=>
{
    console.log("Connection succesful")

}

)
EventEmitter.emit('connection')