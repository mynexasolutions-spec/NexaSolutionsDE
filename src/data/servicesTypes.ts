export interface ServiceChallenge {
  title: string;
  description: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  scopeBadge?: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceWorkflowStep {
  step: number;
  title: string;
  description: string;
  deliverable: string;
}

export interface ServiceUseCase {
  title: string;
  description: string;
  audience: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceItemData {
  id: string; // Internal unique ID
  cardId: string; // Homepage card ID
  slugDe: string;
  slugEn: string;
  titleDe: string;
  titleEn: string;
  seoTitleDe: string;
  seoTitleEn: string;
  metaDescriptionDe: string;
  metaDescriptionEn: string;
  h1De: string;
  h1En: string;
  badgeDe: string;
  badgeEn: string;
  introDe: string;
  introEn: string;
  heroImage: string;
  primaryKeywordDe: string;
  primaryKeywordEn: string;
  secondaryKeywordsDe: string[];
  secondaryKeywordsEn: string[];
  searchIntentDe: string;
  searchIntentEn: string;
  
  challengesDe: ServiceChallenge[];
  challengesEn: ServiceChallenge[];
  
  solutionDe: {
    title: string;
    description: string;
    points: string[];
  };
  solutionEn: {
    title: string;
    description: string;
    points: string[];
  };
  
  featuresDe: ServiceFeature[];
  featuresEn: ServiceFeature[];
  
  benefitsDe: ServiceBenefit[];
  benefitsEn: ServiceBenefit[];
  
  workflowDe: ServiceWorkflowStep[];
  workflowEn: ServiceWorkflowStep[];
  
  useCasesDe: ServiceUseCase[];
  useCasesEn: ServiceUseCase[];
  
  relatedProjectIds: string[];
  relatedServiceIds: string[];
  relatedBlogSlugs: string[];
  
  faqDe: ServiceFaq[];
  faqEn: ServiceFaq[];
}
