import { useState } from 'react';
import { useLang } from '../i18n.jsx';
import MeshCanvas from '../components/MeshCanvas.jsx';
import NodeMotif from '../components/NodeMotif.jsx';
import AreaExplorer from '../components/AreaExplorer.jsx';
import useMeta from '../useMeta.js';
import { BOOKING_URL, LEDGER_URL, ECONET_WIKI_URL } from '../config.js';

const PROJECT_LINKS = { ledger: LEDGER_URL, econet: ECONET_WIKI_URL };

function BookCallButton({ className = 'btn btn-primary' }) {
  const { t } = useLang();
  const href = BOOKING_URL
    ? BOOKING_URL
    : `mailto:${t.contact.email}?subject=${encodeURIComponent(t.consulting.bookMailSubject)}`;
  const external = Boolean(BOOKING_URL);
  return (
    <a
      className={className}
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {t.consulting.book}
    </a>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section className="hero" id="top">
      <MeshCanvas />
      <div className="hero-inner">
        <p className="eyebrow eyebrow-dark">{t.hero.eyebrow}</p>
        <h1>{t.hero.title}</h1>
        <p className="lead">{t.hero.lead}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#consulting">
            {t.hero.ctaConsulting}
          </a>
          <a className="btn btn-ghost" href="#research">
            {t.hero.ctaResearch}
          </a>
        </div>
        <ul className="hero-badges">
          {t.hero.badges.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Consulting() {
  const { t } = useLang();
  const c = t.consulting;
  return (
    <section className="section section-motif section-pitch" id="consulting">
      <NodeMotif className="motif-top-right" />
      <div className="section-inner">
        <div className="consulting-head">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2>{c.title}</h2>
        </div>
        <ul className="value-points">
          {c.points.map((pt) => (
            <li key={pt.label}>
              <h3>{pt.label}</h3>
              <p>{pt.text}</p>
            </li>
          ))}
        </ul>
        <AreaExplorer
          areas={c.areas}
          label={c.exploreLabel || c.eyebrow}
          prevLabel={c.prev || '←'}
          nextLabel={c.next || '→'}
        />
        <div className="consulting-cta">
          <p className="pitch-line">{c.pitch}</p>
          <div className="pitch-actions">
            <BookCallButton />
            <span className="pitch-or">
              {c.orWrite}{' '}
              <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Research() {
  const { t } = useLang();
  const r = t.research;
  return (
    <section className="section section-dark section-pitch" id="research">
      <div className="section-inner">
        <p className="eyebrow eyebrow-dark">{r.eyebrow}</p>
        <h2>{r.title}</h2>
        <p className="section-lead">{r.lead}</p>

        <div className="research-grid">
          {r.items.map((item) => (
            <article className="project-card" key={item.name}>
              <h3>{item.name}</h3>
              <p className="project-text">{item.text}</p>
            </article>
          ))}
        </div>

        <h3 className="selected-title">{r.selectedTitle}</h3>
        <div className="selected-grid">
          {r.projects.map((p) => {
            const link = PROJECT_LINKS[p.linkKey];
            return (
              <article className="project-card" key={p.name}>
                <div className="project-top">
                  <h3>{p.name}</h3>
                  <span className="funding-tag">{p.tag}</span>
                </div>
                <p className="project-text">{p.text}</p>
                {link && (
                  <a
                    className="project-link"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {p.linkLabel} ↗
                  </a>
                )}
              </article>
            );
          })}
        </div>

        <p className="pitch-line pitch-line-dark">{r.pitch}</p>
        <div className="pitch-actions">
          <BookCallButton />
          <span className="pitch-or pitch-or-dark">
            {t.consulting.orWrite}{' '}
            <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
          </span>
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  const { t } = useLang();
  return (
    <section className="section section-motif" id="credentials">
      <NodeMotif className="motif-bottom-left" />
      <div className="section-inner">
        <p className="eyebrow">{t.credentials.eyebrow}</p>
        <h2>{t.credentials.title}</h2>
        <div className="cred-grid">
          {t.credentials.items.map((item) => (
            <article className="cred-card" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  const callHref =
    BOOKING_URL ||
    `mailto:${t.contact.email}?subject=${encodeURIComponent(t.consulting.bookMailSubject)}`;
  const callProps = BOOKING_URL ? { target: '_blank', rel: 'noreferrer' } : {};

  return (
    <section className="section section-contact section-motif" id="contact">
      <NodeMotif className="motif-contact-left" />
      <NodeMotif className="motif-contact-right" />
      <div className="section-inner">
        <p className="eyebrow eyebrow-dark">{t.contact.eyebrow}</p>
        <h2>{t.contact.title}</h2>
        <p className="section-lead">{t.contact.text}</p>
        <div className="contact-address">
          <a className="contact-email" href={`mailto:${t.contact.email}`}>
            {t.contact.email}
          </a>
          <button
            className="copy-btn"
            onClick={() => {
              navigator.clipboard.writeText(t.contact.email).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              });
            }}
          >
            {copied ? t.contact.copied : t.contact.copy}
          </button>
        </div>
        <p className="contact-call">
          <a className="contact-call-link" href={callHref} {...callProps}>
            {t.contact.preferCall}
          </a>
        </p>
        <p className="contact-location">{t.contact.location}</p>
      </div>
    </section>
  );
}

export default function Home() {
  const { t } = useLang();
  useMeta(t.meta.home.title, t.meta.home.desc);
  return (
    <>
      <Hero />
      <Consulting />
      <Research />
      <Credentials />
      <Contact />
    </>
  );
}
