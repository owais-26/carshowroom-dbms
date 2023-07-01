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
const style = {
  position: "absolute", // Set the position of the modal
  top: "50%", // Set the top position of the modal
  left: "50%", // Set the left position of the modal
  transform: "translate(-50%, -50%)", // Translate the modal to center it
  bgcolor: "background.paper", // Set the background color of the modal content
  boxShadow: 24, // Set the box shadow of the modal
};

const getMessages = async () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM messages", (error, results) => {
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
  const [width, setWidth] = useState(0); // Holds the width value
  const [editState, setEditState] = useState(false); // Indicates the edit state
  const [messageText, setMessageText] = useState(""); // Holds the text of the message
  const [selectedId, setSelectedId] = useState(0); // Holds the ID of the selected item
  const [open, setOpen] = useState(false); // Indicates the open state of a modal or dialog
  const [loading, setLoading] = useState(false); // Indicates the loading state
  const [sortOrder, setSortOrder] = useState("asc"); // Holds the sorting order
  const [sortAlpha, setSortAlpha] = useState("a-z"); // Holds the sorting alpha value
  const [searchTerm, setSearchTerm] = useState(""); // Holds the search term value
  const [currentPage, setCurrentPage] = useState(1); // Holds the current page number
  

  // Define the function for sorting messages
  const sortMessages = () => {
    // Check the current sorting alpha value
    if (sortAlpha === "a-z") {
      // Display success toast notification for sorting A-Z
      toast.success("Sorted A-Z Successfully! ", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      // Sort the messages array in ascending order based on the text property
      messages.sort((a, b) => {
        const textA = a.text.toLowerCase();
        const textB = b.text.toLowerCase();

        return textA.localeCompare(textB);
      });
    } else {
      // Display success toast notification for sorting Z-A
      toast.success("Sorted Z-A Successfully! ", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      // Sort the messages array in descending order based on the text property
      messages.sort((a, b) => {
        const textA = a.text.toLowerCase();
        const textB = b.text.toLowerCase();

        return textB.localeCompare(textA);
      });
    }

    // Toggle the sorting alpha value between "a-z" and "z-a"
    setSortAlpha(sortAlpha === "a-z" ? "z-a" : "a-z");
  };

  // Calculate the start and end index for the displayed messages on the current page
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  // Get the subset of messages to be displayed on the current page
  const displayedMessages = messages.slice(startIndex, endIndex);

  // Define the function for handling the previous page navigation
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Define the function for handling the next page navigation
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Define the function for handling page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the total number of pages based on the messages count and page size
  const totalPages = Math.ceil(messages.length / PAGE_SIZE);

  // Define the function for toggling the sort order
  const toggleSortOrder = () => {
    if (sortOrder === "asc") {
      // Display success toast notification for showing older messages first
      toast.success("Showing Older First ", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      // Sort the messages array in ascending order based on the 'no' property
      messages.sort((a, b) => a.no - b.no);
    } else {
      // Display success toast notification for showing newer messages first
      toast.success("Showing Newer First ", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      // Sort the messages array in descending order based on the 'no' property
      messages.sort((a, b) => b.no - a.no);
    }

    // Toggle the sort order between "asc" and "desc"
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  useEffect(() => {
    setWidth(window.innerWidth); // Set the initial width value to the window's inner width
    // sortMessages(); // Call the sortMessages function (commented out in the provided code)
  }, []);

  // Define the addMessageHandler function for adding a new message
  const addMessageHandler = async (enteredMessage) => {
    // Send a POST request to the "/api/new-message" endpoint with the entered message data
    const response = await fetch("/api/new-message", {
      method: "POST",
      body: JSON.stringify(enteredMessage),
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

    // Display success toast notification for message addition
    toast.success("Message Added Successfully! ", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // Define the editMessageHandler function for editing a message
  const editMessageHandler = async (enteredMessage) => {
    // Send a POST request to the "/api/edit-message" endpoint with the entered message data
    const response = await fetch("/api/edit-message", {
      method: "POST",
      body: JSON.stringify(enteredMessage),
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

    // Display success toast notification for message editing
    toast.success("Message Edited Successfully! ", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // Define the deleteMessageHandler function for deleting a message
  const deleteMessageHandler = async (id) => {
    // Send a POST request to the "/api/delete-message" endpoint with the message ID
    const response = await fetch("/api/delete-message", {
      method: "POST",
      body: JSON.stringify(id),
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

    // Display success toast notification for message deletion
    toast.success("Message Deleted Successfully! ", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex flex-col  items-center">
        <Image
          alt="Logo"
          src="/crud.png"
          width={150}
          height={100}
          className="-mb-10 -mt-5"
        />
      </div>

      <div className="w-full min-h-screen flex flex-col my-4 justify-center items-center">
        <div className="h-10 text-white w-full flex justify-center items-center">
          <h1 className=" text-black font-serif text-3xl font-bold">
            Crud App (Next.js + MySql)
          </h1>
        </div>
        <p className="text-[#0110e5] font-semibold font-sans text-xl text-center">
          A create-read-update-delete app where you can made changes to the
          database through the UI!
        </p>
        <div className="bg-[#FF7417] w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] p-4 mt-3 rounded-md flex flex-col items-center justify-around">
          <span className="text-[#0110e5] mb-3 w-full font-serif font-extrabold text-center px-3 py-1 rounded-sm shadow-sm bg-gray-200 text-3xl">
            Messages
          </span>

          <div class="flex justify-center">
            {/* Button for toggling the sort order */}
            <button
              disabled={messages.length === 0} // disabled when there's no msg in array
              onClick={toggleSortOrder}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 mb-3 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-3"
            >
              Toggle Sort Order:{" "}
              {sortOrder === "asc" ? "Older First" : "Recent First"}
            </button>

            {/* Button for sorting messages */}
            <button
              disabled={messages.length === 0} // disabled when there's no msg in array
              onClick={sortMessages}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-xs font-medium rounded-lg px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 mb-3 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sort {sortAlpha === "a-z" ? "A-Z" : "Z-A"}
            </button>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2200"
            className="searchBox text-center mb-5"
          >
            <input
              disabled={messages.length === 0} // disabled when there's no msg in array
              className="search_input w-full sm:w-64 md:w-72 bg-gray-100 text-gray-800 rounded-md py-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Search Messages here..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
          <textarea
            type="text"
            placeholder="Enter a message"
            value={messageText}
            onChange={(event) => setMessageText(event.target.value)}
            className="w-full h-[5rem] font-serif bg-gray-100 border mt-3 align-top placeholder:text-sm p-1 text-sm focus:outline-gray-800 rounded border-gray-600 "
          />
          <div className="mt-3">
            {/* Button for creating a new message */}
            <button
              onClick={(event) => {
                event.preventDefault();
                setLoading(true);
                const newMessage = editState
                  ? {
                    id: selectedId,
                    no: messages[messages.length - 1].no,
                    text: messageText,
                  }
                  : {
                    no:
                      messages.length !== 0
                        ? messages[messages.length - 1].no + 1
                        : 1,
                    text: messageText,
                  };
                editState
                  ? editMessageHandler(newMessage)
                  : addMessageHandler(newMessage);
                setMessageText("");
                setEditState(false);
              }}
              disabled={!messageText} // Add the disabled attribute based on the messageText value
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 mb-3 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create New Message!
            </button>

            {/* Cancel button for editing mode */}
            {editState && (
              <button
                onClick={() => {
                  setEditState(false);
                  setMessageText("");
                }}
                className="bg-[#E50914] text-white mt-1 text-sm py-1 w-full sm:w-[10rem] rounded-md sm:ml-1 hover:bg-[#cf0b14]"
              >
                cancel
              </button>
            )}
          </div>
          {/* Renders a table to display the messages */}
          <table className="bg-gray-800 w-full mt-3 rounded-sm">
            <thead className="text-sm md:text-base text-white w-full border-b-white border-b-2">
              <tr>
                <th className="font-serif">#</th>
                <th className="font-serif">Message</th>
                <th className="font-serif">ID</th>
                <th className="font-serif">Edit</th>
                <th className="font-serif">Remove</th>
              </tr>
            </thead>
            <tbody className="text-[0.8rem]  text-gray-200 overflow-y-auto  md:text-[0.94rem] w-full text-center ">
              {/* Filters and maps the displayedMessages */}
              {displayedMessages &&
                displayedMessages
                  .filter((val) => {
                    const searchTermLowerCase = searchTerm.toLowerCase();
                    const textLowerCase = val.text.toLowerCase();

                    if (searchTerm === "") {
                      return true; // Return all values when search term is empty
                    } else if (textLowerCase.includes(searchTermLowerCase)) {
                      // Return the value with highlighted text when search term is found
                      return true;
                    }

                    return false; // Exclude the value when search term is not found
                  })
                  .map((message) => (
                    <tr key={message.id}>
                      <td>{message.no}</td>
                      <td>
                        {message.text.length > 10
                          ? `${message.text.slice(0, 9)}...`
                          : message.text}
                      </td>
                      <td>
                        {width < 640
                          ? `${message.id.slice(0, 3)}...`
                          : message.id}
                      </td>
                      <td>
                        <MdModeEditOutline
                          style={{
                            margin: "auto",
                            cursor: "pointer",
                          }}
                          className="hover:text-green-500"
                          onClick={() => {
                            setMessageText(message.text);
                            setEditState(true);
                            setSelectedId(message.id);
                          }}
                        />
                      </td>
                      <td>
                        <AiFillDelete
                          style={{
                            margin: "auto",
                            cursor: "pointer",
                          }}
                          className="hover:text-red-500"
                          onClick={() => {
                            setOpen(true);
                            setSelectedId(message.id);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>

          {/* Renders a modal for confirming message deletion */}
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="rounded-md p-4">
              <p>Do you want to delete this message?</p>
              <div className="flex justify-center mt-3">
                <button
                  onClick={() => {
                    setLoading(true);
                    deleteMessageHandler(selectedId);
                    setOpen(false);
                    setEditState(false);
                    setMessageText("");
                  }}
                  className="bg-[#E50914] text-white text-sm py-1 px-3 rounded-md ml-1 hover:bg-[#cf0b14]"
                >
                  Delete
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="bg-gray-700 text-white text-sm py-1 px-3 rounded-md ml-1 hover:bg-gray-800"
                >
                  Cancel
                </button>
              </div>
            </Box>
          </Modal>

          {loading && (
            <Modal open>
              <div className="w-full flex justify-center h-full items-center">
                <CircularProgress thickness={4} />
              </div>
            </Modal>
          )}
        </div>
        {/* Renders pagination controls */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center mt-8">
          <div className="flex gap-2">
            {/* Button for previous page */}
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="bg-gray-700 text-white text-sm py-1 px-3 rounded-md hover:bg-gray-800"
            >
              Previous
            </button>
            {/* Button for next page */}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="bg-gray-700 text-white text-sm py-1 px-3 rounded-md hover:bg-gray-800"
            >
              Next
            </button>
          </div>
          <div className="flex gap-1">
            {/* Render buttons for each page */}
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`bg-gray-700 text-white text-sm py-1 px-3 rounded-md hover:bg-gray-800 ${currentPage === index + 1 ? "bg-gray-800" : ""
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  // Fetch messages from the server
  const messages = await getMessages();

  // Map the messages to the required format
  const formattedMessages = messages.map((message) => ({
    id: message.id.toString(),
    no: message.no,
    text: message.text,
  }));

  // Return the messages as props
  return {
    props: {
      messages: formattedMessages,
    },
  };
};

