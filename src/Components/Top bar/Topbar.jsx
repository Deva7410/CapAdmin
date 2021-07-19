import React from 'react'
import "./topbar.css"
import { NotificationsNone,Settings,Language } from '@material-ui/icons';


export default function Topbar() {
    return (
        <div className="topbar"> 
            <div className="topbarWrapper">
            <div className="topLeft">
                <span className="Logo">Cap Admin</span>
                </div>
            <div className="topRight">
             <div className="topbarIconContainer">
                      <NotificationsNone/>
                            <span className="topIconBadge">1</span>
              </div>

<div className="topbarIconContainer">
<Language/>
<span className="topIconBadge">2</span>
</div>

<div className="topbarIconContainer">
<Settings/>
<span className="topIconBadge">3</span>
    </div>
    <img src="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" alt="" className="topAvatar" />
             </div>
           </div>
        </div>
    )
}
 