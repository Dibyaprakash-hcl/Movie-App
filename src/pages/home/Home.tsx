
import Banner from "./banner/Banner";
import Trending from "./trending/Trending";
import "./style.scss";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Upcoming from "./upcoming/Upcoming";
import TopBar from "../../components/TopBar";

const Home = () => {
    return (
        <div className="homePage">
            <TopBar data-testid="topbar"/>
            <Banner/>
            <Trending/>
            <Popular/>
            <TopRated/>
            <Upcoming />
        </div>
    )
}

export default Home;