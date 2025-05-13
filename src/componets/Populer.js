import one1 from "../img/i1.jpg"
import two2 from "../img/i2.jpg"
import three3 from "../img/i3.jpg"
import four4 from "../img/i4.jpg"
import five from "../img/i5.png"
import six from "../img/i6.jpg"
import seven from "../img/i7.jpg"
import eight from "../img/i8.jpg"
import nine from "../img/i9.png"
function Populer(){
    return(
<div class="populer">
        <h1>Most Populer</h1>
        <p>Pick the Best Fit</p>
        <div class="populer__section">
            <div class="populer__section--card">
                <img src={one1} alt=""></img>
                <h3>Java Full Satck Development</h3>
                <p>Jhon Snow</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹499 <del>1999</del></p>
            </div>
            <div class="populer__section--card">
                <img src={two2} alt=""></img>
                <h3>python Development Course</h3>
                <p>Rob Stark</p>
                <p>3.9⭐⭐⭐</p>
                <p>₹499 <del>1999</del></p>
            </div>
            <div class="populer__section--card">
                <img src={three3} alt=""></img>
                <h3>UI & UX</h3>
                <p>Billy Butcher</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>₹499 <del>1999</del></p>
            </div>
            <div class="populer__section--card">
                <img src={four4} alt=""></img>
                <h3>Web Development</h3>
                <p>Deep</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>₹499 <del>1999</del></p>
            </div>
            <div class="populer__section--card">
                <img src={six} alt=""></img>
                <h3>UI & UX Design</h3>
                <p>Aarya Stark</p>
                <p>4.3 ⭐⭐⭐⭐</p>
                <p>₹499 <del>1999</del></p>
            </div>
            <div class="populer__section--card">
                <img src={seven} alt=""></img>
                <h3>Ethical Hacking</h3>
                <p>Mr.Malware</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>₹499 <del>1999</del></p>
            </div>
            <div class="populer__section--card">
                <img src={eight} alt=""></img>
                <h3>Video Ediing</h3>
                <p>Ms.Nairobi</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>₹499 <del>1999</del></p>
            </div>
            <div class="populer__section--card">
                <img src={nine} alt=""></img>
                <h3>Advance Java Programming</h3>
                <p>Walter White</p>
                <p>5 ⭐⭐⭐⭐⭐</p>
                <p>₹499 <del>1999</del></p>
            </div>
            </div>
        </div>
    )
}
export default Populer