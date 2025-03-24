
function Header(){
    
    return(
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b-2 border-b-gray-400 bg-maroon text-white'>
            <header className='md:flex items-start gap-5 font-medium hidden'>
                <h1 className="text-base">Website</h1>
                <div className="items-center">
                    <ul className='md:flex items-start gap-5 font-medium hidden'>
                        <li className="py-1">Home</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                        <li className="py-1">Bookings</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                        <li className="py-1">Appointmens</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                    </ul>
                </div>
            </header>

        </div>
    );
    
}

export default Header