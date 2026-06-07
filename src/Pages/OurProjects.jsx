import { useEffect } from 'react';

const projectList = [
  {
    title: 'Boutique Demo',
    description:
      'A modern boutique storefront with a polished design, responsive UI, and a product showcase experience tailored for fashion and lifestyle brands.',
    github: 'https://github.com/technodorbit-sudo/Boutique-Demo.git',
    tags: ['React', 'Responsive UI', 'E-commerce', 'Branding'],
  },
  {
    title: 'Hotel',
    description:
      'A hotel booking landing page with immersive visuals, service highlights, and an elegant reservation-ready interface that works across desktop and mobile.',
    github: 'https://github.com/technodorbit-sudo/Hotel.git',
    tags: ['React', 'Hospitality', 'Booking', 'Clean design'],
  },
];

const OurProjects = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.project-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('project-reveal-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="project-page">
      <section className="project-hero section-padding">
        <div className="container">
          <div className="project-hero-inner project-reveal fade-up">
            <span className="project-badge">Our Projects</span>
            <h1>Built for business growth, polished for real users.</h1>
            <p>
              Explore our latest work with clean UI, professional structure, and modern interactions. Each project includes a GitHub repository so you can review the code and reuse the patterns.
            </p>
          </div>
        </div>
        <div className="project-hero-shapes">
          <span className="pulse-dot pulse-dot-1"></span>
          <span className="pulse-dot pulse-dot-2"></span>
          <span className="pulse-line pulse-line-1"></span>
          <span className="pulse-line pulse-line-2"></span>
        </div>
      </section>

      <section className="section-padding project-grid-section">
        <div className="container">
          <div className="project-grid">
            {projectList.map((project, index) => (
              <article
                key={project.title}
                className={`project-card project-reveal ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}
              >
                <div className="project-card-inner">
                  <div className="project-card-header">
                    <span>Project</span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <i className="bi bi-github"></i>
                      View on GitHub
                    </a>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <strong key={tag}>{tag}</strong>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurProjects;
