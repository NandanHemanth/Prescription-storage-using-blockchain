import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Block from "./block";
import Chain from "./link";


const useStyle = makeStyles((theme) => ({
  root: {},
  blockchain: {
    padding: 5,
  },
}));

function BlockChainScreen() {
  const classes = useStyle();

  const [blocks, setblocks] = useState([]);
  const [search, setSearch] = useState({doc_name:null,patient:null,dlabel:null})

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/get_chain");
      const result = await response.json();
      if (result) setblocks(result.chain);
    };
    fetchData();
  }, []);

  // console.log(blocks.transaction);

  return (
    <>
      <Header />
      <br />
      <br />
      <h1>Prescription Blockchain</h1>
      <input type="text" style={{width:"200px", height:"40px", backgroundColor:"#152238", outlineColor:"#ffffff", color:"#4f5384", position:"relative", padding:"0.5px", left:"20px", top: "200px"}} className="form-control"  required placeholder="Doctor name" value={search.doc_name } onChange={ (e) => setSearch({ ...search, doc_name: e.target.value }) } />
      <br></br>
      <input type="text" style={{width:"200px", height:"40px", backgroundColor:"#152238", outlineColor:"#ffffff", color:"#4f5384",position:"relative",padding:"0.5px",left:"20px", top: "225px"}} id="hello" className="form-control" required placeholder="Patient name" value={search.patient } onChange={ (e) => setSearch({ ...search, patient: e.target.value }) } />
      <br />
      <input type="text" style={{width:"200px", height:"40px", backgroundColor:"#152238", outlineColor:"#ffffff", color:"#4f5384", position:"relative", padding:"0.5px",left:"20px", top: "250px"}} id="hello" className="form-control" required placeholder="Doc Field" value={search.dlabel } onChange={ (e) => setSearch({ ...search, dlabel: e.target.value }) } />
      
      <Container>
        
        <Grid
          className={classes.blockchain}
          container
          spacing={5}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {blocks.map((block) => {return  (
    ( (search.doc_name==='' || search.doc_name===null) || (block && block.transactions && block.transactions[0] && block.transactions[0].DoctorID.includes(search.doc_name)))
    &&
    ( (search.patient==='' || search.patient===null) || (block && block.transactions && block.transactions[0] && block.transactions[0].PatientID.includes(search.patient)))
    &&
    ( (search.dlabel==='' || search.dlabel===null) || (block && block.transactions && block.transactions[0] && block.transactions[0].Label.includes(search.dlabel)))

    )
    ?(
            <>{console.log("a",block.transactions[0])}
              <Block key={block.index} block={block} /><Chain key={block.hash} />
            </>
          ):null})}
        </Grid>
      </Container>
    </>
  );
}

export default BlockChainScreen;
  