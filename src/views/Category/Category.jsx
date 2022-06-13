import React from 'react'

const Category = ({ items, category }) => {
    const categoryTitle = () => {
        if (category === "electric-guitars") {
            return  <div>
                        <h1 className="page-titles text-uppercase my-4">Electric Guitars</h1>
                    </div>
        } else {
            return  <div>
                        <h1 className="page-titles text-uppercase my-4">Electric Basses</h1>
                    </div>
        }
    }

    return (
        <>
            {items.length > 0 && (
                categoryTitle()         
            )}
        </>
    )
}

export default Category
