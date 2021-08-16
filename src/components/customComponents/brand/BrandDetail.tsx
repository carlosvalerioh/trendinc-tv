import React from "react"

export const BrandDetail = ({ children }) => {
    const style = {}
    return children === undefined ? (
        " "
    ) : (
        <div
            style={style}
            className="mt-64 mb-0 flex flex-col justify-between gap-5"
        >
            {children}
        </div>
    )
}

export const BrandDetailImage = ({ children }) => {
    const style = {}
    return children === undefined ? (
        " "
    ) : (
        <div style={style} className="flex-1  items-end">
            {children}
        </div>
    )
}
export const BrandDetailTitle = ({ children,color}) => {
    const style = {
        color: color
    }
    return children === undefined ? (
        " "
    ) : (
        <div  className="flex-1">
           <h2  style={style} className="text-2xl">{children}</h2>
        </div>
    )
}
export const BrandDetailDescription = ({ children }) => {
    const style = {}
    return children === undefined ? (
        " "
    ) : (
        <div style={style} className="px-5 max-w-100px">
            <p>{children}</p>
        </div>
    )
}
export const BrandDetailHashtag = ({ children,color }) => {
    const style = {
        color:color
    }

    return children === undefined ? (
        " "
    ) : (
        <div  className="flex-1 items-end text-right">
            <div style={style} className="font-bold"><p>{children}</p></div>
        </div>
    )
}
export const BrandDetailHeader = ({ children }) => {
    const style = {}
    return children === undefined ? (
        " "
    ) : (
        <div style={style} className="flex items-center">
            {children}
        </div>
    )
}
export const BrandDetailText = ({ children }) => {
    const style = {
       
    }
    return children === undefined ? (
        " "
    ) : (
        <div style={style} className="pr-5 flex-end ">
            <p>{children}</p>
        </div>
    )
}
