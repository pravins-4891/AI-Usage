import StatusPill from '../shared/StatusPill.jsx';
import { reportCards, scheduledReports } from '../../data/mockData.js';
import styles from './Reporting.module.css';

export default function Reporting() {
  return (
    <div className={styles.page}>
      <div className={styles.reportGrid}>
        {reportCards.map(r => (
          <div key={r.name} className={styles.reportCard}>
            <div className={styles.reportIcon}>{r.icon}</div>
            <div className={styles.reportName}>{r.name}</div>
            <div className={styles.reportDesc}>{r.desc}</div>
            <button className={styles.runBtn}>Run Report →</button>
          </div>
        ))}
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>Scheduled Reports</span>
          <button className={styles.addBtn}>+ Schedule</button>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Report</th><th>Frequency</th><th>Recipients</th><th>Last Run</th><th>Format</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {scheduledReports.map(r => (
                <tr key={r.name}>
                  <td><strong>{r.name}</strong></td>
                  <td>{r.freq}</td>
                  <td>{r.recipients}</td>
                  <td>{r.lastRun}</td>
                  <td>{r.format}</td>
                  <td><StatusPill status={r.status} label={r.status === 'scheduled' ? `Next: Jul 1` : undefined} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
