'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
// import { FaFingerprint } from 'react-icons/fa';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        // <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
        <header className="bg-transparent relative top-0 left-0 right-0 z-50 mx-auto w-full">
            <Container className="!px-0">
                {/* <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-center items-center py-3 px-5 md:py-4 relative"> */}
                {/* <nav className="bg-white md:bg-transparent mx-auto flex justify-center items-center py-1 md:py-3 px-5 relative border-b border-gray-200"> */}
                <nav className="bg-white md:bg-transparent mx-auto flex items-center py-2 px-5 border-b border-gray-200">
                    {/* Logo + Site Name (Centered on Desktop) */}
                    {/* <div className="flex flex-col items-center"> */}
                    <div className="flex items-center justify-between w-full">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/images/Logo.png"
                                alt="Aatiq Logo"
                                width={50}
                                height={50}
                                className="object-contain"
                                priority
                            />
                            {/* <span className="manrope text-xl font-semibold text-foreground cursor-pointer"> */}
                            <span className="manrope text-lg tracking-wide text-gray-800">
                                {siteDetails.siteName}
                            </span>
                        </Link>

                        {/* Desktop Menu (Below Logo, Evenly Distributed) */}
                        {/* <ul className="hidden md:flex w-full max-w-4xl justify-center gap-48 mt-1"> */}
                        {/* <ul className="hidden md:flex justify-center gap-10 mt-2"> */}
                        <ul className="hidden md:flex items-center gap-10 mx-auto">
                        {/* <ul className="hidden md:flex items-center gap-10"> */}
                            {menuItems.map(item => (
                                <li key={item.text}>
                                    <Link
                                        href={item.url}
                                        // className="px-3 py-1 text-foreground hover:text-foreground-accent transition-colors"
                                        // className="px-2 py-1 text-sm uppercase tracking-widest text-gray-700 hover:text-black transition-colors"
                                        className="px-2 py-1 text-sm uppercase tracking-widest text-gray-700 hover:text-black transition-all duration-200"
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Menu Button — unchanged */}
                    {/* <div className="md:hidden absolute right-5 top-3 flex items-center"> */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>

            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-foreground hover:text-primary block" onClick={toggleMenu}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        {/* <li>
                            <Link href="#cta" className="text-black bg-primary hover:bg-primary-accent px-5 py-2 rounded-full block w-fit" onClick={toggleMenu}>
                                Get Started
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;