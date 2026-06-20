import styles from './KpiCard.module.css';

function Sparkline({ data, color }) {
  const max = Math.max(...data);
  return (
    <div className={styles.spark}>
      {data.map((v, i) => (
        <div
          key={i}
          className={styles.sparkBar}
          style={{ height: `${(v / max) * 100}%`, background: color, opacity: i === data.length - 1 ? 1 : 0.6 }}
        />
      ))}
    </div>
  );
}

export default function KpiCard({ label, value, delta, deltaType = 'neutral', color, sparkData }) {
  return (
    <div className={styles.card}>
      <div className={styles.label}>{label}</div>
      <div className={styles.value} style={{ color }}>{value}</div>
      <div className={`${styles.delta} ${styles[deltaType]}`}>{delta}</div>
      {sparkData && <Sparkline data={sparkData} color={color} />}
    </div>
  );
}
