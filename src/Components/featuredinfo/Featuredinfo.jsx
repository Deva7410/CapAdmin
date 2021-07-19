import "./featuredinfo.css";
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";
export default function Featuredinfo() {
    return (
        <div className="featured">
            
            <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">Rs.28,000</span>
            <span className="featuredMoneyRate">-120<ArrowDownward  className="featuredIcon negative"/> </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">Rs.48,000</span>
            <span className="featuredMoneyRate">-10<ArrowDownward className="featuredIcon negative"/> </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">Rs.22,400</span>
            <span className="featuredMoneyRate">+20<ArrowUpward className="featuredIcon "/> </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>

        </div>
    );
}
