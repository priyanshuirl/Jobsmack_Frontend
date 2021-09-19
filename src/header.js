import React from "react"
import "./Header.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <AccountCircleIcon fontSize="large" className="header__icon" color="secondary" />
            </IconButton>
            <div className="logo">
                <h1>Jobsmack</h1>
                <p classname="priyanshu">Made By <a href={"https://www.linkedin.com/in/priyanshuirl/"}>Priyanshu Mishra</a></p>
            </div>
            <IconButton>
                <ChatIcon fontSize="large" className="header__icon" color="secondary" />
            </IconButton>
        </div>
    )
}
export default Header;