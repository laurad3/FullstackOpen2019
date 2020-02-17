import React from 'react';

const Notification = ({ notification }) => {
    if (notification) {
    	const notificationStyle = {
			backgroundColor: notification.success ? '#baffc2' : '#ffd6e5',
			color: '#000000',
			fontSize: 16,
			padding: '.5em 1em',
			textAlign: 'center'
		};
	
        return(
            <div style={notificationStyle}>{notification.message}</div>
        );   
    }

	return null;
};

export default Notification;