import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import Training from '../../pages/Training';
import Publications from '../../pages/Publications';
import People from '../../pages/People';
import Contact from '../../pages/Contact';
import Error from '../../pages/Error/Error';
import '../../App.scss';
import React from 'react';
import Profile from '../Profile/Profile';
import ProjectDetails from '../ProjectDetails/ProjectDetails';

function App() {
    return (
        <Routes>
            <Route path='/' element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path='projects' element={<Projects />} />
                <Route path='projects/:slug' element={<ProjectDetails />} />
                <Route path='training' element={<Training />} />
                <Route path='publications' element={<Publications />} />
                <Route path='people' element={<People />} />
                <Route path='people/staff' element={<People />} />
                <Route path='people/students' element={<People />} />
                <Route path='people/staff/:slug' element={<Profile />} />
                <Route path='people/student/:slug' element={<Profile />} />
                <Route path='contact' element={<Contact />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    );
}

export default App;
