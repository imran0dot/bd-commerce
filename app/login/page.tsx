"use client"
import React from 'react';
import { useForm } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import SectionTitle from '@/components/SectionTitle/SectionTitle';
const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    const onSubmit = async (data) => {
        const user = {
            email: data.email,
            password: data.password,
        }


    }
    return (
        <div className='p-5 lg:flex lg:min-h-screen justify-center items-center mx-auto'>
            <div className=' lg:border lg:p-5 rounded-md'>
                <div className='mb-5'>
                    <SectionTitle subTitle='' title='Login' />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input defaultValue="@gmail.com" id='email' type='email' {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                    </div>


                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input type='password' id='password' {...register("password", { required: true })} className='outline-offset-0' />
                        {errors.password && <span>This field is required</span>}
                    </div>

                    <div className='flex justify-center'>
                        <Input type="submit" value={"Login"} className='bg-black px-8 py-1.5 cursor-pointer text-white' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;


