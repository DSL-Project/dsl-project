import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import Training from '../../pages/Training';
import Publications from '../../pages/Publications';
import People from '../../pages/People';
import Contact from '../../pages/Contact';
import Person from '../Person';
import Error from '../../pages/Error/Error';
import '../../App.scss';
import React from 'react';
import Test from './Test';

function App() {
    return (
        <Routes>
            <Route path='/' element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path='projects' element={<Projects />} />
                <Route path='training' element={<Training />} />
                <Route path='people' element={<People />} />
                <Route path='publications' element={<Publications />} />
                <Route path='people/staff/:slug' element={<Person />} />
                <Route path='people/student/:slug' element={<Person />} />
                <Route path='contact' element={<Contact />} />
                <Route path='testing' element={<Test />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    );
}

export default App;
