import React from "react"

export const Videos = ({ children }) => {
    const style = {}

    return (
        <div
            style={style}
            className="my-7 grid grid-cols-1 auto-rows-auto  sm:p-0 gap-4  md:grid-cols-2   2xl:gap-8 grid-flow-row "
        >
            {children}
        </div>
    )
}

export const Video = ({ video }) => {
    const style = {}

    return (
        <div style={style} className="">
            <iframe
                title="vimeo-player"
                src={video}
                width="100%"
                height="270px"
            ></iframe>
        </div>
    )
}


export const UniqueVideo = ({ children }) => {
    const style = {
        border:""
    }

    return (
        <div
            style={style}
            className=""
        >
            {children}
        </div>
    )
}