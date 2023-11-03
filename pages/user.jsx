import React, { useState, useContext } from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../data/data.js";
import { BiSortDown, BiSortUp } from "react-icons/bi";
import { FaUpload, FaDownload } from "react-icons/fa";
import { AiFillEdit, AiFillDelete, AiOutlineSearch } from "react-icons/ai";
import Pagination from "@mui/material/Pagination";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import Sidebar from "@/components/Sidebar.jsx";
import Layout from "@/components/Layout.js";
import EnhancedTable from "@/components/Table.js";
const user = () => {
  const [itemOffset, setItemOffset] = useState(0);
  let itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  return (
    // <Layout heading={"User"}>
    //   <div className="p-4">
    //     <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
    //       <div className="w-100 flex justify-between">
    //         <div className="flex">
    //           <TextField
    //             id="outlined-controlled"
    //             label="Enter Name"
    //             size="small"
    //             sx={{ mr: 2 }}
    //             // value={name}
    //             // onChange={(event) => {
    //             //   setName(event.target.value);
    //             // }}
    //           />
    //           <FormControl size="small" sx={{ width: 200, mr: 2 }}>
    //             <InputLabel id="demo-select-small-label">Category</InputLabel>
    //             <Select
    //               labelId="demo-select-small-label"
    //               id="demo-select-small"
    //               // value={age}
    //               // onChange={handleChange}
    //               label="Category"
    //             >
    //               <MenuItem value={10}>Completed</MenuItem>
    //               <MenuItem value={20}>Avoided</MenuItem>
    //             </Select>
    //           </FormControl>
    //           {/* <Button
    //             size="small"
    //             className="bg-green-700 h-full"
    //             variant="contained"
    //             startIcon={<AiOutlineSearch />}
    //           >
    //             Send
    //           </Button> */}
    //           <button className="bg-green-700 items-center text-white pl-3 pr-3 pt-2 pb-2 flex rounded-lg">
    //             <AiOutlineSearch className="mr-2" />
    //             Search
    //           </button>
    //         </div>
    //         <div className="flex">
    //           <button className="bg-green-700 items-center text-white pl-4 pr-4 pt-2 pb-2 flex mr-4 rounded-lg">
    //             <FaDownload className="mr-2" />
    //             Import
    //           </button>
    //           <button className="bg-red-700 items-center text-white pl-4 pr-4 pt-2 pb-2 flex rounded-lg">
    //             <FaUpload className="mr-2" />
    //             Export
    //           </button>
    //         </div>
    //       </div>
    //       <div className="my-3 p-2 grid grid-cols-4 items-center justify-between cursor-pointer">
    //         <span className="flex items-center">
    //           Name
    //           <BiSortDown className="ml-2" />
    //           {/* <BiSortUp className="ml-2" /> */}
    //         </span>
    //         <span className="flex items-center sm:text-left text-right">
    //           Email <BiSortDown className="ml-2" />
    //         </span>
    //         <span className="flex items-center">
    //           Last Order <BiSortDown className="ml-2" />
    //         </span>
    //         <span className="flex items-center">
    //           Method <BiSortDown className="ml-2" />
    //         </span>
    //         {/* sm:grid */}
    //       </div>
    //       <ul>
    //         {data.map((order, id) => (
    //           <li
    //             key={id}
    //             className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
    //           >
    //             <div className="flex items-center">
    //               <div className="bg-purple-100 p-3 rounded-lg">
    //                 <BsPersonFill className="text-purple-800" />
    //               </div>
    //               <p className="pl-4">
    //                 {order.name.first + " " + order.name.last}
    //               </p>
    //             </div>
    //             <p className="text-gray-600 sm:text-left text-right">
    //               {order.name.first}@gmail.com
    //             </p>
    //             <p className="hidden md:flex">{order.date}</p>
    //             <div className="sm:flex hidden justify-between items-center">
    //               <p>{order.method}</p>
    //               <div className="flex items-center">
    //                 <button className="bg-green-700 items-center text-white p-2 flex justify-center rounded-lg mr-2">
    //                   <AiFillEdit />
    //                 </button>{" "}
    //                 <button className="bg-red-700 items-center text-white p-2 flex justify-center rounded-lg mr-2">
    //                   <AiFillDelete />
    //                 </button>
    //                 <BsThreeDotsVertical />
    //               </div>
    //             </div>
    //           </li>
    //         ))}
    //       </ul>{" "}
    //       <div className="flex justify-center items-center w-100 pt-2 pb-2">
    //         <Pagination count={10} shape="rounded" />
    //       </div>
    //     </div>
    //   </div>
    // </Layout>
    <Layout heading={"User"}>
      <EnhancedTable />
    </Layout>
  );
};

export default user;

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
