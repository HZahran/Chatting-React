import { combineReducers } from 'redux';

const tabsReducer = function(state = {selectedTab: 'CONTACTS_TAB'}, action)
{
  if(action.type == 'SELECT_TAB')
    return state.selectedTab == action.tab ? state:{...state,selectedTab: action.tab};

  return state;
}


const messagesState = {
  chats : [{
    id:0,
    messages:[],
    contact:'You'
  }],
  selectedChatID : 0
}

/*
  chat = {
    id:0,
    messages:[],
    contact:'lolo'
}
*/
const messagesReducer = function(state = messagesState, action)
{
  switch (action.type) {
    case 'SELECT_CONTACT':
      let chats = state.chats.slice(0)

      let existing = chats.find((chat) => chat.contact == action.selectedContact);

      let chatID = chats.length;
      if(!existing){
        chats.push({
          id: chats.length,
          messages:[],
          contact: action.selectedContact
        })
      }
      else
        chatID = existing.id

      return {...state, chats:chats,selectedChatID:chatID}

    case 'SEND_MESSAGE':
      var newChats = state.chats.map((chat) => {
        if(chat.id == action.chat)
          chat.messages.push({id:chat.messages.length ,sender:action.sender, time:new Date(),content:action.content})
        return chat;
      })
      return {...state, chats:newChats, selectedChatID:action.chat}
    default:
      return state;
  }
}


var reducers = combineReducers({
  tabsReducer,
  messagesReducer
});

export default reducers;
