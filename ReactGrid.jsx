import   React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {
  randomCreatedDate
} from '@mui/x-data-grid-generator';


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'date',
    headerName: 'Date',
    type:'date',
    width: 100,
    editable: true,
  },
  {
    field: 'technology',
    headerName: 'Technology',
    width: 150,
    editable: true,
  },
  {
    field: 'technologyAcronyms',
    headerName: 'TechnologyAcronyms',
    width: 200,
    editable: true,
  },
  {
    field: 'sector',
    headerName: 'Sector',
    width: 150,
    editable: true,
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 150,
    editable: true,
  },
  {
    field: 'subcategory',
    headerName: 'SubCategory',
    width: 150,
    editable: true,
  },
  {
    field: 'websiteUrl',
    headerName: 'WebbsiteUrl',
    width: 200,
    type:'email',
    editable: true,
  },
  {
    field: 'alternateUrl',
    headerName: 'AlternateUrl',
    width: 200,
    type:'email',
    editable: true,
  },
  
];

const rows = [
  { id: 1, date: randomCreatedDate(), technology: 'HubSpot', technologyAcronyms: 'HubSpot',sector:'Agriculture',category:'sales',subcategory:'CRM',websiteUrl:'www.compny1.com',alternateUrl:'www.compny1.com'  },

  { id: 2, date: randomCreatedDate(), technology: 'Quickbook', technologyAcronyms: 'HubSpot',sector:'Basic metal production',category:'Marketing',subcategory:'Sales Comensation',websiteUrl:'www.compny2.com',alternateUrl:'www.compny2.com'  },
  
  { id: 3, date: randomCreatedDate(), technology: 'mailchip', technologyAcronyms: 'HubSpot',sector:'chemical industries',category:'Analytics',subcategory:'Audience Intelligence',websiteUrl:'www.compny3.com',alternateUrl:'www.compny3.com'  },
  
  { id: 4, date: randomCreatedDate(), technology: 'jira', technologyAcronyms: 'HubSpot',sector:'Commerce',category:'Artificial Intelligencce',subcategory:'Book Markteting',websiteUrl:'www.compny4.com',alternateUrl:'www.compny4.com'  },
  
  { id: 5, date: randomCreatedDate(), technology: 'HubSpot', technologyAcronyms: 'HubSpot',sector:'Construcion',category:'AR/VR',subcategory:'CRM',websiteUrl:'www.compny5.com',alternateUrl:'www.compny5.com'  },
  
  { id: 6, date: randomCreatedDate(), technology: 'mailchip', technologyAcronyms: 'HubSpot',sector:'Education',category:'sales',subcategory:'Sales Comensation',websiteUrl:'www.compny6.com',alternateUrl:'www.compny6.com'  },
  
  { id: 7, date: randomCreatedDate(), technology: 'jira', technologyAcronyms: 'HubSpot',sector:'Financial services',category:'Marketing',subcategory:'Audience Intelligence',websiteUrl:'www.compny7.com',alternateUrl:'www.compny7.com'  },
  
  { id: 8, date: randomCreatedDate(), technology: 'Quickbook', technologyAcronyms: 'HubSpot',sector:'Agriculture',category:'Analytics',subcategory:'Book Markteting',websiteUrl:'www.compny8.com',alternateUrl:'www.compny8.com'  },
  
  { id: 9, date: randomCreatedDate(), technology: 'HubSpot', technologyAcronyms: 'HubSpot',sector:'Basic metal production',category:'Artificial Intelligencce',subcategory:'CRM',websiteUrl:'www.compny9.com',alternateUrl:'www.compny9.com'  },
  
];

export default function ReactGrid() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
