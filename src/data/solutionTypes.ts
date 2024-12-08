import { Gift, Users, Briefcase } from 'lucide-react';

interface SolutionExample {
  title: string;
  industry: string;
  description: string;
  impact: string;
}

interface SolutionType {
  icon: typeof Gift | typeof Users | typeof Briefcase;
  examples: SolutionExample[];
}

export const solutionTypes: Record<string, SolutionType> = {
  'Product-Focused': {
    icon: Gift,
    examples: [
      {
        title: 'Dynamic Pricing Bundle',
        industry: 'E-commerce',
        description: 'AI-powered pricing optimization based on demand and inventory levels',
        impact: '25% increase in profit margins'
      },
      {
        title: 'Premium Feature Package',
        industry: 'SaaS',
        description: 'Tiered access to advanced features with priority support',
        impact: '40% higher user retention'
      }
    ]
  },
  'Service-Focused': {
    icon: Briefcase,
    examples: [
      {
        title: 'Predictive Maintenance Plan',
        industry: 'Manufacturing',
        description: 'IoT-based equipment monitoring with scheduled maintenance',
        impact: '60% reduction in downtime'
      },
      {
        title: 'Concierge Support Package',
        industry: 'Healthcare',
        description: 'Personalized patient care coordination service',
        impact: '90% patient satisfaction rate'
      }
    ]
  },
  'Experience-Focused': {
    icon: Users,
    examples: [
      {
        title: 'VIP Event Access',
        industry: 'Entertainment',
        description: 'Exclusive pre-sale tickets and backstage experiences',
        impact: '3x customer lifetime value'
      },
      {
        title: 'Learning Journey Program',
        industry: 'Education',
        description: 'Personalized curriculum with mentor matching',
        impact: '85% course completion rate'
      }
    ]
  }
};