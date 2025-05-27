
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Expertise", href: "/expertise" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b sticky top-0 z-40 bg-background/80 backdrop-blur-sm">
      <div className="container flex justify-between items-center h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading font-bold text-xl md:text-2xl bg-gradient-to-r from-portfolio-primary to-portfolio-secondary bg-clip-text text-transparent">
            Jahid's Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium transition-colors hover:text-portfolio-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container py-4 px-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium py-2 transition-colors hover:text-portfolio-primary"
              >
                {item.label}
              </Link>
            ))}
            
          </div>
        </div>
      )}
    </header>
  );
}
