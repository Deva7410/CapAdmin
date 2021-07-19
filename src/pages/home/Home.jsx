
import Chart from "../../Components/chart/Chart";
import Featuredinfo from "../../Components/featuredinfo/Featuredinfo";
import "./home.css";
import{userData} from "../..dummyData"

export default function Home() {
    return (
        <div className="home">
         <Featuredinfo />
        <Chart data={userData} title="User Analytics"  grid dataKey="Active User"/>
        </div>
    );
}
