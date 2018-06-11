import React, { Component } from 'react';

class MyVehicle extends Component {
    render() {
        return (
            <div className="container">
                <div className="card ">
                    <div className="card-body">
                        <h5 className="card-title">My Vehicles</h5>
                        <form>
                            <div className="form-group">
                                <label>License Number</label>
                                <input type="text" className="form-control" placeholder="License Number" />
                            </div>
                            <div className="form-group">
                                <label>Vehicle Number</label>
                                <input type="text" className="form-control" placeholder="Vehicle Number" />
                            </div>
                            
                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>


                    </div>
                </div>
            </div>
        );
    }
}

export default MyVehicle;