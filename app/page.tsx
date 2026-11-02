const topics = [
  { icon: "✦", title: "الذكاء الاصطناعي", desc: "آخر تطورات النماذج والتطبيقات الذكية." },
  { icon: "⌘", title: "أدوات AI", desc: "اكتشف أدوات تساعدك على الإنجاز والإبداع." },
  { icon: "◈", title: "صناعة المحتوى", desc: "حوّل أفكارك إلى مقالات وفيديوهات احترافية." },
  { icon: "◎", title: "عالم التقنية", desc: "تغطية مبسطة للمنتجات والابتكارات الرقمية." }
];

const features = [
  ["01", "مركز المحتوى", "إنشاء المقالات ومراجعتها وإدارة مصادرها في مكان واحد."],
  ["02", "مراجعة قبل النشر", "لا ينتقل أي محتوى إلى النشر دون موافقتك الصريحة."],
  ["03", "إدارة القنوات", "جهّز منشورات Facebook وX من لوحة تحكم موحدة."]
];

export default function Home() {
  return <main>
    <nav className="nav wrap">
      <a className="brand" href="#"><span className="brand-mark">A</span><span>أرافيك <b>ذكاء</b><small>ARAVIC AI</small></span></a>
      <div className="nav-links"><a href="#topics">المجالات</a><a href="#platform">المنصة</a><a href="#about">عن أرافيك</a></div>
      <a className="nav-cta" href="#platform">استكشف المنصة <span>↖</span></a>
    </nav>

    <section className="hero wrap">
      <div className="hero-copy">
        <div className="eyebrow"><i/> منصة عربية للمعرفة والتقنية</div>
        <h1>المستقبل لا ينتظر.<br/><em>افهمه واصنعه.</em></h1>
        <p className="hero-desc">مساحتك لاكتشاف الذكاء الاصطناعي، ومتابعة التقنية، وتحويل الأفكار إلى محتوى يصنع الفرق.</p>
        <div className="hero-actions"><a className="button primary" href="#topics">اكتشف عالم أرافيك <span>←</span></a><a className="text-link" href="#platform">تعرّف على المنصة <span>↖</span></a></div>
        <div className="hero-note"><span className="avatars"><i>AI</i><i>✦</i><i>⌘</i></span><span>معرفة أوضح. أدوات أذكى. فرص أكبر.</span></div>
      </div>
      <div className="hero-art" aria-label="تصميم بصري تجريدي للذكاء الاصطناعي">
        <div className="orbital orbital-one"/><div className="orbital orbital-two"/><div className="orbital orbital-three"/>
        <div className="core"><div className="core-inner">A<span>✦</span></div></div>
        <div className="float-card card-top"><span className="pulse"/> ذكاء يصنع الفرق</div>
        <div className="float-card card-bottom"><b>AI / 01</b><span>Beyond information</span></div>
        <div className="spark spark-a">✧</div><div className="spark spark-b">✦</div>
      </div>
    </section>

    <section className="ticker"><div className="ticker-inner"><span>ARTIFICIAL INTELLIGENCE</span><i>✦</i><span>TECHNOLOGY</span><i>✦</i><span>CREATIVE FUTURE</span><i>✦</i><span>ARTIFICIAL INTELLIGENCE</span></div></section>

    <section className="section wrap" id="topics">
      <div className="section-head"><div><div className="eyebrow">اكتشف آفاقاً جديدة</div><h2>المعرفة تبدأ <em>بفكرة.</em></h2></div><p>نقرّب لك عالم التقنية ونمنحك أدوات لفهمه والاستفادة منه.</p></div>
      <div className="topic-grid">{topics.map((t,i)=><article className="topic-card" key={t.title}><div className="topic-top"><span className="topic-icon">{t.icon}</span><span className="topic-no">0{i+1}</span></div><h3>{t.title}</h3><p>{t.desc}</p><a href="#platform">اكتشف المزيد <span>↖</span></a></article>)}</div>
    </section>

    <section className="platform-section" id="platform"><div className="wrap platform-layout">
      <div><div className="eyebrow">من الفكرة إلى الإنجاز</div><h2>كل ما تحتاجه<br/><em>في مساحة واحدة.</em></h2><p className="platform-desc">أرافيك ليست مجرد موقع للمقالات. إنها منظومة لإدارة المعرفة والمحتوى، من جمع الفكرة والتحقق من المصدر إلى المراجعة والنشر.</p><a className="button primary" href="mailto:hello@aravicai.com">تواصل معنا <span>↖</span></a></div>
      <div className="feature-list">{features.map(f=><div className="feature" key={f[0]}><span>{f[0]}</span><div><h3>{f[1]}</h3><p>{f[2]}</p></div><b>↖</b></div>)}</div>
    </div></section>

    <section className="about wrap" id="about"><div className="about-mark">A<span>✦</span></div><div><div className="eyebrow">ARAVIC AI / OUR VISION</div><h2>تقنية مفهومة.<br/><em>ومعرفة تصنع المستقبل.</em></h2><p>نؤمن أن المعرفة تبدأ بسؤال، وأن التقنية تصبح أقوى عندما تكون في متناول الجميع. هنا نكتشف، نتعلم، ونبني معاً.</p></div></section>

    <footer><div className="wrap footer-inner"><a className="brand" href="#"><span className="brand-mark">A</span><span>أرافيك <b>ذكاء</b><small>المعرفة تبدأ بفكرة</small></span></a><span>© {new Date().getFullYear()} أرافيك ذكاء. جميع الحقوق محفوظة.</span><span className="footer-social">X　 Instagram　 YouTube</span></div></footer>
  </main>;
}