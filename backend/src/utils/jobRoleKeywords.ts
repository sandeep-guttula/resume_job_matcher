export const jobRoleKeywords: Record<string, string[]> = {
    'Software Engineer': [
      'javascript', 'typescript', 'python', 'java', 'c++', 'c#', 'go', 'ruby', 'react', 'next.js', 'node.js',
      'express', 'spring', 'django', 'flask', 'angular', 'vue', 'svelte', 'webpack', 'babel',
      'programming', 'software development', 'clean code', 'oop', 'functional programming',
      'design patterns', 'api', 'rest', 'graphql', 'json', 'xml', 'git', 'github', 'ci/cd',
      'testing', 'jest', 'mocha', 'cypress', 'docker', 'kubernetes', 'sql', 'mongodb', 'postgresql',
      'mysql', 'firebase', 'redis', 'cloud', 'aws', 'azure', 'gcp', 'debugging', 'performance optimization'
    ],
  
    'Data Scientist': [
      'python', 'r', 'sql', 'machine learning', 'deep learning', 'data science', 'data analysis',
      'data wrangling', 'pandas', 'numpy', 'scipy', 'matplotlib', 'seaborn', 'plotly', 'sklearn',
      'xgboost', 'lightgbm', 'tensorflow', 'keras', 'pytorch', 'jupyter', 'mlops', 'data pipelines',
      'big data', 'spark', 'hadoop', 'hive', 'airflow', 'docker', 'aws sagemaker', 'google colab',
      'model deployment', 'feature engineering', 'hypothesis testing', 'a/b testing', 'data visualization',
      'power bi', 'tableau', 'statistics', 'regression', 'classification', 'nlp', 'llm'
    ],
  
    'Product Manager': [
      'product management', 'product strategy', 'roadmap', 'go-to-market', 'g2m',
      'mvp', 'agile', 'scrum', 'kanban', 'user stories', 'acceptance criteria', 'backlog grooming',
      'jira', 'confluence', 'trello', 'notion', 'stakeholder management', 'ux research',
      'market analysis', 'kpi', 'customer journey', 'design sprints', 'cross-functional teams',
      'prioritization', 'competitive analysis', 'product metrics', 'a/b testing', 'user feedback'
    ],
  
    'Marketing Manager': [
      'digital marketing', 'seo', 'sem', 'paid ads', 'ppc', 'google ads', 'facebook ads', 'campaign management',
      'social media', 'instagram', 'tiktok', 'linkedin', 'content marketing', 'influencer marketing',
      'email marketing', 'marketing automation', 'mailchimp', 'hubspot', 'crm', 'analytics', 'data-driven marketing',
      'conversion rate optimization', 'marketing funnel', 'brand management', 'video marketing',
      'product launch', 'market research', 'customer acquisition', 'google analytics', 'ahrefs', 'semrush'
    ],
  
    'UX/UI Designer': [
      'ux', 'ui', 'user experience', 'user interface', 'design systems', 'wireframing', 'prototyping',
      'figma', 'sketch', 'adobe xd', 'invision', 'user flows', 'interaction design',
      'visual design', 'design tokens', 'mobile first', 'responsive design', 'accessibility',
      'a/b testing', 'user research', 'persona creation', 'heatmaps', 'usability testing', 'heuristic evaluation',
      'design thinking', 'motion design', 'illustration', 'branding'
    ],
  
    'DevOps Engineer': [
      'devops', 'ci/cd', 'infrastructure as code', 'docker', 'kubernetes', 'helm',
      'terraform', 'ansible', 'cloudformation', 'linux', 'bash', 'scripting', 'gitops',
      'aws', 'gcp', 'azure', 'monitoring', 'grafana', 'prometheus', 'datadog',
      'logging', 'elk stack', 'splunk', 'pipeline', 'jenkins', 'circleci', 'github actions',
      'incident response', 'high availability', 'load balancing', 'networking', 'tls', 'nginx', 'apache'
    ],
  
    'Business Analyst': [
      'business analysis', 'requirements gathering', 'brd', 'frd', 'process mapping',
      'workflow diagrams', 'bpmn', 'data analysis', 'sql', 'excel', 'dashboarding',
      'power bi', 'tableau', 'stakeholder management', 'gap analysis', 'use cases',
      'agile', 'scrum', 'jira', 'user stories', 'reporting', 'metrics', 'risk analysis'
    ],
  
    'Sales Manager': [
      'sales', 'crm', 'salesforce', 'hubspot', 'lead generation', 'b2b sales', 'b2c sales',
      'cold outreach', 'negotiation', 'pipeline management', 'quota', 'forecasting',
      'revenue growth', 'account management', 'key account', 'client relationships',
      'territory management', 'sales strategy', 'inside sales', 'demo', 'prospecting', 'deal closing'
    ],
  
    'Finance Manager': [
      'finance', 'accounting', 'financial modeling', 'budgeting', 'forecasting',
      'tax', 'compliance', 'regulatory reporting', 'cash flow', 'erp', 'quickbooks', 'netsuite',
      'p&l', 'balance sheet', 'cost analysis', 'variance analysis', 'audit', 'payroll',
      'investment', 'financial analysis', 'excel', 'vba', 'ifrs', 'gaap'
    ],
  
    'HR Manager': [
      'human resources', 'recruitment', 'talent acquisition', 'onboarding', 'performance management',
      'training', 'benefits', 'compensation', 'hrbp', 'employee relations', 'labor law',
      'diversity & inclusion', 'compliance', 'hr analytics', 'succession planning', 'hris',
      'people ops', 'employee engagement'
    ],
  
    'Legal Counsel': [
      'legal', 'corporate law', 'compliance', 'regulatory', 'litigation', 'contract review',
      'nda', 'intellectual property', 'trademark', 'legal research', 'jurisdiction',
      'employment law', 'risk management', 'legal documentation', 'ethics', 'governance'
    ],
  
    'Graphic Designer': [
      'graphic design', 'visual identity', 'branding', 'logo design', 'typography', 'layout',
      'adobe photoshop', 'illustrator', 'indesign', 'canva', 'figma', 'motion graphics',
      'animation', 'color theory', 'print design', 'digital design', 'ui assets', 'social media graphics'
    ],
  
    'Data Analyst': [
      'data analysis', 'data visualization', 'sql', 'python', 'excel', 'tableau', 'power bi',
      'data wrangling', 'reporting', 'dashboards', 'business intelligence', 'statistics',
      'regression', 'time series', 'etl', 'data pipelines', 'google data studio', 'r'
    ],
  
    'Project Manager': [
      'project management', 'scrum', 'agile', 'waterfall', 'kanban', 'jira', 'asana', 'notion',
      'gantt chart', 'timeline', 'resource planning', 'risk management', 'cost control', 'budgeting',
      'communication', 'stakeholder', 'milestones', 'project lifecycle', 'project charter', 'pmp'
    ]
  };
  