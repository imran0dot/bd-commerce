'use client'
import { useGetProductsQuery } from '@/redux/api/stapi.product';

import React from 'react';
import ProductSkeleton from '../shared/ProductSkeleton/ProductSkeleton';
import ProductCard from '../shared/ProductCard/ProductCard';

interface TProduct {

}


const Products: React.FC = () => {
    const { data, error, isLoading } = useGetProductsQuery({});
    let content: React.JSX.Element = <div></div>;

    // while data is loading 
    if (isLoading) {
        content =
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
                <ProductSkeleton />
            </div>
    };

    if (!error && !isLoading) {
        console.log(data.data);
        content = data?.data?.map((product: TProduct, index: number) => <ProductCard key={index} data={product} />);
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {content}
        </div>
    );
};

export default Products;