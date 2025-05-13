import sale from "../img/sale.jpg"

function Category(){
    return(
        <><div className="Category">
            <p>Development</p>
            <p>Business</p>
            <p>IT & Software </p>
            <p>Personal Development</p>
            <p>Design</p>
            <p>Marketing</p>
        </div><div className="main-image">
                <img src={sale} alt="sale-image"></img>
                <div className="main-image__box">
                    <div className="sale-image__offer-box">
                        <div className="sale-image__offer-box--element">
                            <h1>Udemy Flash Sale ! 24 hour to Save</h1>
                            <p>get Top Course for Just ₹499.Just one day to save but lifetime to Learn </p>
                        </div>
                    </div>
                </div>
            </div></>
    )
    
}
export default Category