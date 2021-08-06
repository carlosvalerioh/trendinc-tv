import React from "react"

export const Videos = ({ children }) => {
    const style = {
        
    }

    return (
        <div style={style} className="my-7 grid grid-cols-1 sm:p-0 gap-4  md:grid-cols-2  md:p-4 2xl:gap-8 ">
            {children}
        </div>
    )
}

export const Video = ({ video }) => {
    const style = {
       
    }

    return (
        <div style={style} className="">
            <iframe
                title="vimeo-player"
                src={video}
                width="100%"
                height="270"
            ></iframe>
        </div>
    )
}
