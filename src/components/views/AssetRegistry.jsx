import { useState } from 'react';
import KpiCard from '../shared/KpiCard.jsx';
import StatusPill from '../shared/StatusPill.jsx';
import { assetKpis, aiAssets } from '../../data/mockData.js';
import styles from './AssetRegistry.module.css';

const riskColor = { low: 'var(--green)', medium: 'var(--amber)', high: 'var(--red)' };
const typeIcon  = { Model: '🧠', Dataset: '🗄️', Agent: '🤖', Pipeline: '⚙️', 'Fine-tune': '🔧' };

export default function AssetRegistry() {
  const [filter, setFilter] = useState('All');
  const types = ['All', 'Model', 'Dataset', 'Agent', 'Pipeline'];
  const filtered = filter === 'All' ? aiAssets : aiAssets.filter(a => a.type === filter);

  return (
    <div className={styles.page}>
      <div className={styles.kpiRow}>
        {assetKpis.map(k => (
          <KpiCard key={k.label} label={k.label} value={k.value} delta={k.delta}
            deltaType={k.delta.startsWith('↑') ? 'up' : 'neutral'} color={k.color} />
        ))}
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>AI Asset Registry</span>
          <div className={styles.controls}>
            <div className={styles.filterTabs}>
              {types.map(t => (
                <button key={t} className={`${styles.tab} ${filter === t ? styles.tabActive : ''}`}
                  onClick={() => setFilter(t)}>{t}</button>
              ))}
            </div>
            <button className={styles.addBtn}>+ Register Asset</button>
          </div>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th><th>Name</th><th>Type</th><th>Provider</th><th>Owner</th>
                <th>Version</th><th>Environment</th><th>Risk</th><th>Last Review</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(a => (
                <tr key={a.id}>
                  <td className={styles.idCell}>{a.id}</td>
                  <td>
                    <span className={styles.assetName}>
                      <span>{typeIcon[a.type] || '📦'}</span>
                      <strong>{a.name}</strong>
                    </span>
                  </td>
                  <td>{a.type}</td>
                  <td>{a.provider}</td>
                  <td>{a.owner}</td>
                  <td><code className={styles.version}>{a.version}</code></td>
                  <td>{a.env}</td>
                  <td><span className={styles.riskBadge} style={{ color: riskColor[a.risk] }}>● {a.risk}</span></td>
                  <td>{a.lastReview}</td>
                  <td><StatusPill status={a.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.summaryGrid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}><span className={styles.cardTitle}>Assets by Type</span></div>
          {[
            { label: 'Models',    count: 4, icon: '🧠', color: '#7c8cf8' },
            { label: 'Datasets',  count: 2, icon: '🗄️', color: '#4ade80' },
            { label: 'Agents',    count: 2, icon: '🤖', color: '#f59e0b' },
            { label: 'Pipelines', count: 1, icon: '⚙️', color: '#60a5fa' },
            { label: 'Fine-tunes',count: 1, icon: '🔧', color: '#a78bfa' },
          ].map(t => (
            <div key={t.label} className={styles.typeRow}>
              <span className={styles.typeIcon}>{t.icon}</span>
              <span className={styles.typeLabel}>{t.label}</span>
              <div className={styles.typeBarTrack}>
                <div className={styles.typeBarFill} style={{ width: `${(t.count / 4) * 100}%`, background: t.color }} />
              </div>
              <span className={styles.typeCount} style={{ color: t.color }}>{t.count}</span>
            </div>
          ))}
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}><span className={styles.cardTitle}>Risk Distribution</span></div>
          {[
            { level: 'Low Risk',    count: 4, color: 'var(--green)', bg: 'var(--green-bg)' },
            { level: 'Medium Risk', count: 3, color: 'var(--amber)', bg: 'var(--amber-bg)' },
            { level: 'High Risk',   count: 2, color: 'var(--red)',   bg: 'var(--red-bg)'   },
          ].map(r => (
            <div key={r.level} className={styles.riskRow} style={{ background: r.bg }}>
              <span className={styles.riskLabel} style={{ color: r.color }}>● {r.level}</span>
              <span className={styles.riskCount} style={{ color: r.color }}>{r.count} assets</span>
            </div>
          ))}
          <div className={styles.reviewAlert}>
            <div className={styles.alertTitle}>⚠ 2 High-Risk Assets Need Review</div>
            <div className={styles.alertBody}>Customer Intent Dataset and Resume Screening Model have overdue governance reviews.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
