import { PermIdentityOutlined, EmailOutlined, LocationOnOutlined, LocalPhoneOutlined, CalendarTodayOutlined, Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./User.css";

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://i.ibb.co/XWdCnqk/roy-javier-m-Ad1w3s-UYHA-unsplash.jpg" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Henni Djalel</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowtitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentityOutlined className="userShowIcon" />
                            <span className="userShowInfoTitle">annabec99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarTodayOutlined className="userShowIcon" />
                            <span className="userShowInfoTitle">10.12.1995</span>
                        </div>
                        <span className="userShowtitle">Contact Details</span>
                        <div className="userShowInfo">
                            <LocalPhoneOutlined className="userShowIcon" />
                            <span className="userShowInfoTitle">+213 557692028</span>
                        </div>
                        <div className="userShowInfo">
                            <EmailOutlined className="userShowIcon" />
                            <span className="userShowInfoTitle">test@test.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationOnOutlined className="userShowIcon" />
                            <span className="userShowInfoTitle">Alger | Algerie</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>userName</label>
                                <input type="text" placeholder="annabec99" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Henni Djalel" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="henni@henni.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="+213 557692028" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Adress </label>
                                <input type="text" placeholder="Alger | Algerie" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="https://i.ibb.co/XWdCnqk/roy-javier-m-Ad1w3s-UYHA-unsplash.jpg" alt="" />
                                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                                <input type="file" id="file" style={{display:"none"}}/>
                            </div>
                            <button className="userbutton">Update</button>
                        </div>    
                    </form>
                </div>
            </div>
        </div>
    )
}

