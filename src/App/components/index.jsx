import React from 'react';
import logo from '../../logo.svg';

export const Warpper = props => <div className="App">{props.children}</div>
export const Header = () => {
    return (
        <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">3DS Interactive Test VDO List</h1>
    </header>
    );
};
const vdoItemStyle = {
    backgroundColor: "#dedede",
    border: "none",
    marginBottom: 15
};
export const VdoItem = props => {
    return (
        <div className="col-md-4 col-sm-12">
            <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${props.videoId}`} style={vdoItemStyle}></iframe>
        </div>
    );
};
const inputStyle = {
    padding: "15px 35px 0px"
};
export const SearchBox = props => {
    return (
        <div className="row">
            <div className="col-md-12" style={inputStyle}>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search" 
                    defaultValue="" 
                    onChange={e=>props.onChange(e.currentTarget.value)}/>
            </div>
        </div>
    );
};