export default {
  //Sidebar
  selectTab: (tab) => {
    return {
      type:'SELECT_TAB',
      tab
    }
  },

  selectContact: (selectedContact) => {
    return {
      type : 'SELECT_CONTACT',
      selectedContact
    }
  },

  //Messaging Area
  sendMessage : (chat, sender, content) => {
    return {
      type: 'SEND_MESSAGE',
      chat,
      sender,
      content
    }
  },
  receiveMessage: (chat, sender, time ,content) =>{
    return{
      type: 'RECIEVE_MESSAGE',
      chat,
      sender,
      time,
      content
    }
  }
}
