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

// ─── AI ASSET REGISTRY ───────────────────────────────────────────────────────
export const assetKpis = [
  { label: 'Total AI Assets',    value: '38',  delta: '↑ 5 this month',  color: '#7c8cf8' },
  { label: 'Models Registered',  value: '14',  delta: '6 providers',      color: '#4ade80' },
  { label: 'Datasets Tracked',   value: '11',  delta: '2 pending review', color: '#f59e0b' },
  { label: 'Tools & Pipelines',  value: '13',  delta: '4 active',         color: '#60a5fa' },
];

export const aiAssets = [
  { id: 'AST-001', name: 'Claude Sonnet 4.6',      type: 'Model',    provider: 'Anthropic',  owner: 'Pravin S.',  version: '4.6',   env: 'Production', risk: 'low',    lastReview: 'Jun 10, 2026', status: 'active'   },
  { id: 'AST-002', name: 'GPT-4o',                 type: 'Model',    provider: 'OpenAI',     owner: 'James L.',   version: '2024-11', env: 'Production', risk: 'medium', lastReview: 'Jun 5, 2026',  status: 'active'   },
  { id: 'AST-003', name: 'Customer Intent Dataset', type: 'Dataset',  provider: 'Internal',   owner: 'Priya M.',   version: 'v3.2',  env: 'Training',   risk: 'high',   lastReview: 'May 28, 2026', status: 'review'   },
  { id: 'AST-004', name: 'Bid Writer Agent',        type: 'Agent',    provider: 'Internal',   owner: 'Pravin S.',  version: 'v1.4',  env: 'Production', risk: 'low',    lastReview: 'Jun 12, 2026', status: 'active'   },
  { id: 'AST-005', name: 'RAG Pipeline v2',         type: 'Pipeline', provider: 'Internal',   owner: 'Dev P.',     version: 'v2.0',  env: 'Staging',    risk: 'medium', lastReview: 'Jun 1, 2026',  status: 'staging'  },
  { id: 'AST-006', name: 'Llama 3.1 70B',           type: 'Model',    provider: 'Meta',        owner: 'James L.',  version: '3.1',   env: 'Dev',        risk: 'low',    lastReview: 'May 20, 2026', status: 'active'   },
  { id: 'AST-007', name: 'Resume Screening Model',  type: 'Model',    provider: 'Fine-tuned',  owner: 'Kim Z.',    version: 'v2.1',  env: 'Production', risk: 'high',   lastReview: 'Apr 30, 2026', status: 'review'   },
  { id: 'AST-008', name: 'Embedding Store',         type: 'Dataset',  provider: 'Internal',   owner: 'Priya M.',   version: 'v4.0',  env: 'Production', risk: 'medium', lastReview: 'Jun 8, 2026',  status: 'active'   },
];

// ─── PROMPT MANAGEMENT ───────────────────────────────────────────────────────
export const promptKpis = [
  { label: 'Total Prompts',      value: '64',  delta: '↑ 8 this week',   color: '#7c8cf8' },
  { label: 'Active Templates',   value: '28',  delta: '12 categories',   color: '#4ade80' },
  { label: 'Avg Performance',    value: '87%', delta: 'success rate',    color: '#f59e0b' },
  { label: 'Pending Review',     value: '5',   delta: 'need approval',   color: '#f87171' },
];

export const prompts = [
  { id: 'PRM-001', name: 'Bid Proposal Generator',    category: 'Sales',      model: 'Claude Sonnet', version: 'v3.2', tokens: '1,240', successRate: '92%', uses: '4,200', owner: 'Pravin S.', status: 'active'  },
  { id: 'PRM-002', name: 'Customer Email Responder',  category: 'Support',    model: 'Claude Haiku',  version: 'v2.0', tokens: '480',   successRate: '88%', uses: '9,100', owner: 'Sara O.',   status: 'active'  },
  { id: 'PRM-003', name: 'Resume Bias Checker',       category: 'HR',         model: 'GPT-4o',        version: 'v1.5', tokens: '720',   successRate: '74%', uses: '1,900', owner: 'Kim Z.',    status: 'review'  },
  { id: 'PRM-004', name: 'Data Extraction Template',  category: 'Operations', model: 'Claude Haiku',  version: 'v4.1', tokens: '380',   successRate: '95%', uses: '12,800',owner: 'James L.',  status: 'active'  },
  { id: 'PRM-005', name: 'Market Analysis Report',    category: 'Research',   model: 'Claude Sonnet', version: 'v2.3', tokens: '2,100', successRate: '81%', uses: '820',   owner: 'Priya M.',  status: 'active'  },
  { id: 'PRM-006', name: 'Contract Summariser',       category: 'Legal',      model: 'GPT-4o',        version: 'v1.0', tokens: '1,800', successRate: '79%', uses: '340',   owner: 'Sara O.',   status: 'draft'   },
];

export const promptCategories = [
  { name: 'Sales',      count: 12, color: '#7c8cf8' },
  { name: 'Support',    count: 18, color: '#4ade80' },
  { name: 'HR',         count: 7,  color: '#f59e0b' },
  { name: 'Operations', count: 14, color: '#60a5fa' },
  { name: 'Research',   count: 8,  color: '#a78bfa' },
  { name: 'Legal',      count: 5,  color: '#f87171' },
];

// ─── COST TRACKING ───────────────────────────────────────────────────────────
export const costKpis = [
  { label: 'MTD Spend',        value: '$3,847', delta: '↑ 12% vs last month', color: '#f59e0b' },
  { label: 'Monthly Budget',   value: '$3,427', delta: '$420 over budget',     color: '#f87171' },
  { label: 'Projected (EOM)',  value: '$4,210', delta: '↑ $783 over plan',     color: '#f87171' },
  { label: 'Cost / 1K Tokens', value: '$0.91',  delta: '↓ 8% efficiency gain', color: '#4ade80' },
];

export const costByModel = [
  { model: 'Claude Sonnet 4.6', budget: 1500, spent: 1420, pct: 95,  trend: '+$180' },
  { model: 'GPT-4o',            budget: 1000, spent: 980,  pct: 98,  trend: '+$210' },
  { model: 'Gemini 1.5 Pro',    budget:  800, spent: 720,  pct: 90,  trend: '+$95'  },
  { model: 'Claude Haiku 4.5',  budget:  400, spent: 340,  pct: 85,  trend: '-$12'  },
  { model: 'Llama 3.1 (infra)', budget:  150, spent: 89,   pct: 59,  trend: '-$20'  },
  { model: 'Mistral Large',     budget:  350, spent: 298,  pct: 85,  trend: '+$48'  },
];

export const costByTeam = [
  { team: 'Data Science',  budget: 1200, spent: 1480, pct: 123, color: '#f87171' },
  { team: 'Engineering',   budget: 1000, spent: 920,  pct: 92,  color: '#4ade80' },
  { team: 'Product',       budget:  700, spent: 680,  pct: 97,  color: '#f59e0b' },
  { team: 'Compliance',    budget:  400, spent: 310,  pct: 78,  color: '#4ade80' },
  { team: 'HR',            budget:  300, spent: 290,  pct: 97,  color: '#f59e0b' },
  { team: 'Sales',         budget:  500, spent: 167,  pct: 33,  color: '#4ade80' },
];

export const monthlyCostHistory = [
  { month: 'Jan', spend: 1820 },
  { month: 'Feb', spend: 2100 },
  { month: 'Mar', spend: 2450 },
  { month: 'Apr', spend: 2890 },
  { month: 'May', spend: 3427 },
  { month: 'Jun', spend: 3847 },
];

// ─── EXPERIMENT TRACKING ─────────────────────────────────────────────────────
export const experimentKpis = [
  { label: 'Active Experiments', value: '9',   delta: '3 running now',    color: '#7c8cf8' },
  { label: 'Completed',          value: '34',  delta: 'this quarter',     color: '#4ade80' },
  { label: 'Avg Improvement',    value: '+14%', delta: 'vs baseline',     color: '#4ade80' },
  { label: 'Pending Review',     value: '4',   delta: 'need sign-off',    color: '#f59e0b' },
];

export const experiments = [
  { id: 'EXP-018', name: 'Prompt Compression Test',      model: 'Claude Sonnet', type: 'A/B Test',    owner: 'Priya M.',  started: 'Jun 14', metric: 'Token efficiency', baseline: '100%', result: '↑ 22%', status: 'running'   },
  { id: 'EXP-017', name: 'RAG vs Fine-tune Comparison',  model: 'GPT-4o',        type: 'Benchmark',   owner: 'James L.',  started: 'Jun 10', metric: 'Answer accuracy',  baseline: '76%',  result: '↑ 89%', status: 'running'   },
  { id: 'EXP-016', name: 'Haiku vs Sonnet for Support',  model: 'Claude Haiku',  type: 'Cost Study',  owner: 'Sara O.',   started: 'Jun 8',  metric: 'Cost per resolve', baseline: '$0.12',result: '↓ 68%', status: 'complete'  },
  { id: 'EXP-015', name: 'Bias Mitigation Prompt v3',    model: 'GPT-4o',        type: 'Safety',      owner: 'Kim Z.',    started: 'Jun 5',  metric: 'Bias score',       baseline: '0.34', result: '↓ 0.19', status: 'review'   },
  { id: 'EXP-014', name: 'Temperature Sweep 0.1-1.0',    model: 'Claude Sonnet', type: 'Hyperparams', owner: 'Dev P.',    started: 'Jun 2',  metric: 'Output quality',   baseline: '0.7',  result: '0.4 optimal', status: 'complete' },
  { id: 'EXP-013', name: 'Multi-model Routing Logic',    model: 'Mixed',         type: 'Architecture',owner: 'James L.',  started: 'May 28', metric: 'Latency + cost',   baseline: '$0.91',result: '↓ 31%', status: 'complete'  },
];

// ─── METADATA REPOSITORY ─────────────────────────────────────────────────────
export const metadataKpis = [
  { label: 'Registered Entities', value: '127', delta: '↑ 14 this month',  color: '#7c8cf8' },
  { label: 'Schema Versions',     value: '23',  delta: '5 draft',           color: '#4ade80' },
  { label: 'Lineage Links',       value: '348', delta: 'across 38 assets', color: '#f59e0b' },
  { label: 'Stale Records',       value: '6',   delta: 'need update',       color: '#f87171' },
];

export const metadataEntities = [
  { id: 'MDT-001', name: 'Claude Sonnet 4.6',       type: 'Model',         schema: 'model-v2',   version: '4.6',   tags: 'production, anthropic, llm',     updated: 'Jun 18, 2026', completeness: 98, status: 'active'  },
  { id: 'MDT-002', name: 'Customer Intent Dataset',  type: 'Dataset',       schema: 'dataset-v3', version: 'v3.2',  tags: 'training, pii-reviewed, NLP',    updated: 'Jun 10, 2026', completeness: 91, status: 'active'  },
  { id: 'MDT-003', name: 'Bid Writer Agent',          type: 'Agent',         schema: 'agent-v1',   version: 'v1.4',  tags: 'automation, sales, production',  updated: 'Jun 12, 2026', completeness: 95, status: 'active'  },
  { id: 'MDT-004', name: 'Prompt Library v3',         type: 'Prompt Set',    schema: 'prompt-v2',  version: 'v3.0',  tags: 'templates, multi-model',         updated: 'Jun 15, 2026', completeness: 87, status: 'active'  },
  { id: 'MDT-005', name: 'RAG Pipeline v2',           type: 'Pipeline',      schema: 'pipeline-v1',version: 'v2.0',  tags: 'retrieval, embeddings, staging', updated: 'Jun 1, 2026',  completeness: 72, status: 'draft'   },
  { id: 'MDT-006', name: 'Resume Screening Model',    type: 'Fine-tune',     schema: 'model-v2',   version: 'v2.1',  tags: 'hr, risk-flagged, review',       updated: 'May 30, 2026', completeness: 64, status: 'review'  },
  { id: 'MDT-007', name: 'Embedding Store',           type: 'Vector DB',     schema: 'dataset-v3', version: 'v4.0',  tags: 'embeddings, production, 1536d',  updated: 'Jun 8, 2026',  completeness: 99, status: 'active'  },
  { id: 'MDT-008', name: 'EXP-018 Prompt Compression',type: 'Experiment',    schema: 'exp-v1',     version: 'v1.0',  tags: 'experiment, in-progress',        updated: 'Jun 14, 2026', completeness: 55, status: 'draft'   },
];

export const metadataSchemas = [
  { schema: 'model-v2',    entities: 8,  fields: 24, required: 18, status: 'stable' },
  { schema: 'dataset-v3',  entities: 5,  fields: 31, required: 22, status: 'stable' },
  { schema: 'agent-v1',    entities: 6,  fields: 18, required: 14, status: 'stable' },
  { schema: 'prompt-v2',   entities: 12, fields: 15, required: 10, status: 'stable' },
  { schema: 'pipeline-v1', entities: 3,  fields: 20, required: 16, status: 'draft'  },
  { schema: 'exp-v1',      entities: 9,  fields: 22, required: 17, status: 'draft'  },
];
