import one from "../img/i1.jpg"
import two from "../img/i2.jpg"
import three from "../img/i3.jpg"
import four from "../img/i4.jpg"

function Recomment(){
    return(
        <div class="recommended">
        <h1>Recommended for You</h1>
        <p>pick the best fit</p>
        <div class="recommended__condianer">
            <div class="recommended__card--one">
                <img src={one} alt=""></img>
                <h3>Java Full Satck Development</h3>
                <p>Jhon Snow</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹499 <del>1999</del></p>
            </div>
            <div class="recommended__card--one">
                <img src={two} alt=""></img>
                <h3>python Development Course</h3>
                <p>Rob Stark</p>
                <p>3.9⭐⭐⭐</p>
                <p>₹499 <del>1999</del></p>
            </div>
            <div class="recommended__card--one">
                <img src={three} alt=""></img>
                <h3>UI & UX</h3>
                <p>Billy Butcher</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>₹499 <del>1999</del></p>
            </div>
            <div class="recommended__card--one">
                <img src={four}alt=""></img>
                <h3>Web Development</h3>
                <p>Deep</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹499 <del>1999</del></p>
            </div>
        </div>


    </div>
    )
}
export default Recomment