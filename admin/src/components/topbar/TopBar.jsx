import React from 'react'
import "./TopBar.css";
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function TopBar() {
    return (
        <div className='topbar'>
            <div className="topbar-wrapper">
                <div className="topbar_left">
                    <span className="logo">Admin</span>
                </div>
                <div className="topbar_right">
                    <div className="topbar-icons-container">
                        <NotificationsNone />
                        <div className="icon-badge">2</div>
                    </div>
                    <div className="topbar-icons-container">
                        <Language />
                    </div>
                    <div className="topbar-icons-container">
                        <Settings />
                    </div>
                    <img src="https://i.ibb.co/d4NDyZZ/7cc7a630624d20f7797cb4c8e93c09c1.png" alt="" className="topbar-avatar" />
                </div>
            </div>
        </div>
    )
}
