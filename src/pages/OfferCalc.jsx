import React, { useState } from 'react';
import MyNavbar from '../components/MyNavbar';


export default function OfferCalc () {
    const [comp1, setComp1] = useState({'1mo': "", '2mo': "", '3mo': ""});
    const [comp2, setComp2] = useState({'1mo': "", '2mo': "", '3mo': ""});
    const [comp3, setComp3] = useState({'1mo': "", '2mo': "", '3mo': ""});
    const [timeline, setTimeline] = useState();
    const [repairCosts, setRepairCosts] = useState();
    const [assignmentFee, setAssignmentFee] = useState();

    const CalculateOffer = () => {
        // Insert formula for calculation here.

    }

    const change1mo = (e) => {
        return 0;
    }

    let haveResults = false;

    const showResults = () => {
        haveResults = true;
    };

    document.body.style = 'background: #1b1e27;';

    return (
        <div style={{color: 'white'}}>
            
            <div style={{paddingTop: '20px', textAlign: "center"}}>
                <img src='logo185.png' alt="Logo" />
                <h1>The Chosen Homes Network - Offer Calculator</h1>
            </div>
            <div style={{textAlign: "center"}}>
                <form>
                    <div>
                        <label style={{ color: 'white'}}>
                            How many comparables do you have?: 
                            <select name='selectedCompNum' defaultValue={comp1} style={{marginLeft: '5px'}}>
                                <option value='comp1'>1 Comparable</option>
                                <option value='comp2'>2 Comparables</option>
                                <option value='comp3'>3 Comparables</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <input
                            value={comp1['1mo']}
                            onChange={change1mo}
                            name="comp1"
                            label="Comp1"
                            placeholder='Comparable #1 - 1 mo.($)'
                        />
                        <input
                            value={comp1['2mo']}
                            onChange={change1mo}
                            name="comp2"
                            label="Comp2"
                            placeholder='Comparable #1 - 2 mo.($)'
                        />
                        <input
                            value={comp1['3mo']}
                            onChange={change1mo}
                            name="comp3"
                            label="Comp3"
                            placeholder='Comparable #1 - 3 mo.($)'
                        />
                    </div>
                    <div>
                        <input
                            value={comp2['1mo']}
                            onChange={change1mo}
                            name="comp1"
                            label="Comp1"
                            placeholder='Comparable #2 - 1 mo.($)'
                        />
                        <input
                            value={comp2['2mo']}
                            onChange={change1mo}
                            name="comp2"
                            label="Comp2"
                            placeholder='Comparable #2 - 2 mo.($)'
                        />
                        <input
                            value={comp2['3mo']}
                            onChange={change1mo}
                            name="comp3"
                            label="Comp3"
                            placeholder='Comparable #2 - 3 mo.($)'
                        />
                    </div>
                    <div>
                        <input
                            value={comp3['1mo']}
                            onChange={change1mo}
                            name="comp1"
                            label="Comp1"
                            placeholder='Comparable #3 - 1 mo.($)'
                        />
                        <input
                            value={comp3['2mo']}
                            onChange={change1mo}
                            name="comp2"
                            label="Comp2"
                            placeholder='Comparable #3 - 2 mo.($)'
                        />
                        <input
                            value={comp3['3mo']}
                            onChange={change1mo}
                            name="comp3"
                            label="Comp3"
                            placeholder='Comparable #3 - 3 mo.($)'
                        />
                    </div>
                    <div>
                        <input
                            value={timeline}
                            onChange={setTimeline}
                            name="timeline"
                            label="Timeline"
                            placeholder='Timeline (months)'
                        />
                        <input
                            value={repairCosts}
                            onChange={setRepairCosts}
                            name="repaircosts"
                            label="RepairCosts"
                            placeholder='Repair Costs ($)'
                        />
                        <input
                            value={assignmentFee}
                            onChange={setAssignmentFee}
                            name="assignmentfee"
                            label="AssignmentFee"
                            placeholder='Assignment Fee ($)'
                        />
                    </div>
                    <div>
                        <button type="submit" onSubmit={() => {CalculateOffer(); showResults();}}>Calculate</button>
                    </div>
                    <div>
                        {haveResults ? <h2>results</h2> : null}
                    </div>
                </form>
            </div>
        </div>
    );
};