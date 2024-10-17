import styled from "styled-components"
import axios from "axios";
import { useState } from "react";

const Result = styled.ul `
display: block;
list-style: none;
margin: 20px auto;
padding: 20px;
width: 90%;
min-height: 150px;
background-color: #e7e7e7;
border-radius: 5px;

& li {
cursor: pointer;
display: block;
margin: 0px;
padding: 10px;
background-color: #e4e4e4;
border-bottom: 2px solid #333;
text-align: left;
}

& li:hover {
background-color: #f7f7f7;
}
`

interface PopupProps {
   display?:string
 }
 
 const Popup = styled.div<PopupProps>`
   display: ${({display}) => display};
   position: fixed;
   top: 2.5%;
   left: 2.5%;
   width: 95%;
   height: 95%;
   background: rgba(0, 0, 0, .8);
   border-radius: 5px;
   `
 
   const CloseBar = styled.div`
   width: 100%;
   height: 40px;
   background-color: #000;
   text-align: right;
   
   & button {
   cursor: pointer;
   dislay: block;
   width: 40px;
   height: 40px;
   border: 0;
   background-color: transparent;
   color: red;
   font-size: 32px;
   }
   `
   
   const ContentBox = styled.div`
   width: 100%;
   padding: 20px;
   text-align: left;
   color: #fff;
   font-size: 16px;

   & h1 {
   margin: 0px;
   padding: 0px;
   color: red;
   }

   & h2 {
   margin: 0px;
   padding: 0px;
   }
   `

export default function Content() {

   const [flooding, setFlooding] = useState<any[]>([]);
   const [numfloodAlerts, setFloodAlerts] = useState(0);
   const [numfloodWarnings, setFloodWarnings] = useState(0);
   const [numsevereFloods, setSevereFloods] = useState(0);
   const [windowVisibility, setWindowVisibility] = useState('none');
   const [activeMessage, setActiveMessage] = useState('none');
   const [activeDescription, setActiveDescription] = useState('none');
   const [activeAreaName, setActiveAreaName] = useState('none');
   const [activeCounty, setActiveCounty] = useState('none');
   const [activeSeverity, setActiveSeverity] = useState('none');
   const [activeSeverityLevel, setActiveSeverityLevel] = useState(0);

   function findAmountFloodAlerts() {
      axios.get('http://environment.data.gov.uk/flood-monitoring/id/floods')
      .then(response => {
         /* SORT RESULTS TO SHOW FLOOD ALERTS ONLY */
         let floodAlerts: Array<any>[] = [];
         response.data.items.forEach((req:any) => {
            if(req.severityLevel === 3) {
               floodAlerts.push(req);
            }
         })
         setFloodAlerts(floodAlerts.length);
      }).catch(error => {
         console.log(error.config);
      })
}

function findAmountFloodWarnings() {
   axios.get('http://environment.data.gov.uk/flood-monitoring/id/floods')
   .then(response => {
      /* SORT RESULTS TO SHOW FLOOD ALERTS ONLY */
      let floodWarnings: Array<any>[] = [];
      response.data.items.forEach((req:any) => {
         if(req.severityLevel === 2) {
            floodWarnings.push(req);
         }
      })
      setFloodWarnings(floodWarnings.length);
   }).catch(error => {
      console.log(error.config);
   })
}

function findAmountSevereFloods() {
   axios.get('http://environment.data.gov.uk/flood-monitoring/id/floods')
   .then(response => {
      /* SORT RESULTS TO SHOW FLOOD ALERTS ONLY */
      let severeFloods: Array<any>[] = [];
      response.data.items.forEach((req:any) => {
         if(req.severityLevel === 1) {
            severeFloods.push(req);
         }
      })
      setSevereFloods(severeFloods.length);
   }).catch(error => {
      console.log(error.config);
   })
}

findAmountFloodAlerts();
findAmountFloodWarnings();
findAmountSevereFloods();

   const showSevereFlood = () => {
      axios.get('http://environment.data.gov.uk/flood-monitoring/id/floods')
      .then(response => {
         /* SEVERE FLOODS ONLY */
         let filteredResult: Array<any>[] = [];
         response.data.items.forEach((req:any) => {
            if(req.severityLevel === 1) {
               filteredResult.push(req);
            }
         })
         
         if(filteredResult.length > 0) {
            setFlooding(filteredResult);
            console.log(response);
         } else {
            setFlooding([]);
         }
      }).catch(error => {
         console.log(error.config);
      })
   }

   const showFloodWarning = () => {
      axios.get('http://environment.data.gov.uk/flood-monitoring/id/floods')
      .then(response => {
         /* FLOOD WARNINGS ONLY */
         let filteredResult: Array<any>[] = [];
         response.data.items.forEach((req:any) => {
            if(req.severityLevel === 2) {
               filteredResult.push(req);
            }
         })
         if(filteredResult.length > 0) {
            setFlooding(filteredResult);
            console.log(response);
         } else {
            setFlooding([]);
         }
      }).catch(error => {
         console.log(error.config);
      })
   }

   const showFloodAlerts = () => {
      axios.get('http://environment.data.gov.uk/flood-monitoring/id/floods')
      .then(response => {
         /* FLOOD ALERTS ONLY */
         let filteredResult: Array<any>[] = [];
         response.data.items.forEach((req:any) => {
            if(req.severityLevel === 3) {
               filteredResult.push(req);
            }
         })
         if(filteredResult.length > 0) {
            setFlooding(filteredResult);
            console.log(response);
         } else {
            setFlooding([]);
         }
      }).catch(error => {
         console.log(error.config);
      })
   }

   function handleChange(e:any) {
      if(e.target.value === "showFloodAlerts") {
         showFloodAlerts();
      }
      if(e.target.value === "showFloodWarning") {
         showFloodWarning();
      }
      if(e.target.value === "showSevereFlood") {
         showSevereFlood();
      }
    }

   function handleClickWindow(activeMessage:string, activeDescription:string, activeAreaName:string, activeCounty:string, activeSeverity:string, activeSeverityLevel:number) {

      setActiveMessage(activeMessage);
      setActiveDescription(activeDescription);
      setActiveAreaName(activeAreaName);
      setActiveCounty(activeCounty);
      setActiveSeverity(activeSeverity);
      setActiveSeverityLevel(activeSeverityLevel);
      setWindowVisibility('block');
                 
    }

   function closeWindow() {

      setActiveMessage('');
      setActiveDescription('');
      setActiveAreaName('');
      setActiveCounty('');
      setActiveSeverity('');
      setActiveSeverityLevel(0);
      setWindowVisibility('none');

   }

    function sortedResult() {
      if(flooding.length > 0) {
         flooding.sort((a, b) => (a.severityLevel > b.severityLevel) ? 1 : -1)
         return (
            flooding && flooding.map((items) => (
               <li onClick={() => handleClickWindow(items.message, items.description, items.eaAreaName, items.floodArea.county, items.severity, items.severityLevel)} key={items.floodAreaID}>{items.description} - Severity Level: {items.severityLevel}</li>
            ))
         )
      } else {
         return (
            <p>Please make your choice...</p>
         )
      }
   }
   
    return (
        <>      
        <Result>
         <h2>Current Alerts</h2>
         <p>There are <strong>{numfloodAlerts} flood alerts</strong>, <strong>{numfloodWarnings} flood warnings</strong>, and <strong>{numsevereFloods} severe floods</strong> currently.</p>
         <p>
         <select onChange={handleChange} name="flooding_select" defaultValue="Choose type:">
         <option value="Choose type:">Choose type:</option>
         <option value="showFloodAlerts">Flood Alerts (Level 3)</option>
         <option value="showFloodWarning">Flood Warning (Level 2)</option>
         <option value="showSevereFlood">Severe Flood (Level 1)</option>
         </select>
         </p>
      
         {sortedResult()}
        </Result>
      <Popup display={windowVisibility}>
         <CloseBar><button onClick={closeWindow}>X</button></CloseBar>
         <ContentBox>
            <h1>{activeSeverity} (Level {activeSeverityLevel})</h1>
            <h2>Area: {activeAreaName}</h2>
            <p>County: {activeCounty}</p>
            <p>{activeDescription}</p>
            <h2>Description:</h2>
            <p>{activeMessage}</p>
         </ContentBox>
      </Popup>
        </>
    )
}