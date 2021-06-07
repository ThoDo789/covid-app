import React from "react";
import {
  FormControl,
  InputLabel,
  NativeSelect,
  FormHelperText,
} from "@material-ui/core";
export default function CountrySelector({ value, onHandleChange, countries }) {
  return (
    <FormControl>
      <InputLabel htmlFor="country-selector" shrink>
        Nation
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={onHandleChange}
        inputProps={{ name: "country", id: "country-selector" }}
      >
        {countries.map((country, key) => {
          return (
            <option key={key} value={country.ISO2.toLowerCase()}>
              {country.Country}
            </option>
          );
        })}
      </NativeSelect>
      <FormHelperText>Select Countries </FormHelperText>
    </FormControl>
  );
}
