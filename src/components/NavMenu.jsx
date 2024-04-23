import '../style/App.css'

function NavMenu() {
    const handleLinkClick = () => {
        window.location.href = window.location.href;
    };
    
    return(
        <nav className="nav-block">
            <section>
                <article className='links-block'>
                    <div>
                        <svg onClick={handleLinkClick} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                        </svg>
                        <h4>Resource center</h4>
                    </div>
                    <h4>Blog</h4>
                    <h4>Featured</h4>
                    <h4>About</h4>
                    <h4>Contact</h4>
                </article>
            </section>
            <section className='logo-block'>
                <article>
                    <div></div>
                    <h2>Resource</h2>
                </article>
            </section>
            <form action="/search" method="get">
                <input type="text" name="" placeholder='Search website...' />
                <button type='submit'>Search</button>
            </form>
        </nav>
    )
}

export default NavMenu;