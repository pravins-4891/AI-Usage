import { useState } from 'react';
import StatusPill from '../shared/StatusPill.jsx';
import { modelCatalog, modelDetail } from '../../data/mockData.js';
import styles from './ModelCatalog.module.css';

const params = [
  { key: 'contextWindow',   label: 'Context Window',     sub: 'contextSub' },
  { key: 'maxOutput',       label: 'Max Output',          sub: 'maxOutputSub' },
  { key: 'inputCost',       label: 'Input Cost',          sub: 'inputSub' },
  { key: 'outputCost',      label: 'Output Cost',         sub: 'outputSub' },
  { key: 'rateLimit',       label: 'Rate Limit',          sub: 'rateSub' },
  { key: 'dataResidency',   label: 'Data Residency',      sub: 'residencySub' },
  { key: 'toolUse',         label: 'Tool Use',            sub: 'toolSub' },
  { key: 'subscriptionTier', label: 'Subscription Tier', sub: 'subTierSub' },
];

export default function ModelCatalog() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(modelCatalog[0]);

  const filtered = modelCatalog.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.provider.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.page}>
      <div className={styles.card} style={{ marginBottom: 14 }}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>Model Catalog — Active Subscriptions</span>
          <div className={styles.headerControls}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search models..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button className={styles.filterBtn}>Filter ▾</button>
          </div>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Model</th><th>Provider</th><th>Tier</th><th>Context Window</th>
                <th>Input $/M</th><th>Output $/M</th><th>Users</th><th>MTD Cost</th><th>Status</th><th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(m => (
                <tr key={m.name} className={selected?.name === m.name ? styles.selectedRow : ''}>
                  <td><strong>{m.name}</strong></td>
                  <td>{m.provider}</td>
                  <td>{m.tier}</td>
                  <td>{m.context}</td>
                  <td>{m.inputCost}</td>
                  <td>{m.outputCost}</td>
                  <td>{m.users}</td>
                  <td>{m.mtdCost}</td>
                  <td><StatusPill status={m.status} /></td>
                  <td>
                    <button className={styles.detailBtn} onClick={() => setSelected(m)}>Details →</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selected && (
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>🧠 {selected.name} — Parameter Detail</span>
            <StatusPill status={selected.status} />
          </div>
          <div className={styles.paramGrid}>
            {params.map(p => (
              <div key={p.key} className={styles.paramBlock}>
                <div className={styles.paramKey}>{p.label}</div>
                <div className={styles.paramVal}>{modelDetail[p.key]}</div>
                <div className={styles.paramSub}>{modelDetail[p.sub]}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
