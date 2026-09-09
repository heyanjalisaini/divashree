import { useState } from "react";
import {
  ArrowDown,
  Baby,
  BookOpen,
  Camera,
  ChevronRight,
  CloudSun,
  Flower2,
  Gift,
  Heart,
  Mail,
  Music2,
  PartyPopper,
  Sparkles,
  Star,
  Sun,
  WandSparkles,
} from "lucide-react";

const navItems = [
  { label: "हमारी कहानी", href: "#kahani" },
  { label: "नन्हे पल", href: "#pal" },
  { label: "फोटो एल्बम", href: "#album" },
  { label: "दिवाश्री की दुनिया", href: "#duniya" },
];

const moments = [
  {
    number: "०१",
    title: "सुबह की खिलखिलाहट",
    copy: "आँखें खुलते ही एक प्यारी सी मुस्कान—और पूरा घर रोशन!",
    icon: Sun,
    color: "coral",
  },
  {
    number: "०२",
    title: "छोटी-छोटी खोज",
    copy: "हर डिब्बा एक खज़ाना, हर आवाज़ एक नया संगीत, हर कदम एक रोमांच।",
    icon: Sparkles,
    color: "lavender",
  },
  {
    number: "०३",
    title: "गोद वाली शाम",
    copy: "दिन भर की शरारतों के बाद सबसे सुरक्षित जगह—अपनों की बाँहों में।",
    icon: Heart,
    color: "yellow",
  },
];

const qualities = [
  { label: "हँसी", value: "सबसे मीठी", icon: "☺" },
  { label: "जिज्ञासा", value: "आसमान जितनी", icon: "✦" },
  { label: "प्यार", value: "बेशुमार", icon: "♥" },
];

export default function Home() {
  const [magicCount, setMagicCount] = useState(0);
  const [message, setMessage] = useState("दिवाश्री के लिए एक जादुई शुभकामना भेजें");

  const sendMagic = () => {
    const messages = [
      "दिवाश्री, तुम हमेशा यूँ ही खिलखिलाती रहो!",
      "तुम्हारी हर सुबह सितारों जैसी चमकदार हो!",
      "नन्हे कदमों से बड़ी-बड़ी खुशियाँ आती रहें!",
      "तुम्हारे नाम जितना ही उजला हो तुम्हारा हर दिन!",
    ];
    setMessage(messages[magicCount % messages.length]);
    setMagicCount((count) => count + 1);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf5] text-[#3f3041]">
      <div className="top-ribbon">
        <span>दिवाश्री की छोटी सी दुनिया</span>
        <span className="hidden items-center gap-2 sm:flex">
          <Sparkles size={14} /> प्यार से बनाई गई
        </span>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="दिवाश्री की वेबसाइट के शीर्ष पर जाएँ">
          <span className="brand-mark"><Flower2 size={19} strokeWidth={2.5} /></span>
          <span>
            <strong>दिवाश्री</strong>
            <small>हमारी नन्ही परी</small>
          </span>
        </a>
        <nav className="site-nav" aria-label="मुख्य नेविगेशन">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="header-heart" href="#wish" aria-label="दिवाश्री को शुभकामना भेजें">
          <Heart size={18} fill="currentColor" />
        </a>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-art" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> डेढ़ साल की खुशियों का जश्न</div>
            <h1>नन्हे कदम,<br /><em>बड़ी सी चमक।</em></h1>
            <p className="hero-lede">दिवाश्री की दुनिया में आपका स्वागत है—जहाँ हर मुस्कान एक कहानी है, हर शरारत एक याद और हर दिन प्यार से भरा हुआ है।</p>
            <div className="hero-actions">
              <a href="#kahani" className="button button-primary">दिवाश्री से मिलिए <ChevronRight size={17} /></a>
              <a href="#pal" className="text-link">नन्हे पल देखिए <ArrowDown size={16} /></a>
            </div>
            <div className="hero-note"><Star size={16} fill="currentColor" /> “घर की सबसे प्यारी आवाज़—दिवाश्री की हँसी।”</div>
          </div>
          <div className="hero-side" aria-label="दिवाश्री की playful illustration">
            <div className="sun-badge"><span>little</span><strong>joy</strong></div>
            <div className="hero-sticker-wrap">
              <img src="/divashree/divashree-sticker.png" alt="मुस्कुराता हुआ सूरज और बादल" className="hero-sticker" />
            </div>
            <div className="floating-chip chip-one"><Baby size={16} /> 1.5 साल</div>
            <div className="floating-chip chip-two"><Heart size={15} fill="currentColor" /> 100% प्यारी</div>
            <div className="scribble scribble-one">yay!</div>
            <div className="scribble scribble-two">♡</div>
          </div>
        </div>
        <a href="#kahani" className="scroll-cue" aria-label="नीचे स्क्रॉल करें"><span>नीचे चलें</span><ArrowDown size={17} /></a>
      </section>

      <section id="kahani" className="story-section section-pad">
        <div className="container story-grid">
          <div className="section-intro">
            <div className="section-kicker"><span>01</span> हमारी कहानी</div>
            <h2>एक छोटी सी जान,<br /><span>बड़ी सी दुनिया।</span></h2>
            <p>दिवाश्री आई तो घर में जैसे हर चीज़ ने मुस्कुराना सीख लिया। उसके नन्हे कदमों के साथ हमारी दुनिया में रंग, राग और रोज़ की नई-नई खुशियाँ आईं।</p>
            <p>वह अभी डेढ़ साल की है—पर उसके पास बाँटने के लिए प्यार उससे कहीं ज़्यादा है।</p>
            <a href="#duniya" className="text-link dark-link">उसकी दुनिया में झाँकें <ChevronRight size={16} /></a>
          </div>
          <div className="story-card">
            <div className="story-card-top"><span className="tiny-label">आज का सच</span><span className="sparkle-cluster"><Sparkles size={16} /><Sparkles size={10} /></span></div>
            <div className="quote-mark">“</div>
            <blockquote>दिवाश्री की हँसी में<br /><span>पूरी धूप रहती है।</span></blockquote>
            <div className="story-card-footer"><span>— उसके अपने लोग</span><Heart size={17} fill="currentColor" /></div>
          </div>
        </div>
      </section>

      <section id="duniya" className="world-section section-pad">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="section-kicker"><span>02</span> दिवाश्री की दुनिया</div>
              <h2>छोटी है, पर<br /><span>कमाल की है।</span></h2>
            </div>
            <p>उसकी नज़र से देखें तो<br className="hidden sm:block" /> हर दिन नया त्योहार है।</p>
          </div>
          <div className="quality-grid">
            {qualities.map((quality, index) => (
              <article className={`quality-card quality-${index + 1}`} key={quality.label}>
                <div className="quality-icon">{quality.icon}</div>
                <div><span>{quality.label}</span><strong>{quality.value}</strong></div>
                <span className="quality-number">0{index + 1}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pal" className="moments-section section-pad">
        <div className="container">
          <div className="section-kicker"><span>03</span> नन्हे पल</div>
          <div className="moments-heading"><h2>हर दिन का<br /><em>एक छोटा चमत्कार।</em></h2><p>कुछ पल ऐसे होते हैं जिन्हें कैमरा नहीं, दिल संभाल कर रखता है।</p></div>
          <div className="moment-list">
            {moments.map((moment) => {
              const Icon = moment.icon;
              return (
                <article className={`moment-card moment-${moment.color}`} key={moment.number}>
                  <div className="moment-number">{moment.number}</div>
                  <div className="moment-icon"><Icon size={23} /></div>
                  <div className="moment-copy"><h3>{moment.title}</h3><p>{moment.copy}</p></div>
                  <ArrowDown className="moment-arrow" size={20} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="album" className="album-section section-pad">
        <div className="container album-grid">
          <div className="album-copy">
            <div className="section-kicker"><span>04</span> यादों का एल्बम</div>
            <h2>दिवाश्री के<br /><em>पहले-पहले पल।</em></h2>
            <p>नन्हे हाथ, छोटी-सी मुस्कान और ढेर सारी मासूमियत—इन तस्वीरों में दिवाश्री की शुरुआती यादें हमेशा के लिए सहेजी गई हैं।</p>
            <div className="album-stamp"><Camera size={17} /> प्यार से संभाल कर रखा है</div>
          </div>
          <figure className="album-frame">
            <div className="album-frame-top"><span>दिवाश्री • memories</span><Heart size={16} fill="currentColor" /></div>
            <img src="/divashree/divashree-album.jpg" alt="दिवाश्री के बचपन के प्यारे पलों का फोटो collage" />
            <figcaption>छोटी-छोटी तस्वीरें, बहुत सारी बड़ी खुशियाँ।</figcaption>
          </figure>
        </div>
      </section>

      <section id="wish" className="wish-section section-pad">
        <div className="container">
          <div className="wish-card">
            <div className="wish-deco deco-left"><CloudSun size={34} /></div>
            <div className="wish-content">
              <div className="section-kicker light-kicker"><span>एक जादू</span> दिवाश्री के नाम</div>
              <h2>उसके लिए एक<br /><em>प्यारी सी wish?</em></h2>
              <p>{message}</p>
              <button type="button" className="button button-light" onClick={sendMagic}><WandSparkles size={17} /> जादू भेजें <span className="wish-count">{magicCount || ""}</span></button>
            </div>
            <div className="wish-art"><img src="/divashree/divashree-sticker.png" alt="खुशमिज़ाज सूरज का sticker" /><div className="wish-star"><Star size={31} fill="currentColor" /></div></div>
            <div className="wish-deco deco-right"><PartyPopper size={35} /></div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand"><span className="brand-mark"><Flower2 size={18} /></span><div><strong>दिवाश्री</strong><span>छोटी सी, अनमोल सी।</span></div></div>
          <div className="footer-links"><span><Camera size={15} /> यादों का एल्बम</span><span><Music2 size={15} /> हँसी का संगीत</span><span><Gift size={15} /> ढेर सारा प्यार</span></div>
          <a href="mailto:heyanjalisaini@gmail.com" className="footer-mail"><Mail size={16} /> एक संदेश भेजें</a>
        </div>
        <div className="container footer-bottom"><span>दिल से बनाया गया, दिवाश्री के लिए ♡</span><BookOpen size={16} /></div>
      </footer>
    </main>
  );
}
