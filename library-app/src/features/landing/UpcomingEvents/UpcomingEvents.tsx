import React from 'react';

import './UpcomingEvents.css';
import { AutoAwesome } from '@mui/icons-material';

export const UpcomingEvents:React.FC = () => {
    return(
        <div className="upcoming-events">
            <div className="upcoming-events-header-group">
                <AutoAwesome sx={{
                    fontSize: "2.25rem",
                    color: "#3626A7"
                }} />
                <h2>Upcoming Events</h2>
                <AutoAwesome sx={{
                    fontSize: "2.25rem",
                    color: "#3626A7"
                }} />
            </div>
            <h3>Summer 2024</h3>
            <h4>Mondays: 10 AM - 12 PM</h4>
            <ul className="upcoming-events-event">
                <li><p>Who: Children </p></li>
                <li><p>Activities: Storytime</p></li>
            </ul>
            <h4>Tuesdays: 2 PM - 4 PM</h4>
            <ul className="upcoming-events-event">
                <li><p>Who: Teens</p></li>
                <li><p>Arts and crafts</p></li>
            </ul>
            <h4>Wednesdays: 4 PM - 6 PM</h4>
            <ul className="upcoming-events-event">
                <li><p>Who: Adults</p></li>
                <li><p>Activities: Board Games</p></li>
            </ul>
        </div>
    )
}