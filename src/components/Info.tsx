import styled from "styled-components"
import { useState } from "react";

const InfoColumn = styled.div`
margin: 20px auto;
padding: 20px;
width: 90%;
height: auto;
background-color: #f7f7f7;
border-radius: 5px;
text-align: left;

& img.infoimage {
width: 100%;
}

& ul {
margin: 20px;
padding: 0px;
}

& ul li {
padding: 0px;
}

& h3 {
padding: 0px;
font-size: 26px;
}

& h4 {
padding: 0px;
}
`

const FloodTypes = styled.ul`
list-style: none;
margin: 0px;
padding: 0px;
width: 100%;
height: auto;
text-align: center;

& li {
display: inline-block;
width: 150px;
text-align: center;
font-weight: bold;
}

& li.full_width {
padding: 20px 0px 20px 0px;
width: 100%;
font-weight: normal;
font-style: italic;
}

& img.flood_type {
cursor: pointer;
margin: 0px;
width: 150px;
}
`
export default function Info() {

    const [selectedInfo, setSelectedInfo] = useState('');

    function HandleClick(selectedImage:string) {
    setSelectedInfo(selectedImage);
    }

    function FloodTypeInfo() {
    if(selectedInfo === 'level-3') {
        return (
            <>
            <div className="row">
                <div className="col-1">
                    <img className="infoimage" src="level-3.png" alt="Level 3"/>
                </div>
                <div className="col-11">
                <h3>Flooding is possible. Be prepared.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <h4>When it's used:</h4>
                    <ul>
                        <li>Two hours to two days in advance of flooding.</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h4>Triggers:</h4>
                    <ul>
                        <li>Forecasts that indicate that flooding from rivers may be
                        possible.</li>
                        <li>Forecast intense rainfall for rivers that respond very
                        rapidly.</li>
                        <li>Forecasts of high tides, surges or strong winds.</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h4>Impact on the ground:</h4>
                    <ul>
                        <li>Flooding of fields, recreation land and car parks.</li>
                        <li>Flooding of minor roads.</li>
                        <li>Flooding of farmland.</li>
                        <li>Spray or wave overtopping on the coast.</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h4>Advice to the public/media:</h4>
                    <ul>
                        <li>Be prepared to act on your flood plan.</li>
                        <li>Prepare a flood kit of essential items.</li>
                        <li> Avoid walking, cycling or driving through flood water.</li>
                        <li>Farmers should consider moving livestock and
                        equipment away from areas likely to flood.</li>
                        <li>Call Floodline on 0845 988 1188 for up-to-date flooding
                        information.</li>
                        <li>Monitor local water levels on the Environment Agency
                        website www.environment-agency.gov.uk.</li>
                    </ul>
                </div>
            </div>
            </>
        )
    }
    if(selectedInfo === 'level-2') {
        return (
            <>
            <div className="row">
                <div className="col-1">
                    <img className="infoimage" src="level-2.png" alt="Level 2"/>
                </div>
                <div className="col-11">
                <h3>Flooding is expected. Immediate action required.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <h4>When it's used:</h4>
                    <ul>
                        <li>Half an hour to one day in advance of flooding.</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h4>Triggers:</h4>
                    <ul>
                        <li>High tides, surges coupled with strong winds.</li>
                        <li>Heavy rainfall forecast to cause flash flooding of rivers.</li>
                        <li>Forecast flooding from rivers.</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h4>Impact on the ground:</h4>
                    <ul>
                        <li>Flooding of homes and businesses.
                        </li>
                        <li>Flooding of rail infrastructure.</li>
                        <li>Flooding to roads with major impacts.</li>
                        <li>Significant waves and spray on the coast.</li>
                        <li>Extensive flood plain inundation (including caravan
                            parks or campsites).</li>
                        <li>Flooding of major tourist/recreational attractions.</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h4>Advice to the public/media:</h4>
                    <ul>
                        <li>Protect yourself, your family and help others.</li>
                        <li>Move family, pets and valuables to a safe place. </li>
                        <li>Turn off gas, electricity and water supplies if safe to do
                        so.</li>
                        <li>Put flood protection equipment in place</li>
                        <li>If you are caught in a flash flood, get to higher ground.</li>
                        <li>Call Floodline on 0845 988 1188 for up-to-date
                        information.</li>
                    </ul>
                </div>
            </div>
            </>
        )
    }
    if(selectedInfo === 'level-1') {
        return (
            <>
            <div className="row">
                <div className="col-1">
                    <img className="infoimage" src="level-1.png" alt="Level 1"/>
                </div>
                <div className="col-11">
                <h3>Severe Flooding. Danger to life.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <h4>When it's used:</h4>
                    <ul>
                        <li>When flooding poses a significant risk to life or significant
                        disruption to communities.</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h4>Triggers:</h4>
                    <ul>
                        <li>Actual flooding where the conditions pose a significant
                        risk to life and/or widespread disruption to communities.
                        </li>
                        <li>On-site observations from flooded locations.</li>
                        <li>A breach in defences or failure of a tidal surge barrier or
                        dam that is likely to cause significant risk to life.
                        </li>
                        <li>Discussions with partners.</li>
                    </ul>
                </div>
                <div className="col-4">
                    <h4>Impact on the ground:</h4>
                    <ul>
                        <li>Deep and fast flowing water.
                        </li>
                        <li>Debris in the water causing danger.</li>
                        <li>Potential or observed collapse of buildings and
                        structures.</li>
                        <li>Communities isolated by flood waters.</li>
                        <li>Critical infrastructure for communities disabled.</li>
                        <li>Large number of evacuees.</li>
                        <li>Military Support</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h4>Advice to the public/media:</h4>
                    <ul>
                        <li>Stay in a safe place with a means of escape.</li>
                        <li>Be ready should you need to evacuate from your home.</li>
                        <li>Co-operate with the emergency services.</li>
                        <li>Call 999 if you are in immediate danger.</li>
                        <li>If you are caught in a flash flood, get to higher ground.</li>
                        <li>Call Floodline on 0845 988 1188 for up-to-date flooding
                        information. 
                        </li>
                    </ul>
                </div>
            </div>
            </>
        )
    }
    else {
        return ('');
    }
}

   return (
        <>
        <h2>Types of flooding</h2>
        <FloodTypes>
        <li className="full_width">Click on a image to see more info...</li>
            <li><img onClick={() => HandleClick('level-3')} className="flood_type" src="level-3.png"/><br />Flood Alert (Level 3)</li>
            <li><img onClick={() => HandleClick('level-2')} className="flood_type" src="level-2.png"/><br />Flood Warning (Level 2)</li>
            <li><img onClick={() => HandleClick('level-1')} className="flood_type" src="level-1.png"/><br />Severe Flood (Level 1)</li>
        </FloodTypes>

        <InfoColumn>{FloodTypeInfo()}</InfoColumn>
        </>
    )
}