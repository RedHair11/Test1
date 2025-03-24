import Imagefiller from 'react-image-filler'
function StudentProfile() {
    const Profile = {
        firstName: "Fermin",
        lastName: "Huerta",
        degree: "Computer Engineering",
        email: "Fermin_huerta1@dusty.tamiu.edu",
        phone: "(987)654-3210",
        schoolID: "A00123456"

    }

    return(
        <div >
            <h1 className="text-4xl text-center text-black mb-3">Student Profile</h1>
            <hr className='border-b-2 mb-5'/>
            <div className='text-xl'>
                <Imagefiller width={200} height={200} text='Hello guys' className='rounded-full mb-7'/>
                <div className='grid grid-cols-[2fr_8fr] gap-y-2.5 mt-3 text-neutral-700'>
                    <p className='font-medium'>Full Name:</p>
                    <p>{Profile.firstName + " "+Profile.lastName}</p>
                    <p className='font-medium'>Degree:</p>
                    <p>{Profile.degree}</p>
                    <p className='font-medium'>Email:</p>
                    <p>{Profile.email}</p>
                    <p className='font-medium'>Phone:</p>
                    <p>{Profile.phone}</p>
                    <p className='font-medium'>School ID:</p>
                    <p>{Profile.schoolID}</p>
                </div>
            </div>
        </div>
    
    );
    
}

export default StudentProfile