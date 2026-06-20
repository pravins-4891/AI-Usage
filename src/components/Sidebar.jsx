import styles from './Sidebar.module.css';

const navItems = [
  { section: 'Overview', items: [
    { id: 'dashboard',   icon: '⊞',  label: 'Analytics Dashboard' },
  ]},
  { section: 'Assets', items: [
    { id: 'assets',      icon: '🗂️', label: 'AI Asset Registry',  badge: '2', badgeType: 'warn' },
    { id: 'catalog',     icon: '🧠', label: 'Model Catalog' },
    { id: 'metadata',    icon: '🔷', label: 'Metadata Repository' },
  ]},
  { section: 'Operations', items: [
    { id: 'usage',       icon: '📊', label: 'Usage Monitoring',    badge: 'Live', badgeType: 'accent' },
    { id: 'costs',       icon: '💰', label: 'Cost Tracking',       badge: '!', badgeType: 'warn' },
    { id: 'experiments', icon: '🔬', label: 'Experiment Tracking' },
  ]},
  { section: 'Prompts & Agents', items: [
    { id: 'prompts',     icon: '📝', label: 'Prompt Management',  badge: '5', badgeType: 'warn' },
    { id: 'agents',      icon: '🤖', label: 'Agents & Skills',    badge: '12' },
  ]},
  { section: 'Governance', items: [
    { id: 'guardrails',  icon: '🛡️', label: 'Audit & Governance', badge: '2', badgeType: 'warn' },
    { id: 'reporting',   icon: '📋', label: 'Reports' },
  ]},
];

export default function Sidebar({ activeView, onNavigate }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoName}>⚡ AITrack</div>
        <div className={styles.logoSub}>Governance Platform</div>
      </div>

      {navItems.map(({ section, items }) => (
        <div key={section} className={styles.section}>
          <div className={styles.sectionLabel}>{section}</div>
          {items.map(({ id, icon, label, badge, badgeType }) => (
            <button
              key={id}
              className={`${styles.navItem} ${activeView === id ? styles.active : ''}`}
              onClick={() => onNavigate(id)}
            >
              <span className={styles.icon}>{icon}</span>
              <span className={styles.label}>{label}</span>
              {badge && <span className={`${styles.badge} ${badgeType === 'warn' ? styles.badgeWarn : badgeType === 'accent' ? styles.badgeAccent : ''}`}>{badge}</span>}
            </button>
          ))}
        </div>
      ))}

      <div className={styles.footer}>
        <div className={styles.avatar}>P</div>
        <div>
          <div className={styles.userName}>Pravin S.</div>
          <div className={styles.userRole}>Admin</div>
        </div>
      </div>
    </aside>
  );
}
