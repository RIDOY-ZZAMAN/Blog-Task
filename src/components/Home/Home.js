import React, { useEffect, useState } from 'react';
import './Home.css';
import blog from '../../images/Ellipse 6.png';
import RecentStories from './RecentStories';
import OldStoires from './OldStoires';
const Home = () => {

    const [isLSToggled, setisLSToggled] = useState(false);
    const [isSSToggled, setisSSToggled] = useState(false);
    const [stories, setStories] = useState([]);

    const [longStories, setLongStories] = useState([]);
    const [shortStories, setShortStories] = useState([]);

    const [recentStories, setRecentStories] = useState([]);
    const [oldStories, setOldStories] = useState([])


    const ToggleLongStories = () => {
        setisLSToggled(!isLSToggled);

    }

    const ToggleShortStories = () => {
        setisSSToggled(!isSSToggled)
    }

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setStories(data))

    }, [])

    useEffect(() => {
        const foundLongStories = stories.filter((story) => story?.type !== "short");
        setLongStories(foundLongStories);


    }, [stories])

    useEffect(() => {
        const foundShortStories = stories.filter((story) => story?.type !== "long");
        setShortStories(foundShortStories);


    }, [stories])

    useEffect(() => {
        const fountRecentStories = stories.filter((story) => parseInt(story?.datetime.slice(0, 4)) >= 2022);
        setRecentStories(fountRecentStories);

    }, [stories])

    useEffect(() => {
        const fountRecentStories = stories.filter((story) => parseInt(story?.datetime.slice(0, 4)) < 2022);
        setOldStories(fountRecentStories);

    }, [stories])








    return (
        <div className='home'>
            <div className="Container">
                <div className="control">
                    <div className="control-content">
                        <div className='blog-container'>
                            <img src={blog} alt="" /> <h5> Blog</h5>
                        </div>
                        <button>Delete all</button>

                        <div className='long-stories'>
                            <div className='circular'>
                                {longStories.length}
                            </div>
                            <h5>Long Stories</h5>

                            <div className='slider-container'>
                                <label className="switch">
                                    <input type="checkbox" checked={isLSToggled} onChange={ToggleLongStories} />
                                    <span className="slider round"></span>
                                </label>

                            </div>

                        </div>

                        <div className='short-stories'>
                            <div className='circular'>
                                {shortStories.length}
                            </div>
                            <h5>Short Stories</h5>

                            <div className='slider-container'>
                                <label className="switch">
                                    <input type="checkbox" checked={isSSToggled} onChange={ToggleShortStories} />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>



                {/*Stories */}

                <div className='stories'>
                    {
                        recentStories && <h4 className='headingFour' >Recent</h4>
                    }
                    <br />
                    {

                        isLSToggled && recentStories?.map(story => {
                            return (
                                <RecentStories key={story.id} story={story}></RecentStories>
                            )
                        })
                    }

                </div>

                <div className='stories'>
                    {
                        oldStories && < h4 className='headingFour'>Old</h4>
                    }
                    <br />
                    {
                        isSSToggled && oldStories?.map(story => {
                            return (
                                <OldStoires key={story.id} story={story}></OldStoires >

                            )
                        })

                    }

                </div>



            </div>

        </div >
    );
};

export default Home;