import React from "react";
import { Table } from "reactstrap";
import Typography from '@mui/material/Typography';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import Button from '@mui/material/Button';

export default function App() {
  return (
    <div>
      <Typography sx={{ mb: 1.5, textAlign: 'left', backgroundColor: "#76a9f3", padding: '7px 7px' }} >
         <div className="row">
            <div className="col-12 col-md-10">
                <span style={{color: 'black', fontWeight: 'bold'}}>
                    Neccessary Information
                </span>
            </div>
            <div className="col-12 col-md-2">
              <SaveAsIcon />
            </div>
         </div>
      </Typography>
      <Table bordered>
        <tbody>
          <tr>
            <td>Sentence:</td>
            <td>This paragraph contains a lot of lines.</td>
          </tr>
          <tr>
            <td>Query:</td>
            <td>This paragraph contains a lot of lines.</td>
          </tr>
          <tr>
            <td>Choosed:</td>
            <td>This paragraph contains a lot of lines.</td>
          </tr>
        </tbody>
      </Table>
      <Typography sx={{ mb: 1.5, textAlign: 'right'}} >
        <Button variant="outlined" style={{textAlign: 'right'}}>Send Feedback</Button>
      </Typography>
    </div>
  );
}