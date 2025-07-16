"use client";

import Player from "lottie-react";
import loadingLottie from "../../../public/loading.json";

export default function Loading() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black">
        <div className="w-150 h-150">
            <Player autoplay loop animationData={loadingLottie} style={{ width: '100%', height: '100%' }} />
        </div>
        <span className="mt-6 text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg tracking-wide text-center select-none animate-pulse">
          Loading portfolio...
        </span>
        </div>
    );
}