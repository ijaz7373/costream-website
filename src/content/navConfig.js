// Single source of truth for site navigation: desktop mega menu, mobile
// accordion nav, and the footer sitemap all read from this file.

export const NAV = [
  {
    label: "Technology",
    blurb:
      "A cloud-based OT platform that unifies monitoring, control, and asset visibility across your entire operation. Built to evolve with your systems",
    type: "columns",
    columns: [
      {
        heading: "SCADA",
        href: "/technology/scada",
        links: [
          { label: "Monitoring", href: "/technology/scada/monitoring" },
          { label: "Control", href: "/technology/scada/control" },
          {
            label: "Alerts and Notifications",
            href: "/technology/scada/alerts-notifications",
          },
          { label: "Visualizations", href: "/technology/scada/visualizations" },
          { label: "Event Tracking", href: "/technology/scada/event-tracking" },
          {
            label: "Trends & Analytics",
            href: "/technology/scada/trends-analytics",
          },
          { label: "Reporting", href: "/technology/scada/reporting" },
        ],
      },
      {
        heading: "Beyond SCADA",
        href: "/technology/beyond-scada",
        links: [
          {
            label: "Maintenance Tracking",
            href: "/technology/beyond-scada/maintenance-tracking",
          },
          {
            label: "Asset Management",
            href: "/technology/beyond-scada/asset-management",
          },
          { label: "Tasks", href: "/technology/beyond-scada/tasks" },
          {
            label: "Photo and Video Integration",
            href: "/technology/beyond-scada/photo-video-integration",
          },
          {
            label: "Knowledge Management",
            href: "/technology/beyond-scada/knowledge-management",
          },
          {
            label: "File Management",
            href: "/technology/beyond-scada/file-management",
          },
        ],
      },
      {
        heading: "Ecosystem",
        href: "/technology/ecosystem",
        links: [],
      },
    ],
  },
  {
    label: "Cybersecurity",
    blurb:
      "OT security services and compliance tools built for water and wastewater utilities, aligned with EPA and NIST guidance. Real protection, backed by real people.",
    type: "single",
    landing: { label: "Cybersecurity Overview", href: "/cybersecurity" },
    links: [
      { label: "Secure by Design", href: "/cybersecurity/secure-by-design" },
      {
        label: "Secure from Day One",
        href: "/cybersecurity/secure-from-day-one",
      },
      {
        label: "Secure for the Long Run",
        href: "/cybersecurity/secure-for-the-long-run",
      },
    ],
  },
  {
    label: "Industries",
    blurb:
      "Proven solutions for water, wastewater, energy, and other operational environments where reliability is non-negotiable. See how CoStream fits your world.",
    type: "flat",
    links: [
      { label: "Municipal Water", href: "/industries/municipal-water" },
      {
        label: "Municipal Wastewater",
        href: "/industries/municipal-wastewater",
      },
      {
        label: "Industrial Wastewater",
        href: "/industries/industrial-wastewater",
      },
      { label: "Waste Management", href: "/industries/waste-management" },
      { label: "Oil & Gas, Energy", href: "/industries/oil-gas-energy" },
    ],
  },
  {
    label: "Services",
    blurb:
      "Managed services and hands-on support from a team that knows your systems and answers when you call. Expertise that stays with you long after go-live.",
    type: "single",
    landing: { label: "Services Overview", href: "/services" },
    links: [
      {
        label: "Ongoing Unlimited Support",
        href: "/services/ongoing-unlimited-support",
      },
      { label: "Project Management", href: "/services/project-management" },
      { label: "Process Optimization", href: "/services/process-optimization" },
      { label: "Systems Engineering", href: "/services/systems-engineering" },
      { label: "Customized Solutions", href: "/services/customized-solutions" },
      { label: "Analytics", href: "/services/analytics" },
    ],
  },
  {
    label: "About Us",
    blurb:
      "The people, partnerships, and principles behind CoStream. Get to know the team that treats your operation like their own.",
    type: "flat",
    links: [
      { label: "Contact Us", href: "/about/contact-us" },
      {
        label: "History, Values, Culture, Our People, Leadership",
        href: "/about/history-values-culture-people-leadership",
      },
      { label: "News", href: "/about/news" },
      { label: "Blog & Social Media", href: "/about/blog-social-media" },
      { label: "Events", href: "/about/events" },
    ],
  },
];
