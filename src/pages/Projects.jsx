import './Projects.css';
export default function Projects(){
    return(
        <div id="project" className='project-container'>
        <h1 className="project-title">Tableau Projects</h1>
        <p className="project-subtitle">Some sample of my Dashboards</p>
        
      <div className="project-grid">
        <ProjectCard
          image="/project1.png"
          title="Sustrans"
          description="A tool for policy-makers to explore survey data."
          link="https://public.tableau.com/app/profile/hricha.maharjan6922/viz/TurnoverAnalysisDashboard/Dashboard3"
        />
         <ProjectCard
          image="/project2.png"
          title="Deloitte"
          description="An Alteryx macro for tool extraction."
          link="https://public.tableau.com/app/profile/hricha.maharjan6922/viz/EmployeePerformanceDashboard_17468307386370/Dashboard2"
        />
         <ProjectCard
          image="/project3.png"
          title="Deloitte"
          description="An Alteryx macro for tool extraction."
          link="https://public.tableau.com/app/profile/hricha.maharjan6922/viz/EmployeeDemographicDashboard_17468307118630/Dashboard1"
        />
         <ProjectCard
          image="/project4.png"
          title="Deloitte"
          description="An Alteryx macro for tool extraction."
          link="https://public.tableau.com/app/profile/hricha.maharjan6922/viz/MSDA3060Dashboard/Dashboard2"
        />
         <ProjectCard
          image="/project5.png"
          title="Deloitte"
          description="An Alteryx macro for tool extraction."
          link="https://public.tableau.com/app/profile/hricha.maharjan6922/viz/CustomerandOrderAnalysisDashboard/Dashboard4"
        />
         <ProjectCard
          image="/project6.png"
          title="Deloitte"
          description="An Alteryx macro for tool extraction."
          link="https://public.tableau.com/app/profile/hricha.maharjan6922/viz/SalesPerformanceDashboard_17453502624470/Dashboard3"
        />
         <ProjectCard
          image="/project7.png"
          title="Deloitte"
          description="An Alteryx macro for tool extraction."
          link="https://public.tableau.com/app/profile/hricha.maharjan6922/viz/CustomerSegmentationBehaviorDashboard/Dashboard2"
        />
         <ProjectCard
          image="/project8.png"
          title="Deloitte"
          description="An Alteryx macro for tool extraction."
          link="https://public.tableau.com/app/profile/hricha.maharjan6922/viz/SalesProfitDashboard_17453501725560/Dashboard1"
        />
      </div>
      
      
      
      </div>
    )
}
function ProjectCard({ image, title, description,link }) {
    return (
        <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card-link"
      >
      <div className="project-card">
        <img src={image} alt={title} />
        <div className="overlay">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      </a>
    );
  }