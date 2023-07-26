 import sb from './../assets/portfolioImages/sb.png'
import pdrrmo from './../assets/portfolioImages/pdrrmo.png'
 
const ProjectsData = [

  {
    id: "invty",
    img: pdrrmo,
    name: "PDRRMO Warehouse Management System",
    stack: ["< CodeIgniter 3/>", "< Bootstrap />", "< MySQL />", "< PHP />", "< AdminLTE />"],
    live: "https://inventorypdrrmo.000webhostapp.com/",
    source: "https://github.com/Marxasm/inventory",
    description:  
        "A Provincial Disaster Risk Reduction and Management Office warehouse management system that handles the items and tools information and monitors the quantity per item. It also has a log that can record the borrowers' actions, complete register and login system, admin restrictions and control, CRUD functions, export reports, and view history. (Demo account: user: demosample pass: Sample112233)",
  }, 

  {
    id: "sb",
    img: sb,
    name: "Sangguniang Bayan Information Management System",
    stack: ["< CodeIgniter 3/>", "< Bootstrap />", "< MySQL />", "< PHP />", "< AdminLTE />"],
    live: "https://sangguniangbayan.000webhostapp.com/",
    source: "https://github.com/Marxasm/SB",
    description:  
        "A management system that inputs important documents, and act as a log to monitor ingoing and outgoing documents given to employees. It has simple login and register system, email system, CRUD functions, data tables, and export reports. (Demo account: user: demosample pass: Sample332211)",
  }, 
  
   
];


export default ProjectsData;