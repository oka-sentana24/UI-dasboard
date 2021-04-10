import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import DraftsIcon from '@material-ui/icons/Drafts'
import { makeStyles } from '@material-ui/core/styles';
import Link from "@material-ui/core/Link";
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import PersonIcon from '@material-ui/icons/Person';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Avatar from '@material-ui/core/Avatar';
import NavigateNext from '@material-ui/icons/NavigateNext';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
  }));
export default function Sidebar(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };

    return(
    <List>
        <Link href="/dasboard">
            <ListItem button>
                <ListItemIcon>
                <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dasboard" />
            </ListItem>
        </Link>

        {/* <Link href="#"> */}
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
                {open ? <ExpandMore /> : <NavigateNext/> }
            </ListItemIcon>
            <ListItemText primary="Master Data" />
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <Link href="/siswa">
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                        <AssignmentIndIcon />
                        </ListItemIcon>
                        <ListItemText primary="Kelola Data Siswa" />
                    </ListItem>
                </Link>
                <Link href="#">
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                        <BusinessCenterIcon />
                        </ListItemIcon>
                        <ListItemText primary="Kelola Data Guru" />
                    </ListItem>
                </Link>
                <Link href="/kelas">
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                        <MeetingRoomIcon />
                        </ListItemIcon>
                        <ListItemText primary="Kelola Data Kelas" />
                    </ListItem>
                </Link>
            </List>
        </Collapse>
        <Link href="#">
            <ListItem button>
                <ListItemIcon>
                <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Kelola User" />
            </ListItem>
        </Link>
        <Link href="#">
            <ListItem button>
                <ListItemIcon>
                <AssessmentIcon />
                </ListItemIcon>
                <ListItemText primary="Report" />
            </ListItem>
        </Link>
    </List>
    )
}