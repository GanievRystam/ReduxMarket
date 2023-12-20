import React, { useEffect } from "react";
import {useDispatch} from 'react-redux';
import AppRoutes from "./components/Routes/AppRoutes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import { getCategories } from "./features/categories/categoriesSlice";
import { AppDispatch } from "./features/store";

const App = () => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch]);
    return(
        <div id="root" className="app">
            <Header/>
            <div className="container">
                <Sidebar/>
                <AppRoutes/>
            </div>
            <Footer/>
        </div>
    )
}

export default App;