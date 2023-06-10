import React from 'react'
import next from '../assets/svg/icon-next.svg'
import previous from '../assets/svg/icon-previous.svg'
import close from '../assets/svg/icon-close.svg'

const Carousel = ({
    product,
    selectImage,
    selectImg,
    nextImage,
    previousImage,
    popCarousel,
    setPopCarousel,
    imageId,
    popCarouselSelectImg,
}) => {
    return (
        <>
            {/*//////////////////// DESKTOP CAROUSEL////////////////////////////*/}
            <div className="max-w-[440px] mobile-disabled">
                <div className='cursor-pointer' onClick={() => setPopCarousel(!popCarousel)}>
                    <img src={product.image[selectImg]} alt="pic" className='rounded-[20px]' />
                </div>
                <div className='flex justify-between pt-8'>
                    <div className='cursor-pointer' onClick={selectImage} id={0} >
                        <img src={product.thumbnail[0]} alt="model shoes" className='max-w-[88px] h-auto rounded-xl' />
                    </div>
                    <div className='cursor-pointer' onClick={selectImage} id={1} >
                        <img src={product.thumbnail[1]} alt="model shoes" className='max-w-[88px] h-auto rounded-xl' />
                    </div>
                    <div className='cursor-pointer' onClick={selectImage} id={2} >
                        <img src={product.thumbnail[2]} alt="model shoes" className='max-w-[88px] h-auto rounded-xl' />
                    </div>
                    <div className='cursor-pointer' onClick={selectImage} id={3}>
                        <img src={product.thumbnail[3]} alt="model shoes" className='max-w-[88px] h-auto rounded-xl' />
                    </div>
                </div>
            </div>
            {/*//////////////////// DESKTOP CAROUSEL POP////////////////////////////*/}
            <div className={`${popCarousel ? 'desktop-enabled' : 'desktop-disabled'}  mobile-disabled absolute -top-5 z-20 `}>
                <div className='special-background-menu special-background-pic'>

                    <div className='flex justify-end mb-5'>
                        <img onClick={() => setPopCarousel(!popCarousel)} src={close} alt="icon close" className='w-5 cursor-pointer hover-color ' />
                    </div>
                    <div>
                        <img src={product.image[popCarouselSelectImg]} alt="pic" className='rounded-[15px] max-w-[540px]' />
                        <div className='flex justify-center items-center w-14 h-14 rounded-full bg-gray-50 cursor-pointer absolute top-[42%] -left-7 ' onClick={previousImage} id={imageId} >
                            <img src={previous} alt="previous" className='rounded-full' />
                        </div>
                        <div className='flex justify-center items-center w-14 h-14 rounded-full bg-gray-50 cursor-pointer absolute top-[42%] -right-7 ' onClick={nextImage} id={imageId} >
                            <img src={next} alt="next" className=' rounded-full' />
                        </div>
                    </div>

                </div>
                <div className='flex justify-center gap-6 pt-8 '>
                    <div className='cursor-pointer' onClick={selectImage} id={0} >
                        <img src={product.thumbnail[0]} alt="model shoes" className='max-w-[92px] h-auto rounded-xl' />
                    </div>
                    <div className='cursor-pointer' onClick={selectImage} id={1} >
                        <img src={product.thumbnail[1]} alt="model shoes" className='max-w-[92px] h-auto rounded-xl' />
                    </div>
                    <div className='cursor-pointer' onClick={selectImage} id={2} >
                        <img src={product.thumbnail[2]} alt="model shoes" className='max-w-[92px] h-auto rounded-xl' />
                    </div>
                    <div className='cursor-pointer' onClick={selectImage} id={3}>
                        <img src={product.thumbnail[3]} alt="model shoes" className='max-w-[92px] h-auto rounded-xl' />
                    </div>
                </div>
            </div>
            {/*//////////////////// MOBILE CAROUSEL////////////////////////////*/}
            <div className="max-w-[440px] desktop-disabled mobile-active relative ">

                <div className='cursor-pointer h-[330px] overflow-hidden '>
                    <img src={product.image[selectImg]} alt="pic" />
                </div>

                <div className='flex justify-center items-center w-10 h-10 rounded-full bg-gray-50 cursor-pointer absolute top-1/2 ml-4 transform -translate-y-1/2' onClick={previousImage} id={imageId} >
                    <img src={previous} alt="previous" className='rounded-full' />
                </div>
                <div className='flex justify-center items-center w-10 h-10 rounded-full bg-gray-50 cursor-pointer absolute top-1/2 right-0 mr-4 transform -translate-y-1/2' onClick={nextImage} id={imageId} >
                    <img src={next} alt="next" className=' rounded-full' />
                </div>

            </div>
        </>
    )
}

export default Carousel