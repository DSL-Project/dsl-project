//https://v4.mui.com/api/skeleton/
// npm install @material-ui/core
// npm install @material-ui/lab
import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

const LoadingState = () => {
    // return <div className='loader'></div>;

    return (
        <>
            <div className='skeleton-container'>
                <Skeleton
                    variant='rect'
                    width={'90%'}
                    height={'5vh'}
                    className='skel'
                    animation='wave'
                />
                <Skeleton
                    variant='rect'
                    width={'80%'}
                    height={'20vh'}
                    className='skel'
                    animation='wave'
                />
                <Skeleton
                    variant='rect'
                    width={'80%'}
                    height={'58vh'}
                    className='skel'
                    animation='pulse'
                />
                <Skeleton
                    variant='rect'
                    width={'90%'}
                    height={'5vh'}
                    className='skel'
                    animation='wave'
                />
            </div>
        </>
    );
};

export default LoadingState;
