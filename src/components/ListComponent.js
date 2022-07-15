import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Divider from '@mui/material/Divider';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import TabComponent from './TabComponent';
import TableComponent from './TableComponent';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
function ListComponent() {
  return (
    <div  className="container col-12 col-md-12">
        <h6 className='welcome-text'>Welcome,</h6>
        <div className='row mt-3'>
            <div className='col-12 col-md-5'>
                <h4 style={{textAlign: 'left'}}>AI Clinical Evaluation Dashboard</h4>
            </div>
            <div className='col-12 col-md-3'></div>
            <div className='col-12 col-md-4'>
                <br />
                <Typography sx={{textAlign: 'right' }}>
                    <Button variant="contained">Assign to Researcher</Button>
                </Typography>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-12 col-md-7'>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <div className='row'>
                            <div className='col-12 col-md-10'>
                                <Typography sx={{ mb: 1.5, textAlign: 'left' }}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                            defaultChecked
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />
                                        }
                                        label="This study shows what"
                                    />
                                    </Typography>
                              </div>
                              <div className='col-12 col-md-2'>
                                    <span className='mr-auto'>
                                        <SaveAsIcon />
                                        <DeleteOutlinedIcon />
                                    </span>
                              </div> 
                            </div>
                            <div className='row'>
                                <Typography sx={{textAlign: 'right' }}>
                                    <Button variant="contained">Submit</Button>
                                </Typography> 
                            </div>
                    </CardContent>
                </Card>
            </div>
            <div className='col-12 col-md-5'>
                <Card sx={{ minWidth: 275, paddingBottom: '52px' }}>
                    <CardContent>
                          <div className='row'>
                            <div className='col-12 col-md-8'>
                                <Typography sx={{ mb: 1.5, textAlign: 'left', color: 'red' }}>
                                    <CancelIcon />
                                </Typography>  
                            </div>
                            <div className='col-12 col-md-4'>
                              <span className='' >
                                  Last 24 Hours
                              </span> 
                            </div>
                          </div>
                          <Divider />
                    </CardContent>
                </Card>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col-12 col-md-12'>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ mb: 1.5, textAlign: 'left', color: "#76a9f3", fontWeight: 'bold' }} >
                           Query Entered:
                        </Typography>
                        <Typography sx={{ mb: 1.5, textAlign: 'justify', fontFamily: 'Raleway, sans-serif'}} >
                          This paragraph contains a lot of lines in the source code, but the browser ignores it.This paragraph contains a lot of lines in the source code, but the browser ignores it.This paragraph contains a lot of lines in the source code, but the browser ignores it.This paragraph contains a lot of lines in the source code, but the browser ignores it.This paragraph contains a lot of lines in the source code, but the browser ignores it.This paragraph contains a lot of lines in the source code, but the browser ignores it.This paragraph contains a lot of lines in the source code, but the browser ignores it.This paragraph contains a lot of lines in the source code, but the browser ignores it.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
        <div className='mt-3' style={{display: 'flex'}}>
          <KeyboardBackspaceIcon style={{backgroundColor: '#76a9f3'}}/>
          <span style={{padding: '0px 9px'}}> Back</span>                             
        </div>
        <div className='row mt-3'>
            <div className='col-12 col-md-6'>
               <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <div className='searchBar-wrap'>
                            <SearchIcon className='searchBar-icon'  style={{color: '#76a9f3'}}/>
                            <input
                            type='text'
                            placeholder=''
                            />
                        </div>
                        <div className="search-bar-para mt-2">
                            <h6>THE COVID-19 PANADEMIC</h6>
                        </div>
                        <Typography sx={{ mb: 1.5, textAlign: 'left', color: "#76a9f3", fontFamily: 'Raleway, sans-serif' }} >
                           This paragraph contains a lot of lines in the source code.
                        </Typography>
                        <Typography sx={{ mb: 1.5, textAlign: 'left', fontSize: '14px', fontFamily: 'Raleway, sans-serif' }} >
                           This paragraph contains a lot of lines in the source code.
                        </Typography>
                        <div className="search-bar-para mt-2">
                            <h6>ABSTRACT</h6>
                        </div>
                        <Typography sx={{ mb: 1.5, textAlign: 'left', color: "#76a9f3", fontFamily: 'Raleway, sans-serif' }} >
                           This paragraph contains a lot of lines in the source code.
                        </Typography>
                        <Typography sx={{ mb: 1.5, textAlign: 'justify', fontFamily: 'Raleway, sans-serif'}} >
                           This paragraph contains a lot of lines in the source code, but the browser ignores it.This paragraph contains a lot of lines in the source code, but the browser ignores it.This paragraph contains a lot of lines in the source code, but the browser ignores it.This paragraph contains a lot of lines in the source code, but the browser ignores it.
                        </Typography>
                        <Typography sx={{ mb: 1.5, textAlign: 'justify', marginTop: '5px', fontFamily: 'Raleway, sans-serif'}} >
                           This paragraph contains a lot of lines in the source code, but the browser ignores it.This paragraph contains a lot of lines in the source code, but the browser ignores it.This paragraph contains a lot of lines in the source code, but the browser ignores it.This paragraph contains a lot of lines in the source code, but the browser ignores it.
                        </Typography>
                        <Typography sx={{ mb: 1.5, textAlign: 'right', marginTop: '20px', color: "#76a9f3", fontFamily: 'Raleway, sans-serif'}} >
                           <p>Full Text <ArrowForwardIosIcon /></p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className='col-12 col-md-6'>
              <Card sx={{ minWidth: 275, paddingBottom: "55px", display: 'flex' }}>
                <CardContent>
                   <Typography sx={{ mb: 1.5, textAlign: 'left', color: "#76a9f3" }} >
                      <ErrorOutlineIcon />  <span style={{color: 'black', fontWeight: 'bold'}}>INPUT INFORMATION</span>
                   </Typography>
                   <TabComponent />
                   <TableComponent />
                </CardContent>
              </Card>  
            </div>
        </div>
    </div>
    
  )
}

export default ListComponent