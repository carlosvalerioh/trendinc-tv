import React from "react" 

export const BrandDetail = ({children}) => {
    const style = {
        
    }
    return (
        <div style={style} className="mt-16 mb-0 flex flex-col justify-between gap-5">
            {children}
        </div>
    )
}


export const BrandDetailImage = ({ children }) =>{
    const style = {
        
    }
    return (
        <div style={style} className="flex-1  items-end">
            {children}
        </div>
    )
}
export const BrandDetailTitle = ({ children }) =>{
    const style = {
        
    }
    return (
        <div style={style} className="flex-1">
            {children}
        </div>
    )
}
export const BrandDetailDescription = ({ children }) =>{
    const style = {
        
    }
    return (
        <div style={style} className="px-5 max-w-100px">
           <p>{children}</p>
        </div>
    )
}
export const BrandDetailHashtag = ({ children }) =>{
    const style = {
        
    }
    return (
        <div style={style} className="flex-1 items-end text-right">
            {children}
        </div>
    )
}
export const BrandDetailHeader = ({ children }) =>{
    const style = {
        
    }
    return (
        <div style={style} className="flex">
            {children}
        </div>
    )
}
export const BrandDetailText = ({ children }) =>{
    const style = {
        
    }
    return (
        <div style={style} className="">
            {children}
        </div>
    )
}

