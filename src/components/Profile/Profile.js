import React from 'react';
import { useLocation } from 'react-router-dom';
import ProfileNav from './ProfileNav';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const Profile = () => {
    const { pathname, state: profileData } = useLocation();
    const { name, titles, personImg, website, email, tags } = profileData;
    const bio = profileData?.profile?.content || null;
    const profileNavData = { pathname, website, email, name };
    const leftPaneData = { name, titles, tags, bio, personImg };

    return (
        <main className='person-main'>
            {/* profile nav */}
            <ProfileNav {...profileNavData} />
            {/* ----main page------- */}
            <section className='person-profile'>
                {/* left pane of scroll bar */}
                <section className='left-pane'>
                    <LeftPane {...leftPaneData} />
                </section>

                {/* right pane of scroll bar */}
                <section className='right-pane'>
                    <RightPane />
                </section>
            </section>
        </main>
    );
};

export default Profile;
