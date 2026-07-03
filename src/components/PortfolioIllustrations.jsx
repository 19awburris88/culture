const G  = 'rgba(200,168,75,0.65)';
const GD = 'rgba(200,168,75,0.28)';
const GF = 'rgba(200,168,75,0.07)';

const svgProps = {
  viewBox: '0 0 320 240',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  style: { width: '100%', height: '100%', position: 'absolute', inset: 0 },
};

/* ── 01  Interior Remodel — one-point perspective room ── */
export function IllustrationInterior() {
  return (
    <svg {...svgProps}>
      {/* Back wall */}
      <rect x="88" y="48" width="144" height="144" fill={GF} stroke={G} strokeWidth="1.5" />
      {/* Ceiling plane */}
      <path d="M88 48 L16 8 L304 8 L232 48" fill={GF} stroke={G} strokeWidth="1.5" />
      {/* Floor plane */}
      <path d="M88 192 L16 232 L304 232 L232 192" fill={GF} stroke={G} strokeWidth="1.5" />
      {/* Left wall */}
      <path d="M16 8 L16 232 L88 192 L88 48" fill={GF} stroke={G} strokeWidth="1.5" />
      {/* Right wall */}
      <path d="M304 8 L304 232 L232 192 L232 48" fill={GF} stroke={G} strokeWidth="1.5" />
      {/* Window on back wall */}
      <rect x="122" y="68" width="76" height="72" fill="none" stroke={G} strokeWidth="1.5" />
      <line x1="160" y1="68" x2="160" y2="140" stroke={GD} strokeWidth="1" />
      <line x1="122" y1="104" x2="198" y2="104" stroke={GD} strokeWidth="1" />
      {/* Door left of back wall */}
      <rect x="92" y="148" width="28" height="44" fill="none" stroke={G} strokeWidth="1.2" />
      <path d="M92 148 Q120 148 120 192" fill="none" stroke={GD} strokeWidth="0.75" strokeDasharray="3 2" />
      {/* Floor planks left side */}
      {[168, 186, 204, 220].map((y, i) => (
        <line key={`fl${i}`} x1="16" y1={y} x2="88" y2={y - 24} stroke={GD} strokeWidth="0.75" />
      ))}
      {/* Floor planks right side */}
      {[168, 186, 204, 220].map((y, i) => (
        <line key={`fr${i}`} x1="304" y1={y} x2="232" y2={y - 24} stroke={GD} strokeWidth="0.75" />
      ))}
      {/* Baseboard */}
      <line x1="88" y1="186" x2="232" y2="186" stroke={GD} strokeWidth="1" />
      {/* Ceiling light */}
      <circle cx="160" cy="22" r="7" fill="none" stroke={GD} strokeWidth="1" />
      <line x1="160" y1="29" x2="160" y2="48" stroke={GD} strokeWidth="0.75" />
    </svg>
  );
}

/* ── 02  Commercial Buildout — building elevation ── */
export function IllustrationCommercial() {
  return (
    <svg {...svgProps}>
      {/* Parapet / roofline */}
      <rect x="18" y="28" width="284" height="16" fill={GF} stroke={G} strokeWidth="1.5" />
      {/* Building body */}
      <rect x="28" y="44" width="264" height="172" fill={GF} stroke={G} strokeWidth="1.5" />
      {/* Canopy */}
      <path d="M28 136 L8 146 L312 146 L292 136Z" fill={GF} stroke={G} strokeWidth="1.2" />
      {/* Upper windows — 4 across */}
      {[42, 102, 162, 222].map((x, i) => (
        <g key={i}>
          <rect x={x} y="58" width="52" height="62" fill="none" stroke={G} strokeWidth="1.2" />
          <line x1={x + 26} y1="58" x2={x + 26} y2="120" stroke={GD} strokeWidth="0.75" />
          <line x1={x} y1="89" x2={x + 52} y2="89" stroke={GD} strokeWidth="0.75" />
        </g>
      ))}
      {/* Ground floor — double doors center */}
      <rect x="122" y="156" width="36" height="60" fill="none" stroke={G} strokeWidth="1.5" />
      <rect x="158" y="156" width="36" height="60" fill="none" stroke={G} strokeWidth="1.5" />
      {/* Door handles */}
      <line x1="155" y1="186" x2="162" y2="186" stroke={G} strokeWidth="1.5" />
      <line x1="161" y1="186" x2="158" y2="186" stroke={G} strokeWidth="1.5" />
      {/* Ground floor side windows */}
      <rect x="42" y="156" width="68" height="60" fill="none" stroke={G} strokeWidth="1.2" />
      <rect x="210" y="156" width="68" height="60" fill="none" stroke={G} strokeWidth="1.2" />
      {/* Ground line */}
      <line x1="8" y1="216" x2="312" y2="216" stroke={G} strokeWidth="1.5" />
      <line x1="8" y1="222" x2="312" y2="222" stroke={GD} strokeWidth="0.75" />
    </svg>
  );
}

/* ── 03  Exterior Renovation — house elevation with siding ── */
export function IllustrationExterior() {
  return (
    <svg {...svgProps}>
      {/* House body */}
      <rect x="38" y="108" width="244" height="114" fill={GF} stroke={G} strokeWidth="1.5" />
      {/* Roof */}
      <path d="M24 110 L160 32 L296 110" fill={GF} stroke={G} strokeWidth="2" />
      {/* Fascia / soffit */}
      <path d="M24 110 L38 110 M282 110 L296 110" stroke={GD} strokeWidth="1" />
      {/* Chimney */}
      <rect x="202" y="46" width="22" height="56" fill={GF} stroke={G} strokeWidth="1.2" />
      <rect x="198" y="42" width="30" height="8" fill={GF} stroke={G} strokeWidth="1" />
      {/* Horizontal siding lines */}
      {[118, 130, 142, 154, 166, 178, 190, 202, 214].map((y, i) => (
        <line key={i} x1="38" y1={y} x2="282" y2={y} stroke={GD} strokeWidth="0.75" />
      ))}
      {/* Front door */}
      <rect x="133" y="162" width="54" height="60" fill="none" stroke={G} strokeWidth="1.5" />
      <rect x="143" y="170" width="34" height="20" fill="none" stroke={GD} strokeWidth="1" />
      <circle cx="181" cy="195" r="3" fill={G} />
      {/* Left window */}
      <rect x="58" y="132" width="56" height="44" fill="none" stroke={G} strokeWidth="1.5" />
      <line x1="86" y1="132" x2="86" y2="176" stroke={GD} strokeWidth="1" />
      <line x1="58" y1="154" x2="114" y2="154" stroke={GD} strokeWidth="1" />
      {/* Right window */}
      <rect x="206" y="132" width="56" height="44" fill="none" stroke={G} strokeWidth="1.5" />
      <line x1="234" y1="132" x2="234" y2="176" stroke={GD} strokeWidth="1" />
      <line x1="206" y1="154" x2="262" y2="154" stroke={GD} strokeWidth="1" />
      {/* Porch step */}
      <rect x="112" y="220" width="96" height="7" fill={GF} stroke={G} strokeWidth="1" />
      {/* Ground line */}
      <line x1="8" y1="227" x2="312" y2="227" stroke={G} strokeWidth="1.5" />
    </svg>
  );
}

/* ── 04  Framing & Drywall — stud wall section ── */
export function IllustrationFraming() {
  return (
    <svg {...svgProps}>
      {/* Top plate (double) */}
      <rect x="18" y="22" width="284" height="14" fill={GF} stroke={G} strokeWidth="1.5" />
      <rect x="18" y="36" width="284" height="10" fill="rgba(200,168,75,0.1)" stroke={G} strokeWidth="1" />
      {/* Bottom plate (double) */}
      <rect x="18" y="194" width="284" height="10" fill="rgba(200,168,75,0.1)" stroke={G} strokeWidth="1" />
      <rect x="18" y="204" width="284" height="14" fill={GF} stroke={G} strokeWidth="1.5" />
      {/* 6 studs */}
      {[26, 72, 118, 180, 226, 272].map((x, i) => (
        <rect key={i} x={x} y="46" width="14" height="148" fill={GF} stroke={G} strokeWidth="1.5" />
      ))}
      {/* Nogging / blocking at mid-height */}
      <rect x="18" y="116" width="284" height="10"
        fill="rgba(200,168,75,0.05)" stroke={GD} strokeWidth="1" strokeDasharray="5 3" />
      {/* Window rough opening between studs 3 & 5 */}
      {/* King studs */}
      <rect x="104" y="46" width="14" height="148"
        fill="rgba(200,168,75,0.12)" stroke={G} strokeWidth="1.2" />
      <rect x="194" y="46" width="14" height="148"
        fill="rgba(200,168,75,0.12)" stroke={G} strokeWidth="1.2" />
      {/* Header */}
      <rect x="104" y="46" width="104" height="22"
        fill="rgba(200,168,75,0.14)" stroke={G} strokeWidth="1.2" />
      {/* Sill */}
      <rect x="104" y="148" width="104" height="10"
        fill="rgba(200,168,75,0.14)" stroke={G} strokeWidth="1.2" />
      {/* Trimmer studs */}
      <rect x="118" y="68" width="8" height="80" fill={GD} stroke={GD} strokeWidth="1" />
      <rect x="186" y="68" width="8" height="80" fill={GD} stroke={GD} strokeWidth="1" />
      {/* Opening label */}
      <line x1="132" y1="108" x2="182" y2="108" stroke={GD} strokeWidth="0.75" strokeDasharray="3 2" />
      {/* Drywall face (right edge) */}
      <rect x="290" y="22" width="8" height="196" fill="rgba(200,168,75,0.1)" stroke={G} strokeWidth="1" />
      {/* Measurement bracket top */}
      <line x1="18" y1="10" x2="302" y2="10" stroke={GD} strokeWidth="0.75" />
      <line x1="18" y1="6" x2="18" y2="14" stroke={GD} strokeWidth="0.75" />
      <line x1="302" y1="6" x2="302" y2="14" stroke={GD} strokeWidth="0.75" />
    </svg>
  );
}

/* ── 05  Concrete & Foundation — rebar grid plan view ── */
export function IllustrationConcrete() {
  return (
    <svg {...svgProps}>
      {/* Outer slab */}
      <rect x="18" y="18" width="284" height="204" fill={GF} stroke={G} strokeWidth="2" />
      {/* Rebar grid — horizontal */}
      {[42, 66, 90, 114, 138, 162, 186, 210].map((y, i) => (
        <line key={`h${i}`} x1="18" y1={y} x2="302" y2={y} stroke={GD} strokeWidth="1" />
      ))}
      {/* Rebar grid — vertical */}
      {[50, 82, 114, 146, 178, 210, 242, 274].map((x, i) => (
        <line key={`v${i}`} x1={x} y1="18" x2={x} y2="222" stroke={GD} strokeWidth="1" />
      ))}
      {/* Rebar tie dots at intersections */}
      {[50, 114, 178, 242].map(x =>
        [66, 114, 162, 210].map((y, j) => (
          <circle key={`${x}-${j}`} cx={x} cy={y} r="2.5" fill={G} opacity="0.7" />
        ))
      )}
      {/* Corner reinforcement marks */}
      {[[18,18],[302,18],[18,222],[302,222]].map(([cx, cy], i) => (
        <rect key={i} x={cx - (cx > 160 ? 22 : 0)} y={cy - (cy > 120 ? 22 : 0)}
          width="22" height="22"
          fill="rgba(200,168,75,0.1)" stroke={G} strokeWidth="1" />
      ))}
      {/* Slab edge thickening indicator */}
      <rect x="18" y="18" width="284" height="204"
        fill="none" stroke={G} strokeWidth="5" opacity="0.25" />
      {/* Section cut arrow */}
      <path d="M 150 8 L 160 2 L 170 8" fill="none" stroke={GD} strokeWidth="1" />
      <line x1="160" y1="2" x2="160" y2="18" stroke={GD} strokeWidth="1" />
      {/* North arrow */}
      <circle cx="278" cy="202" r="12" fill="none" stroke={GD} strokeWidth="0.75" />
      <path d="M278 192 L274 202 L278 200 L282 202 Z" fill={G} opacity="0.7" />
      <line x1="278" y1="200" x2="278" y2="214" stroke={GD} strokeWidth="0.75" />
    </svg>
  );
}

/* ── 06  Full Home Renovation — floor plan ── */
export function IllustrationFloorPlan() {
  return (
    <svg {...svgProps}>
      {/* Outer walls — drawn as segments with door gap on bottom */}
      {/* Top */}
      <line x1="14" y1="14" x2="306" y2="14" stroke={G} strokeWidth="6" strokeLinecap="square" />
      {/* Left */}
      <line x1="14" y1="14" x2="14" y2="226" stroke={G} strokeWidth="6" strokeLinecap="square" />
      {/* Right */}
      <line x1="306" y1="14" x2="306" y2="226" stroke={G} strokeWidth="6" strokeLinecap="square" />
      {/* Bottom — with front door gap at 120–166 */}
      <line x1="14" y1="226" x2="110" y2="226" stroke={G} strokeWidth="6" strokeLinecap="square" />
      <line x1="166" y1="226" x2="306" y2="226" stroke={G} strokeWidth="6" strokeLinecap="square" />
      {/* Front door swing */}
      <path d="M110 226 Q110 182 166 226" fill="none" stroke={GD} strokeWidth="0.85" strokeDasharray="3 2" />

      {/* Interior wall — vertical center at x=168, y=14 to y=150, gap 90–128 for door */}
      <line x1="168" y1="14" x2="168" y2="88" stroke={G} strokeWidth="5" strokeLinecap="square" />
      <line x1="168" y1="130" x2="168" y2="226" stroke={G} strokeWidth="5" strokeLinecap="square" />
      {/* Door swing (interior vertical) */}
      <path d="M168 88 Q130 88 130 130" fill="none" stroke={GD} strokeWidth="0.85" strokeDasharray="3 2" />

      {/* Interior wall — horizontal at y=144, x=14 to x=168, gap 96–130 */}
      <line x1="14" y1="144" x2="88" y2="144" stroke={G} strokeWidth="5" strokeLinecap="square" />
      <line x1="130" y1="144" x2="168" y2="144" stroke={G} strokeWidth="5" strokeLinecap="square" />
      {/* Door swing (horizontal wall) */}
      <path d="M88 144 Q88 110 130 144" fill="none" stroke={GD} strokeWidth="0.85" strokeDasharray="3 2" />

      {/* Bathroom wall stub at x=240, y=14 to y=80 */}
      <line x1="240" y1="14" x2="240" y2="80" stroke={G} strokeWidth="5" strokeLinecap="square" />
      {/* Bathroom horizontal at y=80, x=168 to x=306 */}
      <line x1="168" y1="80" x2="306" y2="80" stroke={G} strokeWidth="5" strokeLinecap="square" />
      {/* Bathroom door gap in horizontal at x=200–234 */}
      <line x1="168" y1="80" x2="198" y2="80" stroke={G} strokeWidth="5" strokeLinecap="square" />
      <line x1="240" y1="80" x2="306" y2="80" stroke={G} strokeWidth="5" strokeLinecap="square" />
      <path d="M198 80 Q198 48 240 80" fill="none" stroke={GD} strokeWidth="0.85" strokeDasharray="3 2" />

      {/* Windows — double line on outer wall */}
      {/* Top wall window (living room) */}
      <line x1="60" y1="11" x2="130" y2="11" stroke={G} strokeWidth="3" />
      <line x1="60" y1="17" x2="130" y2="17" stroke={G} strokeWidth="1.5" />
      {/* Top wall window (right) */}
      <line x1="190" y1="11" x2="250" y2="11" stroke={G} strokeWidth="3" />
      <line x1="190" y1="17" x2="250" y2="17" stroke={G} strokeWidth="1.5" />
      {/* Right wall window */}
      <line x1="303" y1="150" x2="303" y2="210" stroke={G} strokeWidth="3" />
      <line x1="309" y1="150" x2="309" y2="210" stroke={G} strokeWidth="1.5" />

      {/* Room labels */}
      <text x="88" y="86" textAnchor="middle" fontFamily="Oswald,sans-serif"
        fontSize="9" fill={GD} letterSpacing="1.5">LIVING</text>
      <text x="204" y="136" textAnchor="middle" fontFamily="Oswald,sans-serif"
        fontSize="9" fill={GD} letterSpacing="1.5">KITCHEN</text>
      <text x="88" y="188" textAnchor="middle" fontFamily="Oswald,sans-serif"
        fontSize="9" fill={GD} letterSpacing="1.5">BEDROOM</text>
      <text x="240" y="162" textAnchor="middle" fontFamily="Oswald,sans-serif"
        fontSize="9" fill={GD} letterSpacing="1.5">MASTER</text>
      <text x="204" y="46" textAnchor="middle" fontFamily="Oswald,sans-serif"
        fontSize="9" fill={GD} letterSpacing="1.5">BATH</text>
    </svg>
  );
}
