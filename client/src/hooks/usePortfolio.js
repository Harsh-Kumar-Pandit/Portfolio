import { useState, useEffect } from 'react';
import { projectsAPI, skillsAPI } from '../utils/api';

export const useProjects = (params = {}) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await projectsAPI.getAll(params);
      setProjects(res?.data?.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProjects(); }, []);

  return { projects, loading, error, refetch: fetchProjects };
};

export const useSkills = (params = {}) => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    skillsAPI.getAll(params)
      .then((res) => setSkills(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { skills, loading, error };
};

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  return { isVisible, setIsVisible };
};
