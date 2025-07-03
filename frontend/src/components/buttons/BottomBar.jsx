function BottomBar() {
    return(
        <>
            <div className="flex flex-wrap w-fit border-2 border-white rounded-full justify-around items-center mx-auto p-2 bg-transparent relative top-">
                <div className="flex-1 min-w-[180px] text-white tracking-wider items-center justify-center px-4 text-left text-base md:text-lg lg:text-xl break-words whitespace-normal">
                    <span className="whitespace-nowrap">Take a deep dive into the realm of designs | Unleash your creativity:</span> <br /> Explore • Create • Post
                </div>
                <div className="flex-shrink-0 flex items-center justify-center p-2">
                    <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="50" y="0.50293" width="70" height="70" rx="35" transform="rotate(45 50 0.50293)" fill="white"/>
                        <path d="M70.1642 34.209C70.1634 33.0496 69.7026 31.9379 68.8828 31.1181C68.063 30.2983 66.9513 29.8374 65.7919 29.8367L42.4559 29.8305C41.2952 29.8305 40.182 30.2916 39.3613 31.1123C38.5406 31.9331 38.0795 33.0462 38.0795 34.2069C38.0795 35.3676 38.5406 36.4808 39.3613 37.3015C40.182 38.1222 41.2952 38.5833 42.4559 38.5833L55.2283 38.5854L31.4386 62.3751C30.6181 63.1956 30.1572 64.3084 30.1572 65.4687C30.1572 66.629 30.6181 67.7418 31.4386 68.5623C32.259 69.3828 33.3718 69.8437 34.5322 69.8437C35.6925 69.8437 36.8053 69.3828 37.6258 68.5623L61.4155 44.7726L61.4155 57.5429C61.4155 58.1176 61.5287 58.6867 61.7486 59.2177C61.9686 59.7487 62.2909 60.2311 62.6973 60.6375C63.1037 61.0439 63.5861 61.3662 64.1171 61.5862C64.6481 61.8061 65.2172 61.9193 65.7919 61.9193C66.3666 61.9193 66.9357 61.8061 67.4667 61.5862C67.9976 61.3662 68.4801 61.0439 68.8865 60.6375C69.2929 60.2311 69.6152 59.7487 69.8352 59.2177C70.0551 58.6867 70.1683 58.1176 70.1683 57.5429L70.1642 34.209Z" fill="black"/>
                    </svg>
                </div>  
            </div>
        </>
    )
}
export default BottomBar