'use client'
import { useGetCategoryQuery } from '@/redux/api/strapi.category';
import React, { useRef } from 'react';
import ProductSkeleton from '../ProductSkeleton/ProductSkeleton';
import { useAppDispatch } from '@/redux/hooks/redux.hook';
import { filterCategory } from '@/redux/features/categoryFilterSlice';


const Categories = () => {
    const { data, error, isLoading } = useGetCategoryQuery({});
    const formRef = useRef<HTMLFormElement>(null);
    const dispatch = useAppDispatch();

    const fromHandler = () => {
        const form = formRef.current as HTMLFormElement;
        const formData = new FormData(form);
        const selectedCategories: string[] = formData.getAll('categories') as string[];
        if (selectedCategories.length > 0) {
            // Dispatch the first selected category (or handle accordingly)
            dispatch(filterCategory(selectedCategories[0]));
        } else {
            console.warn('No categories selected');
        }
    };


    if (isLoading) {
        return <ProductSkeleton />
    }
    else if (error) {
        return <div className='text-red-500'>Error...</div>
    }


    else return (
        <form
            ref={formRef}
            onChange={fromHandler}
            className='border p-5 flex flex-col gap-2'>
            <h2 className='font-bold'>Category</h2>
            {
                data?.data?.map((category: {
                    attributes: {
                        category: string
                    }
                }, index: any) => {
                    return (
                        <div key={index} className="items-top flex space-x-2 pl-4">
                            <input
                                type="radio"
                                id={category.attributes.category}
                                name="categories"
                                value={category.attributes.category}
                                className="checkbox"
                            />
                            <label
                                htmlFor={category.attributes.category}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {category.attributes.category}
                            </label>
                        </div>
                    )
                })
            }

            <div  className="items-top flex space-x-2 pl-4">
                <input
                    type="radio"
                    id="clearFilter"
                    name="categories"
                    value=""
                    className="checkbox"
                />
                <label
                    htmlFor="clearFilter"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    All Product
                </label>
            </div>

        </form>
    );
};

export default Categories;