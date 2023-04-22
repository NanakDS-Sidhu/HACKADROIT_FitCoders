import Sidebar from "@/components/Sidebar";
import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import supabase from "@/config/SupabaseConfig";
const editProfile = () => {
  const [username, setUsername] = useState("")
  const [file, setFile] = useState()
  const [user1, setUser1] = useState("");
  async function userFetch() {
    const { data: { user } } = await supabase.auth.getUser()
    setUser1(user)
  }

  useEffect(() => {
    userFetch();
  }, [])

  const handleFile = async (e) => {
    setFile(e.target.files[0])
    // console.log(e.target.files[0])
  }


  const handleSubmit = async (e) => {
    e.preventDefault()


    const { data, error } = await supabase
      .from('Profile')
      .upsert([
        { User_id: user1.id, Username: username, },
      ], { upsert: true })


    // const avatarFile = event.target.files[0]
    const { data: AvatarData, error: AvatarError } = await supabase
      .storage
      .from('Avatars')
      .upload('public/avatar1.png', file, {
        cacheControl: '3600',
        upsert: false
      })



    if (error) {
      console.log(error)
    } else {
      console.log();
    }

  }
  // const { register, handleSubmit } = useForm();
  // const characters =
  //   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // function generateString(length) {
  //   let result = " ";
  //   const charactersLength = characters.length;
  //   for (let i = 0; i < length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   }

  //   return result;
  // }
  // async function uploadFile(random_string, file) {
  //   console.log(file);
  //   const { data, error } = await supabase.storage
  //     .from("Avatars")
  //     .upload(random_string + file[0].name.toString(), file[0], {
  //       upsert: false,
  //     });
  //   if (error) {
  //     // Handle error
  //     console.log(error);
  //   } else {
  //     // Handle success
  //     console.log("success");
  //   }
  // }
  // async function updateProfile(d) {
  //   const random_string = generateString(10);

  //   const {
  //     data: { user },
  //   } = await supabase.auth.getUser();
  //   // uploadFile(random_string, d.avatar);
  //   const { data, error } = await supabase
  //     .from("Profile")
  //     .update({
  //       username: d.username
  //     }) 
  //     .eq("User_id", user.id);
  //   if (error) {
  //     console.log(error);
  //   }
  // }
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div class="bg-white w-full ">
          <div class="flex flex-col items-center  pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto ">
            <div class="flex flex-col  items-center w-full ">
              <div class="w-full relative mt-10 mr-0 mb-0 ml-0  ">
                <div
                  class="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white  rounded-xl
            relative"
                >
                  <p class="w-full text-4xl font-medium text-center leading-snug font-serif">
                    My Profile
                  </p>
                  <form
                    class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8"
                    onSubmit={handleSubmit}
                  >
                    <div class="relative">
                      <p
                        class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
                      >
                        Username
                      </p>
                      <input
                        placeholder="John"
                        value={username}
                        type="text"
                        class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                        onChange={(e) => setUsername(e.target.value)}
                      // {...register("username")}
                      />
                    </div>

                    <link
                      rel="stylesheet"
                      href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css"
                    />

                    <div class=" mx-auto">
                      <div class="flex items-center justify-center w-full">
                        <label
                          for="dropzone-file"
                          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              class="w-10 h-10 mb-3 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              ></path>
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span class="font-semibold">Click to upload</span>{" "}
                              or drag and drop MAX. 800x400px
                            </p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            class="hidden"
                            onChange={handleFile}
                          // {...register("avatar")}
                          />
                        </label>
                      </div>

                      <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
                    </div>

                    <div class="relative">
                      <button
                        class="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
                  rounded-lg transition duration-200 hover:bg-indigo-600 ease"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default editProfile;
