import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchJobByText } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchJobByText(query));
        navigate("/browse");
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-6 my-14'>

                {/* Tagline */}
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>
                    Smart Job Search Platform 🕵️‍♀️
                </span>

                {/* Main Heading */}
                <h1 className='text-5xl font-extrabold leading-tight'>
                    Find, Apply & Land Your <br />
                    <span className='text-[#6A38C2]'>Dream Job Easily</span>
                </h1>

                {/* Subtext */}
                <p className='text-gray-600 max-w-2xl mx-auto'>
                    Discover thousands of job opportunities tailored to your skills.
                    Connect with top companies and take the next step in your career.
                </p>

                {/* Search Bar */}
                <div className='flex w-[45%] shadow-lg border border-gray-200 pl-4 pr-1 py-1 rounded-full items-center gap-3 mx-auto'>
                    <input
                        type="text"
                        placeholder='Search jobs, companies, skills...'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full text-sm'
                    />

                    <Button
                        onClick={searchJobHandler}
                        className="rounded-full bg-[#6A38C2] hover:bg-[#5b30a6]"
                    >
                        <Search className='h-5 w-5' />
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default HeroSection