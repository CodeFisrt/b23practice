import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
const EditProduct = () => {
  const paramObj = useParams();
  const [rowData, setRowData] = useState([
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false, month: 'October'  },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false, month: 'August'  },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true, month: 'February'  },
    { make: 'Fiat', model: '500', price: 15774, electric: false, month: 'January'  },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false, month: 'March'  },
    { make: 'Vauxhall', model: 'Corsa', price: 18460, electric: false, month: 'July'  },
    { make: 'Volvo', model: 'EX30', price: 33795, electric: true, month: 'September'  },
    { make: 'Mercedes', model: 'Maybach', price: 175720, electric: false, month: 'December'  },
    { make: 'Vauxhall', model: 'Astra', price: 25795, electric: false, month: 'April'  },
    { make: 'Fiat', model: 'Panda', price: 13724, electric: false, month: 'November'  },
    { make: 'Jaguar', model: 'I-PACE', price: 69425, electric: true, month: 'May'  },
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false, month: 'October'  },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false, month: 'August'  },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true, month: 'February'  },
    { make: 'Fiat', model: '500', price: 15774, electric: false, month: 'January'  },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false, month: 'March'  },
    { make: 'Vauxhall', model: 'Corsa', price: 18460, electric: false, month: 'July'  },
    { make: 'Volvo', model: 'EX30', price: 33795, electric: true, month: 'September'  },
    { make: 'Mercedes', model: 'Maybach', price: 175720, electric: false, month: 'December'  },
    { make: 'Vauxhall', model: 'Astra', price: 25795, electric: false, month: 'April'  },
    { make: 'Fiat', model: 'Panda', price: 13724, electric: false, month: 'November'  },
    { make: 'Jaguar', model: 'I-PACE', price: 69425, electric: true, month: 'May'  },
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true, month: 'June' },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false, month: 'October'  },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false, month: 'August'  },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true, month: 'February'  },
    { make: 'Fiat', model: '500', price: 15774, electric: false, month: 'January'  },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false, month: 'March'  },
    { make: 'Vauxhall', model: 'Corsa', price: 18460, electric: false, month: 'July'  },
    { make: 'Volvo', model: 'EX30', price: 33795, electric: true, month: 'September'  },
    { make: 'Mercedes', model: 'Maybach', price: 175720, electric: false, month: 'December'  },
    { make: 'Vauxhall', model: 'Astra', price: 25795, electric: false, month: 'April'  },
    { make: 'Fiat', model: 'Panda', price: 13724, electric: false, month: 'November'  },
    { make: 'Jaguar', model: 'I-PACE', price: 69425, electric: true, month: 'May'  }
  ]);
  const rowSelection = 'multiple';
  const pagination = true;
const paginationPageSize = 500;
const paginationPageSizeSelector = [200, 500, 1000];
  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "make" ,checkboxSelection: true  },
    { field: "model" ,editable: true},
    { field: "price", filter: true  },
    { field: "electric" },
  ]);
  return (
    <div>
      Edit Product - {JSON.stringify(paramObj)}
      <br />
      <div className="ag-theme-quartz"  style={{ height: 500 }}    >
        <AgGridReact 
        pagination={true}
        paginationPageSize={5}
        paginationPageSizeSelector={[5,10, 25, 50]}
        rowSelection={rowSelection} rowData={rowData} columnDefs={colDefs} />
      </div>
    </div>
  );
};

export default EditProduct;
