import { useEffect, useState } from "react";

const Index = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="page-wrapper">
      <div className={`a4-sheet ${visible ? "sheet-visible" : ""}`}>

        {/* Верхний колонтитул */}
        <div className="header-row">
          <div className="header-line" />
          <div className="header-meta">
            <span className="meta-text">МЕЖДУНАРОДНОЕ ПРАВО</span>
            <span className="meta-dots">· · ·</span>
            <span className="meta-text">ТОРГОВЫЕ ОТНОШЕНИЯ</span>
            <span className="meta-dots">· · ·</span>
            <span className="meta-text">ГОСУДАРСТВЕННЫЙ АКТ</span>
          </div>
          <div className="header-line" />
        </div>

        {/* Номер документа */}
        <div className="doc-number">DOC. № 1917 — Т. III — СТ. 47</div>

        {/* Орнамент */}
        <div className="ornament">◈ ◈ ◈</div>

        {/* ГЛАВНОЕ СЛОВО */}
        <div className="title-block">
          <div className="title-shadow">ЭМБАРГО</div>
          <h1 className="title-word">ЭМБАРГО</h1>
          <div className="title-latin">EMBARGO</div>
        </div>

        {/* Двойная линия */}
        <div className="double-rule">
          <div className="rule-thick" />
          <div className="rule-thin" />
        </div>

        {/* Основное определение */}
        <div className="definition-section">
          <div className="def-label">§ ОПРЕДЕЛЕНИЕ</div>
          <p className="def-body">
            <span className="drop-cap">Э</span>мбарго — официальный государственный запрет
            на ввоз в страну или вывоз из неё определённых товаров,
            услуг или капиталов в отношении одного или нескольких
            иностранных государств. Является инструментом политического
            и экономического принуждения в системе международных отношений.
          </p>
        </div>

        {/* Три колонки */}
        <div className="double-rule" style={{ marginTop: 24 }}>
          <div className="rule-thin" />
          <div className="rule-thick" />
        </div>

        <div className="columns">
          <div className="col">
            <div className="col-icon">⚖</div>
            <div className="col-title">ПРАВОВАЯ<br />ПРИРОДА</div>
            <div className="col-text">Акт суверенного государства, закреплённый нормами международного публичного права.</div>
          </div>
          <div className="col-divider" />
          <div className="col">
            <div className="col-icon">📜</div>
            <div className="col-title">ИСТОРИЧЕСКИЙ<br />КОНТЕКСТ</div>
            <div className="col-text">Первые упоминания относятся к Древней Греции. В современном праве закреплено Уставом ООН.</div>
          </div>
          <div className="col-divider" />
          <div className="col">
            <div className="col-icon">🌐</div>
            <div className="col-title">СФЕРЫ<br />ПРИМЕНЕНИЯ</div>
            <div className="col-text">Торговля, финансы, технологии, энергоносители, вооружения и транспортные коммуникации.</div>
          </div>
        </div>

        {/* Разделитель */}
        <div className="double-rule">
          <div className="rule-thick" />
          <div className="rule-thin" />
        </div>

        {/* Примеры */}
        <div className="examples-section">
          <div className="examples-title">§ ПРИМЕРЫ В ИСТОРИИ</div>
          <div className="examples-grid">
            <div className="example-item">
              <span className="example-year">1807</span>
              <span className="example-desc">Континентальная блокада Наполеона против Великобритании</span>
            </div>
            <div className="example-item">
              <span className="example-year">1960</span>
              <span className="example-desc">Торговое эмбарго США против Кубы</span>
            </div>
            <div className="example-item">
              <span className="example-year">1973</span>
              <span className="example-desc">Нефтяное эмбарго ОПЕК против западных стран</span>
            </div>
            <div className="example-item">
              <span className="example-year">2022</span>
              <span className="example-desc">Санкции ЕС и США — беспрецедентный масштаб ограничений</span>
            </div>
          </div>
        </div>

        {/* ШТАМП */}
        <div className={`stamp-wrapper ${visible ? "stamp-visible" : ""}`}>
          <div className="stamp">
            <div className="stamp-inner">
              <div className="stamp-stars">★ ★ ★</div>
              <div className="stamp-word">ПРИНЯТО</div>
              <div className="stamp-sub">К ИСПОЛНЕНИЮ</div>
              <div className="stamp-stars">★ ★ ★</div>
            </div>
          </div>
        </div>

        {/* Нижний колонтитул */}
        <div className="footer-row">
          <div className="header-line" />
          <div className="footer-content">
            <span className="footer-text">EMBARGO</span>
            <span className="footer-ornament">◆</span>
            <span className="footer-text">МЕЖДУНАРОДНОЕ ПРАВО</span>
            <span className="footer-ornament">◆</span>
            <span className="footer-text">EMBARGO</span>
          </div>
          <div className="header-line" />
        </div>

      </div>

      <style>{`
        :root {
          --ink: #1a1008;
          --paper: #F4EFE6;
          --red: #B80000;
          --gold: #8B6914;
          --grey: #7a6e62;
          --rule: #2a1f14;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #2e2620;
          background-image: radial-gradient(ellipse at 30% 20%, #3e3020 0%, transparent 55%),
                            radial-gradient(ellipse at 70% 80%, #1e1810 0%, transparent 55%);
          min-height: 100vh;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 48px 20px;
          font-family: 'IBM Plex Sans', sans-serif;
        }

        .page-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .a4-sheet {
          width: 794px;
          min-height: 1123px;
          background: var(--paper);
          background-image:
            radial-gradient(ellipse at 12% 6%, rgba(255,255,240,0.55) 0%, transparent 38%),
            radial-gradient(ellipse at 88% 94%, rgba(195,175,135,0.28) 0%, transparent 38%),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          color: var(--ink);
          padding: 56px 66px;
          display: flex;
          flex-direction: column;
          gap: 0;
          box-shadow: 0 6px 30px rgba(0,0,0,0.5), 0 24px 80px rgba(0,0,0,0.35),
                      inset 0 0 100px rgba(175,155,115,0.06);
          position: relative;
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .sheet-visible { opacity: 1; transform: translateY(0); }

        /* HEADER */
        .header-row { margin-bottom: 22px; }

        .header-line {
          height: 1.5px;
          background: var(--rule);
          margin-bottom: 6px;
        }

        .header-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 3px 0;
        }

        .meta-text {
          font-size: 9px;
          letter-spacing: 0.25em;
          color: var(--grey);
          text-transform: uppercase;
        }

        .meta-dots { color: var(--gold); font-size: 10px; letter-spacing: 4px; }

        .doc-number {
          font-size: 10px;
          letter-spacing: 0.2em;
          color: var(--grey);
          text-align: center;
          margin-bottom: 14px;
        }

        .ornament {
          text-align: center;
          font-size: 11px;
          letter-spacing: 14px;
          color: var(--gold);
          margin-bottom: 26px;
        }

        /* TITLE */
        .title-block {
          text-align: center;
          margin-bottom: 24px;
          position: relative;
        }

        .title-shadow {
          position: absolute;
          inset: 0;
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          font-size: 134px;
          letter-spacing: -0.02em;
          text-align: center;
          color: transparent;
          -webkit-text-stroke: 0.5px rgba(100,60,20,0.1);
          transform: translate(4px, 5px);
          user-select: none;
          pointer-events: none;
          line-height: 1;
        }

        .title-word {
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          font-size: 134px;
          letter-spacing: -0.02em;
          line-height: 1;
          position: relative;
          background: linear-gradient(180deg, #1a1008 0%, #3d2010 55%, #6b2e0a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .title-latin {
          font-family: 'Cormorant', serif;
          font-style: italic;
          font-size: 17px;
          letter-spacing: 0.6em;
          color: var(--gold);
          margin-top: 2px;
          text-transform: uppercase;
        }

        /* RULES */
        .double-rule { display: flex; flex-direction: column; gap: 3px; margin: 18px 0; }
        .rule-thick { height: 2.5px; background: var(--rule); }
        .rule-thin { height: 1px; background: var(--rule); opacity: 0.45; }

        /* DEFINITION */
        .def-label {
          font-family: 'Oswald', sans-serif;
          font-size: 10px;
          letter-spacing: 0.32em;
          color: var(--gold);
          margin-bottom: 13px;
          text-transform: uppercase;
        }

        .def-body {
          font-family: 'Cormorant', serif;
          font-size: 17px;
          line-height: 1.82;
          color: var(--ink);
          text-align: justify;
          hyphens: auto;
        }

        .drop-cap {
          font-family: 'Cormorant', serif;
          font-size: 66px;
          font-weight: 700;
          line-height: 0.75;
          float: left;
          margin-right: 6px;
          margin-top: 4px;
          color: var(--red);
        }

        /* COLUMNS */
        .columns { display: flex; align-items: flex-start; }

        .col { flex: 1; padding: 16px 18px; background: rgba(160,130,90,0.05); }

        .col-divider {
          width: 1px;
          background: var(--rule);
          opacity: 0.18;
          align-self: stretch;
          margin: 8px 0;
        }

        .col-icon { font-size: 18px; margin-bottom: 7px; }

        .col-title {
          font-family: 'Oswald', sans-serif;
          font-size: 10px;
          letter-spacing: 0.18em;
          color: var(--ink);
          margin-bottom: 9px;
          line-height: 1.5;
        }

        .col-text {
          font-size: 11px;
          line-height: 1.7;
          color: var(--grey);
        }

        /* STAMP */
        .stamp-wrapper {
          position: absolute;
          right: 72px;
          top: 400px;
          z-index: 10;
          opacity: 0;
          transform: rotate(-8deg) scale(0.65);
          transition: opacity 0.6s ease 1.4s, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.35) 1.4s;
        }

        .stamp-visible {
          opacity: 0.8;
          transform: rotate(-5deg) scale(1);
        }

        .stamp {
          width: 128px;
          height: 128px;
          border: 3px solid var(--red);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .stamp::before {
          content: '';
          position: absolute;
          inset: 6px;
          border: 1.5px solid var(--red);
          border-radius: 50%;
          opacity: 0.7;
        }

        .stamp-inner { text-align: center; position: relative; z-index: 1; }

        .stamp-stars { font-size: 8px; letter-spacing: 3px; color: var(--red); display: block; margin: 2px 0; }

        .stamp-word {
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.08em;
          color: var(--red);
          line-height: 1.1;
        }

        .stamp-sub {
          font-size: 8px;
          letter-spacing: 0.18em;
          color: var(--red);
          margin-top: 1px;
        }

        /* EXAMPLES */
        .examples-section { margin-top: 0; }

        .examples-title {
          font-family: 'Oswald', sans-serif;
          font-size: 10px;
          letter-spacing: 0.32em;
          color: var(--gold);
          margin-bottom: 13px;
        }

        .examples-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1px solid rgba(40,30,20,0.18);
        }

        .example-item {
          display: flex;
          align-items: baseline;
          gap: 13px;
          padding: 12px 15px;
          border-bottom: 1px solid rgba(40,30,20,0.11);
          border-right: 1px solid rgba(40,30,20,0.11);
        }

        .example-item:nth-child(2n) { border-right: none; }
        .example-item:nth-child(n+3) { border-bottom: none; }

        .example-year {
          font-family: 'Oswald', sans-serif;
          font-size: 21px;
          font-weight: 600;
          color: var(--red);
          flex-shrink: 0;
          line-height: 1;
        }

        .example-desc { font-size: 11px; line-height: 1.5; color: var(--grey); }

        /* FOOTER */
        .footer-row { margin-top: auto; padding-top: 28px; }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 7px 0;
        }

        .footer-text {
          font-size: 9px;
          letter-spacing: 0.32em;
          color: var(--grey);
          opacity: 0.55;
          text-transform: uppercase;
        }

        .footer-ornament { color: var(--gold); font-size: 9px; opacity: 0.6; }

        @media (max-width: 860px) {
          body { padding: 0; }
          .a4-sheet { width: 100%; min-height: 100vh; padding: 28px 20px; box-shadow: none; }
          .title-word, .title-shadow { font-size: 80px; }
          .stamp-wrapper { top: 310px; right: 14px; }
          .columns { flex-direction: column; }
          .col-divider { display: none; }
          .examples-grid { grid-template-columns: 1fr; }
          .example-item:nth-child(n) { border-right: none; border-bottom: 1px solid rgba(40,30,20,0.11); }
          .example-item:last-child { border-bottom: none; }
          .header-meta { flex-direction: column; gap: 3px; text-align: center; }
          .meta-dots { display: none; }
        }
      `}</style>
    </div>
  );
};

export default Index;
