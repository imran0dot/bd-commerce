'use client'
import { useGetProductsByCategoryQuery, useGetProductsQuery } from '@/redux/api/stapi.product';

import React, { useEffect, useState } from 'react';
import ProductSkeleton from '../shared/ProductSkeleton/ProductSkeleton';
import ProductCard from '../shared/ProductCard/ProductCard';
import { useAppSelector } from '@/redux/hooks/redux.hook';



const Products: React.FC = () => {
    // const { data, error, isLoading, refetch } = useGetProductsQuery({});
    const selector: {category: string} = useAppSelector(selector => selector.categoryFilter);
    const { data, error, isLoading, refetch } = useGetProductsByCategoryQuery({ category: selector?.category });

    useEffect(() => {
        if (selector.category) {
            console.log(selector.category)
        }
        refetch;
    }, [selector])
    
    let content: React.JSX.Element = <div></div>;
    // while data is loading 
    if (!isLoading) {
        content =
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
            </div>
    };

    if (!error && !isLoading) {
        content =
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">{
                data?.data?.map((product: {}, index: number) => <ProductCard key={index} data={product} />)
            }</div>;
    }
    return (
        <div>
            {content}
        </div>
    );
};

export default Products;