import { Link } from "react-router-dom";
import {ReactComponent as HomeIcon} from './svg/home.svg';
import {ReactComponent as NotificationsIcon} from './svg/notifications.svg';
import {ReactComponent as ProfileIcon} from './svg/profile.svg';
import {ReactComponent as MoreIcon} from './svg/more.svg';
import {ReactComponent as MessagesIcon} from './svg/messages.svg';

export default function DesktopNavigationLink(props) {
  const classes = ()=> {
    const classnames = ['primary']
    if (props.handle === props.active) {
      classnames.push('active')
    }
    return classnames.join(' ')
  }

  const icon = ()=> {
    switch(props.handle){
      case 'home':
        return <HomeIcon className='icon' />
        
      case 'notifications':
        return <NotificationsIcon className='icon' />
        
      case 'profile':
        return <ProfileIcon className='icon' />
      
      case 'more':
        return <MoreIcon className='icon' />
      
      case 'messages':
        return <MessagesIcon className='icon' />
      
    }
  }

  return (
    <Link to={props.url} className={classes()} href="#">
      {icon()}
      <span>{props.name}</span>
    </Link>
  );
}