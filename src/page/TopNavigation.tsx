import React from "react";
import { Button } from '@material-ui/core';



interface ChartInfo {
    title : Title | null
    margin : Margin
}
interface Margin {
    r : number;
    l : number;
}
interface Title {
    text : string | null;
    size : number | null;
} 

let chartInfo : ChartInfo= {
    title : {
        text : 'already text',
        size : 10
    },
    margin : {
        r : 5,
        l : 5,
    }
}
export const TopNavigation = () => {
    return (
        <>
    <Button color="primary" onClick={() => {updateTitle({text : "new Data"})}}> text = new Data </Button>
    <Button color="primary" onClick={() => {updateTitle(null)}}> title = null </Button>
    <Button color="primary" onClick={() => {updateTitle({size : 30})}}> size = 30 </Button>
        <Button color="primary" onClick={() => {updateMargin({l : 10})}}> margin.ㅣ=10</Button>
        <Button color="primary" onClick={() => {updateMargin({l : 20, r: 20})}}> margin.l=10 margin.r=20 </Button>
        <Button color="primary" onClick={() => {console.log(chartInfo)}}> current Info </Button>
        </>
    );
}

function updateMargin(updateInfo : Partial<Margin>){
    chartInfo.margin = {...chartInfo.margin, ...updateInfo};
    console.log(chartInfo.margin)
    return ;
}
function updateTitle(updateInfo : Partial<Title> | null){
    console.log(updateInfo)
    if(updateInfo === null) {
        chartInfo.title = null; 
        return console.log(chartInfo);
    }
    chartInfo.title ={...chartInfo.title , ...updateInfo  } as Title
    console.log(chartInfo)
    return ;
}