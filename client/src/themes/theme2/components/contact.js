import contactImg from '../img/contact.png'
export const Contact = ()=>{
    return(
        <div className='absolute left-[55%] top-[810%] '>
            <p className='text-xl text-secondaryblue font-normal pb-6'>Contact</p>
            <div className="grid grid-cols-2 gap-0">
                <div>
                    <div class="mb-6">
                        <label for="base-input" className="block mb-2 text-sm font-medium text-white">Base input</label>
                        <input type="text" id="base-input" className="bg-theme2bg border border-secondarypink text-white text-sm rounded-lg focus:ring-secondarypink focus:border-secondarypink block w-full p-2.5  dark:placeholder-gray-400   "/>
                    </div>
                </div>
                <div>
                    <img src={contactImg}/>
                </div>
            </div>
        </div>
    )
    
}