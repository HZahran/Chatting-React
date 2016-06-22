import React from 'react'
import ReactDOM from 'react-dom'
import SideBar from './SideBar'
import MessagingArea from './MessagingArea'


var MainComponent = (props)=>{
      return(
        <div style = {{borderRadius: '5px',backgroundColor: '#333333' , height : '90vh' , margin: '30px',textAlign:'center'}}>
          <div style = {{float : 'left' , width:'18%',height:'100%'}}>
            <SideBar loggedUser =  {props.loggedUser} selectedTab = {props.selectedTab} chats = {props.chats} onSelectTab = {props.onSelectTab} onSelectContact = {props.onSelectContact}/>
          </div>
          <div style = {{float: 'right',width:'80%',height:'100%'}}>
            <MessagingArea loggedUser =  {props.loggedUser} contact = {props.selectedContact} selectedChat = {props.selectedChat} messages = {props.messages} onSendMessage={props.onSendMessage}/>
          </div>
        </div>
      )
};

module.exports = MainComponent;
//ReactDOM.render(MainContainer, document.getElementById('app'));
