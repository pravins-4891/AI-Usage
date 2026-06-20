export const kpiData = {
  activeSubscriptions: 14,
  subscriptionsDelta: '+2 this month',
  tokensThisMonth: '4.2M',
  tokensDelta: '+18% vs last month',
  monthlySpend: '$3,847',
  spendDelta: '$420 over budget',
  complianceScore: 94,
  complianceDelta: '2 reviews pending',
};

export const tokenByModel = [
  { name: 'Claude Sonnet', pct: 78, tokens: '1.64M', color: '#7c8cf8' },
  { name: 'GPT-4o',        pct: 52, tokens: '1.09M', color: '#4ade80' },
  { name: 'Gemini Pro',    pct: 34, tokens: '714K',  color: '#f59e0b' },
  { name: 'Llama 3.1',     pct: 18, tokens: '378K',  color: '#60a5fa' },
  { name: 'Mistral',       pct:  9, tokens: '189K',  color: '#a78bfa' },
];

export const complianceChecks = [
  { label: 'Data residency verified',   status: 'green' },
  { label: 'PII guardrails active',      status: 'green' },
  { label: 'Bias audit pending',         status: 'amber' },
  { label: 'Usage policy review',        status: 'amber' },
  { label: 'Access controls set',        status: 'green' },
];

export const recentActivity = [
  { icon: '🧠', bg: '#1e2a45', title: 'Claude Sonnet 4.6 added',   meta: 'By Priya M. · Data Science',   time: '2h ago' },
  { icon: '⚠️', bg: '#2a2010', title: 'Budget threshold reached',  meta: 'GPT-4o · 100% of limit',       time: '5h ago' },
  { icon: '✅', bg: '#1a2a1a', title: 'Guardrail policy updated',  meta: 'PII filter · v2.1',             time: '1d ago'  },
];

export const sparkData = {
  blue:   [40, 55, 60, 45, 80, 70, 100],
  green:  [30, 50, 65, 55, 75, 85, 100],
  amber:  [35, 45, 55, 70, 65, 90, 100],
  greenC: [80, 85, 78, 90, 88, 95, 100],
};

export const userTokens = [
  { user: 'Priya Mehta',   team: 'Data Science', model: 'Claude Sonnet', input: '420,000', output: '180,000', total: '600K', quota: '500K', pct: 120, status: 'over' },
  { user: 'James Liu',     team: 'Engineering',  model: 'GPT-4o',        input: '280,000', output: '120,000', total: '400K', quota: '500K', pct: 80,  status: 'near' },
  { user: 'Sara Okonkwo',  team: 'Compliance',   model: 'Claude Haiku',  input: '95,000',  output: '45,000',  total: '140K', quota: '300K', pct: 47,  status: 'ok'   },
  { user: 'Dev Patel',     team: 'Product',      model: 'Gemini Pro',    input: '180,000', output: '70,000',  total: '250K', quota: '300K', pct: 83,  status: 'near' },
  { user: 'Kim Zhang',     team: 'HR',           model: 'Claude Sonnet', input: '60,000',  output: '25,000',  total: '85K',  quota: '200K', pct: 43,  status: 'ok'   },
];

export const departmentUsage = [
  { name: 'Data Science', pct: 85, tokens: '1.78M', color: '#7c8cf8' },
  { name: 'Engineering',  pct: 60, tokens: '1.26M', color: '#4ade80' },
  { name: 'Product',      pct: 38, tokens: '798K',  color: '#f59e0b' },
  { name: 'Compliance',   pct: 20, tokens: '420K',  color: '#60a5fa' },
];

export const quotaAlerts = [
  { level: 'error', title: 'Over Quota',         body: 'Priya Mehta exceeded monthly limit by 100K tokens on Claude Sonnet' },
  { level: 'warn',  title: 'Near Limit (80%)',   body: 'James Liu · GPT-4o subscription approaching monthly quota' },
  { level: 'warn',  title: 'Near Limit (83%)',   body: 'Dev Patel · Gemini Pro — 50K tokens remaining this month' },
];

export const modelCatalog = [
  { name: 'Claude Sonnet 4.6', provider: 'Anthropic',        tier: 'Standard',    context: '200K tokens', inputCost: '$3.00',  outputCost: '$15.00', users: 8,  mtdCost: '$1,420', status: 'active' },
  { name: 'GPT-4o',            provider: 'OpenAI',           tier: 'Standard',    context: '128K tokens', inputCost: '$5.00',  outputCost: '$15.00', users: 5,  mtdCost: '$980',   status: 'active' },
  { name: 'Claude Haiku 4.5',  provider: 'Anthropic',        tier: 'Economy',     context: '200K tokens', inputCost: '$0.80',  outputCost: '$4.00',  users: 12, mtdCost: '$340',   status: 'active' },
  { name: 'Gemini 1.5 Pro',    provider: 'Google',           tier: 'Standard',    context: '1M tokens',   inputCost: '$3.50',  outputCost: '$10.50', users: 4,  mtdCost: '$720',   status: 'active' },
  { name: 'Llama 3.1 70B',     provider: 'Meta / Self-hosted', tier: 'Open Source', context: '128K tokens', inputCost: '$0.00', outputCost: '$0.00',  users: 3,  mtdCost: '$89',    status: 'self-hosted' },
  { name: 'Mistral Large',     provider: 'Mistral AI',       tier: 'Standard',    context: '32K tokens',  inputCost: '$4.00',  outputCost: '$12.00', users: 2,  mtdCost: '$298',   status: 'review' },
];

export const modelDetail = {
  contextWindow: '200,000 tokens',
  maxOutput: '16,384 tokens',
  inputCost: '$3.00 / 1M',
  outputCost: '$15.00 / 1M',
  rateLimit: '4,000 RPM',
  dataResidency: 'US-East',
  toolUse: 'Enabled',
  subscriptionTier: 'Enterprise',
  contextSub: '~150K words',
  maxOutputSub: 'per request',
  inputSub: 'with prompt caching',
  outputSub: 'standard',
  rateSub: 'Tier 4',
  residencySub: 'SOC 2 Type II',
  toolSub: 'MCP compatible',
  subTierSub: 'Renewed: Aug 2026',
};

export const agentKpis = [
  { label: 'Active Agents',    value: '7',      delta: '↑ 2 new',   color: '#7c8cf8' },
  { label: 'Skills Deployed',  value: '12',     delta: '3 in review', color: '#4ade80' },
  { label: 'Agent Calls (MTD)', value: '28,440', delta: '↑ 34%',     color: '#f59e0b' },
  { label: 'Avg Latency',      value: '1.8s',   delta: 'p50',        color: '#7c8cf8' },
];

export const agents = [
  { name: 'Bid Writer',       type: 'Automation', model: 'Claude Sonnet', owner: 'Pravin S.', calls: '4,200',  tokens: '840K',  guardrails: '3 active', status: 'live'       },
  { name: 'Data Entry Bot',   type: 'RPA',        model: 'Claude Haiku',  owner: 'James L.',  calls: '12,800', tokens: '256K',  guardrails: '2 active', status: 'live'       },
  { name: 'Resume Screener',  type: 'Analysis',   model: 'GPT-4o',        owner: 'Kim Z.',    calls: '1,900',  tokens: '380K',  guardrails: 'Review',   status: 'review'     },
  { name: 'Proposal Writer',  type: 'Generation', model: 'Claude Sonnet', owner: 'Pravin S.', calls: '3,100',  tokens: '620K',  guardrails: '4 active', status: 'live'       },
  { name: 'Trading Assistant',type: 'Analysis',   model: 'Claude Opus',   owner: 'Dev P.',    calls: '850',    tokens: '425K',  guardrails: 'Restricted', status: 'restricted' },
  { name: 'Email Composer',   type: 'Generation', model: 'Claude Haiku',  owner: 'Sara O.',   calls: '5,590',  tokens: '111K',  guardrails: '2 active', status: 'live'       },
];

export const guardrailKpis = [
  { label: 'Active Policies',    value: '18',    delta: 'across 14 models',  color: '#7c8cf8' },
  { label: 'Blocks (This Week)', value: '47',    delta: '↓ 12 vs last week', color: '#f59e0b' },
  { label: 'Open Reviews',       value: '2',     delta: 'Action needed',     color: '#f87171' },
  { label: 'Last Audit',         value: 'Jun 15', delta: '5 days ago',       color: '#4ade80' },
];

export const guardrailPolicies = [
  { icon: '🚫', label: 'PII Detection & Redaction — blocks personal data in prompts',        enabled: true  },
  { icon: '📝', label: 'Prompt Injection Defense — monitors adversarial inputs',              enabled: true  },
  { icon: '⚖️', label: 'Bias Monitoring — flags responses for demographic bias',              enabled: false },
  { icon: '🔒', label: 'Output Logging — full audit trail for sensitive models',              enabled: true  },
  { icon: '💰', label: 'Budget Hard Stop — halts requests when quota exceeded',               enabled: true  },
  { icon: '👥', label: 'Human-in-the-loop — requires approval for high-risk tasks',          enabled: true  },
  { icon: '🌐', label: 'Data Residency Enforcement — restrict to approved regions',           enabled: true  },
];

export const policyTriggers = [
  { level: 'error', title: 'BLOCKED — PII detected',       body: 'User: James Liu · Model: GPT-4o · "customer email in prompt" · Today 09:14' },
  { level: 'error', title: 'BLOCKED — Budget stop',        body: 'User: Priya Mehta · Claude Sonnet · Quota exceeded · Today 08:40' },
  { level: 'warn',  title: 'REVIEW — Bias flag',           body: 'Agent: Resume Screener · GPT-4o · Demographic pattern · Yesterday' },
  { level: 'ok',    title: 'APPROVED — HITL override',     body: 'User: Dev Patel · Trading Assistant · Risk task approved by Sara O.' },
];

export const reportCards = [
  { icon: '📊', name: 'Monthly Usage Report',     desc: 'Token consumption, cost breakdown, and budget variance by user, team, and model.' },
  { icon: '⚖️', name: 'Governance Compliance',    desc: 'Policy adherence, guardrail trigger log, and audit trail for compliance officers.' },
  { icon: '🤖', name: 'Agent Activity Summary',   desc: 'Per-agent call volume, token use, latency, and policy compliance status.' },
  { icon: '💰', name: 'Cost Forecast',             desc: 'Projected spend for next 90 days based on current usage trends.' },
  { icon: '🔒', name: 'Security Audit Log',        desc: 'Full history of blocks, overrides, HITL approvals, and access changes.' },
  { icon: '🌍', name: 'Data Residency Report',     desc: 'Confirms all model interactions stayed within approved geographic boundaries.' },
];

export const scheduledReports = [
  { name: 'Monthly Usage Report',    freq: '1st of month',   recipients: 'CTO, Finance, Team Leads', lastRun: 'Jun 1, 2026',  format: 'PDF + CSV', status: 'active'          },
  { name: 'Weekly Compliance Digest', freq: 'Every Monday',  recipients: 'Sara Okonkwo (Compliance)', lastRun: 'Jun 16, 2026', format: 'PDF',       status: 'active'          },
  { name: 'Daily Quota Alert',       freq: 'Daily 08:00',    recipients: 'All team leads',            lastRun: 'Today',        format: 'Email',     status: 'active'          },
  { name: 'Quarterly Board Summary', freq: 'Quarterly',      recipients: 'CEO, Board',                lastRun: 'Apr 1, 2026',  format: 'Slides + PDF', status: 'scheduled'    },
];
