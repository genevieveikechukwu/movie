import { useState, useRef } from "react";

function Button({ navbarRef }) {
    const burgerRef = useRef(null);
    const closeRef = useRef(null);
    const toggleNavbar = () => {
        const navbar = navbarRef.current;
        if (navbar) {
            navbar.classList.toggle('hidden');
        }
        burgerRef.current.classList.toggle("hidden");
        closeRef.current.classList.toggle("hidden");

    };


    return (
        <div className="fixed left-4 top-4">
            <p className="absolute  md:hidden text-orange-600 hover:cursor-pointer text-2xl" onClick={ toggleNavbar } ref={ burgerRef }><i className="fa fa-bars "></i></p>
            <p className="absolute hidden md:hidden text-orange-600 hover:cursor-pointer text-2xl" ref={ closeRef } onClick={ toggleNavbar }><i className="fa fa-close "></i></p>
        </div>
    );
}

export default Button;