import { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Topbar from './components/Topbar.jsx';
import Dashboard from './components/views/Dashboard.jsx';
import TokenUsage from './components/views/TokenUsage.jsx';
import ModelCatalog from './components/views/ModelCatalog.jsx';
import AgentsSkills from './components/views/AgentsSkills.jsx';
import Guardrails from './components/views/Guardrails.jsx';
import Reporting from './components/views/Reporting.jsx';
import styles from './App.module.css';

const views = { dashboard: Dashboard, usage: TokenUsage, catalog: ModelCatalog, agents: AgentsSkills, guardrails: Guardrails, reporting: Reporting };

export default function App() {
  const [view, setView] = useState('dashboard');
  const ViewComponent = views[view] || Dashboard;

  return (
    <div className={styles.shell}>
      <Sidebar activeView={view} onNavigate={setView} />
      <div className={styles.main}>
        <Topbar view={view} onAddModel={() => setView('catalog')} />
        <ViewComponent onNavigate={setView} />
      </div>
    </div>
  );
}
