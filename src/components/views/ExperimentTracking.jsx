import { useState } from 'react';
import KpiCard from '../shared/KpiCard.jsx';
import StatusPill from '../shared/StatusPill.jsx';
import { experimentKpis, experiments } from '../../data/mockData.js';
import styles from './ExperimentTracking.module.css';

const statusMap = { running: 'active', complete: 'active', review: 'review', draft: 'inactive' };
const statusLabel = { running: 'Running', complete: 'Complete', review: 'Review', draft: 'Draft' };
const typeColor = { 'A/B Test': '#7c8cf8', 'Benchmark': '#4ade80', 'Cost Study': '#f59e0b', 'Safety': '#f87171', 'Hyperparams': '#60a5fa', 'Architecture': '#a78bfa' };

export default function ExperimentTracking() {
  const [selected, setSelected] = useState(experiments[0]);

  return (
    <div className={styles.page}>
      <div className={styles.kpiRow}>
        {experimentKpis.map((k, i) => (
          <KpiCard key={k.label} label={k.label} value={k.value} delta={k.delta}
            deltaType={i === 0 ? 'up' : i === 1 ? 'neutral' : i === 2 ? 'up' : 'neutral'} color={k.color} />
        ))}
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Experiment Log</span>
            <button className={styles.addBtn}>+ New Experiment</button>
          </div>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr><th>ID</th><th>Name</th><th>Type</th><th>Model</th><th>Owner</th><th>Started</th><th>Metric</th><th>Result</th><th>Status</th></tr>
              </thead>
              <tbody>
                {experiments.map(e => (
                  <tr key={e.id} className={selected?.id === e.id ? styles.selectedRow : ''} onClick={() => setSelected(e)} style={{ cursor: 'pointer' }}>
                    <td className={styles.idCell}>{e.id}</td>
                    <td><strong>{e.name}</strong></td>
                    <td><span className={styles.typeBadge} style={{ color: typeColor[e.type], borderColor: typeColor[e.type] + '44', background: typeColor[e.type] + '11' }}>{e.type}</span></td>
                    <td>{e.model}</td>
                    <td>{e.owner}</td>
                    <td>{e.started}</td>
                    <td className={styles.metricCell}>{e.metric}</td>
                    <td style={{ color: e.result.includes('↑') || e.result.includes('optimal') ? 'var(--green)' : e.result.includes('↓') && !e.result.includes('68') ? 'var(--green)' : 'var(--green)', fontWeight: 600 }}>{e.result}</td>
                    <td><StatusPill status={statusMap[e.status]} label={statusLabel[e.status]} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.rightCol}>
          {selected && (
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardTitle}>🔬 {selected.id}</span>
                <StatusPill status={statusMap[selected.status]} label={statusLabel[selected.status]} />
              </div>
              <div className={styles.expName}>{selected.name}</div>
              <div className={styles.detailGrid}>
                <div className={styles.paramBlock}><div className={styles.paramKey}>Type</div><div className={styles.paramVal}>{selected.type}</div></div>
                <div className={styles.paramBlock}><div className={styles.paramKey}>Model</div><div className={styles.paramVal}>{selected.model}</div></div>
                <div className={styles.paramBlock}><div className={styles.paramKey}>Owner</div><div className={styles.paramVal}>{selected.owner}</div></div>
                <div className={styles.paramBlock}><div className={styles.paramKey}>Started</div><div className={styles.paramVal}>{selected.started}</div></div>
                <div className={styles.paramBlock}><div className={styles.paramKey}>Metric</div><div className={styles.paramVal}>{selected.metric}</div></div>
                <div className={styles.paramBlock}><div className={styles.paramKey}>Baseline</div><div className={styles.paramVal}>{selected.baseline}</div></div>
                <div className={styles.paramBlock} style={{ gridColumn: '1 / -1', background: 'var(--green-bg)', border: '1px solid #2d5a2d' }}>
                  <div className={styles.paramKey}>Result</div>
                  <div className={styles.paramVal} style={{ color: 'var(--green)', fontSize: 16 }}>{selected.result}</div>
                </div>
              </div>
              <div className={styles.expActions}>
                <button className={styles.btnOutline}>View Logs</button>
                <button className={styles.btnOutline}>Compare</button>
                {selected.status === 'complete' && <button className={styles.btnPrimary}>Promote to Prod</button>}
                {selected.status === 'review' && <button className={styles.btnPrimary}>Approve</button>}
              </div>
            </div>
          )}

          <div className={styles.card}>
            <div className={styles.cardHeader}><span className={styles.cardTitle}>By Experiment Type</span></div>
            {Object.entries(typeColor).map(([type, color]) => {
              const count = experiments.filter(e => e.type === type).length;
              if (!count) return null;
              return (
                <div key={type} className={styles.typeRow}>
                  <span className={styles.typeLabel}>{type}</span>
                  <div className={styles.typeTrack}><div style={{ width: `${(count / experiments.length) * 100}%`, height: '100%', background: color, borderRadius: 4 }} /></div>
                  <span className={styles.typeCount} style={{ color }}>{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
