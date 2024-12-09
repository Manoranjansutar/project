import React from 'react'
import { FlipWordsDemo } from './FlipWordsDemo'
import { AnimatedTooltipPreview } from './AnimatedTooltipPreview'
import { Button } from './ui/button'
// import side_banner from './../assets/side_banner.svg';
import side_banner from './../assets/20945227.jpg';


const LandingPage = () => {
  return (
    <div className='flex h-[80vh] flex-col lg:flex-row lg:items-center lg:justify-center'>
      <div className="relative top-0 left-0 flex flex-col items-center justify-center w-full px-4 mx-auto max-w-7xl md:py-0">
        <h1 className="text-2xl font-bold md:text-5xl dark:text-white">
          The Ultimate <FlipWordsDemo />
        </h1>
        <p className="max-w-2xl mt-8 text-base md:text-xl dark:text-neutral-200">
          Driven by passion, fueled by technology. Our team specializes in designing and developing experiences that captivate and inspire.
        </p>
        <div className="mt-10">
          <AnimatedTooltipPreview />
        </div>
        <a href="/about">
          <Button className="z-50 cursor-pointer">Get Started</Button>
        </a>
      </div>
      <div className="flex items-center justify-center w-full">
        <img src={side_banner} alt="Side Banner" className="h-auto max-w-full" />
      </div>
    </div>
  );
}

export default LandingPage;
