import { Link } from 'react-router-dom';
import { useLang } from '../i18n.jsx';
import MeshCanvas from '../components/MeshCanvas.jsx';
import useMeta from '../useMeta.js';

export default function NotFound() {
  const { t } = useLang();
  const n = t.notFoundPage;
  useMeta(t.meta.notFound.title, t.meta.notFound.desc);

  return (
    <section className="page-header notfound">
      <MeshCanvas />
      <div className="page-header-inner notfound-inner">
        <p className="eyebrow eyebrow-dark">404</p>
        <h1>{n.title}</h1>
        <p className="lead">{n.text}</p>
        <Link className="btn btn-primary" to="/">
          {n.cta}
        </Link>
      </div>
    </section>
  );
}
