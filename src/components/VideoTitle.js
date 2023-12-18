const VideoTitle = ({title,overview})=>{
    return <div className="w-screen aspect-video pt-[15%]  px-4 md:px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
        <p className="hidden sm:w-2/4 md:inline-block py-4 text-base w-1/4">{overview}</p>
        <div className="m-2 md:m-0">
            <button className="bg-white text-black py-1 md:py-2 px-2 md:px-4 text-base md:text-xl rounded-lg hover:bg-opacity-80">▶ Play</button>
            <button className="hidden md:inline-block mx-2 bg-gray-700 text-white p-2 px-4 text-xl opacity-50 rounded-lg hover:bg-opacity-80">More Info</button>
        </div>
    </div>
}

export default VideoTitle;