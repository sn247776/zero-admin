import { NavLink } from 'react-router-dom';
import DashboardLinks from './dashboard-link';

function SideBarNav() {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
        {
            DashboardLinks.map((links)=>(
                <NavLink
                to={links.href}
                className={({ isActive }) => {
                    return `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                        isActive && 'bg-muted'
                    }`;
                }}>
                <links.icon className="h-4 w-4" />
                {links.label}
            </NavLink>
            ))
        }
</nav>
  )
}

export default SideBarNav