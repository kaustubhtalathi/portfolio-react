import { MdOutlineWavingHand } from "react-icons/md";
import { Link } from "react-router-dom";
function Home() {
    return (
        <div className="h-full text-2xl mt-0 mb-0 ml-auto mr-auto w-2/3 text text-justify">
            <div className="hero bg-base-200">
                <div className="hero-content text-center">
                    <div>
                        <div className="text-5xl font-bold flex justify-center">
                            Hello
                            <MdOutlineWavingHand />
                        </div>
                        <p className="py-6 text-left">
                            I work as a Principal Member Of Technical Staff for
                            Oracle Corporation since February 2019. I have over
                            14 years of experience in architecting, designing,
                            developing &amp; building highly reliable, highly
                            scalable, and performant web applications. I have
                            managed a team of six developers &amp; led a team of
                            on-shore and off-shore developers. I architect web
                            applications by using the latest and best available
                            technologies, deciding app structure, best practices
                            &amp; mock API&apos;s.
                        </p>
                        <p className="py-6 text-left">
                            I am a father of two daughters and I am based in the
                            bay area. I love to watch soccer, play chess and
                            video games.
                        </p>
                        <Link to="/resume" className="btn btn-primary">
                            Resume
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
