import { useEffect } from "react";
import { useState } from "react";
import { userRequest } from "../../requestMethodes";
import "./WidgetLarg.css";
import { format } from "timeago.js"


export default function WidgetLarg() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get("orders")
                setOrders(res.data)
            }
            catch { console.log("errrreuuuur") }
        };
        getOrders();
    }, [])



    const Button = ({ type }) => {
        return <button className={"widgetlargButton " + type}>{type}</button>
    }
    return (
        <div className='widgetlarg'>
            <h3 className="widgetlargTitle">Latest transactions</h3>
            <table className="widgetlargTable">
                <tbody>
                    <tr className="widgetlargTr">
                        <th className="widgetlargTh">Customer</th>
                        <th className="widgetlargTh">Date</th>
                        <th className="widgetlargTh">Amount</th>
                        <th className="widgetlargTh">Status</th>
                    </tr>
                    {orders.map(order => (
                        <tr className="widgetlargTr">
                            <td className="widgetlargUser">
                                <span className="widgetlargName">{order.userId}</span>
                            </td>
                            <td className="widgetlargDate">{format(order.createdAt)}</td>
                            <td className="widgetlargAmount">${order.amount}</td>
                            <td className="widgetlargStatus">
                                <Button type={order.status} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
