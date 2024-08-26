'use client'
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import axios from 'axios';


const fetchProducts = async () => {
    try {
        const response = await axios.get('https://suisota.com/wp-json/wc/v3/products', {
            auth: {
                username: 'ck_2e42ce35f8a88be16a1613d6d016d6523d8d9558',
                password: 'cs_7d7936a2da1b765dbb267625cb15d8a40e0010e3'
            }
        });
        return response.data
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};


const ProductGrid: React.FC = () => {
    const products =  fetchProducts();

    console.log(products);

    // if (products) return (
    //     <div>
    //         {
    //             products?.map((product, index) => {
    //                 return (
    //                     <Card key={index}>
    //                         <CardHeader>
    //                             <CardTitle>Card Title</CardTitle>
    //                             <CardDescription>Card Description</CardDescription>
    //                         </CardHeader>
    //                         <CardContent>
    //                             <p>Card Content</p>
    //                         </CardContent>
    //                         <CardFooter>
    //                             <p>Card Footer</p>
    //                         </CardFooter>
    //                     </Card>
    //                 )
    //             })
    //         }
    //     </div>
    // );

    return <h2>Something went wrong </h2>
};

export default ProductGrid;