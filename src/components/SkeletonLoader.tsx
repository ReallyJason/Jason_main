import React from 'react';
import './SkeletonLoader.css';

interface SkeletonLoaderProps {
  type: 'about' | 'experience' | 'project' | 'contact';
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ type }) => {
  const renderAboutSkeleton = () => (
    <div className="skeleton-about">
      <div className="skeleton-content">
        <div className="skeleton-title shm" />
        <div className="skeleton-text shm" />
        <div className="skeleton-text shm" />
        <div className="skeleton-text shm" style={{ width: '80%' }} />
        <div className="skeleton-card shm" style={{ marginTop: '40px', height: '200px' }} />
      </div>
      <div className="skeleton-visual">
        <div className="skeleton-card shm" style={{ height: '280px' }} />
        <div className="skeleton-card shm" style={{ height: '280px' }} />
        <div className="skeleton-card shm" style={{ height: '280px' }} />
      </div>
    </div>
  );

  const renderExperienceSkeleton = () => (
    <div className="skeleton-experience">
      <div className="skeleton-title shm" />
      <div className="skeleton-card shm" style={{ height: '400px' }} />
    </div>
  );

  const renderProjectSkeleton = () => (
    <div className="skeleton-project-grid">
      {[1, 2, 3].map((i) => (
        <div key={i} className="skeleton-card shm" style={{ height: '300px' }} />
      ))}
    </div>
  );

  return (
    <div className="skeleton-container section">
      <div className="container">
        {type === 'about' && renderAboutSkeleton()}
        {type === 'experience' && renderExperienceSkeleton()}
        {(type === 'project') && renderProjectSkeleton()}
      </div>
    </div>
  );
};

export default SkeletonLoader;
