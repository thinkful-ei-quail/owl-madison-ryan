import React, {Component} from 'react';
import ChatLog from './ChatLog';
import ParticipantList from './ParticipantList'

import './Sidebar.css'

export default class Sidebar extends Component {
  state = {
    chatShow: false
  };
  handleClick = () => {
    this.setState({chatShow: !this.state.chatShow});
  };

  render() {
    console.log(this.props.chatEvents, 'console logging')
    return (
      <div className="sidebar">
        <button className="button" onClick={this.handleClick}>chat toggle</button>
        {this.state.chatShow ? (
          <ChatLog 
            participants = {this.props.participants}
            chatList = {this.props.chatEvents} 
          />
        ) : (
          <ParticipantList 
            participants = {this.props.participants}
          />
        )}
      </div> 
    );
    
  }
}

