import { useState, useEffect } from "react";
import Section from "./Section";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Profile = () => {
  const [editing, setEditing] = useState(false); // State for editing mode
  const [newSkill, setNewSkill] = useState([]); // State for adding new skill
  //Pass here the object of profileInfo after logging in
  const [profileInfo, setProfileInfo] = useState([]);

  const [posts, setPosts] = useState([
    { id: 1, content: "Excited to start working on a new full-stack project!" },
    { id: 2, content: "Just completed a 100-day JavaScript coding challenge!" },
    { id: 3, content: "Looking for open-source projects to contribute to." },
  ]);

  const [connectedPeople, setConnectedPeople] = useState([
    { id: 1, name: "Alice Johnson", relation: "Colleague" },
    { id: 2, name: "Bob Smith", relation: "Mentor" },
    { id: 3, name: "Clara Lee", relation: "Friend" },
  ]);

  // useEffect(() => {
  //   axios.get("/api/v1/user/profile").then((res) => {
  //     console.log(res);
  //     console.log(res.data.length);
  //     console.log(res.data.email);

  //     setProfileInfo({
  //       name: res.data.name,
  //       bio: res.data.bio,
  //       location: res.data.location,
  //       email: res.data.email,
  //       phone: res.data.phone,
  //       skills: res.data.skills,
  //       profilePhoto: res.data.profilePhoto,
  //       backgroundImage: res.data.backgroundImage,
  //     });
  //   });
  // }, []);

  useEffect(() => {
    var token = localStorage.getItem("authToken");
    const decoded = jwtDecode(token);
    console.log("Here", decoded);
    const { email, role } = decoded;
    const getUserProfileData = async () => {
      try {
        console.log(email, "and", role);
        const response = await axios.get(
          `/api/v1/user/userprofile?email=${decoded.email}&role=${decoded.role}`
        );
        var profileData;
        console.log(response);
        if (response) {
          profileData = await response.data[0];
          console.log("response data:", profileData);
        }

        if (!profileData.error) {
          setProfileInfo({
            name: decoded.fullName,
            ...profileData,
          });
        } else {
          setProfileInfo({
            name: "Rajat Ranvir",
            bio: "Add bio",
            location: "San Francisco, CA",
            email: "rajatranvir@gmail.com",
            phone: "+1 234 567 890",
            skills: [
              "React",
              "Node.js",
              "JavaScript",
              "Tailwind CSS",
              "MongoDB",
            ],
            profilePhoto: "", // Default profile photo
            backgroundImage: "", // Default background image
          });
        }
      } catch (error) {
        return console.log(error);
      }
    };
    getUserProfileData();
    console.log(profileInfo);
  }, []);

  // Toggle editing mode
  const handleEditToggle = (e) => {
    e.preventDefault();
    setEditing(!editing);
    const formData = new FormData();
    // console.log(profileInfo.profilePhoto);
    console.log("inside handle toggle", profileInfo.skills);
    formData.append("profilePhoto", profileInfo.profilePhoto);
    formData.append("backgroundImage", profileInfo.backgroundImage);
    formData.append("name", profileInfo.name);
    formData.append("bio", profileInfo.bio);
    formData.append("location", profileInfo.location);
    formData.append("email", profileInfo.email);
    formData.append("phone", profileInfo.phone);
    formData.append("skills", profileInfo.skills);
    formData.append("editing", !editing);
    // console.log(formData);
    if (editing) {
      axios
        .post("/api/v1/user/setprofile", formData, {
          headers: {
            "content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          console.log(formData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // Handle profile info changes (name, bio, etc.)
  const handleProfileChange = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
  };

  // // Handle profile photo change
  // const handleProfilePhotoChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setProfileInfo({ ...profileInfo, profilePhoto: reader.result });
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // // Handle background image change
  // const handleBackgroundImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setProfileInfo({ ...profileInfo, backgroundImage: reader.result });
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // New Functions for the profile and Background image
  // Handle profile photo change
  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileInfo({ ...profileInfo, profilePhoto: file });
    }
  };

  // Handle background image change
  const handleBackgroundImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileInfo({ ...profileInfo, backgroundImage: file });
    }
  };

  // Add new skill
  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setProfileInfo((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()],
      }));
      setNewSkill("");
    }
  };

  // Remove a skill
  const handleRemoveSkill = (index) => {
    setProfileInfo((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  return (
    <Section>
      <div className="max-w-[100rem] mx-auto mb-10 p-6 ">
        {/* Background Image */}
        <div
          className="h-48 w-full bg-cover bg-center rounded-t-lg relative"
          style={{
            backgroundImage: profileInfo?.backgroundImage
              ? `url(${profileInfo.backgroundImage})`
              : `url("https://cdn.shopify.com/s/files/1/0066/4574/3686/files/Abstract_LinkedIn_Background.png?v=1627912075")`,
          }}
        >
          {editing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleBackgroundImageChange}
              className="absolute bottom-4 left-4 text-white"
            />
          )}
        </div>

        {/* Profile Photo & Info */}
        <div className="flex flex-col items-center space-y-4 -mt-16">
          {/* Profile Photo */}
          <div className="relative">
            <img
              src={
                profileInfo?.profilePhoto
                  ? `${profileInfo?.profilePhoto}`
                  : "https://thumbs.dreamstime.com/b/profile-pic-icon-isolated-white-background-your-web-mobile-app-design-133862807.jpg"
              }
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover shadow-md border-4 border-white"
            />
            {editing && (
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePhotoChange}
                className="absolute bottom-0 right-0 text-white"
              />
            )}
          </div>

          {/* Name */}
          {editing ? (
            <input
              type="text"
              name="name"
              value={profileInfo.name}
              onChange={handleProfileChange}
              className="text-3xl font-semibold text-n-1 text-center"
            />
          ) : (
            <h1 className="text-3xl font-semibold text-n-1">
              {profileInfo.name}
            </h1>
          )}

          {/* Bio */}
          {editing ? (
            <textarea
              name="bio"
              value={profileInfo.bio}
              onChange={handleProfileChange}
              className="text-n-1 text-center max-w-50"
            />
          ) : (
            <p className="text-n-1 text-center max-w-md">{profileInfo.bio}</p>
          )}

          {/* Contact Info */}
          <div className="flex flex-col items-center space-y-1">
            {editing ? (
              <>
                <input
                  type="text"
                  name="location"
                  value={profileInfo.location}
                  onChange={handleProfileChange}
                  className="text-n-2 font-medium"
                />
                <input
                  type="email"
                  name="email"
                  value={profileInfo.email}
                  onChange={handleProfileChange}
                  className="text-n-2 font-medium"
                />
                <input
                  type="text"
                  name="phone"
                  value={profileInfo.phone}
                  onChange={handleProfileChange}
                  className="text-n-2 font-medium"
                />
              </>
            ) : (
              <>
                <p className="text-n-2 font-medium">
                  📍 {profileInfo.location}
                </p>
                <p className="text-n-2 font-medium">📧 {profileInfo.email}</p>
                <p className="text-n-2 font-medium">📞 {profileInfo.phone}</p>
              </>
            )}
          </div>
          <button
            onClick={handleEditToggle}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {editing ? "Save Profile" : "Edit Profile"}
          </button>
        </div>

        {/* Skills */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-n-1 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {Array.isArray(profileInfo.skills) &&
              profileInfo?.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full">
                    {skill}
                  </span>
                  {editing && (
                    <button
                      onClick={() => handleRemoveSkill(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
          </div>

          {editing && (
            <div className="mt-4 flex items-center gap-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                className="border rounded px-4 py-2"
                placeholder="Add a new skill"
              />
              <button
                onClick={handleAddSkill}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Add Skill
              </button>
            </div>
          )}
        </div>

        {/* Posts Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-n-1 mb-4">Posts</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="p-4 bg-n-7 rounded-px-4 shadow-sm">
                <p>{post.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Connected People Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-n-1 mb-4">
            Connected People
          </h2>
          <div className="space-y-4">
            {connectedPeople.map((person) => (
              <div
                key={person.id}
                className="flex items-center justify-between p-4 bg-n-7 rounded shadow-sm"
              >
                <p>{person.name}</p>
                <span className="text-sm text-gray-600">{person.relation}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Profile;
