import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PostAddIcon from '@material-ui/icons/PostAdd';
// import UpdateProfile from './UpdateProfile';

// icon imports
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Help } from '@material-ui/icons';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Link from 'next/link';
import ExitToApp from '@material-ui/icons/ExitToApp';

import UpdateIndividualEmployerProfile from './UpdateIndividualEmployerProfile';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	logo: {
		height: theme.mixins.toolbar.minHeight,
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

function IndividualEmployerDashboard(props) {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	// Drawer
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const options1 = [
		{
			name: 'Dashboard',
			icon: <DashboardIcon />,
			url: '/IndividualEmployerDashboard',
		},
		{
			name: 'Update Profile',
			icon: <AccountBoxIcon />,
			url: '/jobSeekerUpdateProfile',
		},
		{
			name: 'Post a Job',
			icon: <PostAddIcon />,
			url: 'individualEmployerJobPost',
		},
		{ name: 'Settings', icon: <SettingsIcon />, url: '/jobSeekerSettings' },
	];

	const options2 = [
		{ name: 'Learn to Post a Job', icon: <Help />, url: '/' },
		{ name: 'Log Out', icon: <ExitToApp />, url: '/' },
	];
	const drawer = (
		<div>
			<div className={classes} />
			<Divider />
			<List>
				<ListItem className={classes.logo}>Kaamxa.com</ListItem>
				<Divider />
				{options1.map((option, index) => (
					<Link key={option.name} href={option.url}>
						<ListItem button key={option.name}>
							<ListItemIcon>{option.icon}</ListItemIcon>
							<ListItemText primary={option.name} />
						</ListItem>
					</Link>
				))}
			</List>
			<Divider />
			<List>
				{options2.map((option, index) => (
					<ListItem button key={option.name}>
						<ListItemIcon>{option.icon}</ListItemIcon>
						<ListItemText primary={option.name} />
					</ListItem>
				))}
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar>
					<Typography variant='h6' noWrap>
						Dashboard
					</Typography>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label='mailbox folders'>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation='css'>
					<Drawer
						container={container}
						variant='temporary'
						anchor='right'
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation='css'>
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant='permanent'
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<UpdateIndividualEmployerProfile />
			</main>
		</div>
	);
}

IndividualEmployerDashboard.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default IndividualEmployerDashboard;
