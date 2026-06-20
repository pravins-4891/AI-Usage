import styles from './Sidebar.module.css';

const navItems = [
  { section: 'Overview', items: [
    { id: 'dashboard', icon: '⊞',  label: 'Dashboard' },
    { id: 'usage',     icon: '📊', label: 'Token Usage',  badge: 'Live', badgeType: 'accent' },
  ]},
  { section: 'Models', items: [
    { id: 'catalog',   icon: '🧠', label: 'Model Catalog' },
    { id: 'agents',    icon: '🤖', label: 'Agents & Skills', badge: '12' },
  ]},
  { section: 'Governance', items: [
    { id: 'guardrails', icon: '🛡️', label: 'Guardrails', badge: '2', badgeType: 'warn' },
    { id: 'reporting',  icon: '📋', label: 'Reports' },
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
