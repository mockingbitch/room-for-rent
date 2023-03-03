import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Checkbox from '@mui/material/Checkbox';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
        personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}

export default function MultiSelect(props) {
    const theme = useTheme();
    const [dataName, setDataName] = React.useState([]);
    const arrObj = props.arrObj;
    const [data, setData] = React.useState([]);
    // const data = arrObj.map(obj => obj.name_vi);
    // console.log(data);

    const handleChange = (event) => {
        const {
        target: { value },
        } = event;
        setDataName(
        // On autofill we get a stringified value.
        typeof value[0].name_vi === 'string' ? value[0].name_vi.split(',') : value[0].name_vi,
        );
        let newData = data.concat(event.target.value[0].id);
        setData(newData);
        props.handleOnChange(data)
    };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={dataName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                {arrObj.map((item) => (
                    <MenuItem
                        key={item.id}
                        value={item}
                        // style={getStyles(name, personName, theme)}
                    >
                    <Checkbox checked={dataName.indexOf(item.id) > -1} />
                    {item.name_vi}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
        </div>
    );
}