import React from 'react'

function Menu() {
    return (
        <section className=' pl-36 pr-36 h-[115vh]  flex'>
            <div className='grid grid-cols-3 gap-x-10 h-full w-[90%] ml-auto mr-auto gap-y-10'>
                <MenuCard imgUrl='/images/tabouna.jpg' price='10 DT' />
                <MenuCard imgUrl='/images/sandwitchs.jpg' price='18 DT' />
                <MenuCard imgUrl='/images/couscous.jfif' price='5 DT' />
                <MenuCard imgUrl='/images/pizza.jfif' price='10 DT' />

                <MenuCard imgUrl='/images/couscous.jfif' price='8 DT' />
                <MenuCard imgUrl='/images/sandwitchs.jpg' price='10 DT' />

            </div>




        </section>
    )
}
interface MenuCardProps {
    imgUrl: string
    price: string
}
function MenuCard(props: MenuCardProps) {
    return <div className='flex flex-col bg-white rounded-xl shadow-xl'>
        <div style={{ backgroundImage: `url(${props.imgUrl})` }} className='p-3 bg-[url("/images/tabouna.jpg")] bg-cover bg-center w-full h-3/4 rounded-t-xl'>
            <span className='bg-red-600 text-white px-3 py-1 font-semibold rounded-lg text-sm'>{props.price}</span>

        </div>
        <button className='m-auto py-1 px-3 bg-red-600 text-white rounded-xl '>Commandez</button>
    </div>
}

export default Menu