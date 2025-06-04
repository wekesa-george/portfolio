"use client"
import React from 'react';

const Nav = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className='fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100'>
            <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
                <div className='text-2xl font-bold text-gray-800'>
                    Wekesa George
                </div>
                <div className='hidden md:flex space-x-8'>
                    <button 
                        onClick={() => scrollToSection('hero')} 
                        className='text-gray-600 hover:text-gray-900 transition-colors'
                    >
                        Home
                    </button>
                    <button 
                        onClick={() => scrollToSection('about')} 
                        className='text-gray-600 hover:text-gray-900 transition-colors'
                    >
                        About
                    </button>
                    <button 
                        onClick={() => scrollToSection('skills')} 
                        className='text-gray-600 hover:text-gray-900 transition-colors'
                    >
                        Skills
                    </button>
                    <button 
                        onClick={() => scrollToSection('experience')} 
                        className='text-gray-600 hover:text-gray-900 transition-colors'
                    >
                        Experience
                    </button>
                    <button 
                        onClick={() => scrollToSection('contact')} 
                        className='text-gray-600 hover:text-gray-900 transition-colors'
                    >
                        Contact
                    </button>
                </div>
                <div className='md:hidden'>
                    <button className='text-gray-600'>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;