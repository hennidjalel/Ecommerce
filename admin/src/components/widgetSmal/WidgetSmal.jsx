import "./WidgetSmal.css";
import { Visibility } from '@material-ui/icons';
import { useState, useEffect } from "react";
import { userRequest } from "../../requestMethodes";

export default function WidgetSmal() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userRequest.get("users/?new=true")
                setUsers(res.data)
            }
            catch { console.log("errrreuuuur") }
        };
        getUsers();
    }, [])
    return (
        <div className='widgetSmal'>
            <span className="widgetsmalTitle">New Join Members</span>
            <ul className="widgetsmalList">
                {users.map((user) => (
                    <li className="widgetsmalListItem" key={user._id}>
                        <img src={user.img || "https://i.ibb.co/d4NDyZZ/7cc7a630624d20f7797cb4c8e93c09c1.png"} alt="" className="widgetsmalImg" />
                        <div className="widgetsmalUser">
                            <div className="widgetsmalUsername">{user.username}</div>
                        </div>
                        <button className="widgetsmalButton">
                            <Visibility className="widgetsmalIcon" />
                            Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

