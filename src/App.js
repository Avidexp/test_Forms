import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {PanelGroup, Panel, Button} from "react-bootstrap";




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ShipmentNumber: "",
      CustomerName: "",
      TotalCharge: 0,
      ShipDate: "",
      DeliveryDate: "",
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
  
 
componentWillReceiveProps(props){
  console.log(props);
}
componentWillUpdate(props){
  console.log(props);
}

formSubmit(event) {
    let CustomerName = document.getElementById("customerName").value,
    ShipmentNumber = document.getElementById("shipmentNumber").value,
    TotalCharge = document.getElementById("totalCharge").value,
    ShipDate = document.getElementById("shipDate").value,
    DeliveryDate = document.getElementById("deliveryDate").value;

    console.log(CustomerName);
    console.log(ShipmentNumber);
    console.log(TotalCharge);
    console.log(ShipDate);
    console.log(DeliveryDate);
    
    this.setState({
      ShipmentNumber: ShipmentNumber,
      CustomerName: CustomerName,
      TotalCharge: TotalCharge,
      ShipDate: ShipDate,
      DeliveryDate: DeliveryDate,
    });


    //Origin

    let OriginCompanyName = document.getElementById("OriginCompanyName").value,
    OriginAddress1 = document.getElementById("OriginAddress1").value,
    OriginAddress2 = document.getElementById("OriginAddress2").value,
    OriginCity = document.getElementById("OriginCity").value,
    OriginState = document.getElementById("OriginStateCode").value,
    OriginPostalCode = document.getElementById("OriginPostalCode").value,
    OriginCountry = document.getElementById("OriginCountry").value,
    OriginContactFirstName = document.getElementById("OriginContactFirstName").value,
    OriginContactLastName = document.getElementById("OriginContactLastName").value,
    OriginContactPhone = document.getElementById("OriginContactPhone").value,
    OriginContactEmail = document.getElementById("OriginContactEmail").value;


    this.setState({
      origin: {
        address: {
          CompanyName: OriginCompanyName,
          Address1: OriginAddress1,
          Address2: OriginAddress2,
          City: OriginCity,
          StateCode: OriginState,
          PostalCode: OriginPostalCode,
          Country: OriginCountry
        },
        Contact:{
          FirstName: OriginContactFirstName,
          LastName: OriginContactLastName,
          Phone: OriginContactPhone,
          Email: OriginContactEmail
        },
        referenceNumbers: [...this.state.origin.referenceNumbers]
      }
    });


    //Destination


    // let DestinationCompanyName = document.getElementById("DeliveryCompanyName").value,
    // DestinationAddress1 = document.getElementById("DestinationAddress1").value,
    // DestinationAddress2 = document.getElementById("DestinationAddress2").value,
    // DestinationCity = document.getElementById("DestinationCity").value,
    // DestinationStateCode = document.getElementById("DestinationStateCode").value,
    // DestinationPostalCode = document.getElementById("DestinationPostalCode").value,
    // DestinationCountry = document.getElementById("DestinationCountry").value,
    // DestinationFirstName = document.getElementById("DestinationFirstName").value,
    // DestinationLastName = document.getElementById("DestinationFLastName").value,
    // DestinationPhone = document.getElementById("DestinationPhone").value,
    // DestinationEmail = document.getElementById("DestinationEmail").value;

    // this.setState({
    //   destination:{
    //     address: {
    //       CompanyName: DestinationCompanyName,
    //       Address1: DestinationAddress1,
    //       Address2: DestinationAddress2,
    //       City: DestinationCity,
    //       StateCode: DestinationStateCode,
    //       PostalCode: DestinationPostalCode,
    //       Country: DestinationCountry
    //     },
    //     contact: {
    //       FirstName: DestinationFirstName,
    //       LastName: DestinationLastName,
    //       Phone: DestinationPhone,
    //       Email: DestinationEmail
    //     }
    //   }
    // })



    // BillTo

    let BillToCompanyName = document.getElementById("BillToCompanyName").value,
    BillToAddress1 = document.getElementById("BillToAddress1").value,
    BillToAddress2 = document.getElementById("BillToAddress2").value,
    BillToCity = document.getElementById("BillToCity").value,
    BillToStateCode = document.getElementById("BillToStateCode").value,
    BillToPostalCode =  document.getElementById("BillToPostalCode").value,
    BillToCountry = document.getElementById("BillToCountry").value,
    BillToFirstName = document.getElementById("BillToFirstName").value,
    BillToLastName = document.getElementById("BillToLastName").value,
    BillToPhone = document.getElementById("BillToPhone").value,
    BillToEmail = document.getElementById("BillToEmail").value;


    this.setState({
      billTo:{
        address:{
          companyName: BillToCompanyName,
          address1: BillToAddress1,
          address2: BillToAddress2,
          city: BillToCity,
          stateCode: BillToStateCode,
          postalCode: BillToPostalCode, 
          country: BillToCountry
        },
        contact:{
          FirstName: BillToFirstName,
          LastName: BillToLastName,
          Phone: BillToPhone,
          Email: BillToEmail
        },
        referenceNumbers: [...this.state.billTo.referenceNumbers]
      }
    })

    console.log("CURRENT STATE: ");
    console.log(this.state);

    let JSONObj = JSON.stringify(this.state);

    console.log(JSONObj);

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
      pallets =document.getElementById("pallets").value,
      isHazardous = document.getElementById("isHazardous").value;

      console.log(description);
      console.log(length);
      console.log(height);
      console.log(width);
      console.log(freightClass);
      console.log(totalWeight);
      console.log(pieces);
      console.log(pallets);
      console.log(isHazardous);
let item = {description, length, width, height, freightClass, totalWeight, pieces,pallets, isHazardous};


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



handleNewBillToReference(event){
  let BillToReferenceCode = document.getElementById("BillToReferenceCode").value,
  BillToReferenceDescription = document.getElementById("BillToReferenceDescription").value,
  BillToReferenceValue = document.getElementById("BillToReferenceValue").value;


      console.log(BillToReferenceCode);
      console.log(BillToReferenceDescription);
      console.log(BillToReferenceValue);

      let refObject = {BillToReferenceCode, BillToReferenceDescription, BillToReferenceValue};


      this.setState({billTo: 
        {
            address: {...this.state.billTo.address},
            contact: {...this.state.billTo.contact}, 
            referenceNumbers: [
                ...this.state.billTo.referenceNumbers, 
                refObject 
              ] 
        } 
          });

      console.log(this.state);
}


handleMainReference(event){
  let AdditionalReferenceCode = document.getElementById("AdditionalReferenceCode").value,
  AdditionalReferenceDescription = document.getElementById("AdditionalReferenceDescription").value,
  AdditionalReferenceValue = document.getElementById("AdditionalReferenceValue").value;


      console.log(AdditionalReferenceCode);
      console.log(AdditionalReferenceDescription);
      console.log(AdditionalReferenceValue);

      let refObject = {AdditionalReferenceCode, AdditionalReferenceDescription, AdditionalReferenceValue};


      this.setState({
            referenceNumbers: [
                ...this.state.referenceNumbers, 
                refObject 
              ] 
          });

      console.log(this.state);
}

handleNewOriginReference(event){
  let ReferenceCode = document.getElementById("OriginReferenceNumberCode").value,
      ReferenceDescription = document.getElementById("OriginReferenceNumberDescription").value,
      ReferenceValue = document.getElementById("OriginReferenceNumberValue").value;


      console.log(ReferenceCode);
      console.log(ReferenceDescription);
      console.log(ReferenceValue);

      let refObject = {ReferenceCode, ReferenceDescription, ReferenceValue};


      this.setState({origin: 
        {
            address: {...this.state.origin.address},
            contact: {...this.state.origin.contact}, 
            referenceNumbers: [
                ...this.state.origin.referenceNumbers, 
                refObject 
              ] 
        } 
          });

      console.log(this.state);
}

handleNewDestinationReference(event){
  let DestinationReferenceNumberCode = document.getElementById("DestinationReferenceNumberCode").value,
  DestinationReferenceNumberDescription = document.getElementById("DestinationReferenceNumberDescription").value,
  DestinationReferenceNumberValue = document.getElementById("DestinationReferenceNumberValue").value;


      console.log(DestinationReferenceNumberCode);
      console.log(DestinationReferenceNumberDescription);
      console.log(DestinationReferenceNumberValue);

      let refObject = {DestinationReferenceNumberCode, DestinationReferenceNumberDescription, DestinationReferenceNumberValue};


      this.setState({destination: 
        {
            address: {...this.state.destination.address},
            contact: {...this.state.destination.contact}, 
            referenceNumbers: [
                ...this.state.destination.referenceNumbers, 
                refObject 
              ] 
        } 
          });

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
      <th>isHazardous</th>
      </tr>
      <tbody>
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
        <td>{item.isHazardous}</td>
        </tr>);
      })}
      </tbody>
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
     <input type="text" id="OriginCompanyName" name="CompanyName" placeholder="Company Name"/>

     <label >Address 1</label>
     <input type="text" id="OriginAddress1" name="Address1" placeholder="Address 1"/>

     <label >Address 2</label>
     <input type="text" id="OriginAddress2" name="Address2" placeholder="Address 2"/>
 
     <label >City</label>
     <input type="text" id="OriginCity" name="City" placeholder="City"/>
   
     <label >State Code</label>
     <input type="text" id="OriginStateCode" name="StateCode" placeholder="State Code"/>

     <label>Postal Code</label> 
     <input type="text" id="OriginPostalCode" name="PostalCode" placeholder="Postal Code"/>
 
     <label >Country</label>
     <input type="text" id="OriginCountry" name="Country" placeholder="Country"/>


      <br/>
      <h3>Contact </h3>
      <label >FirstName</label>
     <input type="text" id="OriginContactFirstName" name="FirstName" placeholder="First Name"/>

     <label >Last Name</label>
     <input type="text" id="OriginContactLastName" name="LastName" placeholder="Last Name"/>

     <label >Phone</label>
     <input type="text" id="OriginContactPhone" name="Phone" placeholder="Phone"/>
 
     <label >Email</label>
     <input type="text" id="OriginContactEmail" name="Email" placeholder="Email"/>
     <br/>
     <Panel header="Reference Numbers" bsStyle="info">

     <label >Code</label>
      <input type="text" id="OriginReferenceNumberCode" name="OriginReferenceNumberCode" placeholder="Code"/>
 
      <label>Description</label>
      <input type="text" id="OriginReferenceNumberDescription" name="iderenceNumbersDescription" placeholder="Description"/>
 
      <label >Value</label>
      <input type="text" id="OriginReferenceNumberValue" name="OriginReferenceNumberValue" placeholder="Value"/>



      {this.state.origin.referenceNumbers.length > 0 ?
 <div>
      <h4>Reference Numbers:</h4>
      <table>
      <tr>
      <th>Code</th>
      <th>Description</th>
      <th>Value</th>
      </tr>
      {this.state.origin.referenceNumbers.map(item => { 
        return(
        <tr>
        <td>{item.ReferenceCode}</td>
          <td>{item.ReferenceDescription}</td>
        <td>{item.ReferenceValue}</td>
        </tr>);
      })}
      </table>
      </div>
    : <p></p>
 }
      <button style={{"color":"white", "backgroundColor": "green", "fontSize": "20px"}} onClick={() => this.handleNewOriginReference(this)}>+</button>
    </Panel>
     

     </Panel>

     <Panel collapsible header="Destination" eventKey="4">
     
     <h3>Address</h3><br/>
     <br/>
     <label >Company Name</label>
     <input type="text" id="DeliveryCompanyName" name="DestinationCompanyName" placeholder="Company Name"/>

     <label >Address 1</label>
     <input type="text" id="DestinationAddress1" name="DestinationAddress1" placeholder="Address 1"/>

     <label >Address 2</label>
     <input type="text" id="DestinationAddress2" name="DestinationAddress2" placeholder="Address 2"/>
 
     <label >City</label>
     <input type="text" id="DestinationCity" name="DestinationCity" placeholder="City"/>
   
     <label >State Code</label>
     <input type="text" id="DestinationStateCode" name="DestinationStateCode" placeholder="State Code"/>

     <label>Postal Code</label> 
     <input type="text" id="DestinationPostalCode" name="DestinationPostalCode" placeholder="Postal Code"/>
 
     <label >Country</label>
     <input type="text" id="DestinationCountry" name="DestinationCountry" placeholder="Country"/>


      <br/>
      <h3>Contact </h3>
      <label >FirstName</label>
     <input type="text" id="DestinationFirstName" name="DestinationFirstName" placeholder="First Name"/>

     <label >Last Name</label>
     <input type="text" id="DestinationLastName" name="DestinationLastName" placeholder="Last Name"/>

     <label >Phone</label>
     <input type="text" id="DestinationPhone" name="DestinationPhone" placeholder="Phone"/>
 
     <label >Email</label>
     <input type="text" id="DestinationEmail" name="DestinationEmail" placeholder="Email"/>
     <br/>
     <Panel header="Reference Numbers" bsStyle="info">

     <label >Code</label>
      <input type="text" id="DestinationReferenceNumberCode" name="DestinationReferenceNumberCode" placeholder="Code"/>
 
      <label>Description</label>
      <input type="text" id="DestinationReferenceNumberDescription" name="DestinationReferenceNumberDescription" placeholder="Description"/>
 
      <label >Value</label>
      <input type="text" id="DestinationReferenceNumberValue" name="DestinationReferenceNumberValue" placeholder="Value"/>


      {this.state.destination.referenceNumbers.length > 0 ?
 <div>
      <h4>Reference Numbers:</h4>
      <table>
      <tr>
      <th>Code</th>
      <th>Description</th>
      <th>Value</th>
      </tr>
      {this.state.destination.referenceNumbers.map(item => { 
        return(
        <tr>
        <td>{item.DestinationReferenceNumberCode}</td>
          <td>{item.DestinationReferenceNumberDescription}</td>
        <td>{item.DestinationReferenceNumberValue}</td>
        </tr>);
      })}
      </table>
      </div>
    : <p></p>
 }

      <button style={{"color":"white", "backgroundColor": "green", "fontSize": "20px"}} onClick={() => this.handleNewDestinationReference(this)}>+</button>
    </Panel>
     </Panel>
    <Panel collapsible header="BillTo" eventKey="5">

     
    <h3>Address</h3><br/>
     <br/>
     <label >Company Name</label>
     <input type="text" id="BillToCompanyName" name="CompanyName" placeholder="Company Name"/>

     <label >Address 1</label>
     <input type="text" id="BillToAddress1" name="Address1" placeholder="Address 1"/>

     <label >Address 2</label>
     <input type="text" id="BillToAddress2" name="Address2" placeholder="Address 2"/>
 
     <label >City</label>
     <input type="text" id="BillToCity" name="City" placeholder="City"/>
   
     <label >State Code</label>
     <input type="text" id="BillToStateCode" name="StateCode" placeholder="State Code"/>

     <label>Postal Code</label> 
     <input type="text" id="BillToPostalCode" name="PostalCode" placeholder="Postal Code"/>
 
     <label >Country</label>
     <input type="text" id="BillToCountry" name="Country" placeholder="Country"/>


      <br/>
      <h3>Contact </h3>
      <label >FirstName</label>
     <input type="text" id="BillToFirstName" name="FirstName" placeholder="First Name"/>

     <label >Last Name</label>
     <input type="text" id="BillToLastName" name="LastName" placeholder="Last Name"/>

     <label >Phone</label>
     <input type="text" id="BillToPhone" name="Phone" placeholder="Phone"/>
 
     <label >Email</label>
     <input type="text" id="BillToEmail" name="Email" placeholder="Email"/>
     <br/>
     <Panel header="Reference Numbers" bsStyle="info">

     <label >Code</label>
      <input type="text" id="BillToReferenceCode" name="Code" placeholder="Code"/>
 
      <label>Description</label>
      <input type="text" id="BillToReferenceDescription" name="iderenceNumbersDescription" placeholder="Description"/>
 
      <label >Value</label>
      <input type="text" id="BillToReferenceValue" name="iderenceNumberValue" placeholder="Value"/>

      <button style={{"color":"white", "backgroundColor": "green", "fontSize": "20px"}} onClick={() => this.handleNewBillToReference(this)}>+</button>
    
      {this.state.billTo.referenceNumbers.length > 0 ?
 <div>
      <h4>Reference Numbers:</h4>
      <table>
      <tr>
      <th>Code</th>
      <th>Description</th>
      <th>Value</th>
      </tr>
      {this.state.billTo.referenceNumbers.map(item => { 
        return(
        <tr>
        <td>{item.BillToReferenceCode}</td>
          <td>{item.BillToReferenceDescription}</td>
        <td>{item.BillToReferenceValue}</td>
        </tr>);
      })}
      </table>
      </div>
    : <p></p>
 }
    </Panel>
     <br/>

      </Panel>
      <Panel collapsible header="Additional Reference Numbers" eventKey="6">
      <Panel header="Reference Numbers" bsStyle="info">

     <label >Code</label>
      <input type="text" id="AdditionalReferenceCode" name="Code" placeholder="Code"/>
 
      <label>Description</label>
      <input type="text" id="AdditionalReferenceDescription" name="iderenceNumbersDescription" placeholder="Description"/>
 
      <label >Value</label>
      <input type="text" id="AdditionalReferenceValue" name="iderenceNumberValue" placeholder="Value"/>

      <button style={{"color":"white", "backgroundColor": "green", "fontSize": "20px"}} onClick={() => this.handleMainReference(this)}>+</button>
    
      {this.state.referenceNumbers.length > 0 ?
 <div>
      <h4>Reference Numbers:</h4>
      <table>
      <thead>
      <tr>
      <th>Code</th>
      <th>Description</th>
      <th>Value</th>
      </tr>
      </thead>
      <tbody>
      {this.state.referenceNumbers.map(item => { 
        return(
        <tr>
        <td>{item.AdditionalReferenceCode}</td>
          <td>{item.AdditionalReferenceDescription}</td>
        <td>{item.AdditionalReferenceValue}</td>
        </tr>);
      })}
      </tbody>
      </table>
      </div>
    : <p></p>
 }
    </Panel>
      </Panel>
      </PanelGroup>

      <button style={{"width": "100%"}} value="Submit" onClick={() => this.formSubmit(this)}>Submit!</button>


</div>
      </div>
    );
  }
}

export default App;
