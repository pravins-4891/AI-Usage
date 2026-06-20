import styles from './Topbar.module.css';

const titles = {
  dashboard:   'Analytics Dashboard',
  assets:      'AI Asset Registry',
  catalog:     'Model Catalog',
  metadata:    'Metadata Repository',
  usage:       'Usage Monitoring',
  costs:       'Cost Tracking',
  experiments: 'Experiment Tracking',
  prompts:     'Prompt Management',
  agents:      'Agents & Skills',
  guardrails:  'Audit & Governance',
  reporting:   'Reports',
};

export default function Topbar({ view, onAddModel }) {
  return (
    <header className={styles.topbar}>
      <h1 className={styles.title}>{titles[view] || 'AITrack'}</h1>
      <span className={styles.liveBadge}>● Live</span>
      <button className={styles.btnOutline}>Jun 2026 ▾</button>
      <button className={styles.btnPrimary} onClick={onAddModel}>+ Add Model</button>
    </header>
  );
}
