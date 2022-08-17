import './FeaturedInfo.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
export default function FeaturedInfo() {
    return (
        <div className='featuredInfo'>
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2.41</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownward className='featuredIcon negative'/></span>
                </div>
                <span className="featuredSubtitle">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$5.1</span>
                    <span className="featuredMoneyRate">-1.4 <ArrowDownward className='featuredIcon negative'/></span>
                </div>
                <span className="featuredSubtitle">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2.00</span>
                    <span className="featuredMoneyRate">+8.3 <ArrowUpward className='featuredIcon'/></span>
                </div>
                <span className="featuredSubtitle">Compared to last month</span>
            </div>
        </div>
    )
}
