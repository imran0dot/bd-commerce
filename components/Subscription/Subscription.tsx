import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const Subscription = () => {
    return (
        <div className="p-3 lg:p-0 flex flex-col items-center justify-center space-y-5 my-10">
            <h1 className="text-2xl font-semibold">Subscribe now & get 20% off</h1>
            <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <form className="flex flex-wrap justify-center lg:w-[60%] mx-auto space-y-5 lg:space-y-0">
                <Input type="email" placeholder="Your Email Address" className="w-full lg:w-[80%] px-5 py-2.5 border outline-none" />
                <Button type="submit" className="flex items-center rounded-md justify-center bg-black text-white px-5 py-2.5 uppercase lg:rounded-r-md lg:rounded-l-none">Subscribe</Button>
            </form>
        </div>
    );
};

export default Subscription;