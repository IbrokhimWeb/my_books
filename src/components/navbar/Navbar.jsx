import React, { useState } from 'react';
import s from "./Navbar.module.scss";

import { ImBooks } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { BsFacebook, BsInstagram, BsTelegram, BsTelephone } from "react-icons/bs";
import { CgMenuHotdog, CgClose } from "react-icons/cg";

function Navbar(props) {

    const [hamburger, setHamburger] = useState(true);
    return (
        <>
            <nav className={`${s.navbar} ai__center`}>
                <section className={`${s.logos} flex__center`}>
                    <ImBooks className={s.icon} />
                    <h1>MyBooks</h1>
                </section>
                <div className={s.hamburger}>
                    {
                        hamburger ?
                            <CgMenuHotdog
                                className={s.hamburger}
                                onClick={() => setHamburger(!hamburger)}
                            /> :
                            <CgClose
                                className={s.hamburger}
                                onClick={() => setHamburger(!hamburger)}
                            />
                    }
                </div>
                <div
                    style={hamburger ? { left: '-1100px' } : { left: '0px' }}
                    className={`${s.navbar__item} ai__center`}
                >
                    <section className={`${s.search} ai__center`}>
                        <input type="search" placeholder="Search books..." />
                        <FiSearch
                            onClick={() => setHamburger(true)}
                            className={`${s.icon} pointer`}
                        />
                    </section>
                    <section className={`${s.info} ai__center`}>
                        <BsTelephone className={s.icon} />
                        <a href="tel: +998 90 068-07-28"> +998 90 068-07-28 </a>
                    </section>
                    <section className={`${s.social__media} ai__center`}>
                        <a href="#">
                            <BsTelegram className={s.icon} />
                        </a>
                        <a href="#">
                            <BsInstagram className={s.icon} />
                        </a>
                        <a href="#">
                            <BsFacebook className={s.icon} />
                        </a>
                    </section>
                </div>
            </nav>
        </>
    );
}

export default Navbar;