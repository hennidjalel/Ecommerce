import "./Home.css";
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import { userData } from '../../data';
import WidgetSmal from '../../components/widgetSmal/WidgetSmal';
import WidgetLarg from "../../components/widgetLarg/WidgetLarg";
import { useState, useMemo } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethodes";

export default function Home() {

    const [userStats, setUserStats] = useState()
    const MONTHS = useMemo(
        () => [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Agu",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        []
    )

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get("/users/stats")
                res.data.map((item) =>
                    setUserStats((prev) => [
                        ...prev,{ name: MONTHS[item._id - 1], "Active User": item.total },
                    ])
                )
            } catch { console.log("errrrrr") }
        }
        getStats();
    }, [MONTHS]);

    console.log(userStats)

    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSmal />
                <WidgetLarg />
            </div>
        </div>
    )
}

