import { useState } from 'react';
import KpiCard from '../shared/KpiCard.jsx';
import StatusPill from '../shared/StatusPill.jsx';
import { metadataKpis, metadataEntities, metadataSchemas } from '../../data/mockData.js';
import styles from './MetadataRepository.module.css';

const typeIcon = { Model: '🧠', Dataset: '🗄️', Agent: '🤖', 'Prompt Set': '📝', Pipeline: '⚙️', 'Fine-tune': '🔧', 'Vector DB': '🔷', Experiment: '🔬' };

function CompletenessBar({ value }) {
  const color = value >= 90 ? 'var(--green)' : value >= 70 ? 'var(--amber)' : 'var(--red)';
  return (
    <div className={styles.complBar}>
      <div className={styles.complFill} style={{ width: `${value}%`, background: color }} />
      <span className={styles.complPct} style={{ color }}>{value}%</span>
    </div>
  );
}

export default function MetadataRepository() {
  const [selected, setSelected] = useState(metadataEntities[0]);
  const [search, setSearch] = useState('');

  const filtered = metadataEntities.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase()) ||
    e.type.toLowerCase().includes(search.toLowerCase()) ||
    e.tags.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.page}>
      <div className={styles.kpiRow}>
        {metadataKpis.map((k, i) => (
          <KpiCard key={k.label} label={k.label} value={k.value} delta={k.delta}
            deltaType={i === 3 ? 'down' : 'up'} color={k.color} />
        ))}
      </div>

      <div className={styles.mainGrid}>
        <div>
          <div className={styles.card} style={{ marginBottom: 14 }}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTitle}>Metadata Entities</span>
              <div className={styles.headerRight}>
                <input className={styles.search} placeholder="Search by name, type, tag…" value={search} onChange={e => setSearch(e.target.value)} />
                <button className={styles.addBtn}>+ Register</button>
              </div>
            </div>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr><th>ID</th><th>Name</th><th>Type</th><th>Schema</th><th>Version</th><th>Tags</th><th>Updated</th><th>Completeness</th><th>Status</th></tr>
                </thead>
                <tbody>
                  {filtered.map(e => (
                    <tr key={e.id} className={selected?.id === e.id ? styles.selectedRow : ''} onClick={() => setSelected(e)} style={{ cursor: 'pointer' }}>
                      <td className={styles.idCell}>{e.id}</td>
                      <td><span className={styles.entityName}><span>{typeIcon[e.type] || '📦'}</span><strong>{e.name}</strong></span></td>
                      <td>{e.type}</td>
                      <td><code className={styles.schema}>{e.schema}</code></td>
                      <td><code className={styles.version}>{e.version}</code></td>
                      <td><span className={styles.tags}>{e.tags}</span></td>
                      <td>{e.updated}</td>
                      <td><CompletenessBar value={e.completeness} /></td>
                      <td><StatusPill status={e.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}><span className={styles.cardTitle}>Schema Registry</span></div>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr><th>Schema</th><th>Entities</th><th>Fields</th><th>Required</th><th>Status</th></tr>
                </thead>
                <tbody>
                  {metadataSchemas.map(s => (
                    <tr key={s.schema}>
                      <td><code className={styles.schema}>{s.schema}</code></td>
                      <td>{s.entities}</td>
                      <td>{s.fields}</td>
                      <td>{s.required}</td>
                      <td><StatusPill status={s.status === 'stable' ? 'active' : 'review'} label={s.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {selected && (
          <div className={styles.card} style={{ height: 'fit-content' }}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTitle}>{typeIcon[selected.type]} {selected.type}</span>
              <StatusPill status={selected.status} />
            </div>
            <div className={styles.entityDetailName}>{selected.name}</div>
            <div className={styles.detailGrid}>
              <div className={styles.paramBlock}><div className={styles.paramKey}>ID</div><div className={styles.paramValMono}>{selected.id}</div></div>
              <div className={styles.paramBlock}><div className={styles.paramKey}>Schema</div><div className={styles.paramValMono}>{selected.schema}</div></div>
              <div className={styles.paramBlock}><div className={styles.paramKey}>Version</div><div className={styles.paramVal}>{selected.version}</div></div>
              <div className={styles.paramBlock}><div className={styles.paramKey}>Last Updated</div><div className={styles.paramVal}>{selected.updated}</div></div>
              <div className={styles.paramBlock} style={{ gridColumn: '1 / -1' }}>
                <div className={styles.paramKey}>Tags</div>
                <div className={styles.tagList}>
                  {selected.tags.split(', ').map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
              </div>
              <div className={styles.paramBlock} style={{ gridColumn: '1 / -1' }}>
                <div className={styles.paramKey}>Metadata Completeness</div>
                <CompletenessBar value={selected.completeness} />
                {selected.completeness < 80 && <div className={styles.staleWarning}>⚠ Incomplete metadata — fill required fields to meet governance standard.</div>}
              </div>
            </div>
            <div className={styles.lineageSection}>
              <div className={styles.lineageLabel}>Lineage</div>
              <div className={styles.lineageChain}>
                <div className={styles.lineageNode}>Source Data</div>
                <div className={styles.lineageArrow}>→</div>
                <div className={styles.lineageNode} style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>{selected.name}</div>
                <div className={styles.lineageArrow}>→</div>
                <div className={styles.lineageNode}>Downstream Apps</div>
              </div>
            </div>
            <div className={styles.detailActions}>
              <button className={styles.btnOutline}>Edit Metadata</button>
              <button className={styles.btnOutline}>View Lineage</button>
              <button className={styles.btnPrimary}>Validate Schema</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
