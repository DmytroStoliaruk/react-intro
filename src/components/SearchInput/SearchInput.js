import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

function SearchInput() {
  return (
    <TextField
      sx={{
        marginRight: '5%', 
        '& .MuiOutlinedInput-root': {
          borderRadius: '20px', 
          backgroundColor: '#fff',
          height: '30px',
          width: '200px'
        }
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchInput;
