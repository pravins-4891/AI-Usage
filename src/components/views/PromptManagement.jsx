import { useState } from 'react';
import KpiCard from '../shared/KpiCard.jsx';
import StatusPill from '../shared/StatusPill.jsx';
import { promptKpis, prompts, promptCategories } from '../../data/mockData.js';
import styles from './PromptManagement.module.css';

export default function PromptManagement() {
  const [selected, setSelected] = useState(prompts[0]);

  return (
    <div className={styles.page}>
      <div className={styles.kpiRow}>
        {promptKpis.map(k => (
          <KpiCard key={k.label} label={k.label} value={k.value} delta={k.delta}
            deltaType={k.delta.includes('↑') ? 'up' : k.label === 'Pending Review' ? 'down' : 'neutral'} color={k.color} />
        ))}
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Prompt Library</span>
            <button className={styles.addBtn}>+ New Prompt</button>
          </div>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr><th>ID</th><th>Name</th><th>Category</th><th>Model</th><th>Version</th><th>Avg Tokens</th><th>Success</th><th>Uses</th><th>Status</th></tr>
              </thead>
              <tbody>
                {prompts.map(p => (
                  <tr key={p.id} className={selected?.id === p.id ? styles.selectedRow : ''} onClick={() => setSelected(p)} style={{ cursor: 'pointer' }}>
                    <td className={styles.idCell}>{p.id}</td>
                    <td><strong>{p.name}</strong></td>
                    <td><span className={styles.catBadge}>{p.category}</span></td>
                    <td>{p.model}</td>
                    <td><code className={styles.version}>{p.version}</code></td>
                    <td>{p.tokens}</td>
                    <td style={{ color: parseInt(p.successRate) >= 85 ? 'var(--green)' : parseInt(p.successRate) >= 75 ? 'var(--amber)' : 'var(--red)', fontWeight: 600 }}>{p.successRate}</td>
                    <td>{p.uses}</td>
                    <td><StatusPill status={p.status} /></td>
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
                <span className={styles.cardTitle}>📝 {selected.name}</span>
                <StatusPill status={selected.status} />
              </div>
              <div className={styles.detailGrid}>
                <div className={styles.paramBlock}><div className={styles.paramKey}>Category</div><div className={styles.paramVal}>{selected.category}</div></div>
                <div className={styles.paramBlock}><div className={styles.paramKey}>Model</div><div className={styles.paramVal}>{selected.model}</div></div>
                <div className={styles.paramBlock}><div className={styles.paramKey}>Version</div><div className={styles.paramVal}>{selected.version}</div></div>
                <div className={styles.paramBlock}><div className={styles.paramKey}>Owner</div><div className={styles.paramVal}>{selected.owner}</div></div>
                <div className={styles.paramBlock}><div className={styles.paramKey}>Avg Tokens</div><div className={styles.paramVal}>{selected.tokens}</div></div>
                <div className={styles.paramBlock}><div className={styles.paramKey}>Success Rate</div><div className={styles.paramVal} style={{ color: parseInt(selected.successRate) >= 85 ? 'var(--green)' : 'var(--amber)' }}>{selected.successRate}</div></div>
                <div className={styles.paramBlock} style={{ gridColumn: '1 / -1' }}><div className={styles.paramKey}>Total Uses</div><div className={styles.paramVal}>{selected.uses}</div></div>
              </div>
              <div className={styles.promptPreviewLabel}>Prompt Template Preview</div>
              <div className={styles.promptPreview}>
                {`You are an expert assistant for ${selected.category.toLowerCase()} tasks.\n\nContext: {{context}}\nTask: {{task}}\n\nRespond with a structured, professional output that is concise and actionable. Model: ${selected.model}.`}
              </div>
              <div className={styles.promptActions}>
                <button className={styles.btnOutline}>Edit</button>
                <button className={styles.btnOutline}>Duplicate</button>
                <button className={styles.btnOutline}>Test Run</button>
                <button className={styles.btnPrimary}>Version ↑</button>
              </div>
            </div>
          )}

          <div className={styles.card}>
            <div className={styles.cardHeader}><span className={styles.cardTitle}>By Category</span></div>
            {promptCategories.map(c => (
              <div key={c.name} className={styles.catRow}>
                <span className={styles.catName}>{c.name}</span>
                <div className={styles.catTrack}>
                  <div className={styles.catFill} style={{ width: `${(c.count / 18) * 100}%`, background: c.color }} />
                </div>
                <span className={styles.catCount} style={{ color: c.color }}>{c.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
