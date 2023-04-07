import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function Month({ updateMonth, month }) {
  const updateMonthByEventValue = function (event) {
    updateMonth(event);
  };

  return (
    <div>
      <InputLabel id="demo-select-small">Select Month</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={month}
        label="Month"
        onChange={updateMonthByEventValue}
        style={{ width: 100 }}
      >
        <MenuItem value={-1}>
          <em>All</em>
        </MenuItem>
        <MenuItem value={1}>January</MenuItem>
        <MenuItem value={2}>February</MenuItem>
        <MenuItem value={3}>March</MenuItem>
        <MenuItem value={4}>April</MenuItem>
        <MenuItem value={5}>May</MenuItem>
        <MenuItem value={6}>June</MenuItem>
        <MenuItem value={7}>July</MenuItem>
        <MenuItem value={8}>August</MenuItem>
        <MenuItem value={9}>September</MenuItem>
        <MenuItem value={10}>October</MenuItem>
        <MenuItem value={11}>November</MenuItem>
        <MenuItem value={12}>December</MenuItem>
      </Select>
    </div>
  );
}
