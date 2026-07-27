// Small set of original outline-style icons (no external icon library
// dependency) plus a keyword matcher that picks a reasonable icon for a
// given feature/section label.

const ICONS = {
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <rect x="9" y="2.5" width="6" height="3" rx="1" />
      <path d="M9 11h6M9 15h6" />
    </>
  ),
  link: (
    <>
      <path d="M9.5 14.5l5-5" />
      <path d="M11 7l1.5-1.5a3.5 3.5 0 0 1 5 5L16 12" />
      <path d="M13 17l-1.5 1.5a3.5 3.5 0 0 1-5-5L8 12" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V10M11 20V4M18 20v-7" />
      <path d="M2 20h20" />
    </>
  ),
  bell: (
    <>
      <path d="M6 9a6 6 0 1 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 13 6 9z" />
      <path d="M10 18a2 2 0 0 0 4 0" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h13M21 18h-1" />
      <circle cx="16" cy="6" r="2" />
      <circle cx="9" cy="12" r="2" />
      <circle cx="18" cy="18" r="2" />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7l1.5-2.5h5L16 7" />
      <circle cx="12" cy="13.5" r="3.5" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z" />
      <path d="M4 5.5v15" />
    </>
  ),
  folder: (
    <>
      <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5H9l2 2h8.5A1.5 1.5 0 0 1 21 8.5v10A1.5 1.5 0 0 1 19.5 20h-15A1.5 1.5 0 0 1 3 18.5z" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <circle cx="7" cy="7" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="7" cy="17" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  wifi: (
    <>
      <path d="M2.5 9.5a15 15 0 0 1 19 0" />
      <path d="M6 13.5a9.5 9.5 0 0 1 12 0" />
      <path d="M9.5 17.3a4.5 4.5 0 0 1 5 0" />
      <circle cx="12" cy="20.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18a4.5 4.5 0 0 1-.5-9 5.5 5.5 0 0 1 10.7-1.7A4 4 0 0 1 17 18z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M15.5 20c.3-2.3 2-4 4.5-4.6" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="M11 12l9-9M17 6l2 2M20 3l1 1" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  cube: (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="M4.5 7.5L12 12l7.5-4.5M12 12v9" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  cog: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2.2M12 18.8V21M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M3 12h2.2M18.8 12H21M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5h18" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.8 2.6 4.2 5.8 4.2 9s-1.4 6.4-4.2 9c-2.8-2.6-4.2-5.8-4.2-9s1.4-6.4 4.2-9z" />
    </>
  ),
  droplet: (
    <>
      <path d="M12 3s6.5 7.2 6.5 11.5A6.5 6.5 0 0 1 5.5 14.5C5.5 10.2 12 3 12 3z" />
    </>
  ),
  refresh: (
    <>
      <path d="M4 12a8 8 0 0 1 13.7-5.7L20 8" />
      <path d="M20 4v4h-4" />
      <path d="M20 12a8 8 0 0 1-13.7 5.7L4 16" />
      <path d="M4 20v-4h4" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </>
  ),
};

const RULES = [
  [/calendar|schedul|maintenance|preventive/i, "calendar"],
  [/work order|task|to-?do/i, "clipboard"],
  [/integrat|connect|link|legacy|api plugin/i, "link"],
  [/visib|monitor|dashboard|status|track everything|overview/i, "eye"],
  [/complian|audit|secure|security|shield|assess/i, "shield"],
  [/chart|trend|analy|kpi|insight|data science/i, "chart"],
  [/alert|notif/i, "bell"],
  [/control|orchestrat|permission|role/i, "sliders"],
  [/photo|video|camera|visual/i, "camera"],
  [/knowledge|wiki|documentation|onboard|answers/i, "book"],
  [/file|document|report/i, "folder"],
  [/server|infrastructure|hardware|ecosystem|device management/i, "server"],
  [/encrypt|password|authent|mfa|lock|credential/i, "lock"],
  [/network|cellular|satellite|wifi|iot/i, "wifi"],
  [/cloud/i, "cloud"],
  [/team|collabor|user|people|staff|support/i, "users"],
  [/access|key/i, "key"],
  [/mobile|anywhere|pocket/i, "mobile"],
  [/asset/i, "cube"],
  [/event|history|log|real.?time/i, "clock"],
  [/engineer|custom|optimiz|systems/i, "cog"],
  [/project|service|partnership/i, "briefcase"],
  [/industr|oil|gas|energy|global/i, "globe"],
  [/water|wastewater|treatment/i, "droplet"],
  [/orchestrat|evolve|resilien|scale/i, "refresh"],
];

function matchIcon(label = "") {
  for (const [pattern, icon] of RULES) {
    if (pattern.test(label)) return icon;
  }
  return "check";
}

export function FeatureIcon({ label, className }) {
  const icon = matchIcon(label);
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[icon]}
    </svg>
  );
}
