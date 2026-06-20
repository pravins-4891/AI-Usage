import styles from './BarRow.module.css';

export default function BarRow({ name, pct, tokens, color }) {
  return (
    <div className={styles.row}>
      <span className={styles.name}>{name}</span>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${Math.min(pct, 100)}%`, background: color }} />
      </div>
      <span className={styles.pct} style={{ color: pct > 100 ? 'var(--red)' : 'var(--text-secondary)' }}>{pct}%</span>
      <span className={styles.tokens}>{tokens}</span>
    </div>
  );
}
