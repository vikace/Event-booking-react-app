import Home from '../component/Home';
import Explore from '../component/Explore';
import AboutUs from '../component/AboutUs';
import Login from '../component/Login';
import Signup from '../component/Signup';
import EventPrev from '../component/EventPrev';
import Profile from '../component/Profile';
import CreateEvent from '../component/CreateEvent';
import Wishlist from '../component/Wishlist';
export default function GetComp({page})
{
    
    switch(page)
    {
        case 'home':
            return <Home/>;
            break;
        case 'explore':
            return <Explore/>;
            break;
        case 'aboutus':
            return <AboutUs/>;
            break;
        case 'login':
            return <Login/>;
            break;
        case 'signup':
            return <Signup/>
            break;
        case 'eventprev':
            return <EventPrev/>;
            break;
        case 'profile':
            return <Profile/>;
            break;
        case 'createevent':
            return <CreateEvent/>;
            break;
        case 'wishlist':
            return <Wishlist/>;
            break;
        default:
            return null;
    }
}