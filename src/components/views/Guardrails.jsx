import { useState } from 'react';
import KpiCard from '../shared/KpiCard.jsx';
import { guardrailKpis, guardrailPolicies, policyTriggers } from '../../data/mockData.js';
import styles from './Guardrails.module.css';

const triggerStyle = {
  error: { bg: 'var(--red-bg)',   border: 'var(--red)',   color: 'var(--red)'   },
  warn:  { bg: 'var(--amber-bg)', border: 'var(--amber)', color: 'var(--amber)' },
  ok:    { bg: 'var(--green-bg)', border: 'var(--green)', color: 'var(--green)' },
};

function Toggle({ enabled, onChange }) {
  return (
    <button
      className={`${styles.toggle} ${enabled ? styles.toggleOn : styles.toggleOff}`}
      onClick={() => onChange(!enabled)}
      aria-label={enabled ? 'Disable' : 'Enable'}
    >
      <span className={styles.toggleKnob} />
    </button>
  );
}

export default function Guardrails() {
  const [policies, setPolicies] = useState(guardrailPolicies);

  function togglePolicy(i) {
    setPolicies(prev => prev.map((p, idx) => idx === i ? { ...p, enabled: !p.enabled } : p));
  }

  return (
    <div className={styles.page}>
      <div className={styles.kpiRow}>
        {guardrailKpis.map((k, i) => (
          <KpiCard key={k.label} label={k.label} value={k.value} delta={k.delta}
            deltaType={i === 2 ? 'down' : 'neutral'} color={k.color} />
        ))}
      </div>

      <div className={styles.splitGrid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Ethical Guardrails — Global</span>
            <button className={styles.editBtn}>Edit policies →</button>
          </div>
          {policies.map((p, i) => (
            <div key={i} className={styles.guardrailRow}>
              <span className={styles.guardrailIcon}>{p.icon}</span>
              <span className={styles.guardrailText}>{p.label}</span>
              <Toggle enabled={p.enabled} onChange={() => togglePolicy(i)} />
            </div>
          ))}
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Recent Policy Triggers</span>
          </div>
          <div className={styles.triggerList}>
            {policyTriggers.map((t, i) => {
              const s = triggerStyle[t.level] || triggerStyle.warn;
              return (
                <div key={i} className={styles.triggerBox} style={{ background: s.bg, borderLeftColor: s.border }}>
                  <div className={styles.triggerTitle} style={{ color: s.color }}>{t.title}</div>
                  <div className={styles.triggerBody}>{t.body}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
