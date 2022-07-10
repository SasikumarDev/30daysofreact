import React, { useState } from "react";
import isEmail from "validator/lib/isEmail";

export default function Test() {
    const [count, setCount] = useState(0);

    const addOne = () => {
        setCount(count + 1);
    }

    const minusOne = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const submitedData = (data) => {
        console.log(data);
    }

    return (
        <>
            <Buttons addOne={addOne} minusOne={minusOne} count={count} />
            <Users fname="sasikumar" lname="Muthusamy" email="sasi@gmail.com" userSkills={['HTML', 'CSS', 'Javascript', 'Python']} submitfrom={submitedData} />
        </>
    )
}

function Buttons(props) {
    const { addOne, minusOne, count } = props;
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', paddingBottom: '1rem' }} >
            <p>Count : {count}</p>
            <buttons onClick={addOne}
                style={{ display: 'flex', alignItems: 'center', padding: '1rem', fontSize: '1rem', fontWeight: 'bolder', cursor: 'pointer', background: 'white', border: '1px solid', borderRadius: '0.3rem' }} >+</buttons>
            <buttons onClick={minusOne}
                style={{ display: 'flex', alignItems: 'center', padding: '1rem', fontSize: '1rem', fontWeight: 'bolder', cursor: 'pointer', background: 'white', border: '1px solid', borderRadius: '0.3rem' }} disabled>-</buttons>
        </div>
    )
}

const techSkills = ['HTML', 'CSS', 'Javascript', 'Python', 'Java', 'C#'];

function Users(props) {
    const { fname, lname, email, skills, submitfrom } = props;
    const init = {
        Firstname: fname ?? '',
        Lastname: lname ?? '',
        Email: email ?? '',
        userSkills: skills,
        gender: '',
        touched: {},
        errors: {}
    }
    const [formData, setData] = useState(init);

    const onChange = (e) => {
        var { name, value } = e.target;
        setData({ ...formData, [name]: value })
    }

    const onChangeMultipleSelect = (e) => {
        var { name, selectedOptions } = e.target;
        const val = Array.from(selectedOptions, option => option.value);
        setData({ ...formData, [name]: val })
    }

    const onSubmit = e => {
        e.preventDefault();
        submitfrom(formData);
    }

    const onBlur = (e) => {
        const { name } = e.target;
        setData({ ...formData, touched: { ...formData.touched, [name]: true } });
        var errs = validation();
        if (Object.keys(errs).length > 0) {
            setData({ ...formData, errors: { ...errs } });
            console.log(formData);
        }
    }

    const validation = () => {
        var err = {};
        var arr = Array.from(Object.keys(formData.touched));
        arr.forEach(e => {
            var val = formData[e];
            if (val.length === 0) {
                err = { ...err, [e]: `${e} is Required` };
            }
            if (e === 'Email') {
                if (!isEmail(val)) {
                    err = { ...err, [e]: 'Invalid Email Format' };
                }
            }
        });
        return err;
    }

    const { Firstname, Lastname, Email, userSkills, gender } = formData;

    return (
        <form onSubmit={onSubmit} >
            <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}} >
            {
                Object.keys(formData.errors).map((v, i) => (
                    <small style={{ color: 'red' }} key={i} >
                        {formData.errors[v]}
                    </small>
                ))
            }
            </div>
            <input type="text" value={Firstname} name="Firstname" onChange={onChange} placeholder="first name" autoComplete="off" onBlur={onBlur} />
            <input type="text" value={Lastname} name="Lastname" onChange={onChange} placeholder="last name" autoComplete="off" onBlur={onBlur} />
            <input type="email" value={Email} name="Email" onChange={onChange} placeholder="Email" autoComplete="off" onBlur={onBlur} />
            <select name="userSkills" value={userSkills} onChange={onChangeMultipleSelect} multiple>
                {
                    techSkills.map((v, i) =>
                        <option key={i} value={v} >{v}</option>
                    )
                }
            </select>
            <div>
                <p>Gender</p>
                <div>
                    <input
                        type='radio'
                        id='female'
                        name='gender'
                        value='Female'
                        onChange={onChange}
                        checked={gender === 'Female'}
                    />
                    <label htmlFor='female'>Female</label>
                </div>
                <div>
                    <input
                        id='male'
                        type='radio'
                        name='gender'
                        value='Male'
                        onChange={onChange}
                        checked={gender === 'Male'}
                    />
                    <label htmlFor='male'>Male</label>
                </div>
                <div>
                    <input
                        id='other'
                        type='radio'
                        name='gender'
                        value='Other'
                        onChange={onChange}
                        checked={gender === 'Other'}
                    />
                    <label htmlFor='other'>Other</label>
                </div>
            </div>
            <button type="submit" >Submit</button>
        </form>
    )
}