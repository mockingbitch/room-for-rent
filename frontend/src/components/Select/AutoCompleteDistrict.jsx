import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const AutoCompleteDistrict = (props) => {
    const { options } = props;
    const [data, setData] = React.useState();
    React.useEffect(() => {
        options.forEach(element => {
            element.value = element.code
            element.label = element.name
        });
    }, [options])

    const handleOnChange = (item) => {
        setData(item);
        props.passData(item)
    }
    return (
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={options}
                sx={{ width: 300 }}
                onChange={(event, value) => handleOnChange(value)}
                renderInput={(params) => <TextField name='data' onChange={handleOnChange}  {...params} label="District"/>}
            />
        </>
    )
}

export default AutoCompleteDistrict