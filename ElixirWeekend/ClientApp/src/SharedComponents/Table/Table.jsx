import React from "react";
import MaterialTable from "material-table";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { t } from "ttag";
import {
  Add,
  ChevronLeft,
  ChevronRight,
  LastPage,
  FirstPage,
  FilterList,
  Search,
  Edit,
  ArrowDownward,
  Clear,
  Save,
  Check,
} from "@material-ui/icons";

const Table = (props) => {
  const tableTheme = createMuiTheme({
    overrides: {
      MuiTableRow: {
        hover: {
          "&:hover": {
            backgroundColor: "rgba(33, 150, 243, 0.25) !important",
          },
        },
      },
    },
  });

  const { options: propsOptions, ...rest } = { ...props };
  const options = {
    search: true,
    showTitle: true,
    toolbar: false,
    maxBodyHeight: "70vh",
    doubleHorizontalScroll: true,
    headerStyle: { fontWeight: "bold" },
    rowStyle: (rowData, index) => ({
      backgroundColor: index % 2 === 0 ? "#EEE" : "#FFF",
    }),
    height: "47.2",
    ...propsOptions,
  };
  return (
    <ThemeProvider theme={tableTheme}>
      <MaterialTable
        options={options}
        {...rest}
        localization={{
          pagination: {
            labelDisplayedRows: t`labelDisplayedRows`,
            labelRowsSelect: t`labelRowsSelect`,
            nextTooltip: t`nextTooltip`,
            previousTooltip: t`previousTooltip`,
            firstTooltip: t`firstTooltip`,
            lastTooltip: t`lastTooltip`,
          },
          toolbar: {
            nRowsSelected: t`nRowsSelected`,
            searchTooltip: t`searchTooltip`,
            searchPlaceholder: t`searchPlaceholder`,
          },
          header: {
            actions: t`actions`,
          },
          body: {
            emptyDataSourceMessage: t`emptyDataSourceMessage`,
            filterRow: {
              filterTooltip: t`filterTooltip`,
            },
          },
        }}
        icons={{
          FirstPage: FirstPage,
          LastPage: LastPage,
          NextPage: ChevronRight,
          PreviousPage: ChevronLeft,
          Filter: Search,
          Edit: Edit,
          FilterList: FilterList,
          Search: Search,
          ResetSearch: Clear,
          SortArrow: ArrowDownward,
          Save: Save,
          Clear: Clear,
          Check: Check,
          Add: Add,
        }}
      />
    </ThemeProvider>
  );
};

export default Table;
