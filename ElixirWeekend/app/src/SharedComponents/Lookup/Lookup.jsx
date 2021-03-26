import React, { useEffect, useState } from 'react';
import { Modal, Grid, Icon, IconButton } from '@material-ui/core';
import Table from '../Table/Table';
import { Close } from '@material-ui/icons';

const Lookup = (props) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => props.onChangePage(0), []);
  const [selectedRow, setSelectedRow] = useState({});
  const rowStyle = (row) => ({
    backgroundColor:
      row.tableData.id === selectedRow
        ? '#6698fa'
        : row.tableData.id % 2 === 0
        ? '#dee2e6'
        : '#FFF',
    height: '47.2',
  });

  return (
    <Modal
      open={props.open}
      onClose={props.toggle}
      style={{ overflowY: 'auto' }}
      disableBackdropClick={false}
      hideBackdrop={false}
    >
      <Grid
        container
        direction="column"
        style={{ alignItems: 'center', height: '100%' }}
        onClick={props.toggle}
      >
        <Table
          title={props.title}
          columns={props.columns}
          data={props.data ? JSON.parse(JSON.stringify(props.data)) : []}
          page={props.page}
          pageSize={props.pageSize}
          totalCount={props.totalCount}
          onChangePage={(pageNumber) => {
            props.onChangePage(pageNumber, props.filters);
          }}
          onSearchChange={props.onSearchChange}
          options={{
            maxBodyHeight: '500px',
            showTitle: true,
            toolbar: true,
            search: true,
            debounceInterval: 500,
            rowStyle,
          }}
          style={{ width: '40%' }}
          onRowClick={(event, selectedRow) => {
            setSelectedRow(selectedRow.tableData.id);
            event.target.ondblclick = () => props.onDoubleClick(selectedRow);
          }}
        />
      </Grid>
    </Modal>
  );
};

export default Lookup;
