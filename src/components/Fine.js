import React, { Component } from 'react';

class Fine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            box: true
        }
        this.handleOptionChange = this.handleOptionChange.bind(this)

    }

    handleOptionChange(changeEvent) {
        alert('hey')
        this.setState({
            box: true
        });
    }


    render() {
        return (
            <div className="container">
                <div className="card ">
                    <div className="card-body">
                        <h5 className="card-title">Fine History</h5>
                        <form>
                            <div className="form-group">
                                <label>License Number</label>
                                <input type="text" className="form-control" placeholder="License Number" />
                            </div>
                            <div className="form-group">
                                <label>Vehicle Number</label>
                                <input type="text" className="form-control" placeholder="Vehicle Number" />
                            </div>
                            <div className="card" >
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">

                                        <div className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                id="customCheck1"
                                            />
                                            <label className="custom-control-label" htmlFor="customCheck1">වේගයෙන් පැදවීම​</label>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                            <label className="custom-control-label" htmlFor="customCheck2">වමෙන් ඉස්සර කිරීම​</label>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                            <label className="custom-control-label" htmlFor="customCheck3">ඉරි කැපීම​</label>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                            <label className="custom-control-label" htmlFor="customCheck4">අංක තහඩු නොමැතිව ධාවනය​</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>


                    </div>
                </div>
            </div>
        );
    }
}

const SelectionField = props => {
    var option = props.options;
    return (
        <div className="form-group row">
            <div className={props.inputClass}>
                <label className="custom-control custom-checkbox">
                    <input
                        {...props.input}
                        type="checkbox"
                        className="custom-control-input"
                        disabled={props.disabled}
                    />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">{option.value}</span>
                </label>
            </div>
        </div>
    )
}

export default Fine;