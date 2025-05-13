function Navbar(){
    return(
        // <!--navbar-->
    <div className="navbar">
        <div className="navbar__one">
            <h1>Udemy</h1>
        </div>
        <div className="navbar__two">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input placeholder="Search for anything here .Tech,Busness,Art...."></input>

        </div>
        <div className="navbar__three">
            <p>Trending Course</p>
            {/* <!-- <p>My learning</p> --> */}
             <div className="my-learning">
                <p>My Learning</p>
                <div className="my-learning__popup">
                    <p>You Did Not Purchase Any thing yet</p>

                </div>
             </div>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-user"></i>
        </div>
    </div>
    )
}
export default Navbar