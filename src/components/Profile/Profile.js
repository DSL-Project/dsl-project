import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProfileNav from './ProfileNav';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import { useGlobalContext } from '../../appContext';

const Profile = () => {
    const [profileData, setProfileData] = useState({});
    const { setAuthorSlug, peopleData } = useGlobalContext();
    const { pathname } = useLocation();
    const memberTypeFromLocation = pathname.split('/')[2];
    const slugFromLocation = pathname.split('/')[3];

    const profileNavData = { pathname, profileData };
    const leftPaneData = {
        profileData,
        slugFromLocation,
        memberTypeFromLocation,
    };


    useEffect(() => {
        setAuthorSlug(slugFromLocation);
        const filteredPerson = peopleData.filter(
            (person) => person.slug === slugFromLocation
        );
        setProfileData(filteredPerson);
    }, [pathname, slugFromLocation]);

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
