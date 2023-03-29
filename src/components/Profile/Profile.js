import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProfileNav from './ProfileNav';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import { useGlobalContext } from '../../appContext';

const Profile = () => {
    const { setAuthorSlug } = useGlobalContext();
    const { pathname, state: profileData } = useLocation();
    const { name, titles, personImg, website, email, tags, slug } = profileData;
    const bio = profileData?.profile?.content || null;
    const profileNavData = { pathname, website, email, name };
    const leftPaneData = { name, titles, tags, bio, personImg };

    useEffect(() => {
        // set the global context state variable 'author slug'
        setAuthorSlug(slug);
    }, []);

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
