import { useEffect, useState } from "react";

const Index = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="embargo-page">
      {/* Фоновые элементы */}
      <div className="bg-layer" />
      <div className="noise-overlay" />
      <div className="diagonal-stripe" />

      {/* Верхняя панель */}
      <header className={`top-bar ${visible ? "fade-in" : ""}`}>
        <div className="top-bar-line" />
        <div className="top-bar-content">
          <span className="top-label">ПОЛИТИЧЕСКИЙ ДОКУМЕНТ</span>
          <span className="top-stars">★ ★ ★</span>
          <span className="top-label">ГОСУДАРСТВЕННЫЙ АКТ</span>
        </div>
        <div className="top-bar-line" />
      </header>

      {/* Главный блок */}
      <main className="main-content">
        {/* Левая декорация */}
        <div className={`side-decor left-decor ${visible ? "slide-in-left" : ""}`}>
          <div className="flag-stripe red" />
          <div className="flag-stripe black" />
          <div className="flag-stripe red" />
          <div className="vertical-text">ЗАПРЕТ</div>
        </div>

        {/* Центральный блок */}
        <div className="center-block">
          {/* Звёзды сверху */}
          <div className={`stars-row ${visible ? "fade-in-delay-1" : ""}`}>
            {"★".repeat(5).split("").map((s, i) => (
              <span key={i} className="star-item">{s}</span>
            ))}
          </div>

          {/* Метка сверху */}
          <div className={`subtitle-top ${visible ? "fade-in-delay-1" : ""}`}>
            МЕЖДУНАРОДНОЕ ПРАВО · САНКЦИИ · ТОРГОВЛЯ
          </div>

          {/* Разделитель */}
          <div className={`divider-line ${visible ? "fade-in-delay-2" : ""}`} />

          {/* ГЛАВНОЕ СЛОВО */}
          <div className={`main-word-container ${visible ? "word-appear" : ""}`}>
            <div className="word-shadow-layer">ЭМБАРГО</div>
            <h1 className="main-word">ЭМБАРГО</h1>
          </div>

          {/* Разделитель */}
          <div className={`divider-line ${visible ? "fade-in-delay-2" : ""}`} />

          {/* Гербовые элементы */}
          <div className={`emblem-row ${visible ? "fade-in-delay-3" : ""}`}>
            <div className="emblem-circle">
              <span className="emblem-icon">⚖</span>
            </div>
            <div className="emblem-separator">◆ ◆ ◆</div>
            <div className="emblem-circle">
              <span className="emblem-icon">🌐</span>
            </div>
            <div className="emblem-separator">◆ ◆ ◆</div>
            <div className="emblem-circle">
              <span className="emblem-icon">✊</span>
            </div>
          </div>

          {/* Объяснение */}
          <div className={`definition-block ${visible ? "fade-in-delay-3" : ""}`}>
            <div className="definition-label">— ОПРЕДЕЛЕНИЕ —</div>
            <p className="definition-text">
              <strong>Эмбарго</strong> — официальный государственный запрет на ввоз или вывоз товаров, 
              услуг и капитала в отношении определённой страны или группы стран. 
              Применяется как инструмент политического и экономического давления.
            </p>
          </div>

          {/* Нижние метки */}
          <div className={`tags-row ${visible ? "fade-in-delay-4" : ""}`}>
            <span className="tag">ТОРГОВЛЯ</span>
            <span className="tag-dot">●</span>
            <span className="tag">ПОЛИТИКА</span>
            <span className="tag-dot">●</span>
            <span className="tag">САНКЦИИ</span>
            <span className="tag-dot">●</span>
            <span className="tag">ПРАВО</span>
          </div>
        </div>

        {/* Правая декорация */}
        <div className={`side-decor right-decor ${visible ? "slide-in-right" : ""}`}>
          <div className="flag-stripe black" />
          <div className="flag-stripe red" />
          <div className="flag-stripe black" />
          <div className="vertical-text">САНКЦИЯ</div>
        </div>
      </main>

      {/* Нижняя панель */}
      <footer className={`bottom-bar ${visible ? "fade-in-delay-4" : ""}`}>
        <div className="top-bar-line" />
        <div className="bottom-content">
          <span className="bottom-text">EMBARGO</span>
          <span className="bottom-divider">|</span>
          <span className="bottom-text">INTERNATIONAL LAW</span>
          <span className="bottom-divider">|</span>
          <span className="bottom-text">EMBARGO</span>
        </div>
        <div className="top-bar-line" />
      </footer>

      <style>{`
        :root {
          --clr-black: #0a0a0a;
          --clr-deep: #111111;
          --clr-red: #CC0000;
          --clr-red-bright: #FF1111;
          --clr-red-dark: #8B0000;
          --clr-gold: #D4A017;
          --clr-white: #F5F0E8;
          --clr-grey: #3a3a3a;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .embargo-page {
          min-height: 100vh;
          background: var(--clr-black);
          color: var(--clr-white);
          font-family: 'Oswald', sans-serif;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .bg-layer {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, #1a0000 0%, #0a0a0a 60%, #000 100%);
          z-index: 0;
        }

        .noise-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.15;
          pointer-events: none;
        }

        .diagonal-stripe {
          position: absolute;
          top: -50%;
          left: -10%;
          width: 120%;
          height: 200%;
          background: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(180,0,0,0.03) 40px,
            rgba(180,0,0,0.03) 42px
          );
          z-index: 1;
          pointer-events: none;
        }

        /* TOP BAR */
        .top-bar {
          position: relative;
          z-index: 10;
          padding: 20px 40px 12px;
          opacity: 0;
          transition: opacity 0.8s ease;
        }
        .top-bar.fade-in { opacity: 1; }

        .top-bar-line {
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--clr-red), var(--clr-gold), var(--clr-red), transparent);
          margin-bottom: 10px;
        }

        .top-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 10px;
        }

        .top-label {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.25em;
          color: var(--clr-gold);
          text-transform: uppercase;
        }

        .top-stars {
          color: var(--clr-red);
          font-size: 14px;
          letter-spacing: 8px;
        }

        /* MAIN */
        .main-content {
          flex: 1;
          display: flex;
          align-items: stretch;
          justify-content: center;
          position: relative;
          z-index: 10;
          padding: 20px 0 20px;
        }

        /* SIDE DECORATIONS */
        .side-decor {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 60px;
          gap: 0;
          padding: 10px 0;
          opacity: 0;
          transition: opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s;
        }

        .left-decor {
          transform: translateX(-30px);
        }
        .left-decor.slide-in-left {
          opacity: 1;
          transform: translateX(0);
        }
        .right-decor {
          transform: translateX(30px);
        }
        .right-decor.slide-in-right {
          opacity: 1;
          transform: translateX(0);
        }

        .flag-stripe {
          width: 12px;
          flex: 1;
          min-height: 60px;
        }
        .flag-stripe.red { background: var(--clr-red); }
        .flag-stripe.black { background: #1a1a1a; border: 1px solid #333; }

        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-family: 'Oswald', sans-serif;
          font-size: 9px;
          letter-spacing: 0.3em;
          color: var(--clr-grey);
          text-transform: uppercase;
          margin-top: 12px;
        }

        /* CENTER BLOCK */
        .center-block {
          flex: 1;
          max-width: 800px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 0 30px;
        }

        .stars-row {
          display: flex;
          gap: 14px;
          opacity: 0;
          transition: opacity 0.6s ease 0.3s;
        }
        .stars-row.fade-in-delay-1 { opacity: 1; }

        .star-item {
          color: var(--clr-red);
          font-size: 18px;
          animation: pulse-star 2s infinite;
        }
        .star-item:nth-child(2) { animation-delay: 0.2s; }
        .star-item:nth-child(3) { animation-delay: 0.4s; color: var(--clr-gold); }
        .star-item:nth-child(4) { animation-delay: 0.2s; }
        .star-item:nth-child(5) { animation-delay: 0.0s; }

        @keyframes pulse-star {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }

        .subtitle-top {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.22em;
          color: var(--clr-gold);
          text-transform: uppercase;
          text-align: center;
          opacity: 0;
          transition: opacity 0.6s ease 0.5s;
        }
        .subtitle-top.fade-in-delay-1 { opacity: 1; }

        .divider-line {
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, var(--clr-red-dark) 20%, var(--clr-red) 50%, var(--clr-red-dark) 80%, transparent 100%);
          opacity: 0;
          transition: opacity 0.6s ease 0.6s;
        }
        .divider-line.fade-in-delay-2 { opacity: 1; }

        /* MAIN WORD */
        .main-word-container {
          position: relative;
          text-align: center;
          opacity: 0;
          transform: scale(0.85);
          transition: opacity 0.9s ease 0.5s, transform 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
        }
        .main-word-container.word-appear {
          opacity: 1;
          transform: scale(1);
        }

        .word-shadow-layer {
          position: absolute;
          inset: 0;
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          font-size: clamp(90px, 18vw, 220px);
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: transparent;
          -webkit-text-stroke: 1px rgba(180,0,0,0.15);
          transform: translate(6px, 6px);
          user-select: none;
          pointer-events: none;
        }

        .main-word {
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          font-size: clamp(90px, 18vw, 220px);
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: var(--clr-white);
          line-height: 1;
          position: relative;
          background: linear-gradient(180deg, #FFFFFF 0%, #F5F0E8 40%, #CC3333 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 40px rgba(200,0,0,0.5)) drop-shadow(0 0 80px rgba(200,0,0,0.2));
          animation: glow-pulse 3s infinite;
        }

        @keyframes glow-pulse {
          0%, 100% { filter: drop-shadow(0 0 40px rgba(200,0,0,0.5)) drop-shadow(0 0 80px rgba(200,0,0,0.2)); }
          50% { filter: drop-shadow(0 0 60px rgba(220,0,0,0.7)) drop-shadow(0 0 100px rgba(220,0,0,0.4)); }
        }

        /* EMBLEM ROW */
        .emblem-row {
          display: flex;
          align-items: center;
          gap: 20px;
          opacity: 0;
          transition: opacity 0.6s ease 0.9s;
        }
        .emblem-row.fade-in-delay-3 { opacity: 1; }

        .emblem-circle {
          width: 52px;
          height: 52px;
          border: 2px solid var(--clr-red-dark);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(150,0,0,0.1);
          transition: border-color 0.3s, background 0.3s;
        }
        .emblem-circle:hover {
          border-color: var(--clr-gold);
          background: rgba(212,160,23,0.1);
        }

        .emblem-icon { font-size: 22px; }

        .emblem-separator {
          color: var(--clr-red-dark);
          font-size: 10px;
          letter-spacing: 6px;
        }

        /* DEFINITION */
        .definition-block {
          border: 1px solid rgba(180,0,0,0.4);
          border-left: 4px solid var(--clr-red);
          background: rgba(20,0,0,0.5);
          padding: 24px 32px;
          max-width: 640px;
          text-align: center;
          backdrop-filter: blur(4px);
          opacity: 0;
          transition: opacity 0.7s ease 1.0s;
        }
        .definition-block.fade-in-delay-3 { opacity: 1; }

        .definition-label {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 0.4em;
          color: var(--clr-gold);
          margin-bottom: 14px;
          text-transform: uppercase;
        }

        .definition-text {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 15px;
          line-height: 1.75;
          color: rgba(245,240,232,0.85);
          font-weight: 400;
        }

        .definition-text strong {
          color: var(--clr-white);
          font-weight: 700;
        }

        /* TAGS */
        .tags-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.6s ease 1.2s;
        }
        .tags-row.fade-in-delay-4 { opacity: 1; }

        .tag {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.25em;
          color: var(--clr-white);
          text-transform: uppercase;
          border: 1px solid rgba(180,0,0,0.5);
          padding: 5px 12px;
          background: rgba(150,0,0,0.15);
          transition: background 0.2s, border-color 0.2s;
          cursor: default;
        }
        .tag:hover {
          background: rgba(180,0,0,0.3);
          border-color: var(--clr-red);
        }

        .tag-dot {
          color: var(--clr-red-dark);
          font-size: 8px;
        }

        /* FOOTER */
        .bottom-bar {
          position: relative;
          z-index: 10;
          padding: 12px 40px 20px;
          opacity: 0;
          transition: opacity 0.7s ease 1.4s;
        }
        .bottom-bar.fade-in-delay-4 { opacity: 1; }

        .bottom-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          padding: 10px 0;
        }

        .bottom-text {
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 10px;
          letter-spacing: 0.35em;
          color: rgba(245,240,232,0.3);
          text-transform: uppercase;
        }

        .bottom-divider {
          color: rgba(180,0,0,0.4);
          font-size: 12px;
        }

        @media (max-width: 600px) {
          .side-decor { display: none; }
          .top-label { display: none; }
          .top-stars { margin: 0 auto; }
          .top-bar-content { justify-content: center; }
          .center-block { padding: 0 16px; }
          .definition-block { padding: 16px 20px; }
          .definition-text { font-size: 13px; }
          .tags-row { gap: 8px; }
        }
      `}</style>
    </div>
  );
};

export default Index;
