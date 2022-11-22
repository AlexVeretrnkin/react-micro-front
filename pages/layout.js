import {Link, Outlet} from "react-router-dom";
import React from "react";

export default function Layout() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
            <nav>
                <ul style={
                    {
                        display: 'flex',
                        justifyContent: "space-evenly",
                        listStyle: 'none'
                    }
                }>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>

            <hr/>
            <Outlet/>
        </div>
    );
}
