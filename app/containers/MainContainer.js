import React from 'react';
import { connect } from 'react-redux';
import MainComponent from '../components/MainComponent'
import actions from '../actions/actions'

const getFromChat =(selectedChat,chats,type) => {
  let chat = chats.find((chat) => chat.id == selectedChat);

  if(type == 'contact')
    return chat ? chat.contact:''
  else
    return chat? chat.messages:[]
}

const mapStateToProps = (store) =>{
  return{
    selectedChat : store.messagesReducer.selectedChatID,
    chats : store.messagesReducer.chats,
    selectedTab: store.tabsReducer.selectedTab,
    selectedContact: getFromChat(store.messagesReducer.selectedChatID, store.messagesReducer.chats,'contact'),
    messages : getFromChat(store.messagesReducer.selectedChatID, store.messagesReducer.chats,'message'),
    loggedUser: 'Hisham Zahran'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectTab: (tab) => dispatch(actions.selectTab(tab)),
    onSelectContact: (selectedContact) =>  dispatch(actions.selectContact(selectedContact)),
    onSendMessage: (chat, sender,content) => dispatch(actions.sendMessage(chat, sender,content)),
    onReceiveMessage: (sender, time ,content) => dispatch(actions.receiveMessage(sender, time ,content))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainComponent)

// var Chats = [{
//     id:0,
//     particapants: ['7amdy','ga3far'],
//     messages: [
//       {
//         sender:'7amdy',
//         time: new Date(),
//         content:'masr gameela'
//       }
//     ]
// }]
//
// var User = {
//   username: '7amdy',
//   password: '',
//   name: '',
//   profileImg: '.png',
//   contacts: ['ga3far','samya'],
//   status: ''
// }
