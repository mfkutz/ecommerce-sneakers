import { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { Bars } from 'react-loader-spinner'
import Carousel from './Carousel'

const ItemDetail = () => {

    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [selectImg, setSelectImg] = useState(0)
    const [imageId, setImageId] = useState(0)
    const [popCarousel, setPopCarousel] = useState(false)
    const [popCarouselSelectImg, setPopCarouselSelectImg] = useState(0);

    useEffect(() => {
        const fetchData = () => {
            const dbFirestore = getFirestore()
            const queryCollection = collection(dbFirestore, 'products');

            getDocs(queryCollection)
                .then((querySnapshot) => {
                    const productsData = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }))

                    setProduct(productsData[0]);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    setIsLoading(false)
                })
        };

        fetchData();
    }, []);

    function selectImage(e) {
        e.preventDefault()
        const selectedImageId = parseInt(e.currentTarget.id)

        //what carousel is active
        if (popCarousel) {
            setPopCarouselSelectImg(selectedImageId)
        } else {
            setSelectImg(selectedImageId);
        }
    }

    const nextImage = (e) => {
        e.preventDefault()
        if (popCarousel) {
            const currentId = parseInt(e.currentTarget.id)
            if (currentId < 3) {
                const nextId = currentId + 1
                setImageId(nextId)
                setPopCarouselSelectImg(nextId)
            }
        } else {
            const currentId = parseInt(e.currentTarget.id)
            if (currentId < 3) {
                const nextId = currentId + 1
                setImageId(nextId)
                setSelectImg(nextId)
            }
        }
    }

    const previousImage = (e) => {
        e.preventDefault()
        if (popCarousel) {
            const currentId = parseInt(e.currentTarget.id)
            if (currentId > 0) {
                const nextId = currentId - 1
                setImageId(nextId)
                setPopCarouselSelectImg(nextId)
            }
        } else {
            const currentId = parseInt(e.currentTarget.id)
            if (currentId > 0) {
                const nextId = currentId - 1
                setImageId(nextId)
                setSelectImg(nextId)
            }
        }
    }

    return (
        <div className='relative'>
            {isLoading ?
                <div className='min-w-[440px] flex justify-center items-center min-h-[60vh]'>
                    <Bars
                        height="40"
                        width="40"
                        color="#ff7d1b"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>

                :

                <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-28 lg:pt-[85px] ">

                    <Carousel
                        product={product}
                        selectImage={selectImage}
                        selectImg={selectImg}
                        nextImage={nextImage}
                        previousImage={previousImage}
                        popCarousel={popCarousel}
                        setPopCarousel={setPopCarousel}
                        imageId={imageId}
                        popCarouselSelectImg={popCarouselSelectImg}
                    />

                    <div className="max-w-[440px] p-6 lg:p-0">
                        <p className='uppercase text-OrangeFont tracking-[1.7px] lg:pt-14 lg:text-[13px] text-[12px]  fontB  '>Sneaker Company</p>
                        <h1 className='fontB lg:text-5xl text-3xl lg:pt-5 pt-3 text-gray-900'>Fall Limited Edition Sneakers</h1>
                        <p className='lg:pt-10 pt-3 text-gray-500'>These low-profile sneakers are your perfect casual wear companion. Featuring a
                            durable rubber outer sole, they’ll withstand everything the weather can offer.
                        </p>

                        <div className='flex lg:flex-col justify-between'>
                            <div className='flex pt-6 items-center gap-5'>
                                <div className='fontB text-[28px] text-gray-900' >$125.00</div>
                                <div className='text-OrangeFont text-[17px] fontB bg-orange-100 px-2 rounded-lg'>50%</div>
                            </div>
                            <div className='fontB text-gray-400 line-through pt-8 lg:pt-0'>
                                $250.00
                            </div>

                        </div>
                        {/* COUNT */}
                        <div className='flex lg:flex-row flex-col lg:pt-9 pt-4 lg:gap-4 lg:justify-start justify-center'>
                            <ItemCount stock={product.stock} initial={1} product={product} />
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}

export default ItemDetail