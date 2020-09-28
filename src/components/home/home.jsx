import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  Typography,
} from '@material-ui/core';
import { withNamespaces } from 'react-i18next';
import { colors } from '../../theme';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import DetailsIcon from '@material-ui/icons/Details';
import LockIcon from '@material-ui/icons/Lock';
import girl1 from '../../assets/yfu/girlmenu1transp.png';
import girl2 from '../../assets/yfu/girlmenu2trasnp.png';

const styles = theme => ({
  root: {
    flex: 1,
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    }
  },
  card: {
    flex: '1',
    height: '25vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    borderRadius: '0px',
    transition: 'background-color 0.2s linear',
    [theme.breakpoints.up('sm')]: {
      height: '100vh',
      minWidth: '20%',
      minHeight: '50vh',
    }
  },
  stake: {
    backgroundColor: colors.white,
    '&:hover': {
      backgroundColor: colors.orange,
      '& .title': {
        color: colors.white
      },
      '& .icon': {
        color: colors.white
      },
      '& .girl': {
        display: 'none'
      },
      '& .girlBackground': {
        backgroundImage: 'none',
      }
    },
    '& .title': {
      color: colors.orange
    },
    '& .icon': {
      color: colors.orange
    },
    '& .girl': {
      display: 'block'
    },
    '& .girlBackground': {
      backgroundImage: 'url('+girl2+')',
      paddingLeft: 310,
      width: 500,
      height: 611,
    }
  },
  vote: {
    backgroundColor: colors.white,
    '&:hover': {
      backgroundColor: colors.tomato,
      '& .title': {
        color: colors.white,
      },
      '& .icon': {
        color: colors.white
      },
      '& .girl': {
        display: 'none'
      },
      '& .girlBackground': {
        backgroundImage: 'none',
      }
    },
    '& .title': {
      color: colors.tomato,
      display: 'block'
    },
    '& .soon': {
      color: colors.tomato,
      display: 'none'
    },
    '& .icon': {
      color: colors.tomato
    },
    '& .girl': {
      display: 'block'
    },
    '& .girlBackground': {
      backgroundImage: 'url('+girl1+')',
      paddingLeft: 75,
      width: 500,
      height: 611,
    }
  },
  lock: {
    backgroundColor: colors.white,
    '&:hover': {
      backgroundColor: colors.tomato,
      '& .title': {
        color: colors.white,
      },
      '& .icon': {
        color: colors.white
      }
    },
    '& .title': {
      color: colors.tomato,
    },
    '& .icon': {
      color: colors.tomato
    },
  },
  title: {
    padding: '24px',
    paddingBottom: '0px',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '24px'
    }
  },
  icon: {
    fontSize: '60px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '100px',
    }
  },
  link: {
    textDecoration: 'none'
  }
});

class Home extends Component {

  constructor(props) {
    super()

    this.state = {
    }
  }

  render() {
    const { classes, t, location } = this.props;

    return (
      <div className={ classes.root }>
        <Card className={ `${classes.card} ${classes.stake}` } onClick={ () => { this.nav(location.pathname+'staking') } }>
          <div className= {'girlBackground'}>
            <DetailsIcon className={ `${classes.icon} icon` } />
            <Typography variant={'h3'} className={ `${classes.title} title` }>Stake</Typography>
          </div>
        </Card>
        <Card className={ `${classes.card} ${classes.vote}` } onClick={ () => { this.nav(location.pathname+'vote') } }>
        <div className= {'girlBackground'}>
          <HowToVoteIcon className={ `${classes.icon} icon` } />
          <Typography variant={'h3'} className={ `${classes.title} title` }>Vote</Typography>
        </div>

        </Card>
        {/*<Card className={ `${classes.card} ${classes.lock}` } onClick={ () => { this.nav(location.pathname+'lock') }}>
          <LockIcon className={ `${classes.icon} icon` } />
          <Typography variant={'h3'} className={ `${classes.title} title` }>Lock</Typography>
        </Card>*/}
      </div>
    )
  };

  nav = (screen) => {
    this.props.history.push(screen)
  }
}

export default withNamespaces()(withRouter(withStyles(styles)(Home)));
