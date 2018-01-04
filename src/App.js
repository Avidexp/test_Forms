import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {PanelGroup, Panel, Button} from "react-bootstrap";




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      charges: [],
      accessorials: [],
      origin: {
        address: {},
        contact: {},
        referenceNumbers: []
      },
      destination: {
        address: {},
        contact: {},
        referenceNumbers: []
      },
      billTo: {
        address:{},
        contact: {},
        referenceNumbers: []
      },
      referenceNumbers:[]
    }
  }
  
 



  formSubmit(event) {
    if(event && event.preventDefault){
      event.preventDefault();
    }

};



handleNewItem(event) {

  console.log("ADD NEW ITEM");


      let description = document.getElementById("itemDescription").value,
      length = document.getElementById("itemLengthInInches").value,
      height = document.getElementById("itemwidthInInches").value,
      width = document.getElementById("itemHeightInInches").value,
      freightClass =document.getElementById("freightClass").value,
      totalWeight =document.getElementById("totalWeightInPounds").value,
      pieces =document.getElementById("pieces").value,
      pallets =document.getElementById("pallets").value;

      console.log(description);
      console.log(length);
      console.log(height);
      console.log(width);
      console.log(freightClass);
      console.log(totalWeight);
      console.log(pieces);
      console.log(pallets);
let item = {description, length, width, height, freightClass, totalWeight, pieces,pallets};


this.setState({items:[...this.state.items, item]});
console.log("ENTIRE EVENT RESPONSE : ");
 console.log(this.state);
  
};

handleNewCharge(event) {

  console.log("ADD NEW ITEM");


      let ChargesCode = document.getElementById("ChargesCode").value,
      ChargesDescription = document.getElementById("ChargesDescription").value,
      ChargesAmount = document.getElementById("ChargesAmount").value;

      console.log(ChargesCode);
      console.log(ChargesDescription);
      console.log(ChargesAmount);

let charge = {ChargesCode, ChargesDescription, ChargesAmount};


this.setState({charges:[...this.state.charges, charge]});
console.log("RESULT FROM HANDLE CHANGE : ");
 console.log(this.state);
  
};

handleNewOriginReference(event){
  let ReferenceCode = document.getElementById("OriginReferenceNumberCode").value,
      ReferenceDescription = document.getElementById("OriginReferenceNumberDescription").value,
      ReferenceValue = document.getElementById("OriginReferenceNumberValue").value;


      console.log(ReferenceCode);
      console.log(ReferenceDescription);
      console.log(ReferenceValue);

      let refObject = {ReferenceCode, ReferenceDescription, ReferenceValue};


      this.setState({origin: {address: {...this.state.origin.address},contact: {...this.state.origin.contact}, referenceNumbers: [{...this.state.origin.referenceNumbers},refObject ] } });

      console.log(this.state);
}

handleNewAccessorials(event) {

  console.log("ADD NEW ITEM");


      let AccessorialDirection = document.getElementById("AccessorialDirection").value,
      AccessorialDescription = document.getElementById("AccessorialDescription").value,
      AccessorialAmount = document.getElementById("AccessorialAmount").value,
      AccessorialCode = document.getElementById("AccessorialCode").value;

      console.log(AccessorialDirection);
      console.log(AccessorialDescription);
      console.log(AccessorialAmount);
      console.log(AccessorialCode);

let accessorial = {AccessorialCode, AccessorialDirection, AccessorialDescription, AccessorialAmount};


this.setState({accessorials:[...this.state.accessorials, accessorial]});
console.log("RESULT FROM HANDLE CHANGE : ");
 console.log(this.state);
  
};
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
         <h1>GlobalTranz</h1>
        </header>
        <div>

        <label >Customer Name</label> &nbsp;
        <input type="text" id="customerName" name="customerName" placeholder="Customer Name"/>&nbsp;&nbsp;

        <label >Shipment Number</label>&nbsp;
        <input type="text" id="shipmentNumber" name="shipmentNumber" placeholder="Shipment Number"/> &nbsp; <br/> 

        <label>Total Charge</label>
        <input type="text" id="totalCharge" name="totalCharge" placeholder="Total Charge"/>

        <label >Ship Date</label>
<input type="date" name="shipDate" id="shipDate"/>

<label>Delivery Date</label>
<input type="date" name="deliveryDate" id="deliveryDate"/>
<br/>

<PanelGroup>
        <Panel collapsible header="Items" eventKey="1">  
        <label >Description</label>
     <input type="textarea" id="itemDescription" name="itemDescription" placeholder="Item Description"/>

     <label >Item Length in Inches</label>
     <input type="text" id="itemLengthInInches" name="itemLengthInInches" placeholder="Item Length in inches"/>

     <label>Item width in Inches</label>
     <input type="text" id="itemwidthInInches" name="itemwidthInInches" placeholder="Item width In Inches"/>
 
     <label >Item Height In Inches</label>
     <input type="text" id="itemHeightInInches" name="itemHeightInInches" placeholder="Item Height In Inches"/>
 
     <label>Freight Class</label>
     <input type="text" id="freightClass" name="freightClass" placeholder="Freight Class"/>

     <label>Total Weight In Pounds</label>
     <input type="text" id="totalWeightInPounds" name="totalWeightInPounds" placeholder="Total Weight In Pounds"/>

     <label>Pieces</label>
     <input type="text" id="pieces" name="pieces" placeholder="Pieces"/>
 
     <label >Pallets</label>
     <input type="text" id="pallets" name="pallets" placeholder="Pallets"/>
 
     <label>Is hazardous</label>
     <select id="isHazardous">
         <option value="true">True</option>
         <option value="false">False</option>
     </select>
     <button style={{"color":"white", "backgroundColor": "green"}} onClick={() => this.handleNewItem(this)}>Add Item</button>
 
 {this.state.items.length > 0 ?
 <div>
      <h4>Items:</h4>
      <table>
      <tr>
      <th>Description</th>
      <th>Length</th>
      <th>Width</th>
      <th>Height</th>
      <th>Freight Class</th>
      <th>Total Weight (pounds)</th>
      <th>Pieces</th>
      <th>Pallets</th>
      </tr>
      {this.state.items.map(item => { 
        return(
        <tr>
          <td>{item.itemDescription}</td>
        <td>{item.description}</td>
        <td>{item.length}</td>
        <td>{item.width}</td>
        <td>{item.height}</td>
        <td>{item.freightClass}</td>
        <td>{item.totalWeight}</td>
        <td>{item.pieces}</td>
        <td>{item.pallets}</td>
        </tr>);
      })}
      </table>
      </div>
    : <p></p>
 }
 </Panel>


 <Panel collapsible header="Charges" eventKey="3">     

     <label>Code</label>
     <input type="text" id="ChargesCode" name="ChargesCode" placeholder="Direction"/>

     <label>Description</label>
     <input type="text" id="ChargesDescription" name="ChargesDescription" placeholder="Accessorial Description"/>
 
     <label >Amount</label>
     <input type="text" id="ChargesAmount" name="ChargesAmount" placeholder="Amount"/>

      <br/>
     <button style={{"color":"white", "backgroundColor": "green", "fontSize": "25px"}} onClick={() => this.handleNewCharge(this)}>+</button>
 

 {this.state.charges.length > 0 ?
 <div>
      <h4>Items:</h4>
      <table>
      <tr>
      <th>Code</th>
      <th>Description</th>
      <th>Amount</th>
      </tr>
      {this.state.charges.map(item => { 
        return(
        <tr>
          <td>{item.ChargesCode}</td>
        <td>{item.ChargesDescription}</td>
        <td>{item.ChargesAmount}</td>
        </tr>);
      })}
      </table>
      </div>
    : <p></p>
 }
 </Panel>
      

 <Panel collapsible header="Accessorials" eventKey="2">     
 
    <label >Code</label>
     <input type="text" id="AccessorialCode" name="code" placeholder="Code"/>

     <label>Direction</label>
     <input type="text" id="AccessorialDirection" name="AccessorialDirection" placeholder="Direction"/>

     <label>Description</label>
     <input type="text" id="AccessorialDescription" name="AccessorialDescription" placeholder="Accessorial Description"/>
 
     <label >Amount</label>
     <input type="text" id="AccessorialAmount" name="Amount" placeholder="Amount"/>

      <br/>


 {this.state.accessorials.length > 0 ?
 <div>
      <h4>Accessorials:</h4>
      <table>
      <tr>
      <th>Code</th>
      <th>Direction</th>
      <th>Description</th>
      <th>Amount</th>
      </tr>
      {this.state.accessorials.map(item => { 
        return(
        <tr>
        <td>{item.AccessorialCode}</td>
          <td>{item.AccessorialDirection}</td>
        <td>{item.AccessorialDescription}</td>
        <td>{item.AccessorialAmount}</td>
        </tr>);
      })}
      </table>
      </div>
    : <p></p>
 }
     <button style={{"color":"white", "backgroundColor": "green", "fontSize": "25px"}}onClick={() => this.handleNewAccessorials(this)}>+</button>
 </Panel>





<Panel collapsible header="Origin" eventKey="4">
     <br/>
     <h3>Address</h3><br/>
     <br/>
     <label >Company Name</label>
     <input type="text" id="DeliveryCompanyName" name="CompanyName" placeholder="Company Name"/>

     <label >Address 1</label>
     <input type="text" id="DeliveryAddress1" name="Address1" placeholder="Address 1"/>

     <label >Address 2</label>
     <input type="text" id="DeliveryAddress2" name="Address2" placeholder="Address 2"/>
 
     <label >City</label>
     <input type="text" id="DeliveryCity" name="City" placeholder="City"/>
   
     <label >State Code</label>
     <input type="text" id="DeliveryStateCode" name="StateCode" placeholder="State Code"/>

     <label>Postal Code</label> 
     <input type="text" id="DeliveryPostalCode" name="PostalCode" placeholder="Postal Code"/>
 
     <label >Country</label>
     <input type="text" id="DeliveryCountry" name="Country" placeholder="Country"/>


      <br/>
      <h3>Contact </h3>
      <label >FirstName</label>
     <input type="text" id="FirstName" name="FirstName" placeholder="First Name"/>

     <label >Last Name</label>
     <input type="text" id="LastName" name="LastName" placeholder="Last Name"/>

     <label >Phone</label>
     <input type="text" id="Phone" name="Phone" placeholder="Phone"/>
 
     <label >Email</label>
     <input type="text" id="Email" name="Email" placeholder="Email"/>
     <br/>
     <Panel header="iderence Numbers" bsStyle="info">

     <label >Code</label>
      <input type="text" id="Code" name="Code" placeholder="Code"/>
 
      <label>Description</label>
      <input type="text" id="iderenceNumbersDescription" name="iderenceNumbersDescription" placeholder="Description"/>
 
      <label >Value</label>
      <input type="text" id="iderenceNumberValue" name="iderenceNumberValue" placeholder="Value"/>

      <button style={{"color":"white", "backgroundColor": "green", "fontSize": "20px"}}>+</button>
    </Panel>
     

     </Panel>

     <Panel collapsible header="Destination" eventKey="4">
     
     <h3>Address</h3><br/>
     <br/>
     <label >Company Name</label>
     <input type="text" id="DeliveryCompanyName" name="CompanyName" placeholder="Company Name"/>

     <label >Address 1</label>
     <input type="text" id="DeliveryAddress1" name="Address1" placeholder="Address 1"/>

     <label >Address 2</label>
     <input type="text" id="DeliveryAddress2" name="Address2" placeholder="Address 2"/>
 
     <label >City</label>
     <input type="text" id="DeliveryCity" name="City" placeholder="City"/>
   
     <label >State Code</label>
     <input type="text" id="DeliveryStateCode" name="StateCode" placeholder="State Code"/>

     <label>Postal Code</label> 
     <input type="text" id="DeliveryPostalCode" name="PostalCode" placeholder="Postal Code"/>
 
     <label >Country</label>
     <input type="text" id="DeliveryCountry" name="Country" placeholder="Country"/>


      <br/>
      <h3>Contact </h3>
      <label >FirstName</label>
     <input type="text" id="FirstName" name="FirstName" placeholder="First Name"/>

     <label >Last Name</label>
     <input type="text" id="LastName" name="LastName" placeholder="Last Name"/>

     <label >Phone</label>
     <input type="text" id="Phone" name="Phone" placeholder="Phone"/>
 
     <label >Email</label>
     <input type="text" id="Email" name="Email" placeholder="Email"/>
     <br/>
     <Panel header="iderence Numbers" bsStyle="info">

     <label >Code</label>
      <input type="text" id="OriginReferenceNumberCode" name="Code" placeholder="Code"/>
 
      <label>Description</label>
      <input type="text" id="OriginReferenceNumberDescription" name="iderenceNumbersDescription" placeholder="Description"/>
 
      <label >Value</label>
      <input type="text" id="OriginReferenceNumberValue" name="referenceNumberValue" placeholder="Value"/>

      <button style={{"color":"white", "backgroundColor": "green", "fontSize": "20px"}} onClick={() => this.handleNewOriginReference(this)}>+</button>
    </Panel>
     </Panel>
    <Panel collapsible header="BillTo" eventKey="5">

     
    <h3>Address</h3><br/>
     <br/>
     <label >Company Name</label>
     <input type="text" id="DeliveryCompanyName" name="CompanyName" placeholder="Company Name"/>

     <label >Address 1</label>
     <input type="text" id="DeliveryAddress1" name="Address1" placeholder="Address 1"/>

     <label >Address 2</label>
     <input type="text" id="DeliveryAddress2" name="Address2" placeholder="Address 2"/>
 
     <label >City</label>
     <input type="text" id="DeliveryCity" name="City" placeholder="City"/>
   
     <label >State Code</label>
     <input type="text" id="DeliveryStateCode" name="StateCode" placeholder="State Code"/>

     <label>Postal Code</label> 
     <input type="text" id="DeliveryPostalCode" name="PostalCode" placeholder="Postal Code"/>
 
     <label >Country</label>
     <input type="text" id="DeliveryCountry" name="Country" placeholder="Country"/>


      <br/>
      <h3>Contact </h3>
      <label >FirstName</label>
     <input type="text" id="FirstName" name="FirstName" placeholder="First Name"/>

     <label >Last Name</label>
     <input type="text" id="LastName" name="LastName" placeholder="Last Name"/>

     <label >Phone</label>
     <input type="text" id="Phone" name="Phone" placeholder="Phone"/>
 
     <label >Email</label>
     <input type="text" id="Email" name="Email" placeholder="Email"/>
     <br/>
     <Panel header="iderence Numbers" bsStyle="info">

     <label >Code</label>
      <input type="text" id="Code" name="Code" placeholder="Code"/>
 
      <label>Description</label>
      <input type="text" id="iderenceNumbersDescription" name="iderenceNumbersDescription" placeholder="Description"/>
 
      <label >Value</label>
      <input type="text" id="iderenceNumberValue" name="iderenceNumberValue" placeholder="Value"/>

      <button style={{"color":"white", "backgroundColor": "green", "fontSize": "20px"}}>+</button>
    </Panel>
     <br/>

      </Panel>
      <Panel collapsible header="Additional iderence Numbers" eventKey="6">
      <Panel header="iderence Numbers" bsStyle="info">

     <label >Code</label>
      <input type="text" id="Code" name="Code" placeholder="Code"/>
 
      <label>Description</label>
      <input type="text" id="iderenceNumbersDescription" name="iderenceNumbersDescription" placeholder="Description"/>
 
      <label >Value</label>
      <input type="text" id="iderenceNumberValue" name="iderenceNumberValue" placeholder="Value"/>

      <button style={{"color":"white", "backgroundColor": "green", "fontSize": "20px"}}>+</button>
    </Panel>
      </Panel>
      </PanelGroup>

    <button value="Submit" onClick={this.formSubmit(this)}>Submit!</button>
 
</div>
      </div>
    );
  }
}

export default App;
