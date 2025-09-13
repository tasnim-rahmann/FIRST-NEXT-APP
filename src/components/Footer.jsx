"use client";
import { usePathname } from 'next/navigation';
import React from 'react';

const Footer = () => {
    const pathName = usePathname();

    if (pathName.includes('dashboard')) return;

    return (
        <footer className="text-center bg-gray-200">
            Awesome Next.Js
        </footer>
    );
};

export default Footer;