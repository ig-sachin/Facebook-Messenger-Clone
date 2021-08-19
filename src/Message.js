import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import { forwardRef } from 'react';
import './Message.css';

const Message = forwardRef(({ mess, username }, ref) => {
    const isUser = username === mess.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2"
                    >
                        {!isUser && `${mess.username || 'Unknown User'} :`} {mess.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
)
export default Message;
