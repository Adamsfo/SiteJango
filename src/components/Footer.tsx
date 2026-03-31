import logoJango from "@/assets/logo-jango.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <img src={logoJango} alt="Pesque Pague Jango" className="h-12" />
          <span className="text-xl font-bold font-display">Pesque Pague Jango</span>
        </div>
        <p className="text-background/60 text-sm font-body">
          © {new Date().getFullYear()} Pesque Pague Jango. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
