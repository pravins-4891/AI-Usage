import KpiCard from '../shared/KpiCard.jsx';
import { costKpis, costByModel, costByTeam, monthlyCostHistory } from '../../data/mockData.js';
import styles from './CostTracking.module.css';

function CostBar({ label, budget, spent, pct, color }) {
  const over = pct > 100;
  return (
    <div className={styles.costRow}>
      <span className={styles.costLabel}>{label}</span>
      <div className={styles.costTrack}>
        <div className={styles.costFill} style={{ width: `${Math.min(pct, 100)}%`, background: over ? 'var(--red)' : color || 'var(--accent)' }} />
        {over && <div className={styles.costOverflow} style={{ width: `${Math.min(pct - 100, 20)}%` }} />}
      </div>
      <span className={styles.costSpent} style={{ color: over ? 'var(--red)' : 'var(--text-primary)' }}>${spent}</span>
      <span className={styles.costBudget}>/ ${budget}</span>
      <span className={styles.costPct} style={{ color: over ? 'var(--red)' : pct >= 90 ? 'var(--amber)' : 'var(--green)', fontWeight: 600 }}>{pct}%</span>
    </div>
  );
}

export default function CostTracking() {
  const maxSpend = Math.max(...monthlyCostHistory.map(m => m.spend));

  return (
    <div className={styles.page}>
      <div className={styles.kpiRow}>
        {costKpis.map((k, i) => (
          <KpiCard key={k.label} label={k.label} value={k.value} delta={k.delta}
            deltaType={i < 2 ? 'down' : i === 2 ? 'down' : 'up'} color={k.color} />
        ))}
      </div>

      <div className={styles.topGrid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Monthly Spend History</span>
            <span className={styles.cardSub}>Jan – Jun 2026</span>
          </div>
          <div className={styles.barChart}>
            {monthlyCostHistory.map(m => (
              <div key={m.month} className={styles.chartCol}>
                <span className={styles.chartValue}>${(m.spend / 1000).toFixed(1)}k</span>
                <div className={styles.chartBarWrap}>
                  <div className={styles.chartBar}
                    style={{ height: `${(m.spend / maxSpend) * 100}%`, background: m.month === 'Jun' ? 'var(--red)' : 'var(--accent)', opacity: m.month === 'Jun' ? 1 : 0.65 }} />
                </div>
                <span className={styles.chartLabel}>{m.month}</span>
              </div>
            ))}
          </div>
          <div className={styles.forecastNote}>
            📈 Projected EOM: <strong style={{ color: 'var(--red)' }}>$4,210</strong> — 23% over budget. Consider quota tightening on Data Science team.
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}><span className={styles.cardTitle}>Spend by Model vs Budget</span></div>
          {costByModel.map(m => (
            <CostBar key={m.model} label={m.model} budget={m.budget} spent={m.spent} pct={m.pct} />
          ))}
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>Spend by Team vs Budget</span>
          <button className={styles.exportBtn}>Export CSV ↓</button>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr><th>Team</th><th>Budget (MTD)</th><th>Spent (MTD)</th><th>Variance</th><th>% Used</th><th>Trend</th><th>Forecast (EOM)</th></tr>
            </thead>
            <tbody>
              {costByTeam.map(t => {
                const variance = t.spent - t.budget;
                const forecast = Math.round(t.spent * (30 / 20));
                return (
                  <tr key={t.team}>
                    <td><strong>{t.team}</strong></td>
                    <td>${t.budget.toLocaleString()}</td>
                    <td>${t.spent.toLocaleString()}</td>
                    <td style={{ color: variance > 0 ? 'var(--red)' : 'var(--green)', fontWeight: 600 }}>
                      {variance > 0 ? '+' : ''}${variance.toLocaleString()}
                    </td>
                    <td>
                      <span style={{ color: t.pct > 100 ? 'var(--red)' : t.pct >= 90 ? 'var(--amber)' : 'var(--green)', fontWeight: 600 }}>{t.pct}%</span>
                    </td>
                    <td>
                      <div className={styles.miniBar}>
                        <div style={{ width: `${Math.min(t.pct, 100)}%`, height: '100%', background: t.pct > 100 ? 'var(--red)' : t.pct >= 90 ? 'var(--amber)' : 'var(--green)', borderRadius: 2 }} />
                      </div>
                    </td>
                    <td style={{ color: forecast > t.budget ? 'var(--red)' : 'var(--green)' }}>${forecast.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
