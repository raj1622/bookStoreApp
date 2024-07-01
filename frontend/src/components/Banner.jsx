import React from 'react'
function Banner() {
    return (
        <>
            <div className='h-[10rem]'></div>
            <div className=" dark:bg-slate-900 w-auto ml-7 mr-7 mb-10 flex">
                <div className='w-1/2 '>
                    <div className='space-y-7'>
                        <h1 className='text-4xl font-bold'>
                            Hello, Welcome here to learn something <span className='text-pink-500'>new everyday!!!</span>
                        </h1>
                        <p className='text-xl font-semi-bold'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, delectus maxime atque, aut aliquid laudantium voluptas, provident quas esse non nam beatae! Ipsam mollitia eaque, sit quasi voluptatem aliquid illo?
                        </p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                        <button className="btn btn-secondary">Secondary</button>

                    </div>
                    
                </div>
                <div className='w-1/2 ml-[2rem] '>
                    <div className='bg- w-100 h-[25rem]' >
                    <img src="https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?t=st=1718910400~exp=1718914000~hmac=e59aeb7b875da963b716337ffb71f15729b79c3a59a10d882f7dd40d523073cc&w=740"
                    className='w-[100%] h-[100%] rounded-full'></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
