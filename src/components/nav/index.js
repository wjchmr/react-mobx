import React from "react";
import { Link } from "react-router-dom";

import './index.css'


export default function Nav(props) {
	return <div className='nav-bar'>
        <Link to='/'>home</Link>
        <Link to='/demo1'>one</Link>
    </div>;
}
