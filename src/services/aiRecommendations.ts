import { industries } from '../data/industries';
import { commonPainPoints } from '../data/pain-points';
import { inspirationSources } from '../data/inspiration-sources';

type IndustryInsight = {
  industry: string;
  relevanceScore: number;
  reason: string;
};

export function getIndustryRecommendations(
  selectedIndustry: string,
  painPoints: string[]
): IndustryInsight[] {
  // Simulated AI logic to find relevant industries based on pain points
  const recommendations: IndustryInsight[] = [];
  
  const otherIndustries = industries.filter(ind => ind !== selectedIndustry);
  
  otherIndustries.forEach(industry => {
    const industryPainPoints = commonPainPoints[industry as keyof typeof commonPainPoints] || [];
    
    // Calculate similarity score based on shared pain points
    const sharedConcepts = industryPainPoints.filter(point =>
      painPoints.some(p => point.toLowerCase().includes(p.toLowerCase()))
    );
    
    if (sharedConcepts.length > 0) {
      recommendations.push({
        industry,
        relevanceScore: (sharedConcepts.length / painPoints.length) * 100,
        reason: `Similar challenges around ${sharedConcepts[0].toLowerCase()}`
      });
    }
  });
  
  return recommendations
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 3);
}

export function getInspirationalCompanies(recommendations: IndustryInsight[]): string[] {
  const companies: string[] = [];
  
  recommendations.forEach(rec => {
    const industryCompanies = inspirationSources[rec.industry as keyof typeof inspirationSources] || [];
    if (industryCompanies.length > 0) {
      companies.push(industryCompanies[0]);
    }
  });
  
  return companies;
}