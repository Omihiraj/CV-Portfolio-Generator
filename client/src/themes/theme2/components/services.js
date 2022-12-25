import serviceImg from '../img/service.png'
export const Services = ()=>{
    return(
        <div className='absolute left-[55%] top-[260%]'>
        <p className='text-xl text-secondaryblue font-normal pb-6'>Services</p>
        
        <div class="grid grid-cols-2 gap-4 pt-6">
            <div>
                <img src = {serviceImg}/>
                <p>Web Development</p>
                <p className='text-theme2text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sasa. asdsss.</p>
            </div>
            <div>
                <img src = {serviceImg}/>
                <p>App Development</p>
                <p className='text-theme2text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sasa. asdsss.</p>
            </div>
            <div>
                <img src = {serviceImg}/>
                <p>UI/UX Design</p>
                <p className='text-theme2text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sasa. asdsss.</p>
            </div>
            <div>
                <img src = {serviceImg}/>
                <p>IOT Development</p>
                <p className='text-theme2text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sasa. asdsss.</p>
            </div>
            
        </div>
    </div>
    )

}