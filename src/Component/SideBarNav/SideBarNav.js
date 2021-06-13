import React, { useEffect, useState } from 'react';
import './SideBarNav.css';
import { social, links } from './Data';
import { FaTimes, FaListAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideBarNav = () => {
    const [showMenu,setShowMenu] = useState(false);

    const showHandleClick = () => {
        setShowMenu(true);
        setTimeout(() => setShowMenu(true), 2000)
    }

    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <main>
                            {
                                !showMenu ? <button className="btn" onClick={showHandleClick} style={{ fontSize:'40px' }}><FaListAlt /></button> : ''
                            }
                        </main>
                        {
                            showMenu &&
                            <aside className="sidebar">
                                <div className='sidebar-header'>
                                    <img src={`https://react-projects-12-sidebar-modal.netlify.app/static/media/logo.2bb7da65.svg`} className='logo' alt='coding addict' />
                                    <button onClick={() => setShowMenu(false)} className='close-btn btn' style={{ position:'absolute', right:'0',color: 'red' }}>
                                        <FaTimes />
                                    </button>
                                </div>
                                <ul className='links'>
                                    {links.map((link) => {
                                    const { id, url, text, icon } = link;
                                        return (
                                            <li key={id}>
                                                <Link to={url}>
                                                    <span className="mx-3">{icon}</span>
                                                    {text}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <ul className='social-icons'>
                                    {social.map((link) => {
                                    const { id, url, icon } = link;
                                        return (
                                            <li key={id}>
                                                <a target="_blank" href={url}>{icon}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </aside>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SideBarNav;