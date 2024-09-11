import '@/app/globals.css';
import React, {useContext, useEffect} from 'react';
import {useRouter} from "next/router";
import Footer from './Footer';

type LayoutProps = React.PropsWithChildren<{}>;

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const router = useRouter();

    return (
        <>
        <div className="navbar bg-base-300 sticky top-0">
          <div className="navbar-start">
          </div>
          <div className="navbar-center">
            <ul
              className=" bg-base-300 rounded-box flex items-center gap-5">
              <li><a className='link link-hover' href='#'>Welcome</a></li>
              <li><a className='link link-hover' href='#about-me'>About me</a></li>
              <li><a className='link link-hover' href='#skills'>Skills</a></li>
              <li><a className='link link-hover' href='#portfolio'>Portfolio</a></li>
              <li><a className='link link-hover' href='#contact'>Contact</a></li>
            </ul>
          </div>
        </div>
        {children}
        <Footer></Footer>
        </>
    );
};

export default Layout;