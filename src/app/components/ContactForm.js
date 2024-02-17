import React, { useRef, useState } from "react";
import FormInfo from "./FormInfo";
import FormModal from "./FormModal";

const ContactForm = () => {
  const [user, setUser] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const username = useRef(null);
  const text = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(username.current.value, text.current.value);
    setUser([
      ...user,
      { username: username.current.value, text: text.current.value },
    ]);
    username.current.value = "";
    text.current.value = "";
    setModalOpen(!modalOpen);
  };

  return (
    <div className="dark:bg-black"> 
      <FormModal setModalOpen={setModalOpen}/>
      {modalOpen && (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-center min-h-screen px-4 py-8 ">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md ">
                <FormInfo handleSubmit={handleSubmit} username={username} text={text}/>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactForm;
