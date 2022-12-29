import {useState} from 'react'
import { 
	AppBar, 
	Box, 
	Button, 
	IconButton, 
	Typography, 
	useTheme,
	Toolbar,
	Menu,
	Container,
	Avatar,
	Tooltip,
	MenuItem,
	Grid
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import { tokens } from "../dashboard/theme";
import useAuth from '../hooks/authentication';
import { useNavigate } from 'react-router-dom';

const pages = [
	{
		name: 'Home',
		url: '/'
	},
	{
		name: 'About', 
		url: '/about'
	},
	{
		name: 'Contact', 
		url: '/contact'
	},
	{
		name: 'Categories',
		url: '/category'
	}
];
const settings = [
	{
		name: 'Profile', 
		url: '/dashboard/profile'
	},
	{
		name: 'Account', 
		url: '/dashboard/account'
	},
	{
		name: 'Dashboard', 
		url: '/dashboard'
	},
	{
		name: 'Logout',
		url: '/logout'
	}
];

const Navigation = () =>
{
	const {auth} = useAuth();
	const navigate = useNavigate();
	const theme = useTheme();
    const colors = tokens(theme.palette.mode);

	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};	

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	
	const handleRedirect = (url) => {
		navigate(url, {replace: true})
	}

	// const [backend_data, set_backend_data] = useState([])

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
    //     .then(res => res.json())
    //     .then(data => {
    //         set_backend_data(data)
    //     })
    //     .catch((err) => {
    //         console.log(err.message);
    //     });
    // }, [])

    return (
        <AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
				<RestaurantOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
				<Typography
					variant="h6"
					noWrap
					component="a"
					href="/"
					sx={{
					mr: 2,
					display: { xs: 'none', md: 'flex' },
					fontFamily: 'monospace',
					fontWeight: 700,
					letterSpacing: '.3rem',
					color: 'inherit',
					textDecoration: 'none',
					}}
				>
					Food
				</Typography>

				<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
					<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					onClick={handleOpenNavMenu}
					color="inherit"
					>
					<MenuIcon />
					</IconButton>
					<Menu
					id="menu-appbar"
					anchorEl={anchorElNav}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					open={Boolean(anchorElNav)}
					onClose={handleCloseNavMenu}
					sx={{
						display: { xs: 'block', md: 'none' },
					}}
					>
					{pages.map((page) => (
						<MenuItem key={page} onClick={handleCloseNavMenu}>
							<Typography textAlign="center" onClick={ () => handleRedirect(page.url) }>
								{page.name}
							</Typography>
						</MenuItem>
					))}
					</Menu>
				</Box>
				<RestaurantOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
				<Typography
					variant="h5"
					noWrap
					component="a"
					href=""
					sx={{
					mr: 2,
					display: { xs: 'flex', md: 'none' },
					flexGrow: 1,
					fontFamily: 'monospace',
					fontWeight: 700,
					letterSpacing: '.3rem',
					color: 'inherit',
					textDecoration: 'none',
					}}
				>
					Food Recipe
				</Typography>
				<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
					{pages.map((page) => (
					<Button
						key={page}
						onClick={handleCloseNavMenu}
						sx={{ my: 2, color: 'white', display: 'block' }}
						href={ page.url }
					>
						{page.name}
					</Button>
					))}
				</Box>
				{ auth.user ? 
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar alt="Remy Sharp" src={auth.user.avatar} />
						</IconButton>
						</Tooltip>
						<Menu
						sx={{ mt: '45px' }}
						id="menu-appbar"
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
						>
						<Grid container>
							<Box  mr="20px" ml="10px" mt="10px" mb="10px">
								<Grid item xs={4}>
									<Avatar aria-label="recipe" color={colors.redAccent[400]} src={auth.user.avatar}/>
								</Grid>
							</Box>
							<Box  mr="20px" mt="20px" mb="10px">
								<Grid item xs={4}>
									{auth.user.username}
								</Grid>
							</Box>
						</Grid>
						{settings.map((setting) => (
							<MenuItem key={setting} onClick={handleCloseUserMenu}>
							<Typography textAlign="center" onClick={()=> handleRedirect(setting.url)}>{setting.name}</Typography>
							</MenuItem>
						))}
						</Menu>
					</Box> : 
					<Box>
						<Button
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: 'white', display: 'block' }}
							href={ "/login" }
						>
						Login
						</Button>
					</Box> }
				</Toolbar>
			</Container>
    </AppBar>
    );
}

export default Navigation;
