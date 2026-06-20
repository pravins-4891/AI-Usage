import KpiCard from '../shared/KpiCard.jsx';
import BarRow from '../shared/BarRow.jsx';
import StatusPill from '../shared/StatusPill.jsx';
import { userTokens, departmentUsage, quotaAlerts } from '../../data/mockData.js';
import styles from './TokenUsage.module.css';

const alertStyle = { error: { bg: 'var(--red-bg)', border: 'var(--red)', color: 'var(--red)' }, warn: { bg: 'var(--amber-bg)', border: 'var(--amber)', color: 'var(--amber)' } };

export default function TokenUsage() {
  return (
    <div className={styles.page}>
      <div className={styles.kpiRow}>
        <KpiCard label="Total Tokens (MTD)"  value="4.2M"       delta="↑ 18%"             deltaType="up"      color="var(--accent)" />
        <KpiCard label="Top Consumer"        value="Priya M."   delta="Data Science team"  deltaType="neutral" color="var(--accent)" />
        <KpiCard label="Avg / User / Day"    value="18.4K"      delta="tokens"             deltaType="neutral" color="var(--green)" />
        <KpiCard label="Quota Warnings"      value="3"          delta="2 near limit"       deltaType="down"    color="var(--amber)" />
      </div>

      <div className={styles.card} style={{ marginBottom: 14 }}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>User-Level Token Consumption</span>
          <button className={styles.exportBtn}>Export CSV ↓</button>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>User</th><th>Team</th><th>Model</th><th>Input Tokens</th>
                <th>Output Tokens</th><th>Total</th><th>Monthly Quota</th><th>% Used</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {userTokens.map(u => (
                <tr key={u.user}>
                  <td><strong>{u.user}</strong></td>
                  <td>{u.team}</td>
                  <td>{u.model}</td>
                  <td>{u.input}</td>
                  <td>{u.output}</td>
                  <td><strong>{u.total}</strong></td>
                  <td>{u.quota}</td>
                  <td style={{ color: u.pct > 100 ? 'var(--red)' : u.pct >= 80 ? 'var(--amber)' : 'var(--green)', fontWeight: 600 }}>{u.pct}%</td>
                  <td><StatusPill status={u.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.splitGrid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Department Breakdown</span>
          </div>
          {departmentUsage.map(d => <BarRow key={d.name} {...d} />)}
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Quota Alerts</span>
          </div>
          <div className={styles.alertList}>
            {quotaAlerts.map((a, i) => {
              const s = alertStyle[a.level] || alertStyle.warn;
              return (
                <div key={i} className={styles.alertBox} style={{ background: s.bg, borderLeftColor: s.border }}>
                  <div className={styles.alertTitle} style={{ color: s.color }}>⚠ {a.title}</div>
                  <div className={styles.alertBody}>{a.body}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
