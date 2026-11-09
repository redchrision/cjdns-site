import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import { LangProvider, useLang } from './i18n.jsx';
import Logo from './components/Logo.jsx';
import Home from './pages/Home.jsx';
import Legal from './pages/Legal.jsx';
import NotFound from './pages/NotFound.jsx';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function SkipLink() {
  const { t } = useLang();
  return (
    <a className="skip-link" href="#main">
      {t.nav.skip}
    </a>
  );
}

function LangEffect() {
  const { lang } = useLang();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}

function Nav() {
  const { t, lang, toggle } = useLang();
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  // close the mobile menu on navigation and on Escape
  useEffect(() => setOpen(false), [pathname, hash]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="nav">
      <Link className="nav-brand" to="/">
        <span className="brand-mark">
          <Logo size={26} />
        </span>
        CJDNS
      </Link>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((o) => !o)}
      >
        <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
          {open ? (
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
        <span className="sr-only">{t.nav.menu}</span>
      </button>
      <nav id="site-nav" className={`nav-links${open ? ' open' : ''}`} aria-label="Main">
        <Link to="/#consulting">{t.nav.consulting}</Link>
        <Link to="/#research">{t.nav.research}</Link>
        <Link to="/#credentials">{t.nav.credentials}</Link>
        <Link className="nav-cta" to="/#contact">
          {t.nav.contact}
        </Link>
      </nav>
      <button
        className="lang-toggle"
        onClick={toggle}
        aria-label={lang === 'en' ? 'Passer en français' : 'Switch to English'}
      >
        {t.langLabel}
      </button>
    </header>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <p>{t.footer.legal}</p>
      <p className="footer-muted">
        © {new Date().getFullYear()} — {t.footer.rights} ·{' '}
        <Link className="footer-link" to="/mentions-legales">
          {t.footer.legalLink}
        </Link>
      </p>
      <p className="footer-muted footer-notrack">{t.footer.noTracking}</p>
    </footer>
  );
}

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <LangEffect />
        <ScrollManager />
        <SkipLink />
        <Nav />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mentions-legales" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </LangProvider>
  );
}
