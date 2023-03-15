import { Routes, Route } from 'react-router-dom';

import Projects from '../../pages/Projects';
import Training from '../../pages/Training';
import Publications from '../../pages/Publications';
import People from '../../pages/People';
import Contact from '../../pages/Contact';
import Person from '../Person';
import '../../App.scss';
import React from 'react';
// testing initial commit and add front-end branch
function App() {
    return (
        <>
            <Routes>
                <Route path='/projects' element={<Projects />} />
                <Route path='/training' element={<Training />} />
                <Route path='/people' element={<People />} />
                <Route path='/publications' element={<Publications />} />
                <Route path='/people/staff/:name' element={<Person />} />
                <Route path='/people/student/:name' element={<Person />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
