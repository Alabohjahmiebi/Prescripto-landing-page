import { NavLink } from "@/components/NavLink";
import logoIcon from "@/assets/logo-icon.png";

const Navigation = () => {
  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logoIcon} alt="Prescripto" className="h-12 w-12" />
            <span className="text-2xl font-bold text-foreground">Prescripto</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
