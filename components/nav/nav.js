import ExternalLinks from './externalLinks';
import NavLink from './navLink';
import Languages from './languages';

const Nav = ({user, isOpen}) => {

  //TODO: data for pages

  return (
    <nav className="nav" className={isOpen ? 'nav open' : 'nav'}>
      <Languages />
      <div className="nav__container-img">
        <img src="/images/logo.png" alt="" />
      </div>
      <ul>
        <NavLink path={"/"} text='home' />
        <NavLink path={"/our-beers"} text='ourBeers' />
        <NavLink path={"/premium-beers"} text='premiumBeers' />
        <NavLink path={"/jobs"} text='jobs' />
        <NavLink path={"/history"} text='history' />
        <NavLink path={"/wt"} text='wt' />
        <NavLink path={"/contact"} text='contact' />
        <NavLink path={"/shop"} text='shop' />
        <NavLink path={"/checkout"} text='checkout' />

        {user?.email !== ''
          ? <NavLink path={"/login"} text='logout' />
          : <NavLink path={"/login"} text='login' />
        }

      </ul>

      <ExternalLinks />
    </nav>
  );
};

export default Nav;