import React from 'react';
import './Stories.css';

const RecentStories = ({ story }) => {
    const { id, type, body, datetime, title, image } = story;
    console.log("story datetime", story);
    return (
        <div className='stories-container'>

            <div className="card">

                <div>
                    <div className="card-title">
                        <p>{title}</p>
                    </div>
                    <div className="card-description">
                        {body.slice(0, 120)}

                    </div>
                    <div className="card-time">
                        {datetime}

                    </div>
                </div>
                <div>
                    <img className='images' src={image} alt="" />
                </div>
            </div>


        </div>
    );
};

export default RecentStories;