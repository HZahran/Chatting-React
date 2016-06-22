import React from 'react'

//MessagingArea
var MessagingArea =(props)=>{
      return(
        <div style = {{height:'100%'}}>
          <div style = {{paddingTop:'18px',color :'#CCCCCC' ,height:'20%'}}>
            <ContactHeader contact ={props.contact}/>
          </div>
          <div style = {{margin:'0 20px 0 5px', borderRadius:'10px',backgroundColor: 'rgba(204, 204, 204,0.1)' ,overflow:'auto',height :'65%'}}>
            <Messages messages = {props.messages}/>
          </div>
          <div style = {{overflow:'hidden',height:'20%'}}>
            <InputForm loggedUser = {props.loggedUser} selectedChat = {props.selectedChat} onSendMessage = {props.onSendMessage}/>
          </div>
        </div>
      )
};


var ContactHeader =(props)=>{

      var name = "Sayed",
       availability = "Available";

      return(
        <div>
          <img style = {{width:'40px'}} src = "../app/assets/user-lg.png"/>
          <div>
            <span style ={{fontSize:'2em', fontWeight:'bold'}}>{props.contact}</span>
            <br></br>
            <span>{availability}</span>
          </div>
        </div>
      )
};

var Messages =(props)=>{
      let messages = props.messages.map(function(message) {
            return <Message key= {message.id} sender = {message.sender} time ={message.time} content = {message.content}/>;
          })
      return(
        <ul className="list-group">
          {messages}
        </ul>
      )
};

var Message =(props)=>{
    var sender = props.sender,
    content = props.content,
    date = props.time.toString()
    return(
      <li className="list-group-item" style = {{overflow:'auto'}}>
        <span style= {{float:'left'}}><strong>{sender}</strong>&nbsp;&nbsp;{content}</span>
        <span style= {{float:'right'}}>{date}</span>
      </li>
    )
};
var InputForm = React.createClass({
      //props.loggedUser
      render: function(){
        return(
          <div>
            <form className="form-group form-inline" style ={{margin:'0 auto', padding:'15px',height:'100%'}} onSubmit = {(e)=>{e.preventDefault();this.refs.send.click()}}>
                <input type="text" ref="content" className="form-control" style = {{ height:'40px' ,width : '800px'}} />
                <button type="button" ref="send" className="btn btn-warning" style ={{marginLeft: '10px'}}
                  onClick = {()=> {
                    if(this.refs.content.value !='')
                      this.props.onSendMessage(this.props.selectedChat,this.props.loggedUser,this.refs.content.value);
                    this.refs.content.value = ''
                 }}>Send</button>
            </form>
          </div>
      )}
});
module.exports = MessagingArea;
