import React, { Component } from 'react';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

export default class ChatHeading extends Component {
	render() {
		const { name, online, numberOfUsers } = this.props
		const onlineText = online ? 'online':'offline'
		return (
			<div className="chat-header">
				<div className="user-info">
					<div className="user-name">{name}</div>
					<div className="status">
						<div className={`indicator ${onlineText}`}></div>
						<span>{numberOfUsers ? numberOfUsers : null} online</span>
					</div>
				</div>
				<div className="options">
					<VideocamOutlinedIcon />
					<PersonAddOutlinedIcon />
					<MoreHorizOutlinedIcon />
				</div>
			</div>
		);
	}
}