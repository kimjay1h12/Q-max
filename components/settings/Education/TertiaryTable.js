import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "institution",
    headerName: "Institution",
    width: 200,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "course",
    headerName: "Course",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "degree",
    headerName: "Degree",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "class",
    headerName: "Class",
    width: 120,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "location",
    headerName: "Location",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "startDate",
    headerName: "Start Date",
    width: 100,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "endDate",
    headerName: "End Date",
    width: 100,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    headerClassName: "super-app-theme--header",
  },
];

const rows = [
  {
    id: 1,
    institution: "University A",
    course: "Computer Science",
    degree: "Bachelor",
    class: "CS101",
    location: "City A",
    startDate: "2022-01-01",
    endDate: "2022-05-31",
    status: "Active",
  },
  {
    id: 2,
    institution: "College B",
    course: "Electrical Engineering",
    degree: "Master",
    class: "EE201",
    location: "City B",
    startDate: "2021-09-01",
    endDate: "2022-04-30",
    status: "Inactive",
  },
  {
    id: 3,
    institution: "School C",
    course: "Mathematics",
    degree: "Bachelor",
    class: "MAT101",
    location: "City C",
    startDate: "2022-03-15",
    endDate: "2022-11-30",
    status: "Active",
  },
  // Add more dummy data as needed
];

const useStyles = makeStyles({
  header: {
    backgroundColor: "#CFCFCF",
  },
});

export default function TertiaryTable() {
  const classes = useStyles();

  return (
    <div style={{ height: 200, width: "100%", overflowX: "hidden" }}>
      <DataGrid
        sx={{
          ".MuiDataGrid-columnSeparator": {
            display: "none",
          },
          ".MuiDataGrid-rowSeparator": {
            display: "none",
          },
        }}
        //   style={}
        rows={rows}
        columns={columns}
        pageSize={2}
        checkboxSelection
        components={{
          header: {
            cell: (props) => (
              <div className={classes.header}>
                {props.column.render("Header")}
              </div>
            ),
          },
        }}
      />
    </div>
  );
}
