import "./Home.css";
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import { userData } from '../../data';
import WidgetSmal from '../../components/widgetSmal/WidgetSmal';
import WidgetLarg from "../../components/widgetLarg/WidgetLarg";

export default function Home() {
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

