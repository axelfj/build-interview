import React, { useEffect, useState } from "react";

import Button from "../button/button";
import Card  from "../card/card";
import { RetrieveData } from "../../api/api";
import { isTemplateTail } from "typescript";

const Body = () => {
  const [data, setData]: any = useState(null);
  const [sortedData, setSortedData]: any = useState(null);
  const [isMaxSelected, setIsMaxSelected]: any = useState(true);

  useEffect(() => {
      RetrieveData().then((res) => {
          setData(Object
            .values(res)
            .filter((item: any) => (item?.All.country ? item : null)));
    });
  }, [])

  useEffect(() => {
      if (data){
        setSortedData(
        data.sort((x: any, y: any) => (x.All.confirmed > y.All.confirmed ? -1 : 1))
        );
      }
  }, [data]);

  useEffect(() => {
  }, [sortedData]);

  const maxCases = () => {
    let topFive;
    if (data && data.length){
        topFive = (data.slice(0, 5).map((item: any) => item["All"]["country"]));
    }
    setIsMaxSelected(!isMaxSelected);
    return topFive;
  }

  const minCases = () => {
    let minCases;
    if (sortedData && sortedData.length) {
      minCases = sortedData.reverse()
        .slice(0, 5)
        .map((item: any) => item["All"]["country"]);
    }
    setIsMaxSelected(!isMaxSelected);
    return minCases;
  }

  return (
      <>
    <ul>
      {data && data.length ? (
        data.slice(0, 5).map((item: any, index: number) => (
        <Card indexValue={index} title={item["All"]["country"]}></Card>
        ))
      ) : (
        <ul></ul>
      )}
    </ul>
    <Button action={isMaxSelected ? maxCases : minCases}/>
    </>

  );
};


export default Body;