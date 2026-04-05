export default function PortraitSvg({ className }) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background */}
      <rect width="500" height="500" fill="#f7f7f7" />

      {/* Neck / collar area */}
      <path d="M190 400 Q200 370 210 360 L290 360 Q300 370 310 400 L340 500 L160 500 Z" fill="none" stroke="#333" strokeWidth="1.2" />
      {/* Collar lines */}
      <path d="M210 365 L180 430" stroke="#555" strokeWidth="0.8" />
      <path d="M290 365 L320 430" stroke="#555" strokeWidth="0.8" />
      {/* Shirt fold lines */}
      <path d="M215 380 Q230 400 225 430" stroke="#bbb" strokeWidth="0.6" />
      <path d="M285 380 Q270 400 275 430" stroke="#bbb" strokeWidth="0.6" />

      {/* Head shape */}
      <ellipse cx="250" cy="230" rx="95" ry="115" fill="#f7f7f7" stroke="#333" strokeWidth="1.5" />

      {/* Jaw / chin definition */}
      <path d="M175 270 Q190 340 250 355 Q310 340 325 270" fill="none" stroke="#333" strokeWidth="1.5" />

      {/* Hair - messy textured top */}
      <path d="M155 195 Q160 140 195 115 Q220 100 250 95 Q280 100 305 115 Q340 140 345 195" fill="#333" stroke="#222" strokeWidth="1.5" />
      {/* Hair texture strands */}
      <path d="M175 170 Q185 130 210 110" stroke="#222" strokeWidth="1" fill="none" />
      <path d="M195 160 Q210 125 235 105" stroke="#222" strokeWidth="0.8" fill="none" />
      <path d="M220 155 Q230 120 250 100" stroke="#222" strokeWidth="0.8" fill="none" />
      <path d="M250 150 Q260 115 275 105" stroke="#222" strokeWidth="0.8" fill="none" />
      <path d="M280 155 Q290 125 310 115" stroke="#222" strokeWidth="1" fill="none" />
      <path d="M305 165 Q315 140 330 130" stroke="#222" strokeWidth="0.8" fill="none" />
      {/* Hair sticking up at top */}
      <path d="M230 100 Q235 85 240 80 Q245 78 248 82" stroke="#333" strokeWidth="1" fill="none" />
      <path d="M255 97 Q258 82 265 76 Q268 78 267 85" stroke="#333" strokeWidth="1" fill="none" />
      <path d="M270 100 Q275 88 280 83" stroke="#333" strokeWidth="0.8" fill="none" />
      <path d="M218 105 Q215 90 220 82" stroke="#333" strokeWidth="0.8" fill="none" />

      {/* Side hair / sideburns with stipple texture */}
      <path d="M160 200 Q155 230 162 260" stroke="#555" strokeWidth="1" fill="none" />
      <path d="M340 200 Q345 230 338 260" stroke="#555" strokeWidth="1" fill="none" />
      {/* Stipple dots on sides (simulating hair texture) */}
      {[
        [162, 215], [158, 225], [163, 235], [160, 245], [165, 255],
        [167, 210], [164, 220], [168, 230], [166, 240], [170, 250],
        [338, 215], [342, 225], [337, 235], [340, 245], [335, 255],
        [333, 210], [336, 220], [332, 230], [334, 240], [330, 250],
      ].map(([x, y], i) => (
        <circle key={`st-${i}`} cx={x} cy={y} r="1" fill="#555" />
      ))}

      {/* Forehead wrinkle lines */}
      <path d="M200 180 Q225 175 250 178 Q275 175 300 180" stroke="#aaa" strokeWidth="0.5" fill="none" />

      {/* Eyebrows */}
      <path d="M195 210 Q210 200 230 205" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M270 205 Q290 200 305 210" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Glasses frames */}
      <rect x="192" y="215" width="55" height="35" rx="4" fill="none" stroke="#444" strokeWidth="2" />
      <rect x="258" y="215" width="55" height="35" rx="4" fill="none" stroke="#444" strokeWidth="2" />
      {/* Bridge */}
      <path d="M247 228 Q250 222 258 228" stroke="#444" strokeWidth="1.5" fill="none" />
      {/* Temples */}
      <path d="M192 228 L165 220" stroke="#444" strokeWidth="1.5" />
      <path d="M313 228 L340 220" stroke="#444" strokeWidth="1.5" />

      {/* Eyes behind glasses */}
      <ellipse cx="220" cy="232" rx="12" ry="8" fill="white" stroke="#555" strokeWidth="0.8" />
      <circle cx="222" cy="232" r="6" fill="#3a2a1a" />
      <circle cx="224" cy="230" r="2" fill="white" />
      <ellipse cx="285" cy="232" rx="12" ry="8" fill="white" stroke="#555" strokeWidth="0.8" />
      <circle cx="287" cy="232" r="6" fill="#3a2a1a" />
      <circle cx="289" cy="230" r="2" fill="white" />

      {/* Nose */}
      <path d="M248 240 Q245 265 240 278 Q248 285 260 278 Q255 265 252 240" stroke="#555" strokeWidth="1" fill="none" />
      {/* Nose shadow */}
      <path d="M242 275 Q250 280 258 275" stroke="#888" strokeWidth="0.6" fill="none" />

      {/* Mouth / lips */}
      <path d="M225 305 Q237 298 250 300 Q263 298 275 305" stroke="#555" strokeWidth="1.2" fill="none" />
      <path d="M230 307 Q250 315 270 307" stroke="#888" strokeWidth="0.8" fill="none" />

      {/* Beard stubble - stipple pattern */}
      {(() => {
        const dots = [];
        const regions = [
          { cx: 250, cy: 330, rx: 60, ry: 30, count: 80 },
          { cx: 220, cy: 310, rx: 25, ry: 15, count: 30 },
          { cx: 280, cy: 310, rx: 25, ry: 15, count: 30 },
          { cx: 250, cy: 345, rx: 40, ry: 15, count: 40 },
          { cx: 175, cy: 270, rx: 15, ry: 30, count: 25 },
          { cx: 325, cy: 270, rx: 15, ry: 30, count: 25 },
        ];
        let idx = 0;
        regions.forEach(({ cx, cy, rx, ry, count }) => {
          for (let j = 0; j < count; j++) {
            const seed1 = Math.sin(idx * 127.1 + j * 311.7) * 43758.5453;
            const seed2 = Math.sin(idx * 269.5 + j * 183.3) * 43758.5453;
            const a = (seed1 - Math.floor(seed1)) * 2 * Math.PI;
            const r = Math.sqrt(seed2 - Math.floor(seed2));
            const x = cx + Math.cos(a) * r * rx;
            const y = cy + Math.sin(a) * r * ry;
            const size = 0.6 + (seed1 - Math.floor(seed1)) * 0.6;
            dots.push(
              <circle key={`b-${idx}-${j}`} cx={x} cy={y} r={size} fill="#555" opacity="0.5" />
            );
          }
          idx++;
        });
        return dots;
      })()}

      {/* Ear hints */}
      <path d="M157 225 Q145 235 148 255 Q150 265 158 268" stroke="#555" strokeWidth="1" fill="none" />
      <path d="M343 225 Q355 235 352 255 Q350 265 342 268" stroke="#555" strokeWidth="1" fill="none" />
    </svg>
  );
}
