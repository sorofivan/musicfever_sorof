import React from 'react'

const Category = ({ items, category }) => {
    const categoryTitle = () => {
        if (category === "electric-guitars") {
            return  <div className="title-text">
                        <h1 className="my-4">Electric Guitars</h1>
                    </div>
        } else {
            return  <div className="title-text">
                        <h1 className="my-4">Electric Basses</h1>
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
