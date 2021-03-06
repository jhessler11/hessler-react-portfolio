


function Footer() {

    return (
        <section className="footer">
            <div className="foot content has-text-centered">
                <div className='icon m-2 image is-48x48'>
                    <a href='https://github.com/JHESSLER11'>
                    <img src= {process.env.PUBLIC_URL + '/images/GitHub-Mark-32px.png'} alt='Github Logo'></img>
                    </a>
                </div>
                <div className='icon m-2 image is-48x48'>
                <a href= 'https://www.linkedin.com/in/hessler11/'>
                    <img src= {process.env.PUBLIC_URL + '/images/linkedin-32.png'} alt='linkedin Logo'></img>
                    </a>
                </div>
                <div className='icon m-2 image is-48x48'>
                <a href= 'https://stackoverflow.com/users/18665163/hess'>
                    <img src= {process.env.PUBLIC_URL + '/images/stack-overflow-32.png'} alt='Stack Overflow Icon'></img>
                    </a>
                    
                </div>
            </div>
        </section>
    )

}

export default Footer;