import styles from './StatusPill.module.css';

const variantMap = {
  active:       'green',
  live:         'green',
  ok:           'green',
  review:       'amber',
  near:         'amber',
  scheduled:    'blue',
  'self-hosted': 'blue',
  restricted:   'blue',
  over:         'red',
  error:        'red',
  inactive:     'gray',
};

const labelMap = {
  active:       'Active',
  live:         'Live',
  ok:           'On track',
  review:       'Review',
  near:         'Near limit',
  scheduled:    'Scheduled',
  'self-hosted': 'Self-hosted',
  restricted:   'Restricted',
  over:         'Over quota',
  error:        'Error',
  inactive:     'Inactive',
};

export default function StatusPill({ status, label }) {
  const variant = variantMap[status] || 'gray';
  const text = label || labelMap[status] || status;
  return <span className={`${styles.pill} ${styles[variant]}`}>{text}</span>;
}
