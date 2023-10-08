import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { Dispatch } from 'redux';
import { getFormUsers } from '../Redux/users/users.actions';
import { IFormUser } from '../Redux/constents';
import Avatar from '../Components/Avatar';

const SubmissionTablePage: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { loading, users } = useSelector((store: RootState) => store.formUsersManager);

  useEffect(() => {
    dispatch(getFormUsers());
  }, []);

  const [search, setSearch] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const filteredUsers: IFormUser[] = users.filter((user: IFormUser) => {
    const matchSearch = user.name.toLowerCase().includes(search.toLowerCase());

    if (startDate && endDate) {
      const submissionDate = new Date(user.createdAt || 0);
      const rangeStart = new Date(startDate);
      const rangeEnd = new Date(endDate);

      return matchSearch && submissionDate >= rangeStart && submissionDate <= rangeEnd;
    }

    return matchSearch;
  });


  return (loading ?
    <div className="flex justify-center items-center h-screen">
      <div className="h-10 w-10" role="status">
        <span>Loading...</span>
      </div>
    </div> :
    <div className="container mx-auto p-4">
      <h1 className="text-center mt-10 text-3xl font-bold">SubmissionTablePage Page</h1>
      <div className="mx-auto mt-5 p-2 bg-white shadow-md rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="search">
            Search By Name
          </label>
          <input
            id='search'
            type="text"
            placeholder="Search by Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mb-2 p-2 rounded-md"
          />
        </div>


        {/* Date Range Picker */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="mb-4">
            <label className=" text-gray-700 font-bold mr-2" htmlFor="start_date">
              Starting range:
            </label>
            <input
              id='start_date'
              max={endDate}
              type="date"
              placeholder="Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-fit p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className=" text-gray-700 font-bold mr-2" htmlFor="end_date">
              Ending range:
            </label>
            <input
              id='end_date'
              min={startDate}
              type="date"
              placeholder="End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-fit p-2 rounded-md"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">S. No</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Address1</th>
                <th className="border px-4 py-2">Address2</th>
                <th className="border px-4 py-2">Phone</th>
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Country</th>
                <th className="border px-4 py-2">State</th>
                <th className="border px-4 py-2">City</th>
                <th className="border px-4 py-2">Pin code</th>
                <th className="border px-4 py-2">Selected Options</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={user._id}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.address1}</td>
                  <td className="border px-4 py-2">{user.address2}</td>
                  <td className="border px-4 py-2">{user.phonenum}</td>
                  <td className="border px-4 py-2">
                   {
                    user.files.map(el => <Avatar imageUrl={el} />)
                   }
                  </td>
                  <td className="border px-4 py-2">{user.country}</td>
                  <td className="border px-4 py-2">{user.state}</td>
                  <td className="border px-4 py-2">{user.city}</td>
                  <td className="border px-4 py-2">{user.pincode}</td>
                  <td className="border px-4 py-2">{user.selectedOptions.join(",")}</td>
                  {/* <td className="border px-4 py-2">
                     Add any additional options here 
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubmissionTablePage;
