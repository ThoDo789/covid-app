import { Grid } from "@material-ui/core";
import React from "react";
import HighlightCard from "./HighlightCard";
export default function Highlight({ report }) {
  const data = report && report.length ? report[report.length - 1] : [];
  console.log(data.Confirmed);
  const summary = [
    {
      title: "Số ca nhiễm",
      count: data.Confirmed,
      type: "confirmed",
    },

    {
      title: "Số ca hồi phục",
      count: data.Recovered,
      type: "recovered",
    },
    {
      title: "Số ca tử vong",
      count: data.Deaths,
      type: "deaths",
    },
  ]; //list value
  return (
    <Grid container spacing={3}>
      {summary.map((item, key) => (
        <HighlightCard
          title={item.title}
          count={item.count}
          type={item.type}
          key={key}
        />
      ))}
    </Grid>
  );
}
