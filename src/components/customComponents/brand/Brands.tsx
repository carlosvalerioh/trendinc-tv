import React from "react"


const Brand = ({ children }) => {

    const styles = {
        border: '2px solid red',
        witdh: '100%',
        height:'auto'
    }


    return (
        <div className="">
            {children}
        </div>
    )
}

const BrandTitle = ({children}) =>{
    return(
        <div className=" text-center">
            <h2 className="mb-80">{children}</h2> 
        </div>
    )
}

const BrandContent = ({children}) =>{

    return(
        <div  className="flex">
            {children}
        </div>
    )
}

const BrandItem = ({children}) =>{
    const style = {
        overflow:"hidden"
    }

    return(
        <div style={style} className="flex-1 rounded-4xl p-1">
            {children}
        </div>
    )
}

export { Brand ,BrandTitle, BrandContent,BrandItem}