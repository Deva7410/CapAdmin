import "./sidebar.css"
import {LineStyle,Timeline,TrendingUp} from "@material-ui/icons"

export default function sidebar() {
    return (
        <div className="sidebar" >
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">

                        <li className="sidebarListItem active">
                              <LineStyle className="sidebarIcon"/>
                                   Home
                         </li>

                         <li className="sidebarListItem">
                              <Timeline className="sidebarIcon" />
                                 Analytics
                         </li>

                         <li className="sidebarListItem">
                              <TrendingUp className="sidebarIcon" />
                                   Sales
                         </li>

                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">

                        <li className="sidebarListItem ">
                              <LineStyle className="sidebarIcon"/>
                                   User
                         </li>

                         <li className="sidebarListItem">
                              <Timeline className="sidebarIcon" />
                                 Products
                         </li>

                         <li className="sidebarListItem">
                              <TrendingUp className="sidebarIcon" />
                                   Transactions
                         </li>

                         <li className="sidebarListItem">
                              <TrendingUp className="sidebarIcon" />
                                   Reports
                         </li>

                    </ul>
                </div>

               
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">

                        <li className="sidebarListItem ">
                              <LineStyle className="sidebarIcon"/>
                                   Mail
                         </li>

                         <li className="sidebarListItem">
                              <Timeline className="sidebarIcon" />
                                 Feedback
                         </li>

                         <li className="sidebarListItem">
                              <TrendingUp className="sidebarIcon" />
                                   Message
                         </li>

                    </ul>
                </div>

               
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">

                        <li className="sidebarListItem ">
                              <LineStyle className="sidebarIcon"/>
                                   Manage
                         </li>

                         <li className="sidebarListItem">
                              <Timeline className="sidebarIcon" />
                                 Analytics
                         </li>

                         <li className="sidebarListItem">
                              <TrendingUp className="sidebarIcon" />
                                  Reports
                         </li>

                    </ul>
                </div>

               


            </div>
        </div>
    )
}
