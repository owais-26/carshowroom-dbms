//REACT-ICONS
import { MdModeEditOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
//UTILS
import db from "../utils/connectDB";
//NEXT-CONNECT
import nc from "next-connect";
//REACTJS
import { useEffect, useState } from "react";
//NEXTJS
import { useRouter } from "next/router";

// MATERIAL UI
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { CircularProgress } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { Download, DownloadDone, DownloadDoneOutlined } from "@mui/icons-material";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
const style = {
  position: "absolute", // Set the position of the modal
  top: "50%", // Set the top position of the modal
  left: "50%", // Set the left position of the modal
  transform: "translate(-50%, -50%)", // Translate the modal to center it
  bgcolor: "background.paper", // Set the background color of the modal content
  boxShadow: 24, // Set the box shadow of the modal
};

const getCustomers = async () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM customer", (error, results) => {
      if (error) {
        reject(error); // Reject the promise with the error if there is one
      } else {
        resolve(results); // Resolve the promise with the query results
      }
    });
  });
};


const PAGE_SIZE = 5; // Defines the size of page for pagination

export default function Home({ messages }) {
  // Import the necessary dependencies

  // Import the 'useRouter' hook from 'next/router'
  const router = useRouter();

  // Declare and initialize state variables
  const [editState, setEditState] = useState(false); // Indicates the edit state
  const [selectedId, setSelectedId] = useState(0); // Holds the ID of the selected item
  const [open, setOpen] = useState(false); // Indicates the open state of a modal or dialog
  const [loading, setLoading] = useState(false); // Indicates the loading state
  const [sortOrder, setSortOrder] = useState("asc"); // Holds the sorting order
  const [searchTerm, setSearchTerm] = useState(""); // Holds the search term value
  const [currentPage, setCurrentPage] = useState(1); // Holds the current page number

  const addCustomerHandler = async (enteredCustomer) => {
    try {
      // Send a POST request to the "/api/new-customer" endpoint with the entered customer data
      const response = await fetch("/api/new-customer", {
        method: "POST",
        body: JSON.stringify(enteredCustomer),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Parse the response data as JSON
      const data = await response.json();
      console.log(data);

      // Redirect to the home page ("/")
      router.push("/");

      // Set loading state to false
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // Define the editCustomerHandler function for editing a customer
  const editCustomerHandler = async (enteredCustomer) => {
    try {
      // Send a POST request to the "/api/edit-customer" endpoint with the entered customer data
      const response = await fetch("/api/edit-customer", {
        method: "POST",
        body: JSON.stringify(enteredCustomer),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Parse the response data as JSON
      const data = await response.json();
      console.log(data);

      // Redirect to the home page ("/")
      router.push("/");

      // Set loading state to false
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // Define the deleteCustomerHandler function for deleting a customer
  const deleteCustomerHandler = async (customerId) => {
    try {
      // Send a POST request to the "/api/delete-customer" endpoint with the customer ID
      const response = await fetch("/api/delete-customer", {
        method: "POST",
        body: JSON.stringify({ CustomerID: customerId }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Parse the response data as JSON
      const data = await response.json();
      console.log(data);

      // Redirect to the home page ("/")
      router.push("/");

      // Set loading state to false
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };



  return (
  <>
    <Navbar/>
    <Banner/>
    <Hero/>
  </>
  );
}

export const getServerSideProps = async () => {
  try {
    // Fetch customers from the server
    const customers = await getCustomers();

    // Map the customers to the required format
    const formattedCustomers = customers.map((customer) => ({
      CustomerID: customer.CustomerID.toString(),
      CustomerName: customer.CustomerName,
      Age: customer.Age,
      Gender: customer.Gender,
      MobileNo: customer.MobileNo,
    }));

    // Return the customers as props
    return {
      props: {
        customers: formattedCustomers,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        customers: [], // Return an empty array if there's an error
      },
    };
  }
};


