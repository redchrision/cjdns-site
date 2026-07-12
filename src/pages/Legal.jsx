import { Link } from 'react-router-dom';
import { useLang } from '../i18n.jsx';
import useMeta from '../useMeta.js';

export default function Legal() {
  const { t } = useLang();
  const l = t.legalPage;
  useMeta(t.meta.legal.title, t.meta.legal.desc);

  return (
    <>
      <section className="page-header page-header-plain">
        <div className="page-header-inner">
          <Link className="back-link back-link-dark" to="/">
            ← CJDNS SASU
          </Link>
          <h1>{l.title}</h1>
          <p className="lead">{l.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner legal-body">
          {l.sections.map((sec) => (
            <article key={sec.h} className="legal-section">
              <h2>{sec.h}</h2>
              {sec.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
