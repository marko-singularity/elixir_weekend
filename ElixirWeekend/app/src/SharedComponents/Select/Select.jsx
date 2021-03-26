import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MaterialSelect,
  makeStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { t } from "ttag";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 200,
    width: "100%",
  },
}));

const Select = (props) => {
  const classes = useStyles();
  return (
    <FormControl
      variant="filled"
      className={classes.formControl}
      style={props.style}
    >
      <InputLabel id={props.id}>{props.label}</InputLabel>
      <MaterialSelect
        id={props.id}
        name={props.id}
        defaultValue={props.defaultValue}
        variant="outlined"
        value={props.value || ""}
        onChange={(event) => {
          props.onChange({ id: event.target.name, value: event.target.value });
        }}
      >
        {props.data.map((item) => (
          <MenuItem key={item[props.valueField]} value={item[props.valueField]}>
            {t([item[props.valueLabel]]) !== undefined
              ? t([item[props.valueLabel]])
              : item[props.valueLabel]}
          </MenuItem>
        ))}
      </MaterialSelect>
    </FormControl>
  );
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  valueField: PropTypes.string.isRequired,
  valueLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
