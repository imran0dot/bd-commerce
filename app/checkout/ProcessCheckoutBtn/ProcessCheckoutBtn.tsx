'use client'
import { Button } from '@/components/ui/button';
import React from 'react';
import { useRouter } from 'next/navigation';

const ProcessCheckoutBtn = () => {
    const router = useRouter();

    const processCheckHandler = () => {
         router.push('/checkout');
    }
    return (
        <Button onClick={processCheckHandler} size="lg" className="w-full">
          Proceed to Checkout
        </Button>
    );
};

export default ProcessCheckoutBtn;