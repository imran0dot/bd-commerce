import React from "react";

const Category = ({ params }: { 
    params: { 
        category: string 
    } 
}) => {
    return <div>My Post: {params.category}</div>
};

export default Category;