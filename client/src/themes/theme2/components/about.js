export const About = ()=>{
    return (
        <div className='absolute left-[55%] top-[150%]'>
            <p className='text-xl text-secondaryblue font-normal pb-6'>About Me</p>
            <p className='text-base text-theme2text font-normal '>
                orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatioas.
            </p>
            <div class="grid grid-cols-2 gap-4 pt-6">
                <div>
                    <div className='text-base text-secondaryblue font-normal inline'>Age:</div>
                    <div className='text-base text-theme2text font-normal inline'> 25</div>
                </div>
                <div>
                    <div className='text-base text-secondaryblue font-normal inline'>Residence:</div>
                    <div className='text-base text-theme2text font-normal inline'> SriLanka</div>
                </div>
                <div>
                    <div className='text-base text-secondaryblue font-normal inline'>Freelance:</div>
                    <div className='text-base text-theme2text font-normal inline'> Available</div>
                </div>
                <div>
                    <div className='text-base text-secondaryblue font-normal inline'>Address:</div>
                    <div className='text-base text-theme2text font-normal inline'> Colombo</div>
                </div>
                <div>
                    <div className='text-base text-secondaryblue font-normal inline'>Phone:</div>
                    <div className='text-base text-theme2text font-normal inline'> +94100000000</div>
                </div>
                <div>
                    <div className='text-base text-secondaryblue font-normal inline'>Email:</div>
                    <div className='text-base text-theme2text font-normal inline'> email.gmail.com</div>
                </div>
            </div>
        </div>
    )
}