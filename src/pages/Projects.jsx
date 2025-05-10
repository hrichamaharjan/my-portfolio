import './Projects.css';
export default function Projects(){
    return(
        <div id="project" className='project-container'>
        <h1 className="project-title">Tableau Projects</h1>
        <p className="project-subtitle">Some sample of my Dashboards</p>
        
      <div className="project-grid">
        <ProjectCard
          image="/project1.png"
          title="Turnover Analysis Dashboard"
          description="This Dashboard was build to know the attrition rate of the people in each department and the employee's satisfaction level"
          link="https://public.tableau.com/app/profile/hricha.maharjan6922/viz/TurnoverAnalysisDashboard/Dashboard3"
        />
         <ProjectCard
          image="/project2.png"
          title="Employee Performance Dashboard"
          description="Project to measure the performance and satisfaction of each employee according to there job role."
          link="https://public.tableau.com/app/profile/hricha.maharjan6922/viz/EmployeePerformanceDashboard_17468307386370/Dashboard2"
        />
         <ProjectCard
          image="/project3.png"
          title="Employee Demographic Dashboard"
          description="A project to know about the employee's who work in a particular company."
          link="https://public.tableau.com/app/profile/hricha.maharjan6922/viz/EmployeeDemographicDashboard_17468307118630/Dashboard1"
        />
         <ProjectCard
          image="/project4.png"
          title="AirBnb Dashboard"
          description="A project to know about the performance, listings,revenue of the AirBnb company."
          link="https://public.tableau.com/app/profile/hricha.maharjan6922/viz/MSDA3060Dashboard/Dashboard2"
        />
         <ProjectCard
          image="/project5.png"
          title="Customer and Order Analysis Dashboard"
          description="This dashboard was build in order to determine the correlation between order and customer"
          link="https://public.tableau.com/app/profile/hricha.maharjan6922/viz/CustomerandOrderAnalysisDashboard/Dashboard4"
        />
         <ProjectCard
          image="/project6.png"
          title="Sales Performance Dashboard"
          description="This project was build to study about the totalsales of a company there profit and the top products."
          link="https://public.tableau.com/app/profile/hricha.maharjan6922/viz/SalesPerformanceDashboard_17453502624470/Dashboard3"
        />
         <ProjectCard
          image="/project7.png"
          title="Customer Segmentation & Behaviour Dashboard"
          description="This dashboard shows the type of customers there occupation and how often they are engaged in shopping."
          link="https://public.tableau.com/app/profile/hricha.maharjan6922/viz/CustomerSegmentationBehaviorDashboard/Dashboard2"
        />
         <ProjectCard
          image="/project8.png"
          title="Sales and Profit Dashboard"
          description="This projects displays the sales and profit distributed in different countries"
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