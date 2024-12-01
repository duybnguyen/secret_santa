import "./home.scss"
import bgVideo from "../../assets/bg-video.mp4"
import { Link } from "react-router-dom"

const Home = (): JSX.Element => {
    return (
        <section className="home-container">
            <video 
                className="bg-video"
                src={bgVideo}
                autoPlay
                loop    
            ></video>
            <div className="hero-container">
                <h1>Welcome to the first annual B.O.B.B.N secret santa!</h1>
                <div className="auth">
                    <Link to="/signup" className="signup">Sign Up</Link>
                    <Link to="/signup" className="signup">Sign Up</Link>
                </div>
            </div>
        </section>
    )

}
export default Home 