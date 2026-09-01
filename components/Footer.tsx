import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-container px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo variant="paper" className="h-7 w-auto" />
            <p className="mt-4 text-sm text-paper/60">info@millecam.be · millecam.be</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Diensten</p>
            <p className="mt-3 text-sm text-paper/60">NIS2 · ISO 27001 · CyFun · GDPR</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Contact</p>
            <p className="mt-3 text-sm text-paper/60">© {new Date().getFullYear()} Millecam</p>
            <div className="mt-3 flex gap-3 text-xs text-paper/50">
              <a href="/privacybeleid" className="hover:text-paper hover:underline">Privacybeleid</a>
              <a href="/cookiebeleid" className="hover:text-paper hover:underline">Cookiebeleid</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
