import React from 'react'
import "./SideBar.css"
import {
    LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney,
    BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Error
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
export default function SideBar() {
    return (
        <div className='sidebar'>
            <div className="slidebar-wrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarListe">
                        <Link to="/" className='link'>
                            <li className="sidebarListem-item active">
                                <LineStyle className='sidebarIcon' />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListem-item">
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListem-item">
                            <TrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarListe">
                        <Link to="/users" className='link'>
                            <li className="sidebarListem-item active">
                                <PermIdentity className='sidebarIcon' />
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className='link'>
                            <li className="sidebarListem-item">
                                <Storefront className='sidebarIcon' />
                                Products
                            </li>
                        </Link>
                        <li className="sidebarListem-item">
                            <AttachMoney className='sidebarIcon' />
                            Transactions
                        </li>
                        <li className="sidebarListem-item">
                            <BarChart className='sidebarIcon' />
                            Raports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarListe">
                        <li className="sidebarListem-item active">
                            <MailOutline className='sidebarIcon' />
                            Mail
                        </li>
                        <li className="sidebarListem-item">
                            <DynamicFeed className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className="sidebarListem-item">
                            <ChatBubbleOutline className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarListe">
                        <li className="sidebarListem-item active">
                            <WorkOutline className='sidebarIcon' />
                            Manage
                        </li>
                        <li className="sidebarListem-item">
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListem-item">
                            <Error className='sidebarIcon' />
                            Raports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
