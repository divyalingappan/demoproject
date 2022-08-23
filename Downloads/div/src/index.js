import React, { useState } from "react";
import ReactDOM from "react-dom";
//import Select from 'react-select';
import { TextComponent, InputComponent, Box ,DatePick,Dropdown,Button} from "./Components";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#8D19FFB2",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextComponent
        label="INCRESCO TECHNOLOGIES"
        styleProps={{ fontSize: "48px", textAlign: "center" }}
      />
      <br></br>
      <TextComponent
        label="CAMPUS HIRING 2023"
        styleProps={{ fontSize: "36px", textAlign: "center" }}
      />
    </div>
  );
};
const Attatchments = () => {
  return (
    <>
      <div>
        <h3>ATTATCHMENTS</h3>
        <TextComponent
          styleProps={{ fontSize: "18px", textAlign: "left", fontWeight: 700 }}
          label="Add Resume/CV"
          CustomTag="span"
        >
          <TextComponent
            styleProps={{
              fontSize: "18px",
              textAlign: "left",
              fontWeight: 400,
            }}
            CustomTag="span"
            label="Accept format: doc/.docx/.pdf;Size: 1MB"
          />
        </TextComponent>
      </div>
      <button>Choose File</button>
    </>
  );
};

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName,setMiddleName]=useState("");
  const [ number,setNumber]=useState("");
  const [email,setEmail]=useState("");
  const [gender, setGender] = useState("");
  const [tenthp,setTenthp]=useState("");
  const [twelvep,setTwelvep]=useState("");
  const [degree,setDegree]=useState("");
  const [college,setCollege]=useState("");
  const [reg,setReg]=useState("");
  const [branch,setBranch]=useState("");
  
return (
      <div>
        <Header />
        <form>
          <h>*Required</h>
          <h1>Registration Form</h1>
          
          <TextComponent />
          <Box>
          <Box header="Personal Details" styles={{padding:"0px 4px 10px 4px"}} >
            <InputComponent 
              type="text"
              label={< TextComponent label ="First Name" isMandatory={"true"}/>}
              placeholder="Enter First name"
              value={firstName}
              style={{borderRadius:"5px",
              borderWidth: "1px",
               blockSize: "25px",
              }}
              onChange={(a) => {
                console.log(a.target.value);
                setFirstName(a.target.value);
              }}
            />
            <InputComponent
              type="text"
              label="Middle Name"
              placeholder="Enter Middle Name"
              value={middleName}
              style={{
                borderRadius:"5px",
              borderWidth: "1px",
              blockSize: "25px"
              }}
              onChange={(a)=>{
                console.log(a.target.value);
                setMiddleName(a.target.value);
              }}
              />
            <InputComponent
              type="text"
              
              label={< TextComponent label ="Last Name" isMandatory={"true"}/>}
              placeholder="Enter last name"
              value={lastName}
              style={{borderRadius:"5px",
              borderWidth: "1px",
             blockSize: "25px"
            }}
              onChange={(a) => {
                console.log(a.target.value);
                setLastName(a.target.value);
              }}
            />
             <InputComponent
              type="text"
              label="EmailId"
              label={< TextComponent label ="Email Id" isMandatory={"true"}/>}
              placeholder="Enter email"
              value={email}
              style={{borderRadius:"5px",
              borderWidth: "1px",
              blockSize: "25px"}}
              onChange={(a) => {
                console.log(a.target.value);
                setEmail(a.target.value);
               }}
            />
            <InputComponent
              type="text"
              label={< TextComponent label ="Contact Number" isMandatory={"true"}/>}
              placeholder="Enter number"
              value={number}
              style={{borderRadius:"5px",
              borderWidth: "1px",
              blockSize: "25px"}}
              onChange={(a) => {
                console.log(a.target.value);
                setNumber(a.target.value);
              }}
            />
            <TextComponent
          label="DOB(DD/MM/YY)"
          isMandatory={"true"}
          styleProps={{ fontSize: "15px", textAlign: "left" }}
        />
        <DatePick/>
        <TextComponent
          label="Gender"
          styleProps={{ fontSize: "15px", textAlign: "left" }}
        />
            <InputComponent
             type="radio"
              value="Male"
              name="gender"
              label="Male"

          
              

              onChange={(a) => {
                console.log(a.target.value);
                setGender(a.target.value);
              }}
             
            />
            <InputComponent
               type="radio" 
               name="gender"
               value="Male" 
               label="female"
          
              
              onChange={(a) => {
                console.log(a.target.value);
                setGender(a.target.value);
              }}
              
            />
            <InputComponent
              type="radio"
              value="TransGender"
              name="gender"
              label="TransGender"
              
              onChange={(a) => {
                console.log(a.target.value);
                setGender(a.target.value);
              }}
            />
          
          </Box>
         <Box header="Lowest Education profile" styles={{padding:"20px 4px 10px 4px",borderWidth:"0.001px"}}>

          <InputComponent
              type="text"
              label="10th Percentage %"
              placeholder="Enter percentage"
              value={tenthp}
              style={{borderRadius:"5px",
              borderWidth: "1px",
              blockSize: "25px"}}
              onChange={(a) => {
                console.log(a.target.value);
                setTenthp(a.target.value);
              }}
            />
            <InputComponent
              type="text"
              label="12th Percentage %"
              placeholder="Enter percentage"
              value={twelvep}
              style={{borderRadius:"5px",
              borderWidth: "1px",
              blockSize: "25px"}}
              onChange={(a) => {
                console.log(a.target.value);
                setTwelvep(a.target.value);
              }}
            />
            </Box>
              <Box header="Highest Education profile" styles={{padding:"20px 4px 10px 4px"}}>
              <InputComponent
                  type="text"
                  label="Degree"
                  //placeholder="Enter percentage"
                  value={degree}
                  style={{borderRadius:"5px",
              borderWidth: "1px",
              blockSize: "25px"}}
                  onChange={(a) => {
                    console.log(a.target.value);
                    setDegree(a.target.value);
                  }}
                />
                <InputComponent
                  type="text"
                  label="College"
                  //placeholder="Enter percentage"
                  value={college}
                  style={{borderRadius:"5px",
                  borderWidth: "1px",
                  blockSize: "25px"}}
                  onChange={(a) => {
                    console.log(a.target.value);
                    setCollege(a.target.value);
                  }}
                />
                 <InputComponent
                  type="text"
                  label="Reg.No"
                  //placeholder="Enter percentage"
                  value={reg}
                  style={{borderRadius:"5px",
              borderWidth: "1px",
              blockSize: "25px"}}
                  onChange={(a) => {
                    console.log(a.target.value);
                    setReg(a.target.value);
                  }}
                  />
                <InputComponent
                  type="text"
                  label="Branch"
                  //placeholder="Enter percentage"
                  value={branch}
                  style={{borderRadius:"5px",
                  borderWidth: "1px",
                  blockSize: "25px"}}
                  onChange={(a) => {
                    console.log(a.target.value);
                    setBranch(a.target.value);
                  }}
                  />
                   <TextComponent
                      label="Education Type"
                      styleProps={{ fontSize: "20px", textAlign: "left" ,padding: "6px 5px 4px 2px"}} 
                    /> 
                  <Dropdown
                      input={options}
                  />
                    <TextComponent
                      label="Backlogs"
                      styleProps={{ fontSize: "20px", textAlign: "left" ,padding: "6px 5px 4px 2px"}}
                    /> 
                  <Dropdown
                  input={Backlogoptions}
                  />
                </Box>
            <Box>
            <Attatchments />
          </Box>
          </Box>
          <Button label="Submit"/>             
        </form>
      </div>
  );
};
const options=[{key:"key-1",text:"Post Graduation"},{key:"key-2",text:"Under Graduation"},{key:"key-3",text:"Diploma"}]
const Backlogoptions=[{key:"1",text:"Yes"},{key:"2",text:"No"}]

ReactDOM.render(<App/>, document.getElementById("app"));
