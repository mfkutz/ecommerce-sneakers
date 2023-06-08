import { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { Bars } from 'react-loader-spinner'

const ItemDetail = () => {

    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [selectImg, setSelectImg] = useState(0)

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
        const selectedImageId = parseInt(e.currentTarget.id);
        setSelectImg(selectedImageId);
    }

    return (
        <div className="flex justify-center gap-28 pt-[85px] z-0">

            <div className="max-w-[440px]">
                {
                    isLoading ?
                        <div className='min-w-[440px] flex justify-center items-center h-full'>
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
                        <div className='cursor-pointer'>
                            <img src={product.image[selectImg]} alt="pic" className='rounded-[20px]' />
                        </div>
                }
                <div className='flex justify-between pt-8'>

                    {isLoading ?
                        <div className='flex justify-center items-center h-full'>

                        </div>
                        :
                        <div className='cursor-pointer' onClick={selectImage} id={0} >
                            <img src={product.thumbnail[0]} alt="model shoes" className='max-w-[88px] h-auto rounded-xl' />
                        </div>
                    }
                    {isLoading ?
                        <div className='flex justify-center items-center h-full'>

                        </div>
                        :
                        <div className='cursor-pointer' onClick={selectImage} id={1} >
                            <img src={product.thumbnail[1]} alt="model shoes" className='max-w-[88px] h-auto rounded-xl' />
                        </div>
                    }
                    {isLoading ?
                        <div className='flex justify-center items-center h-full'>

                        </div>
                        :
                        <div className='cursor-pointer' onClick={selectImage} id={2} >
                            <img src={product.thumbnail[2]} alt="model shoes" className='max-w-[88px] h-auto rounded-xl' />
                        </div>
                    }
                    {isLoading ?
                        <div className='flex justify-center items-center h-full'>

                        </div>
                        :
                        <div className='cursor-pointer' onClick={selectImage} id={3}>
                            <img src={product.thumbnail[3]} alt="model shoes" className='max-w-[88px] h-auto rounded-xl' />
                        </div>
                    }
                </div>
            </div>

            <div className="max-w-[440px]">
                <p className='uppercase text-OrangeFont tracking-[1.7px] pt-14 text-[13px] fontB  '>Sneaker Company</p>
                <h1 className='fontB text-5xl pt-5 text-gray-900'>Fall Limited Edition Sneakers</h1>
                <p className='pt-10 text-gray-500'>These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
                <div className='flex pt-6 items-center gap-5'>
                    <div className='fontB text-[28px] text-gray-900' >$150.00</div>
                    <div className='text-OrangeFont text-[17px] fontB bg-orange-100 px-2 rounded-lg'>50%</div>
                </div>
                <div className='fontB text-gray-400 line-through'>
                    {
                        isLoading ?
                            ''
                            :
                            <div>
                                $250.00
                            </div>
                    }
                </div>
                {/* CONTADOR */}
                <div className='flex pt-9 gap-4'>
                    {
                        isLoading ?
                            ''
                            :
                            <ItemCount stock={product.stock} initial={1} product={product} />
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail