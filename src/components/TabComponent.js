import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Basic() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const parentStyles = {
    // remove this ---->  borderBottom: "3px solid gray",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Relevent Text Feedback" value="1" style={{color: '#76a9f3'}} />
            <Tab label="QA Validation" value="2" />
            <Tab label="Study" value="3" />
          </Tabs>
        </Box>
        <TabPanel value="1" style={{texAlign: 'justify', fontFamily: 'Raleway, sans-serif'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
        </TabPanel>
        <TabPanel value="2" style={{texAlign: 'justify', fontFamily: 'Raleway, sans-serif'}}>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.
        </TabPanel>
        <TabPanel value="3" style={{texAlign: 'justify', fontFamily: 'Raleway, sans-serif'}}>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </TabPanel>
      </TabContext>
    </Box>
  );
}

