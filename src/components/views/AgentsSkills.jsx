import KpiCard from '../shared/KpiCard.jsx';
import StatusPill from '../shared/StatusPill.jsx';
import { agentKpis, agents } from '../../data/mockData.js';
import styles from './AgentsSkills.module.css';

const guardrailStatus = { '3 active': 'ok', '2 active': 'ok', '4 active': 'ok', 'Review': 'review', 'Restricted': 'restricted' };

export default function AgentsSkills() {
  return (
    <div className={styles.page}>
      <div className={styles.kpiRow}>
        {agentKpis.map(k => (
          <KpiCard key={k.label} label={k.label} value={k.value} delta={k.delta} deltaType={k.delta.startsWith('↑') ? 'up' : 'neutral'} color={k.color} />
        ))}
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>Internal Agents Registry</span>
          <button className={styles.addBtn}>+ Register Agent</button>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Agent Name</th><th>Type</th><th>Model</th><th>Owner</th>
                <th>Calls (MTD)</th><th>Tokens (MTD)</th><th>Guardrails</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {agents.map(a => (
                <tr key={a.name}>
                  <td><strong>{a.name}</strong></td>
                  <td>{a.type}</td>
                  <td>{a.model}</td>
                  <td>{a.owner}</td>
                  <td>{a.calls}</td>
                  <td>{a.tokens}</td>
                  <td><StatusPill status={guardrailStatus[a.guardrails] || 'ok'} label={a.guardrails} /></td>
                  <td><StatusPill status={a.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
