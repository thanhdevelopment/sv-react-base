import React from 'react';
import './style.scss';

const Profile = () => (

    <div className="wrapper">
        <div className="form">
            <div className="form-group">
                <label className="form-label">Label</label>
                <div className="form-input">
                    <input type="text" name="name" className="form-control" />
                    <small className="message">message</small>
                </div>
            </div>
        </div>
    </div>
);

export default Profile;

