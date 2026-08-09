import { useState, useEffect } from 'react';
import { sanityClient } from '../lib/sanityClient';
import { fallbackData } from '../data/fallbackData';

export function useSanityData() {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);
  const [isLiveCms, setIsLiveCms] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
      
      // If no valid Sanity Project ID configured yet, use local resume data
      if (!projectId || projectId === 'dummy_project_id') {
        setLoading(false);
        return;
      }

      try {
        const query = `{
          "about": *[_type == "about"][0],
          "projects": *[_type == "project"] | order(_createdAt desc),
          "skills": *[_type == "skill"] | order(order asc),
          "education": *[_type == "education"] | order(order asc),
          "experience": *[_type == "experience"] | order(order asc),
          "certifications": *[_type == "certification"] | order(_createdAt desc),
          "socialLinks": *[_type == "socialLink"] | order(order asc)
        }`;

        // Fetch with 8 second timeout controller to prevent hanging loading state
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        const result = await sanityClient.fetch(query, {}, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (result && typeof result === 'object') {
          const validAbout = (result.about && typeof result.about === 'object')
            ? { ...fallbackData.about, ...result.about }
            : fallbackData.about;

          const validProjects = (Array.isArray(result.projects) && result.projects.length > 0)
            ? result.projects
            : fallbackData.projects;

          const validSkills = (Array.isArray(result.skills) && result.skills.length > 0)
            ? result.skills
            : fallbackData.skills;

          const validEducation = (Array.isArray(result.education) && result.education.length > 0)
            ? result.education
            : fallbackData.education;

          const validExperience = (Array.isArray(result.experience) && result.experience.length > 0)
            ? result.experience
            : fallbackData.experience;

          const validCerts = (Array.isArray(result.certifications) && result.certifications.length > 0)
            ? result.certifications
            : fallbackData.certifications;

          const validSocial = (Array.isArray(result.socialLinks) && result.socialLinks.length > 0)
            ? result.socialLinks
            : fallbackData.socialLinks;

          setData({
            about: validAbout,
            projects: validProjects,
            skills: validSkills,
            education: validEducation,
            experience: validExperience,
            certifications: validCerts,
            socialLinks: validSocial,
          });

          setIsLiveCms(true);
          console.log('✅ Sanity CMS Connected & Loaded Live Data (Project: 0yf5d90w)');
        }
      } catch (err) {
        setFetchError(err?.message || 'Sanity Fetch Exception');
        if (import.meta.env.DEV) {
          console.info('ℹ️ Using local resume data (Sanity CMS CORS or network fallback):', err?.message || err);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, isLiveCms, fetchError };
}
