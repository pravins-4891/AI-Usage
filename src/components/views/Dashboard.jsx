import KpiCard from '../shared/KpiCard.jsx';
import BarRow from '../shared/BarRow.jsx';
import { kpiData, tokenByModel, complianceChecks, recentActivity, sparkData } from '../../data/mockData.js';
import styles from './Dashboard.module.css';

function ComplianceDot({ status }) {
  const colors = { green: 'var(--green)', amber: 'var(--amber)', red: 'var(--red)' };
  return <span className={styles.dot} style={{ background: colors[status] || colors.green }} />;
}

export default function Dashboard({ onNavigate }) {
  return (
    <div className={styles.page}>
      <div className={styles.kpiRow}>
        <KpiCard label="Active Subscriptions" value={kpiData.activeSubscriptions} delta={kpiData.subscriptionsDelta} deltaType="up"      color="var(--accent)" sparkData={sparkData.blue} />
        <KpiCard label="Tokens This Month"     value={kpiData.tokensThisMonth}     delta={kpiData.tokensDelta}        deltaType="up"      color="var(--green)"  sparkData={sparkData.green} />
        <KpiCard label="Monthly Spend"         value={kpiData.monthlySpend}        delta={kpiData.spendDelta}         deltaType="down"    color="var(--amber)"  sparkData={sparkData.amber} />
        <KpiCard label="Compliance Score"      value={`${kpiData.complianceScore}%`} delta={kpiData.complianceDelta} deltaType="neutral" color="var(--green)"  sparkData={sparkData.greenC} />
      </div>

      <div className={styles.mainGrid}>
        {/* Token usage by model */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardTitle}>Token Usage by Model</span>
            <button className={styles.cardAction} onClick={() => onNavigate('usage')}>View all →</button>
          </div>
          {tokenByModel.map(m => <BarRow key={m.name} {...m} />)}
          <div className={styles.budgetDivider}>
            <div className={styles.budgetRow}>
              <span className={styles.budgetLabel}>Monthly budget</span>
              <div className={styles.budgetTrack}>
                <div className={styles.budgetFill} />
              </div>
              <span className={styles.budgetOver}>110%</span>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className={styles.rightCol}>
          {/* Compliance ring */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTitle}>Compliance Health</span>
              <button className={styles.cardAction} onClick={() => onNavigate('reporting')}>Report →</button>
            </div>
            <div className={styles.complianceWrap}>
              <div className={styles.ringWrap}>
                <svg viewBox="0 0 90 90" width="90" height="90">
                  <circle cx="45" cy="45" r="36" fill="none" stroke="var(--border)" strokeWidth="8" />
                  <circle cx="45" cy="45" r="36" fill="none" stroke="var(--green)" strokeWidth="8"
                    strokeDasharray="226" strokeDashoffset="14" strokeLinecap="round"
                    transform="rotate(-90 45 45)" />
                </svg>
                <div className={styles.ringCenter}>
                  <div className={styles.ringPct}>94%</div>
                  <div className={styles.ringLbl}>score</div>
                </div>
              </div>
              <div className={styles.checkList}>
                {complianceChecks.map(c => (
                  <div key={c.label} className={styles.checkItem}>
                    <ComplianceDot status={c.status} />
                    {c.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent activity */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTitle}>Recent Activity</span>
            </div>
            <div className={styles.activityList}>
              {recentActivity.map((a, i) => (
                <div key={i} className={styles.activityItem}>
                  <div className={styles.activityIcon} style={{ background: a.bg }}>{a.icon}</div>
                  <div className={styles.activityBody}>
                    <div className={styles.activityTitle}>{a.title}</div>
                    <div className={styles.activityMeta}>{a.meta}</div>
                  </div>
                  <div className={styles.activityTime}>{a.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
