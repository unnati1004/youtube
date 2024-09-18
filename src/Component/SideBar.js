import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
// Reusable MenuItem Component
const MenuItem = ({ icon: Icon, text, to }) => (
  <li className="flex items-center gap-2 text-base font-medium p-2 hover:bg-gray-50 text-start rounded-lg">
    {to ? (
      <Link to={to} className="flex items-center gap-2">
        <Icon />
        {text}
      </Link>
    ) : (
      <>
        <Icon />
        {text}
      </>
    )}
  </li>
);

export const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  const primaryMenu = [
    { text: "Home", icon: HomeIcon, to: "/" },
    { text: "Shorts", icon: WhatshotOutlinedIcon },
    { text: "Subcription", icon: SubscriptionsIcon },
   
  ];
  const subscriptionsMenu = [
    { text: "Music", icon: MusicNoteOutlinedIcon, },
    { text: "News", icon: NewspaperOutlinedIcon },
    { text: "Movie", icon: MovieCreationOutlinedIcon,},
    { text: "Shopping", icon: ShoppingBagOutlinedIcon},
    { text: "Sports", icon: EmojiEventsOutlinedIcon},
    { text: "Gaming", icon: SportsEsportsOutlinedIcon},
    { text: "Trending", icon: WhatshotOutlinedIcon },
    { text: "Live", icon: LiveTvOutlinedIcon },
  ];
  const watchLaterMenu = [
    { text: "History", icon: HistoryOutlinedIcon},
    { text: "PlayList", icon: PlaylistPlayOutlinedIcon },
    { text: "Watch Later", icon: WatchLaterOutlinedIcon, to: "/Movie" },
    { text: "Liked Videos", icon: ThumbUpOutlinedIcon },
  ];

  // const subscriptionsMenu = ["Music", "Sport", "Gaming", "Movies"];
  // const watchLaterMenu = ["Music", "Sport", "Gaming", "Movies"];

  return (
    <div className="p-5 w-[14rem] h-full fixed top-[5.3rem] left-30 right-30 bg-white z-50 p-2">
      <ul>
        {primaryMenu.map((item, i) => (
          <MenuItem key={i} icon={item.icon} text={item.text} to={item.to} />
        ))}
      </ul>
      
      <h1 className="font-bold pt-5 flex items-center gap-2">
        <WatchLaterOutlinedIcon /> Watch Later
      </h1>
      <ul>
        {watchLaterMenu.map((item, i) => (
          <MenuItem key={i}icon={item.icon} text={item.text} to={item.to}/>
        ))}
      </ul>
      <h1 className="flex items-center gap-2 font-bold text-lg pt-5">
        <SubscriptionsIcon /> Subscription
      </h1>
      <ul>
        {subscriptionsMenu.map((item, i) => (
          <MenuItem key={i} icon={item.icon} text={item.text} to={item.to} />
        ))}
      </ul>
    </div>
  );
};
