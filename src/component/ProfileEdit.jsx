import axios from 'axios';
import React, { useState } from 'react'
import FormResponse from './FormResponse';
import ProfileDetailsSkeleton from '../skeletons/ProfileDetailsSkeleton';
export default function ProfileEdit({data}) {
    const [formData,setFormData]=useState(data?{...data}:{});
    const [status,setStatus]=useState(0);
    const classes="py-2 px-5 w-full h-14 border rounded-2xl    focus:border-sky-400 outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200";
    function handleChange(e)
    {
        const {name,value}=e.target;
        if(name==='pfp')
        {
            var file=e.target.files[0];
            file.arrayBuffer().then(buffer=>{
                var arr=new Uint8Array(buffer);
                console.log(arr);
                setFormData({...formData,[name]:[...arr]});
            })


        }
        else if(name==='phoneNumber')
        {
            if(value.toString().length<=10)
            setFormData({...formData,[name]:value.toString()});
            
        }
        else
        {
            setFormData({...formData,[name]:value});
        }
    }
    async function handleSubmit(e)
    {
        console.log(JSON.stringify(formData));
        e.preventDefault();
        axios.patch(`/users/${formData.id}`,formData).then(response=>{
                setStatus(response.status);
        }).catch(err=>{
            setStatus(500);
        });
    }
  return (
    <><h1 className='text-center text-2xl font-bold mb-5'>Edit Details</h1>
    {!data?<ProfileDetailsSkeleton/>:!status?<form onSubmit={(e)=>{handleSubmit(e);}} className='grid md:grid-cols-2 grid-cols-1 gap-4'>
        <div className='flex items-center'>
        <label htmlFor='fname' className='font-semibold '>First Name:</label>
        </div>
        <input type='text' value={formData.fname} className={classes} id='fname'  name='fname' onChange={(e)=>{handleChange(e)}}/>
        
        <div className='flex items-center'>
        <label htmlFor='lname' className='font-semibold '>Last Name:</label>
        </div>
        <input type='text' value={formData.lname} className={classes} id='lname'  name='lname' onChange={(e)=>{handleChange(e)}}/>

        <div className='flex items-center'>
        <label htmlFor='email' className='font-semibold '>Email:</label>
        </div>
        <input type='email' value={formData.email}className={classes}  id='email' name='email' onChange={(e)=>{handleChange(e)}}/>

        <div className='flex items-center'>
        <label htmlFor='phno' className='font-semibold '>Phone Number:</label>
        </div>
        <input type='number' value={formData.phoneNumber}className={classes}  id='phno' name='phoneNumber' onChange={(e)=>{handleChange(e)}}/>

        <div className='flex items-center'>
        <label htmlFor='dob' className='font-semibold '>D.O.B</label>
        </div>
        <input type='date' value={formData.dob} className={classes} maxLength={10}  id='dob' name='dob' onChange={(e)=>{handleChange(e)}}/>


        <div className='flex items-center'>
        <label htmlFor='location' className='font-semibold '>Location</label>
        </div>
        <input type='text' value={formData.location} className={classes} id='location' name='location' onChange={(e)=>{handleChange(e)}}/>
        
        <div className='flex items-center'>
        <label htmlFor='pfp' className='font-semibold '>Profile Image</label>
        </div>
        <input type='file'  id='pfp' name='pfp' onChange={(e)=>{handleChange(e)}}/>
        <div className='md:col-span-2  flex justify-center'>
              <input type="submit" value={"Submit"}  className=" cursor-pointer py-2 px-3 md:w-[30%] w-full h-14 border rounded-2xl font-semibold focus:border-sky-400 bg-sky-400 text-white outline-none focus:border-2 focus:shadow-md focus:shadow-sky-200" />
            </div>

    </form>:<FormResponse status={status}/>}</>
  )
}
