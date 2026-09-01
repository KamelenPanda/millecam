import Logo from "./Logo";
import FrameworkList from "./FrameworkList";

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
            <FrameworkList items={["NIS2", "ISO 27001", "CyFun", "GDPR"]} tone="paper" className="mt-3" />
            <a href="/veelgestelde-vragen" className="mt-4 block text-sm text-paper/60 hover:text-paper hover:underline">
              Veelgestelde vragen
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold">Contact</p>
            <p className="mt-3 text-sm text-paper/60">© {new Date().getFullYear()} Millecam</p>
            <div className="mt-3 flex flex-wrap gap-3 text-xs text-paper/50">
              <a href="/privacybeleid" className="hover:text-paper hover:underline">Privacybeleid</a>
              <a href="/cookiebeleid" className="hover:text-paper hover:underline">Cookiebeleid</a>
              <a href="/algemene-voorwaarden" className="hover:text-paper hover:underline">Algemene voorwaarden</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-paper/10 pt-6 text-xs text-paper/40">
          Millecam · Robin Millecam · Sinte Annalaan 34, 9300 Aalst · BTW{" "}
          <a
            href="https://kbopub.economie.fgov.be/kbopub/toonondernemingps.html?ondernemingsnummer=1026876048"
            target="_blank"
            rel="noreferrer"
            className="hover:text-paper/70 hover:underline"
          >
            BE 1026.876.048
          </a>
        </div>
      </div>
    </footer>
  );
}
