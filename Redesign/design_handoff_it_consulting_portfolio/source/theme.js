export const colors = {
  bgGradient: 'radial-gradient(900px 600px at 10% -10%, rgba(143,0,255,0.07) 0%, rgba(8,8,10,0) 55%), linear-gradient(160deg, #0d0c11 0%, #09080b 55%, #08080a 100%)',
  surface: '#121116',
  surfaceAlt: '#15141b',
  border: 'rgba(255,255,255,0.10)',
  borderHover: 'rgba(255,255,255,0.18)',
  textPrimary: '#F2F1F7',
  textBody: '#C7C5D8',
  textMuted: '#9A9AAE',
  textFaint: '#75738A',
  blue: '#5CC1FF',
  blueSoft: 'rgba(92,193,255,0.12)',
  purple: '#8F00FF',
  purpleSoft: 'rgba(143,0,255,0.10)'
};

export function neonButtonStyle(size) {
  const pad = size === 'sm' ? '10px 18px' : '14px 26px';
  return `display:inline-flex;align-items:center;justify-content:center;gap:8px;text-decoration:none;background:rgba(92,193,255,0.05);border:1px solid #5CC1FF;color:#EAF6FF;font-weight:600;font-size:15px;padding:${pad};border-radius:4px;cursor:pointer;box-shadow:inset 0 0 10px rgba(92,193,255,0.12), 0 0 10px rgba(92,193,255,0.18);transition:box-shadow 0.2s ease, background 0.2s ease, transform 0.15s ease;`;
}
export const neonButtonHoverStyle = 'background:rgba(92,193,255,0.13);box-shadow:inset 0 0 14px rgba(92,193,255,0.22), 0 0 22px rgba(92,193,255,0.4), 0 0 36px rgba(143,0,255,0.14);transform:translateY(-1px);';
export const neonButtonFocusStyle = 'outline:2px solid #5CC1FF;outline-offset:3px;';

export function categoryEyebrowWrapStyle() {
  return 'display:flex;align-items:center;gap:10px;margin-bottom:16px;';
}
export const categoryEyebrowBarStyle = 'width:22px;height:2px;background:#5CC1FF;box-shadow:0 0 6px rgba(92,193,255,0.6);flex-shrink:0;';
export const categoryEyebrowTextStyle = 'font-size:12.5px;letter-spacing:0.09em;text-transform:uppercase;color:#A9B3C1;font-weight:600;';

export function neutralChipStyle() {
  return 'font-size:12.5px;font-weight:500;color:#C7C5D8;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.10);padding:6px 12px;border-radius:3px;';
}

export function filterChipStyle(active) {
  return active
    ? "font-family:'Manrope',sans-serif;font-size:13px;font-weight:600;padding:7px 14px;border-radius:3px;cursor:pointer;border:1px solid #5CC1FF;background:rgba(92,193,255,0.14);color:#EAF6FF;box-shadow:0 0 10px rgba(92,193,255,0.3);"
    : "font-family:'Manrope',sans-serif;font-size:13px;font-weight:500;padding:7px 14px;border-radius:3px;cursor:pointer;border:1px solid rgba(255,255,255,0.10);background:#121116;color:#9A9AAE;";
}

export const cardBorderStyle = '1px solid rgba(255,255,255,0.10)';
export const cardBgStyle = '#121116';

export const sampleBadgeStyle = 'font-size:10.5px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#75738A;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14);padding:3px 9px;border-radius:3px;white-space:nowrap;';

const BREAKPOINT = 860;
export function attachResponsive(component) {
  const compute = () => component.setState({ isMobile: window.innerWidth < BREAKPOINT });
  compute();
  window.addEventListener('resize', compute);
  return () => window.removeEventListener('resize', compute);
}
