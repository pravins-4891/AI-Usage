import { useState, useEffect, useRef } from 'react';
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import {
  kpiData, tokenByModel, complianceChecks, recentActivity,
  tokenTrend, modelShare, spendTrend,
} from '../../data/mockData.js';
import styles from './Dashboard.module.css';

// ── Animated counter ──────────────────────────────────────────────────────────
function useCountUp(target, duration = 1200) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const numeric = parseFloat(String(target).replace(/[^0-9.]/g, ''));
    if (!numeric) { setVal(target); return; }
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = Math.round(eased * numeric * 10) / 10;
      const formatted = String(target).replace(/[\d.]+/, current % 1 === 0 ? current : current.toFixed(1));
      setVal(formatted);
      if (p < 1) requestAnimationFrame(tick);
      else setVal(target);
    };
    requestAnimationFrame(tick);
  }, [target, duration]);
  return val;
}

// ── KPI Card ──────────────────────────────────────────────────────────────────
function KpiCard({ label, value, delta, deltaType, color, icon, index }) {
  const animated = useCountUp(value, 1000 + index * 200);
  return (
    <div className={styles.kpiCard} style={{ animationDelay: `${index * 80}ms` }}>
      <div className={styles.kpiTop}>
        <span className={styles.kpiIcon} style={{ background: color + '22', color }}>{icon}</span>
        <span className={`${styles.kpiDelta} ${styles[deltaType]}`}>{delta}</span>
      </div>
      <div className={styles.kpiValue} style={{ color }}>{animated}</div>
      <div className={styles.kpiLabel}>{label}</div>
    </div>
  );
}

// ── Donut chart center label ───────────────────────────────────────────────────
function DonutLabel({ cx, cy }) {
  return (
    <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
      <tspan x={cx} dy="-6" fontSize="18" fontWeight="700" fill="#e8eaf0">4.2M</tspan>
      <tspan x={cx} dy="18" fontSize="10" fill="#6b7280">tokens</tspan>
    </text>
  );
}

// ── Custom tooltip ─────────────────────────────────────────────────────────────
function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className={styles.tooltip}>
      <div className={styles.tooltipLabel}>{label}</div>
      {payload.map(p => (
        <div key={p.dataKey} className={styles.tooltipRow}>
          <span className={styles.tooltipDot} style={{ background: p.color }} />
          <span className={styles.tooltipName}>{p.name}</span>
          <span className={styles.tooltipVal}>{p.value}K</span>
        </div>
      ))}
    </div>
  );
}

function SpendTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className={styles.tooltip}>
      <div className={styles.tooltipLabel}>{label}</div>
      {payload.map(p => (
        <div key={p.dataKey} className={styles.tooltipRow}>
          <span className={styles.tooltipDot} style={{ background: p.color || p.fill }} />
          <span className={styles.tooltipName}>{p.name}</span>
          <span className={styles.tooltipVal}>${p.value}</span>
        </div>
      ))}
    </div>
  );
}

// ── Animated compliance ring ───────────────────────────────────────────────────
function ComplianceRing({ score }) {
  const circumference = 2 * Math.PI * 36;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 90 ? '#4ade80' : score >= 70 ? '#f59e0b' : '#f87171';
  return (
    <div className={styles.ringWrap}>
      <svg viewBox="0 0 90 90" width="100" height="100">
        <circle cx="45" cy="45" r="36" fill="none" stroke="#2a3040" strokeWidth="8" />
        <circle cx="45" cy="45" r="36" fill="none" stroke={color} strokeWidth="8"
          strokeDasharray={circumference} strokeDashoffset={offset}
          strokeLinecap="round" transform="rotate(-90 45 45)"
          className={styles.ringAnim} />
      </svg>
      <div className={styles.ringCenter}>
        <div className={styles.ringPct} style={{ color }}>{score}%</div>
        <div className={styles.ringLbl}>health</div>
      </div>
    </div>
  );
}

// ── Pulse dot ─────────────────────────────────────────────────────────────────
function PulseDot({ status }) {
  const colors = { green: '#4ade80', amber: '#f59e0b', red: '#f87171' };
  return (
    <span className={styles.pulseDotWrap}>
      <span className={styles.pulseRing} style={{ background: colors[status] + '33' }} />
      <span className={styles.pulseDot} style={{ background: colors[status] }} />
    </span>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────
export default function Dashboard({ onNavigate }) {
  const [activeModel, setActiveModel] = useState(null);
  const [trendRange, setTrendRange] = useState('7d');

  const kpis = [
    { label: 'Active Subscriptions', value: '14',     delta: '↑ +2 this month',    deltaType: 'up',      color: '#7c8cf8', icon: '⚡' },
    { label: 'Tokens This Month',    value: '4.2M',   delta: '↑ +18% vs last mo.', deltaType: 'up',      color: '#4ade80', icon: '🔢' },
    { label: 'Monthly Spend',        value: '$3,847', delta: '↑ $420 over budget',  deltaType: 'down',    color: '#f59e0b', icon: '💰' },
    { label: 'Compliance Score',     value: '94%',    delta: '2 reviews pending',   deltaType: 'neutral', color: '#4ade80', icon: '🛡️' },
  ];

  return (
    <div className={styles.page}>

      {/* ── KPI Row ── */}
      <div className={styles.kpiRow}>
        {kpis.map((k, i) => <KpiCard key={k.label} {...k} index={i} />)}
      </div>

      {/* ── Row 2: Area chart + Donut ── */}
      <div className={styles.row2}>
        <div className={`${styles.card} ${styles.cardAnim}`} style={{ animationDelay: '200ms' }}>
          <div className={styles.cardHeader}>
            <div>
              <span className={styles.cardTitle}>Token Usage Trend</span>
              <span className={styles.cardSub}>Daily tokens (K) by model</span>
            </div>
            <div className={styles.rangeButtons}>
              {['7d', '14d', '30d'].map(r => (
                <button key={r} className={`${styles.rangeBtn} ${trendRange === r ? styles.rangeBtnActive : ''}`}
                  onClick={() => setTrendRange(r)}>{r}</button>
              ))}
              <button className={styles.navLink} onClick={() => onNavigate('usage')}>Full report →</button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={tokenTrend} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="gClaude" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#7c8cf8" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#7c8cf8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gGpt" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#4ade80" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#4ade80" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gGemini" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#f59e0b" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3040" vertical={false} />
              <XAxis dataKey="day" tick={{ fill: '#4b5563', fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#4b5563', fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip content={<ChartTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11, color: '#9ca3af', paddingTop: 8 }} />
              <Area type="monotone" dataKey="claude" name="Claude Sonnet" stroke="#7c8cf8" strokeWidth={2} fill="url(#gClaude)" dot={false} activeDot={{ r: 4, fill: '#7c8cf8' }} />
              <Area type="monotone" dataKey="gpt"    name="GPT-4o"        stroke="#4ade80" strokeWidth={2} fill="url(#gGpt)"    dot={false} activeDot={{ r: 4, fill: '#4ade80' }} />
              <Area type="monotone" dataKey="gemini" name="Gemini Pro"    stroke="#f59e0b" strokeWidth={2} fill="url(#gGemini)" dot={false} activeDot={{ r: 4, fill: '#f59e0b' }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className={`${styles.card} ${styles.cardAnim}`} style={{ animationDelay: '280ms' }}>
          <div className={styles.cardHeader}>
            <div>
              <span className={styles.cardTitle}>Model Share</span>
              <span className={styles.cardSub}>% of total tokens</span>
            </div>
          </div>
          <div className={styles.donutWrap}>
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie data={modelShare} cx="50%" cy="50%" innerRadius={48} outerRadius={72}
                  paddingAngle={3} dataKey="value" stroke="none"
                  onMouseEnter={(_, i) => setActiveModel(i)}
                  onMouseLeave={() => setActiveModel(null)}>
                  {modelShare.map((m, i) => (
                    <Cell key={m.name} fill={m.color}
                      opacity={activeModel === null || activeModel === i ? 1 : 0.35}
                      style={{ cursor: 'pointer', transition: 'opacity 0.2s' }} />
                  ))}
                  <DonutLabel />
                </Pie>
                <Tooltip formatter={(v) => `${v}%`} contentStyle={{ background: '#1a1f2e', border: '1px solid #2a3040', borderRadius: 8, fontSize: 11 }} itemStyle={{ color: '#e8eaf0' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className={styles.donutLegend}>
              {modelShare.map((m, i) => (
                <div key={m.name} className={`${styles.legendRow} ${activeModel === i ? styles.legendRowActive : ''}`}
                  onMouseEnter={() => setActiveModel(i)} onMouseLeave={() => setActiveModel(null)}>
                  <span className={styles.legendDot} style={{ background: m.color }} />
                  <span className={styles.legendName}>{m.name}</span>
                  <span className={styles.legendVal} style={{ color: m.color }}>{m.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Row 3: Spend bars + Compliance + Activity ── */}
      <div className={styles.row3}>

        {/* Weekly spend vs budget */}
        <div className={`${styles.card} ${styles.cardAnim}`} style={{ animationDelay: '360ms' }}>
          <div className={styles.cardHeader}>
            <div>
              <span className={styles.cardTitle}>Weekly Spend vs Budget</span>
              <span className={styles.cardSub}>June 2026</span>
            </div>
            <button className={styles.navLink} onClick={() => onNavigate('costs')}>Cost tracking →</button>
          </div>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={spendTrend} margin={{ top: 4, right: 8, left: -20, bottom: 0 }} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3040" vertical={false} />
              <XAxis dataKey="week" tick={{ fill: '#4b5563', fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#4b5563', fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip content={<SpendTooltip />} />
              <Bar dataKey="budget" name="Budget" fill="#2a3040" radius={[4, 4, 0, 0]} />
              <Bar dataKey="actual" name="Actual" radius={[4, 4, 0, 0]}>
                {spendTrend.map((entry, i) => (
                  <Cell key={i} fill={entry.actual > entry.budget ? '#f87171' : '#7c8cf8'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className={styles.overBudgetNote}>
            <span className={styles.overDot} />
            W4 exceeded budget by <strong style={{ color: '#f87171' }}>$401</strong> — review Data Science quota
          </div>
        </div>

        {/* Compliance */}
        <div className={`${styles.card} ${styles.cardAnim}`} style={{ animationDelay: '440ms' }}>
          <div className={styles.cardHeader}>
            <div>
              <span className={styles.cardTitle}>Compliance Health</span>
              <span className={styles.cardSub}>Real-time policy status</span>
            </div>
            <button className={styles.navLink} onClick={() => onNavigate('guardrails')}>Audit →</button>
          </div>
          <div className={styles.complianceBody}>
            <ComplianceRing score={kpiData.complianceScore} />
            <div className={styles.checkList}>
              {complianceChecks.map(c => (
                <div key={c.label} className={styles.checkItem}>
                  <PulseDot status={c.status} />
                  <span className={styles.checkLabel}>{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity feed */}
        <div className={`${styles.card} ${styles.cardAnim}`} style={{ animationDelay: '520ms' }}>
          <div className={styles.cardHeader}>
            <div>
              <span className={styles.cardTitle}>Live Activity</span>
              <span className={styles.liveChip}><span className={styles.liveBlink} />Live</span>
            </div>
          </div>
          <div className={styles.activityList}>
            {[
              { icon: '🧠', bg: '#1e2a45', title: 'Claude Sonnet 4.6 added',     meta: 'Priya M. · Data Science',  time: '2h ago',  level: 'info'  },
              { icon: '⚠️', bg: '#2a2010', title: 'Budget threshold reached',    meta: 'GPT-4o · 100% of limit',   time: '5h ago',  level: 'warn'  },
              { icon: '✅', bg: '#1a2a1a', title: 'Guardrail policy updated',    meta: 'PII filter · v2.1',         time: '1d ago',  level: 'ok'    },
              { icon: '🔬', bg: '#1e2535', title: 'Experiment EXP-018 running',  meta: 'Priya M. · Prompt compression', time: '2d ago', level: 'info' },
              { icon: '🚫', bg: '#2a1515', title: 'PII block triggered',         meta: 'James L. · GPT-4o',         time: '2d ago',  level: 'error' },
            ].map((a, i) => (
              <div key={i} className={styles.activityItem} style={{ animationDelay: `${600 + i * 80}ms` }}>
                <div className={styles.activityLine}>
                  {i < 4 && <div className={styles.activityConnector} />}
                </div>
                <div className={styles.activityIcon} style={{ background: a.bg }}>{a.icon}</div>
                <div className={styles.activityBody}>
                  <div className={styles.activityTitle}>{a.title}</div>
                  <div className={styles.activityMeta}>{a.meta}</div>
                </div>
                <div className={styles.activityTime}>{a.time}</div>
              </div>
            ))}
          </div>
          <button className={styles.viewAllBtn} onClick={() => onNavigate('reporting')}>View full log →</button>
        </div>
      </div>

      {/* ── Row 4: Model usage quick stats ── */}
      <div className={`${styles.card} ${styles.cardAnim} ${styles.modelRow}`} style={{ animationDelay: '600ms' }}>
        <div className={styles.cardHeader}>
          <span className={styles.cardTitle}>Model Usage — Quick Stats</span>
          <button className={styles.navLink} onClick={() => onNavigate('catalog')}>Model catalog →</button>
        </div>
        <div className={styles.modelGrid}>
          {tokenByModel.map((m, i) => (
            <div key={m.name} className={styles.modelCard} style={{ animationDelay: `${700 + i * 60}ms` }}>
              <div className={styles.modelCardTop}>
                <span className={styles.modelName}>{m.name}</span>
                <span className={styles.modelTokens} style={{ color: m.color }}>{m.tokens}</span>
              </div>
              <div className={styles.modelBarTrack}>
                <div className={styles.modelBarFill} style={{ width: `${m.pct}%`, background: m.color }} />
              </div>
              <div className={styles.modelCardBot}>
                <span className={styles.modelPct}>{m.pct}% of quota</span>
                <span className={styles.modelStatus} style={{ color: m.pct > 90 ? '#f87171' : m.pct > 70 ? '#f59e0b' : '#4ade80' }}>
                  {m.pct > 90 ? '● Critical' : m.pct > 70 ? '● High' : '● Normal'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
