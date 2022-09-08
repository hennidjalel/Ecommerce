import "./WidgetLarg.css";

export default function WidgetLarg() {
    const Button = ({type})=>{
        return <button className={"widgetlargButton " + type}>{type}</button>
    }
    return (
        <div className='widgetlarg'>
            <h3 className="widgetlargTitle">Latest transactions</h3>
            <table className="widgetlargTable">
                <tr className="widgetlargTr">
                    <th className="widgetlargTh">Customer</th>
                    <th className="widgetlargTh">Date</th>
                    <th className="widgetlargTh">Amount</th>
                    <th className="widgetlargTh">Status</th>
                </tr>
                <tr className="widgetlargTr">
                    <td className="widgetlargUser">
                        <img src="https://i.ibb.co/yg1MRtc/vince-veras-AJIq-ZDAUD7-A-unsplash.jpg" alt="" className="widgetlargImg" />
                        <span className="widgetlargName">Khaled Halloua</span>
                    </td>
                    <td className="widgetlargDate">2 jun 2022</td>
                    <td className="widgetlargAmount">$100.00</td>
                    <td className="widgetlargStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>

                <tr className="widgetlargTr">
                    <td className="widgetlargUser">
                        <img src="https://i.ibb.co/yg1MRtc/vince-veras-AJIq-ZDAUD7-A-unsplash.jpg" alt="" className="widgetlargImg" />
                        <span className="widgetlargName">Khaled Halloua</span>
                    </td>
                    <td className="widgetlargDate">2 jun 2022</td>
                    <td className="widgetlargAmount">$100.00</td>
                    <td className="widgetlargStatus">
                        <Button type="Declined"/>
                    </td>
                </tr>

                <tr className="widgetlargTr">
                    <td className="widgetlargUser">
                        <img src="https://i.ibb.co/yg1MRtc/vince-veras-AJIq-ZDAUD7-A-unsplash.jpg" alt="" className="widgetlargImg" />
                        <span className="widgetlargName">Khaled Halloua</span>
                    </td>
                    <td className="widgetlargDate">2 jun 2022</td>
                    <td className="widgetlargAmount">$100.00</td>
                    <td className="widgetlargStatus">
                        <Button type="Pending"/>
                    </td>
                </tr>

                <tr className="widgetlargTr">
                    <td className="widgetlargUser">
                        <img src="https://i.ibb.co/yg1MRtc/vince-veras-AJIq-ZDAUD7-A-unsplash.jpg" alt="" className="widgetlargImg" />
                        <span className="widgetlargName">Khaled Halloua</span>
                    </td>
                    <td className="widgetlargDate">2 jun 2022</td>
                    <td className="widgetlargAmount">$100.00</td>
                    <td className="widgetlargStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}
