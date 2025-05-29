import fs from 'fs';
import path from 'path';


export class ResumeParser {
  private static jobRoleKeywords = {
    'Software Engineer': [
      'javascript', 'python', 'java', 'react', 'node', 'angular', 'vue', 'typescript',
      'programming', 'coding', 'development', 'software', 'algorithm', 'data structure',
      'git', 'github', 'api', 'database', 'sql', 'mongodb', 'postgresql'
    ],
    'Data Scientist': [
      'python', 'r', 'machine learning', 'data analysis', 'statistics', 'pandas',
      'numpy', 'scikit-learn', 'tensorflow', 'pytorch', 'jupyter', 'matplotlib',
      'seaborn', 'sql', 'tableau', 'power bi', 'big data', 'hadoop', 'spark'
    ],
    'Product Manager': [
      'product management', 'roadmap', 'strategy', 'stakeholder', 'agile', 'scrum',
      'user stories', 'requirements', 'market research', 'analytics', 'kpi',
      'user experience', 'product development', 'project management'
    ],
    'Marketing Manager': [
      'marketing', 'digital marketing', 'seo', 'sem', 'social media', 'content marketing',
      'email marketing', 'analytics', 'google analytics', 'facebook ads', 'linkedin',
      'brand management', 'campaign', 'lead generation'
    ],
    'UX/UI Designer': [
      'ux', 'ui', 'user experience', 'user interface', 'figma', 'sketch', 'adobe',
      'wireframe', 'prototype', 'usability', 'user research', 'design thinking',
      'interaction design', 'visual design', 'responsive design'
    ],
    'DevOps Engineer': [
      'devops', 'aws', 'azure', 'gcp', 'docker', 'kubernetes', 'jenkins', 'ci/cd',
      'terraform', 'ansible', 'linux', 'bash', 'monitoring', 'prometheus', 'grafana',
      'infrastructure', 'deployment', 'automation'
    ],
    'Business Analyst': [
      'business analysis', 'requirements gathering', 'process improvement', 'sql',
      'excel', 'data analysis', 'stakeholder management', 'documentation',
      'business process', 'workflow', 'reporting', 'kpi', 'metrics'
    ],
    'Sales Manager': [
      'sales', 'crm', 'salesforce', 'lead generation', 'pipeline', 'revenue',
      'client relationship', 'negotiation', 'quota', 'territory', 'b2b', 'b2c',
      'account management', 'sales strategy'
    ],
    'Finance Manager': [
     'finance', 'accounting', 'budgeting', 'tax', 'cfo', 'payroll', 'reporting',
      'forecasting', 'budget', 'tax', 'payroll', 'accounting', 'budgeting',
      'tax', 'cfo', 'payroll', 'reporting', 'forecasting', 'budget'
    ],
    'HR Manager': [
     'hr', 'recruitment', 'employee management', 'performance management',
      'training', 'benefits', 'compensation', 'legal', 'compliance', 'hris',
      'employee relations'
    ],
    'Legal Counsel': [
     'legal', 'law', 'litigation', 'contract', 'compliance', 'regulatory',
      'jurisdiction', 'attorney', 'lawyer', 'legal research', 'legal advice',
      'legal document', 'legal team'
    ],
    'Graphic Designer': [
     'graphic design', 'adobe', 'photoshop', 'illustrator', 'indesign',
      'ui/ux', 'web design', 'print design', 'motion graphics', 'branding',
      'typography', 'layout', 'color theory'
    ],
    'Data Analyst': [
     'data analysis', 'data visualization', 'data mining', 'data modeling',
      'statistical analysis', 'machine learning', 'data science', 'sql',
      'excel', 'tableau', 'power bi', 'python', 'r', 'statistics'
    ],
    'Project Manager': [
     'project management', 'agile', 'scrum', 'waterfall', 'risk management',
      'schedule', 'budget', 'communication', 'team leadership', 'stakeholder',
      'project timeline'
    ]
  };
}