import React, { Component } from 'react';
import Card from './Card'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col-6 col-md-3  menu-col">
                        <Link to="/myvehicle">
                            <Card icon="fa-car" bgColor="#F48771" title="My Car" iconColor="#791E00" />
                        </Link>
                    </div>
                    <div className="col-6 col-md-3 menu-col">
                        <Link to="/fine">
                            <Card icon="fa-credit-card" bgColor="#8EC6C6" title="Fines" iconColor="#055476" />
                        </Link>
                    </div>
                    <div className="col-6 col-md-3 menu-col">
                        <Link to="parking">
                            <Card icon="fa-parking" bgColor="#A9BCCD" title="Nearby Parking" iconColor="#325574" />
                        </Link>
                    </div>
                    <div className="col-6 col-md-3 menu-col">
                        <Card icon="fa-book" bgColor="#E3E3DE" title="Traffic Education" iconColor="#4d4d4b" />
                    </div>
                    <div className="col-6 col-md-3 menu-col">
                        <Card icon="fa-robot" bgColor="#65AFC8" title="Traffic Bot" iconColor="#083c4d" />
                    </div>
                    <div className="col-6 col-md-3 menu-col">
                        <Card icon="fa-qrcode" bgColor="#F5AF49" title="Scan QR" iconColor="#683e00" />
                    </div>
                    <div className="col-6 col-md-3 menu-col">
                        <Card icon="fa-user-circle" bgColor="#92c68e" title="Profile" iconColor="#125e0d" />
                    </div>
                    <div className="col-6 col-md-3 menu-col">
                        <Card icon="fa-bell" bgColor="#86a7ff" title="Notification" iconColor="#293862" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;