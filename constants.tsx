
import React from 'react';
import { Building2, Utensils, Stethoscope, Briefcase, MapPin, ClipboardCheck, Users, TrendingUp } from 'lucide-react';
import { Service, Project, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'site-selection',
    title: 'Site Selection & Feasibility',
    description: 'Identifying prime locations through rigorous data analysis and local market insights.',
    details: [
      'Market gap analysis',
      'Traffic and demographic studies',
      'Environmental and zoning pre-checks',
      'Comparative site scoring'
    ],
    icon: 'MapPin'
  },
  {
    id: 'entitlements',
    title: 'Entitlements & Due Diligence',
    description: 'Navigating complex regulatory landscapes to secure necessary project approvals.',
    details: [
      'Zoning amendment support',
      'Permit tracking and management',
      'Site plan approval coordination',
      'Environmental due diligence oversight'
    ],
    icon: 'ClipboardCheck'
  },
  {
    id: 'planning',
    title: 'Tenant & Use Planning',
    description: 'Optimizing site layouts for specific commercial and medical use cases.',
    details: [
      'Fast food drive-thru optimization',
      'Medical condo floorplate planning',
      'Shopping center tenant mixing',
      'Parking ratio optimization'
    ],
    icon: 'Building2'
  },
  {
    id: 'strategy',
    title: 'Development Strategy',
    description: 'Strategic planning and pro-forma inputs for long-term project viability.',
    details: [
      'Cost estimation support',
      'Timeline modeling',
      'Risk mitigation strategies',
      'Stakeholder alignment'
    ],
    icon: 'TrendingUp'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Northside Shopping Plaza",
    type: "Retail Development",
    scope: "Entitlements & Site Selection",
    outcome: "15,000 sq ft retail hub with 100% pre-lease capacity.",
    image: "https://picsum.photos/seed/plaza/800/600"
  },
  {
    id: 2,
    title: "Quick-Bite Fast Food Hub",
    type: "Restaurant Development",
    scope: "Drive-Thru Optimization",
    outcome: "Reduced queue times by 22% through strategic site layout.",
    image: "https://picsum.photos/seed/burger/800/600"
  },
  {
    id: 3,
    title: "The Medical Collective",
    type: "Medical Condos",
    scope: "Specialized Use Planning",
    outcome: "Modern outpatient facility with 8 distinct clinical suites.",
    image: "https://picsum.photos/seed/medical/800/600"
  },
  {
    id: 4,
    title: "Executive Office Condos",
    type: "Office Development",
    scope: "Feasibility Study",
    outcome: "Successfully secured financing via robust market demand data.",
    image: "https://picsum.photos/seed/office/800/600"
  },
  {
    id: 5,
    title: "Heritage Village Retail",
    type: "Mixed Use",
    scope: "Full Coordination",
    outcome: "Transformation of underutilized land into community-centric commerce.",
    image: "https://picsum.photos/seed/retail/800/600"
  },
  {
    id: 6,
    title: "Southside Medical Annex",
    type: "Medical Real Estate",
    scope: "Permit Management",
    outcome: "Expedited project timeline by 3 months through pro-active agency liaison.",
    image: "https://picsum.photos/seed/health/800/600"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Eden Consultants transformed our vision into a tangible, profitable asset. Their attention to regulatory detail is unmatched.",
    author: "Robert Chen",
    role: "CEO, Capital Retail Group"
  },
  {
    id: 2,
    quote: "Developing a medical condo is complex. Eden's specialized knowledge in clinic requirements saved us months of rework.",
    author: "Dr. Sarah Miller",
    role: "Director, Miller Medical Suites"
  },
  {
    id: 3,
    quote: "The team's insight into fast-food drive-thru logistics helped us secure a prime corner site that is now our top-performing location.",
    author: "James Wilson",
    role: "Franchise Developer"
  }
];

export const INDUSTRIES = [
  { name: 'Shopping Centers', icon: <Building2 className="w-6 h-6" /> },
  { name: 'Fast Food Sites', icon: <Utensils className="w-6 h-6" /> },
  { name: 'Office Condos', icon: <Briefcase className="w-6 h-6" /> },
  { name: 'Medical Condos', icon: <Stethoscope className="w-6 h-6" /> },
];
