import { useRef, useState } from 'react';

/**
 * Consulting areas as a route map: each area is a node on a lit route,
 * the selected node opens a reading panel. Below 900px it becomes a
 * stack of readable cards (no interaction needed on phones).
 *
 * `areas` items: { name, lede, body: string[] } — plain strings are
 * accepted too (rendered as name only) so untranslated locales still work.
 */
const norm = (a) => (typeof a === 'string' ? { name: a, lede: '', body: [] } : a);
const pad = (n) => String(n).padStart(2, '0');

function Panel({ area, index, total, id, labelledBy }) {
  return (
    <div
      className="ax-panel"
      role="tabpanel"
      id={id}
      aria-labelledby={labelledBy}
      key={index}
    >
      <div className="ax-panel-head">
        <span className="ax-count">
          {pad(index + 1)}
          <span className="ax-count-total"> / {pad(total)}</span>
        </span>
        <h3 className="ax-title">{area.name}</h3>
      </div>
      {area.lede && <p className="ax-lede">{area.lede}</p>}
      {area.body.length > 0 && <p className="ax-body">{area.body.join(' ')}</p>}
    </div>
  );
}

export default function AreaExplorer({ areas, label, prevLabel, nextLabel }) {
  const items = areas.map(norm);
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  const total = items.length;

  const go = (i, focus = false) => {
    const n = (i + total) % total;
    setActive(n);
    if (focus) tabs.current[n]?.focus();
  };

  const onKey = (e) => {
    const map = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (e.key in map) {
      e.preventDefault();
      go(active + map[e.key], true);
    } else if (e.key === 'Home') {
      e.preventDefault();
      go(0, true);
    } else if (e.key === 'End') {
      e.preventDefault();
      go(total - 1, true);
    }
  };

  const progress = total > 1 ? active / (total - 1) : 0;

  return (
    <div className="ax">
      {/* Desktop: route + reading panel */}
      <div className="ax-desktop">
        <div
          className="ax-route"
          role="tablist"
          aria-label={label}
          aria-orientation="vertical"
          onKeyDown={onKey}
          style={{ '--progress': progress }}
        >
          <span className="ax-rail" aria-hidden="true" />
          <span className="ax-rail-lit" aria-hidden="true" />
          {items.map((a, i) => (
            <button
              key={a.name}
              ref={(el) => (tabs.current[i] = el)}
              role="tab"
              id={`ax-tab-${i}`}
              aria-selected={i === active}
              aria-controls="ax-panel"
              tabIndex={i === active ? 0 : -1}
              className={`ax-stop${i === active ? ' is-active' : ''}${i < active ? ' is-passed' : ''}`}
              onClick={() => go(i)}
            >
              <span className="ax-node" aria-hidden="true" />
              <span className="ax-stop-index">{pad(i + 1)}</span>
              <span className="ax-stop-name">{a.name}</span>
            </button>
          ))}
        </div>

        <div className="ax-stage">
          <svg className="ax-stage-mesh" viewBox="0 0 200 120" aria-hidden="true">
            <g stroke="currentColor" fill="none" strokeWidth="1">
              <path d="M10 100 L60 40 L110 80 L160 20 L190 60" />
              <path d="M60 40 L90 10 L160 20" />
              <path d="M110 80 L150 110 L190 60" />
            </g>
            <g fill="currentColor">
              {[[10, 100], [60, 40], [110, 80], [160, 20], [190, 60], [90, 10], [150, 110]].map(
                ([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" />,
              )}
            </g>
          </svg>
          <Panel
            area={items[active]}
            index={active}
            total={total}
            id="ax-panel"
            labelledBy={`ax-tab-${active}`}
          />
          <div className="ax-nav">
            <button className="ax-arrow" onClick={() => go(active - 1)} aria-label={prevLabel}>
              ←
            </button>
            <span className="ax-dots" aria-hidden="true">
              {items.map((a, i) => (
                <span key={a.name} className={i === active ? 'is-active' : ''} />
              ))}
            </span>
            <button className="ax-arrow" onClick={() => go(active + 1)} aria-label={nextLabel}>
              →
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: every area as a readable card */}
      <ol className="ax-mobile" aria-label={label}>
        {items.map((a, i) => (
          <li className="ax-card" key={a.name}>
            <span className="ax-count">{pad(i + 1)}</span>
            <h3 className="ax-title">{a.name}</h3>
            {a.lede && <p className="ax-lede">{a.lede}</p>}
            {a.body.length > 0 && <p className="ax-body">{a.body.join(' ')}</p>}
          </li>
        ))}
      </ol>
    </div>
  );
}
