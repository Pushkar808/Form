import React, { useEffect, useState } from 'react'
import InputField from './inputField'

export default function Form() {
    const [data, setData] = useState({
        Name: "",
        Address: "",
        MobileNo: "",
        Pin: ""
    });
    const [hideForm, sethideForm] = useState(false)
    const submitData = () => {
        console.log(data)
        sethideForm(true);
    }
    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <>
            {!hideForm &&
                <form>
                    <InputField label={`Full Name *`} data={data} setData={setData}
                        onChange={$ => setData({ ...data, Name: $ })} />
                    <InputField label={`Address *`}
                        onChange={$ => setData({ ...data, Address: $ })} />
                    <InputField label={`MobileNo: *`}
                        onChange={$ => setData({ ...data, MobileNo: $ })} />
                    <InputField label={`Pin *`}
                        onChange={$ => setData({ ...data, Pin: $ })} />
                    <button type='button' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => submitData()}>Submit</button>
                </form>
            }
            {
                hideForm &&
                <>
                    <h1>Please Find Below the Submitted Data</h1>
                    <div className='text-xl'>
                        <p>Name : {data?.Name}</p>
                        <p>Address : {data?.Address}</p>
                        <p>MobileNo : {data?.MobileNo}</p>
                        <p>Pin : {data?.Pin}</p>

                    </div>
                    <button type='button' className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => sethideForm(false)}>Reset</button>
                </>
            }

        </>
    )
}
