import React from 'react'
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";

import AddDepartment from '../views/Admin/AddDepartment';
import AddDoctor from '../views/Admin/AddDoctor';
import AddSpecialty from '../views/Admin/AddSpecialty';
import AddUser from '../views/Admin/AddUser';
import Dashboard from '../views/Admin/Dashboard';
import DepartmentList from '../views/Admin/DepartmentList';
import DoctorList from '../views/Admin/DoctorList';
import SpecialtyList from '../views/Admin/SpecialtyList';
import UserList from '../views/Admin/UserList';
import AddClinic from '../views/Admin/AddClinic';
import ClinicList from '../views/Admin/ClinicList';
import PendingPost from '../views/Admin/PendingPost';
import BlogPost from '../views/Admin/BlogPost';

import About from '../views/pages/About';
import Blog from '../views/pages/Blog';
import BlogDetails from '../views/pages/BlogDetails';
import ClinicsHome from '../views/pages/ClinicsHome';
import ClinicsDetails from '../views/pages/ClinicsDetails';
import Contact from '../views/pages/Contact';
import DoctorDetails from '../views/pages/DoctorDetails';
import DoctorsHome from '../views/pages/DoctorsHome';
import Home from '../views/pages/Home';
import Login from '../views/pages/Login';
import Services from '../views/pages/Services';

function Router() {
  return (
    <BrowserRouter  >
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/dashboard/doctor" element={<DoctorList />} />
        <Route path="/dashboard/doctor/add" element={<AddDoctor />} />

        <Route path="/dashboard/department" element={<DepartmentList />} />
        <Route path="/dashboard/department/add" element={<AddDepartment />} />

        <Route path="/dashboard/specialty" element={<SpecialtyList />} />
        <Route path="/dashboard/specialty/add" element={<AddSpecialty />} />

        <Route path="/dashboard/user" element={<UserList />} />
        <Route path="/dashboard/user/add" element={<AddUser />} />

        <Route path="/dashboard/clinic/add" element={<AddClinic />} />
        <Route path="/dashboard/clinic" element={<ClinicList />} />

        <Route path="/dashboard/post" element={<BlogPost />} />
        <Route path="/dashboard/post/add" element={<PendingPost />} />

        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/details" element={<BlogDetails />} />
        <Route path="/doctors" element={<DoctorsHome />} />
        <Route path="/doctors/details" element={<DoctorDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clinics" element={<ClinicsHome />} />
        <Route path="/clinics/details" element={<ClinicsDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router