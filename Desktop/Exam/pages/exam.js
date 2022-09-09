import React from "react";

import { TextComponent,Dropdown,Date,FN,AN,Box,Time,T} from "../src/components";
import styled from "styled-components";
import { Font } from "../font";
import GlobalStyle from "../globalstyle";
import { Header } from "../src/Header";
// import formdata from "./createsche";
import formdata from "../src/createsche";

const HeadStyle=styled.div`
font-family: 'Nunito';
font-style: normal;
font-weight: 700;

/* display:flex;
flex-direction:row; */
top:0px;
background: #5375E2;
width:100%;
margin:0%;
`
const FootStyle=styled.div`
font-family: 'Nunito';
font-style: normal;
font-weight: 200;
font-size: 12px;
line-height: 116%;
display: flex;
margin-bottom:13px;
width: 1440px;
height: 42px;
background: #FBFBFB;
align-items: center;
text-align: center;
color: #000000`
const Logo=()=> {
    return (
       
      <div marginLeft="0px">
        <img src="https://i.ibb.co/2S0PzTc/logo.png" alt="LOGO" />
        
      </div>
    );
}
 const Vector=()=> {
    return (
      <div style={{marginTop:"",marginLeft:"1260px",flexDirection:"row",color:"red"
}}>
        <img src="https://i.ibb.co/ckcWSdS/healthicons-ui-user-profile.png" 
       
  />
      </div>
    );
} 

const Sub=()=>{
    return(
        
        <div style={{display: "flex",
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center",
        padding: " 8px 16px",
        gap: "25px",
        width: "344px",
        height: "56px"}}>
            <Dropdown/>
            {/* <Dropdown/> */}
            <Date/>
            <FN/>
            <AN/>
         
            
        </div>
       
    )
}

const BackButton=()=> {
    return (
      <div style={{marginTop:"127px",marginLeft:"122px",display:"flex"}} >
        <img
        src="https://i.ibb.co/HnM1WDs/Vectorarrow.png"
         />   
      </div>
    );
  }
export const Exam=()=>

    {
        return(<>
            <Header/> 
         
        <>
 <Font/>
    <BackButton/>
    
    <div>
    <TextComponent label="Create new schedule"
    styleProps={{marginLeft:"155px",
    marginTop:"0px",
    diplay:"flex",
        fontFamily: 'Nunito',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "3px",
    
    color: "#000000"}}/>
    </div>
    
    <Box style={{
        width: "1196px",
        height: "1464px",
        left: "122px",
        top: "183px",
        background: "#FBFBFB",
        gap:"20px",
        margin:"19.74px 122px 227px 122px"
    } }>
       
    <div style={{display:"flex",flexDirection: "row",padding: "8px 16px "}}>
    <TextComponent label="Branch" /> 
    
    <div style={{display:"flex",flexDirection: "row",padding: "8px 160px "}}></div>
    <TextComponent label="Department"/>
    <div style={{display:"flex",flexDirection: "row",padding: "8px 160px "}}></div>
      <TextComponent label="Semester "
      /> 
    
   
            
   </div>
            
    
    <div style={{display:"flex",flexDirection:"row",marginTop:"10px",gap:"25px",marginLeft:"15px"}}>
    
            <Dropdown 
           
                value= {formdata.branchanddep.map(item=>item.branch)}/>
        <Dropdown value= {[...formdata.branchanddep[0].deps,...formdata.branchanddep[1].deps]}/>
        <Dropdown />
    </div >
    <div style={{display:"flex",flexDirection: "row",padding: "8px 16px "}}></div>
    <TextComponent label="Exam Type" />
    <div style={{display:"flex",flexDirection:"row",marginTop:"15px",gap:"35px"}}></div>
   {/* <div> */}
   <Dropdown style={{
        width: "1096px",
        height: "56px"
      }} 
      value = {formdata.Examtype}
      />

    {/* </div> */}
    <div style={{display:"flex",flexDirection:"row",left: "12.01",marginLeft:"35px",
right: "78.38%",
margintop: "24px",
bottom: "74.18%",

fontfamily: "Nunito Sans",
fontstyle: "normal",
fontweight: "700",
fontsize: "16px",
lineheight: "22px",

color: "#000000"}}/>
    <div>
        <TextComponent label="Time Range" styleProps={{display:"flex",flexDirection:"row",marginLeft:"8px",marginTop:"10px",
left: "12.01%",
right: "78.38%",
top: "24.64%",
bottom: "74.18%",

fontfamily: "Nunito Sans",
fontstyle: "normal",
fontweight: "700",
fontsize: "16px",
lineheight: "22px",

color: "#000000"
}}></TextComponent>
    <div style={{display:"flex",flexDirection:"row",gap:"15px",marginLeft:"100px",marginBottom:"35px",marginTop:"35px"}}>
    <TextComponent label="FN" styleProps={{display:"flex",flexDirection:"row",marginTop:"15px"  ,padding:"px",gap:"25px",marginLeft:"1PX",
fontfamily: "Nunito Sans",
fontstyle: "normal",
fontweight: "700",
fontsize: "16px",
lineheight: "12px",
marginBottom:"1PX",
/* identical to box height */


color: "#000000"}}/>
{/* <div> */}
 <Time></Time> <Time/> <Time></Time>  <TextComponent label="to" styleProps={{
left: "36.99%",
right: "61.89%",
top: "27.42%",
bottom: "72.61%",

fontfamily: "Nunito Sans",
fontstyle: "normal",
fontweight: "700",
fontsize: "16px",
lineheight: "22px",
marginBottom:"px",

color: "#000000"}}/>
 <Time></Time><Time></Time><Time></Time>

</div>

<div>
    <T/>
</div>
<div>

</div>
<div>
{/* <TextComponent label="AN" styleProps={{display:"flex",flexDirection:"row",marginTop:"1px"  ,padding:"12px",marginBottom:"4px",
fontfamily: "Nunito Sans",
fontstyle: "normal",
fontweight: "700",
fontsize: "16px",
lineheight: "22px", */}

<TextComponent label="AN" styleProps={{display:"flex",flexDirection:"row",marginTop:"15px"  ,padding:"px",gap:"25px",marginLeft:"1PX",
fontfamily: "Nunito Sans",
fontstyle: "normal",
fontweight: "700",
fontsize: "16px",
lineheight: "12px",
marginBottom:"1PX",
/* identical to box height */


color: "#000000"}}/>



<div style={{display:"flex",flexDirection:"row",gap:"15px",marginLeft:"100px",marginBottom:"15px",marginTop:"px"}}>
<Time></Time> <Time/> <Time></Time>  <TextComponent label="to" styleProps={{
left: "36.99%",
right: "61.89%",
top: "27.42%",
bottom: "72.61%",

fontfamily: "Nunito Sans",
fontstyle: "normal",
fontweight: "700",
fontsize: "16px",
lineheight: "22px",
marginBottom:"px",

color: "#000000"
}}/>
 <Time></Time> <Time></Time><Time></Time>
</div>
<div style={{display:"flex",flexDirection:"row"}}/>
</div>
</div>
    <div style={{display:"flex",flexDirection:"row"}}>
    <TextComponent label="Subjects" styleProps={{paddingLeft:"16px",marginLeft:"9px"}}/>   
     
      </div>
    <TextComponent label="Labs" styleProps={{paddingLeft:"460px"}}/>
    
    
    <div style={{display:"flex",flexDirection:"row",padding:"16px 16px 8px 16px",gap:"45px",marginLeft:"5px",marginRight:"2px"}}><Dropdown/>
    
    <Dropdown/>
    </div>
    
<div>
<TextComponent label="Subject1" styleProps={{paddingLeft:"54px"}}/>
<Dropdown  style={{displayflex:"direction",
            boxSizing: "borderBox",
            width:"24px",
            display: "flex",
            flexDirection: "row",
            justifycontent: "center",
            alignitems: "center",
            marginRight:"55px",
            gap: "8px"}}
// value={formdata.subjects}
          value= {formdata.subjects.map(item=>item[0])}/>
          <Sub/>

          {/* Createsche.map(createsche => {
            return(
              <div className="subjects">
                {createsche .subjects } */}

              {/* </div>
            )
          }) */}
        
{/* <Sub value={formdata.subjects}
          value= {formdata.subjects.map(item=>item[0])}
          /> */}
          {/* <div style={{
left: "26.11%",
right: "44.51%",
top: "42.97%",
bottom: "54.04%",

background: "#F2F2F2",
borderradius: "5px"}}>
  <Box style={{
left: "27%",
right: "47.03%",
top: "43.88%",
bottom: "55.11%",

fontfamily: "Nunito Sans",
fontstyle: "normal",
fontweight: "400",
fontsize: "16px",
lineheight: "22px",

color: "#ABA9AE"}}

</div>
        
          <Box>
            label
          </Box> */}
<TextComponent label="Subject2" styleProps={{paddingLeft:"54px"}}/>
<Dropdown style={{boxsizing: "border-box",

position: "absolute",
left: "12.29%",
right: "75.14%",
top: "42.97%",
bottom: "54.04%",

background: "#FFFFFF",
border: "1px solid #E5E5E5",
borderradius: "10px"}}
  // value={formdata.subjects}
          value= {formdata.subjects.map(item=>item[0])}/>
<Sub/>
<TextComponent label="Subject3" styleProps={{paddingLeft:"54px"}}/>
<Dropdown
 
          value= {formdata.subjects.map(item=>item[0])}/>

<Sub />
{/* // value={formdata.subjects}
//           value= {formdata.subjects.map(item=>item[0])}/> */}
<TextComponent label="Subject4" styleProps={{paddingLeft:"54px"}}/>
<Dropdown 
// value={formdata.subjects}
          value= {formdata.subjects.map(item=>item[0])}/>
<Sub/>
<TextComponent label="Subject5" styleProps={{paddingLeft:"54px"}}/>
<Dropdown  style={{width:"18px"}} 
// value={formdata.subjects}
          value= {formdata.subjects.map(item=>item[0])}/>
<Sub/>
<br></br>
<TextComponent label="Lab" styleProps={{paddingLeft:"54px"}}/>
<br></br>
<TextComponent label="Lab 1" styleProps={{paddingLeft:"54px"}}/>
<Dropdown  style={{width:"1px"}} 
          value={formdata.labs}/>
<Sub/>
<div>
<TextComponent label="Lab 2" styleProps={{paddingLeft:"54px"}}/>

<Dropdown  style={{width:"18px"}} 
          value={formdata.labs}/>
<Sub/>
</div>
</div>




    </Box>
   {/* </Box> */}
    </>
    </>
    
        )
}
export default Exam
