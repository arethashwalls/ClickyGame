import React from 'react';
import './style.css';

function TopNav(props) {
    return  <div className='navbar-fixed'>
        <nav className='grey darken-3'>
            <div className='nav-wrapper'>
                <ul>
                    <li>
                        <h1 className=''>It Just Clicks!</h1>
                    </li>
                    <li>
                        <p className=''>
                        <span className='tooltipped' data-position="bottom" data-delay="50" data-tooltip="Click an image you haven't clicked before to earn points.">
                            Instructions
                        </span>&nbsp;&nbsp;&nbsp;
                        |&nbsp;&nbsp;&nbsp;Score: {props.score}&nbsp;&nbsp;&nbsp;
                        |&nbsp;&nbsp;&nbsp;Top Score: {props.topScore}</p>
                    </li>
                </ul>
            </div> 
        </nav>
    </div>
}

export default TopNav;