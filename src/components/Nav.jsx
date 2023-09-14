import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
function Nav() {
  return (
    <header className="padding-x py-8 w-full absolute z-10">
      <nav className="flex py-8 justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="hidden lg:flex flex-1  justify-center items-center gap-16 ">
          {navLinks.map((item) => {
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-monts errat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="lg:hidden">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
