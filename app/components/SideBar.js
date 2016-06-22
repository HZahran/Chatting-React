var React = require('react');

var SideBar = (props)=> {
      return(
        <div style = {{ borderRadius: '5px',backgroundColor: '#C59A6F', height:'100%'}}>
          <div style = {{padding:'15px', color: '#FCFCFC', height:'28%'}}>
            <UserHeader loggedUser =  {props.loggedUser}/>
          </div>
          <div className="nav nav-pills" style={{textAlign:'center' , backgroundColor:'#f0ad4e',color :'#CC3300'}}>
              <button type = "button" className = "btn btn-link" style= {{ color: props.selectedTab =='CHATS_TAB'? '#821122':'#C59A6F'}} onClick = {()=> {props.onSelectTab('CHATS_TAB')}}>Chats</button>
              <button type = "button" className = "btn btn-link" style= {{ color: props.selectedTab =='CONTACTS_TAB'? '#821122':'#C59A6F'}} onClick = {()=> {props.onSelectTab('CONTACTS_TAB')}}>Contacts</button>
          </div>
          <div style = {{height:'60%', margin : '5px',overflowY:'auto'}}>
            <ChatsList chats = {props.chats} selectedTab={props.selectedTab} onSelectContact = {props.onSelectContact}/>
          </div>
        </div>
      )
};

var ChatsList = (props)=> {

      let contacts = ['Koko','Mido','Samy','Lolo','Toto']

      let chats = props.selectedTab == 'CHATS_TAB' ? props.chats.map((chat)=>chat.contact) : contacts;
      let sideList =  chats.map(function(name) {
                            return <ChatRow onSelectContact = {props.onSelectContact} name ={name}/>;
                      })

      return(
          <ul style = {{padding:'15px 20px 0 5px'}} className="list-group">
            {sideList}
          </ul>
      )
};

var ChatRow = (props)=> {
      return(
        <li style= {{background:'none',border:'none'}} className="btn list-group-item" onClick={()=>props.onSelectContact(props.name)}>
          <img style = {{float:'left' ,width:'40px',marginLeft:'50px'}} src = "../app/assets/user-lg.png"/>
          <span style ={{lineHeight:'40px',marginRight:'50px',fontSize:'1.1em'}}>{props.name}</span>
        </li>
      )
};

var UserHeader = (props)=> {
      var name = props.loggedUser
      return(
        <div>
          <img style = {{width:'8vw' ,boxShadow: '2px 2px 2px #888888',borderRadius:'80px' ,margin:'5px'}}src = "../app/assets/user-lg.png"/>
          <br></br>
          <span style ={{minWidth:'1vw',fontSize:'1.5vw' ,textShadow: '1px 1px 2px #888888'}}>{name}</span>
        </div>
      )
};

module.exports = SideBar;
