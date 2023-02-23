import React, { useState } from "react";
import './App.css';

export default function App() {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  const fileReader = new FileReader();

  // const rgx_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // const rgx_phone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const rgx_zip = /^[0-9]{5}(?:-[0-9]{4})?$/;
  const rgx_name = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$/;
  const rgx_address_street = /^\s*\S+(?:\s+\S+){2}/;
  const rgx_state = /^([Aa][LKSZRAEPlkszraep]|[Cc][AOTaot]|[Dd][ECec]|[Ff][LMlm]|[Gg][AUau]|[Hh][Ii]|[Ii][ADLNadln]|[Kk][SYsy]|[Ll][Aa]|[Mm][ADEHINOPSTadehinopst]|[Nn][CDEHJMVYcdehjmvy]|[Oo][HKRhkr]|[Pp][ARWarw]|[Rr][Ii]|[Ss][CDcd]|[Tt][NXnx]|[Uu][Tt]|[Vv][AITait]|[Ww][AIVYaivy])$/;
  const rgx_array = [rgx_zip, rgx_name, rgx_address_street, rgx_state];

  const applyColor = (string) => {
    string.val = string.val.trim();
    string.val = string.val.replace('\"',"");
    let is_valid = false;
    rgx_array.forEach((rgx, index) => {if (rgx.test(string.val)){is_valid = true;}});
    // const result = rgx_name.test(string.val);
    return !is_valid;
  };

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = string => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");

    // let required_headers = ['property_address', 'property_city', 'property_state', 'property_zip', 'owner_first_name', 'owner_last_name', 'mailing_address', 'mailing_city', 'mailing_state', 'mailing_zip'];
    
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
    csvRows.pop() //removes the last "" from split function

    csvRows.forEach((x, i) => x.replace("\\r", ""));
    csvRows.forEach((x, i) => x.replace('\"', ''));
    

    const array = csvRows.map(i => {
      let values = i.split(",");
      values.forEach((string, index) => string.trim());
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));
  headerKeys.unshift('Skiptrace #');

  document.body.style = 'background: #1b1e27;';

  return (
    <div style={{color: 'white'}}>
      <div style={{paddingTop: '20px', textAlign: "center"}}>
        <img src='logo185.png' alt="Logo" />
        <h1>The Chosen Homes Network - Skiptracing</h1>
      </div>
      <div style={{textAlign: 'left'}}>
        <h2 style={{ textAlign: "left", paddingLeft: '15%'}}>Instructions</h2>
        <ol style={{ textAlign: "left", paddingLeft: '15%', paddingRight: '15%'}}>
          <li>Obtain your data that you wish to skiptrace from local governments (see Launchpad course).</li>
          <li>Open your data in Excel and replace the relevant column headers with one of these names: (Insert instructional video link)</li>
          <em>property_address, property_city, property_state, property_zip, owner_first_name, owner_last_name, mailing_address, mailing_city, mailing_state, mailing_zip</em>
          <li>Eliminate any empty lines or lines at the beginning of the file that are not the column headers.</li>
          <li>Save your data as a .csv file and select it when you press the 'Choose File' button. Then press 'Check Formatting' to see format problems (highlighted in red). A red cell doesn't necessarily mean it is incorrect.</li>
          <li>When happy with the quality of your uploaded data, press the 'Get Skiptrace Results' button to receive a .csv download with your results. You will be charged $0.15 for every hit.</li>
        </ol>
      </div>

      <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
          style={{textAlign: 'left', paddingLeft: '15%', paddingTop: '10px', paddingBottom: '10px'}}
        />
        <button onClick={(e) => {handleOnSubmit(e);}}>Check Formatting</button>
        <button onClick={(e) => {handleOnSubmit(e);}}>Get Skiptrace Results ($0.15 per successful hit)</button>
      </form>

      <br />
      <div style= {{display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black'}}>
        <table>
          <thead>
            <tr key={"header"}>
              {headerKeys.map((key) => (<th bgcolor='white'>{key}</th>))}
            </tr>
          </thead>

          <tbody>
            {array.map((item, index) => (<tr key={item.id}><td bgcolor='white'>{index + 1}</td>{Object.values(item).map((val) => { return (applyColor({val}) ? <td bgcolor='red'>{val}</td> : <td bgcolor='white'>{val}</td>) })}</tr>))}
          </tbody>
        </table>
      </div>
      <br />

      
    </div>
  );
}