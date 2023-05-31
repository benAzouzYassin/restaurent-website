import MenuCard from './MenuCard'
import "../styles.css"

function Menu() {

    return (
        <div className=' pl-36 pr-36'>
            <h1 className=' text-5xl italic mb-5 font-bold'>Nos produits : </h1>
            <section className='  flex flex-col  h-fit py-6 rounded-xl shadow-2xl border-[1px] border-black '>
                <div className='grid grid-cols-3 gap-x-10  h-[700px] overflow-y-scroll w-[90%] ml-auto mr-auto gap-y-10 py-5'>
                    <MenuCard imgUrl='/images/tabouna.jpg' price={5} id='1' productName='tabouna' />
                    <MenuCard imgUrl='/images/sandwitchs.jpg' price={5} id='2' productName='sandwitch' />
                    <MenuCard imgUrl='/images/couscous.jfif' price={5} id='3' productName='couscous' />
                    <MenuCard imgUrl='/images/pizza.jfif' price={5} id='4' productName='pizza' />
                    <MenuCard imgUrl='/images/couscous.jfif' price={5} id='5' productName='couscous' />
                    <MenuCard imgUrl='/images/sandwitchs.jpg' price={5} id='6' productName='sandwitch' />
                    <MenuCard imgUrl='/images/sandwitchs.jpg' price={5} id='7' productName='sandwitch' />
                    <MenuCard imgUrl='/images/sandwitchs.jpg' price={5} id='8' productName='sandwitch' />

                </div>
            </section>
        </div>
    )
}



export default Menu