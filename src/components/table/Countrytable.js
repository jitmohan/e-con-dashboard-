import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const Countrytable = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCountries, setFilterCountries] = useState([]);

  const getcountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      setCountries(response.data);
      setFilterCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      name: "country name",
      selector: (row) => row.name,
    },
    {
      name: "country Native name",
      selector: (row) => row.nativeName,
    },
    {
      name: "country capital",
      selector: (row) => row.capital,
    },
    {
      name: "country flag",
      selector: (row) => <img width={50} height={50} src={row.flag} alt="" />,
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          className="btn btn-sm btn-success"
          onClick={() => alert(row.alpha2Code)}
        >
          Success
        </button>
      ),
    },
  ];

  useEffect(() => {
    getcountries();
  }, []);

  useEffect(() => {
    const result = countries.filter((country) => {
      return country.name.toLowerCase().match(search.toLowerCase());
    });
    setFilterCountries(result);
  }, [search]);

  return (
    <div className="shadow p-3 mb-2 bg-white rounded table">
      <DataTable
        title="country list"
        columns={columns}
        data={filterCountries}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="300px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        actions={<button className="btn btn-sm btn-info">export</button>}
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="search here"
            className="w-25 form-control"
          />
        }
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Countrytable;
