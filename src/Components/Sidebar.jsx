// import React from 'react';
// import s from '../Containers/SidebarContainer/style.css';

// const classes= {
// 	container : {
// 		width : '230px',
// 		backgroundColor : 'rgba(66, 79, 150, 0.05)',
// 		height : '100%',
// 		padding : '10px',
// 	},
// 	header : {
// 		'background-color' : 'red'
// 	}
// }

// export default (props) => (
// 		<div style= { classes.container } >
// 			<h1>Usuario</h1>
// 			<p>Mi dinero</p>
// 			<div>
// 				<div>
// 					<p>Actividad</p>
// 				</div>
// 				<div>
// 					<p>Informes</p>
// 				</div>
// 				<div>
// 					<p>Inversiones</p>
// 				</div>
// 			</div>

// 			<p>Cobrar</p>
// 			<div>
// 				<div>
// 					<p>Código QR</p>
// 				</div>
// 				<div>
// 					<p>Botón y link de pago</p>
// 				</div>
// 				<div>
// 					<p>Solicitar dinero</p>
// 				</div>
// 				<div>
// 					<p>Suscripciones</p>
// 				</div>
// 			</div>

// 			<p>Inversiones</p>
// 			<div>
// 				<div>
// 					<p>Enviar dinero</p>
// 				</div>
// 				<div>
// 					<p>Recargar celular</p>
// 				</div>
// 				<div>
// 					<p>Cargar SUBE</p>
// 				</div>
// 				<div>
// 					<p>Pagar servicios</p>
// 				</div>
// 			</div>

// 			<p>Configuración</p>
// 		</div>
// )


import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ListAlt from '@material-ui/icons/ListAlt';
import TrendingUp from '@material-ui/icons/TrendingUp';
import Assessment from '@material-ui/icons/Assessment';
import SelectAll from '@material-ui/icons/SelectAll';
import Link from '@material-ui/icons/Link';
import Feedback from '@material-ui/icons/Feedback';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Input from '@material-ui/icons/Input';
import MobileFriendly from '@material-ui/icons/MobileFriendly';
import CreditCard from '@material-ui/icons/CreditCard';
import Receipt from '@material-ui/icons/Receipt';
import Settings from '@material-ui/icons/Settings';
import s from '../Containers/SidebarContainer/style.css';

import Chart from './Chart';
import Avatar from './Avatar';
import Tab from './Tab';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
		height : '100%',
		backgroundColor : 'rgba(66, 79, 150, 0.05)',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
		zIndex: theme.zIndex.drawer + 1,
    // marginLeft: drawerWidth,
    // [theme.breakpoints.up('sm')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    // },
		backgroundColor:'#009ee3', 
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
	categories: {
		backgroundColor: 'rgba(66, 79, 150, 0.05)',
		fontSize: '1rem',
		fontWeight: 400,
		fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
		lineHeight: '1.5em',
	},
	container: {
		maxWidth : '230px',
		minWidth : '220px',
		backgroundColor: 'rgba(66, 79, 150, 0.05)',
	},
	subCategories: {
		margin:'0 20px',	
		color: 'rgba(0, 0, 0, 0.35)',
		fontSize: '0.8rem',
		fontWeight: '400',
		fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
		lineHeight: '1em'		
	},
	text: {
		color : 'red',
		fontSize : '0.1rem',
		// backgroundColor : 'red',
	},
	avatar: {
		display : 'flex',
	},
	avatarP: {
		alignSelf : 'center',
		margin : '0 150px 0 0',
		fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
	},
	sidebarList: {
		padding :'0 0',
		height : '1%',	
		color : 'rgba(0, 0, 0, 0.65)',
		fontSize : '15px',
		fontWeight : '100',
		fontFamily : 'Roboto, Helvetica, Arial, sans-serif',
		lineHeight : '1px'
	},
	listItem: {
		padding : '5px 20px'
	},
	colorIcon: {
		color : 'rgba(116, 112, 124, 0.4)',
	},
	

});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme, handleClick, chart, defaultClick } = this.props;

    const drawer = (
      <div className= { classes.container }>
        <div className={classes.toolbar} style= {{ 'backgroundColor':'#009ee3' }}/>
        {/* <Divider /> */}
				<List className= { classes.categories }>
	        <p className= { classes.subCategories }>
						Mi dinero
					</p>
          {['Actividad', 'Informes', 'Inversiones'].map((text, index) => (
            <ListItem className= { classes.listItem } onClick= { index === 2 && handleClick || defaultClick } button key={text}>
              <ListItemIcon >{ index === 0 && <ListAlt className= { classes.colorIcon }/> || index === 1 && <Assessment className= { classes.colorIcon } /> || index === 2 && <TrendingUp className= { classes.colorIcon } />}</ListItemIcon>
              {/* <ListItemText primary={ text }/> */}
							<p className= { classes.sidebarList }>{ text }</p>
            </ListItem>
          ))}
        </List>
        {/* <Divider /> */}
        <List className= { classes.categories }>
					<p className= { classes.subCategories }>
						Cobrar
					</p>
          {['Código QR', 'Link de pago', 'Solicitar dinero', 'Suscripciones'].map((text, index) => (
            <ListItem className= { classes.listItem } button key={text}>
              <ListItemIcon>{index === 0 && <SelectAll className= { classes.colorIcon } /> || index === 1 && <Link className= { classes.colorIcon } /> || index === 2 && <Feedback className= { classes.colorIcon }/> || index === 3 && <Subscriptions className= { classes.colorIcon }/> }</ListItemIcon>
              {/* <ListItemText primary={text} /> */}
							<p className= { classes.sidebarList }>{ text }</p>
            </ListItem>
          ))}
        </List>
        {/* <Divider /> */}
        <List className= { classes.categories }>
					<p className= { classes.subCategories }>
						Pagar
					</p>
          {['Enviar dinero', 'Recargar celular', 'Cargar SUBE', 'Pagar servicios'].map((text, index) => (
            <ListItem className= { classes.listItem } button key={text}>
              <ListItemIcon>{index === 0 && <Input className= { classes.colorIcon } /> || index === 1 && <MobileFriendly className= { classes.colorIcon }/> || index === 2 && <CreditCard className= { classes.colorIcon }/> || index === 3 && <Receipt className= { classes.colorIcon }/> }</ListItemIcon>
              {/* <ListItemText primary={text} className= { s.prueba }/> */}
							<p className= { classes.sidebarList }>{ text }</p>
					  </ListItem>
          ))}
        </List>
				<List className= { classes.categories }>
					<ListItem className= { classes.listItem } button key={'Configuracion'}>
						<ListItemIcon> <Settings className= { classes.colorIcon } /> </ListItemIcon>
						<p className= { classes.sidebarList }>Configuracion</p>
						{/* <ListItemText primary={'Configuracion'} /> */}
					</ListItem>
				</List>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
						<div className= { classes.avatar }>
							<Avatar />
							<p className= { classes.avatarP }>Javier</p>
						</div>
            <Typography variant="h6" color="inherit" noWrap>
              Inversiones
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
				{
					chart && <Tab />
				}	

        {/* <main className={classes.content}>
          <div className={classes.toolbar} />
						{
							chart && <Tab />
						}	
        </main> */}
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);