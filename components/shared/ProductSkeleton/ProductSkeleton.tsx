import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const ProductSkeleton = () => {
    return (
        <div className=''>
            <Skeleton className="h-[125px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    );
};

export default ProductSkeleton;