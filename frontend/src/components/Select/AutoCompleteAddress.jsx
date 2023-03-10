import React, { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { GetDistrictService, GetProvinceService, GetWardService } from '../../services/AddressService';
import swal from 'sweetalert';

const AutoCompleteAddress = (props) => {
    const [data, setData] = useState(
        {
            province: {
                label: '',
                value: '',
            },
            district: {
                label: '',
                value: '',
            },
            ward: {
                label: '',
                value: '',
            }
        }
    );
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [message, setMessage] = useState([]);
    const [value, setValue] = useState([]);

    React.useEffect(() => {
        getProvinces()
    }, [])

    const getProvinces = async () => {
        try {
            let res = await GetProvinceService()
            if (res.error === 0) {
                setProvinces(res.provinces);
            }
        } catch (error) {
            setMessage('API Error: ' + error.message)
            console.log(message);
        }
    }

    const handleOnChangeProvince = async (item) => {
        setData({...data, province: item, district: {}, ward: {}})
        try {
            let res = await GetDistrictService(item.code)
            console.log(res);
            if (res && res.data.error === 0) {
                setDistricts(res.data.districts);
                console.log(res.data.districts);
            } else {
                swal({
                    title: "Failed!",
                    text: "Something went wrong!",
                    icon: "warning",
                    button: "Ah shiet!",
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleOnChangeDistrict = async (item) => {
        setData({...data, district: item, ward: {}})
        try {
            let res = await GetWardService(item.code)
            if (res && res.data.error === 0) {
                setWards(res.data.wards);
            } else {
                swal({
                    title: "Failed!",
                    text: "Something went wrong!",
                    icon: "warning",
                    button: "Ah shiet!",
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleOnChangeWard = async (item) => {
        console.log(item);
        setData({...data, ward: item},
            props.passData(data)
        )
    }

    return (
        <>
            <div className="row">
                <div className="form-group mt-4 col-12">
                    <Autocomplete
                        disablePortal
                        disableClearable
                        id="combo-box-demo"
                        options={provinces}
                        sx={{ width: 300 }}
                        value={data.province.label}
                        onChange={(event, value) => handleOnChangeProvince(value)}
                        renderInput={(params) => <TextField name='data' onChange={handleOnChangeProvince}  {...params} label="Province"/>}
                    />
                </div>
                <div className="form-group mt-4 col-12">
                    <Autocomplete
                        disablePortal
                        disableClearable
                        id="combo-box-demo"
                        options={districts}
                        sx={{ width: 300 }}
                        value={data.district.label}
                        onChange={(event, value) => handleOnChangeDistrict(value)}
                        renderInput={(params) => <TextField name='data' onChange={handleOnChangeDistrict}  {...params} label="District"/>}
                    />
                </div>
                <div className="form-group mt-4 col-12">
                    <Autocomplete
                        disablePortal
                        disableClearable
                        id="combo-box-demo"
                        options={wards}
                        sx={{ width: 300 }}
                        value={data.ward.label}
                        onChange={(event, value) => handleOnChangeWard(value)}
                        renderInput={(params) => <TextField name='data' onChange={handleOnChangeWard}  {...params} label="Ward" />}
                    />
                </div>
            </div>
        </>
    )
}

export default AutoCompleteAddress