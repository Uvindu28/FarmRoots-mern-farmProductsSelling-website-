import React, { useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaHeart,
  FaTrash,
  FaEdit,
  FaPlus,
  FaTimes,
} from "react-icons/fa";

function FarmerProfile() {
  const [isManageProfileModalOpen, setIsManageProfileModalOpen] = useState(false);
  const [deletePrompt, setDeletePrompt] = useState(false);
  const [typedName, setTypedName] = useState("");
  const [profile, setProfile] = useState({
    name: "Ishira Pahasara",
    email: "ishirapahasara09@gmail.com",
    phone: "0743631212",
    address: "49/22 Circular Road, Galle",
    farmingMethod: "Conventional",
    image: "https://via.placeholder.com/100",
    facebook: "",
    instagram: "",
    personalEmail: "",
  });
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [postCaption, setPostCaption] = useState("");
  const [media, setMedia] = useState(null);
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (postCaption && media) {
      const newPost = {
        id: posts.length + 1,
        content: postCaption,
        media,
        mediaType: media.type.split("/")[0], // image or video
        likes: 0,
        timestamp: new Date().toLocaleString(),
      };
      setPosts([...posts, newPost]);
      resetPostForm();
    }
  };

  const resetPostForm = () => {
    setPostCaption("");
    setMedia(null);
    setIsPostModalOpen(false);
    setEditingPost(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setMedia({ file: reader.result, type: file.type });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfile({ ...profile, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteProfile = () => {
    if (typedName === profile.name) {
      setProfile(null); // Simulate profile deletion
      setDeletePrompt(false);
      alert("Profile deleted successfully.");
    } else {
      alert("Profile name does not match!");
    }
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    setIsManageProfileModalOpen(false); // Close the modal
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
    setPostCaption(post.content);
    setMedia({ file: post.media, type: post.mediaType });
    setIsPostModalOpen(true);
  };

  const handleUpdatePost = (e) => {
    e.preventDefault();
    if (editingPost) {
      const updatedPosts = posts.map((post) =>
        post.id === editingPost.id
          ? { ...post, content: postCaption, media, mediaType: media.type.split("/")[0], timestamp: new Date().toLocaleString() }
          : post
      );
      setPosts(updatedPosts);
      resetPostForm();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-200 font-poppins">
      {/* Profile Section */}
      {profile ? (
        <div className="bg-white p-6 rounded-lg shadow-md flex-shrink-0 relative">
          <div className="text-center leading-relaxed">
            <img
              className="w-24 h-24 rounded-full mx-auto"
              src={profile.image}
              alt="Profile"
            />
            <h2 className="text-xl font-semibold mt-4">{profile.name}</h2>
            <p className="text-gray-600">{profile.email}</p>
            <p className="text -gray-600">{profile.farmingMethod} Farmer</p>
            <p className="text-gray-600">Phone: {profile.phone}</p>
            <p className="text-gray-600">Address: {profile.address}</p>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={() => setIsManageProfileModalOpen(true)}
              className="bg-green-500 text-white py-2 px-4 rounded"
            >
              Manage Profile
            </button>
            <button
              onClick={() => setDeletePrompt(true)}
              className="bg-red-500 text-white py-2 px-4 rounded"
            >
              Delete Profile
            </button>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <a href={profile.personalEmail} className="text-orange-500 text-2xl">
              <FaEnvelope />
            </a>
            <a href={profile.facebook} className="text-blue-500 text-2xl">
              <FaFacebookF />
            </a>
            <a href={profile.instagram} className="text-pink-500 text-2xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      ) : (
        <p className="text-center text-red-500 mt-10">
          Profile has been deleted.
        </p>
      )}

      {/* Post Section */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-y-auto">
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="text-gray-700">{post.content}</p>
            {post.media && post.mediaType === "image" && (
              <img
                src={post.media.file}
                alt="Post Media"
                className="w-full h-64 object-cover rounded my-4"
              />
            )}
            {post.media && post.mediaType === "video" && (
              <video controls className="w-full h-64 object-cover rounded my-4">
                <source src={post.media.file} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <p className="text-gray-500 text-sm">{post.timestamp}</p>
            <div className="flex justify-between items-center mt-2">
              <div className="flex space-x-2">
                <button
                  onClick={() => alert("Like functionality pending")}
                  className="flex items-center space-x-1 text-red-500"
                >
                  <FaHeart />
                  <span>{post.likes}</span>
                </button>
                <button
                  onClick={() => handleEditPost(post)}
                  className="text-gray-500"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => alert("Delete post")}
                  className="text-gray-500"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sticky Post Button */}
      <button
        onClick={() => setIsPostModalOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-4 shadow-lg z-50"
      >
        <FaPlus size={24} />
      </button>

      {/* Post Modal */}
      {isPostModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={resetPostForm}
            >
              <FaTimes size={20} />
            </button>

            <h3 className="text-lg font-semibold mb-4">{editingPost ? "Edit Post" : "Create a New Post"}</h3>
            <form onSubmit={editingPost ? handleUpdatePost : handlePostSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-2">Caption</label>
                <textarea
                  value={postCaption}
                  onChange={(e) => setPostCaption(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
 <div>
                <label className="block text-gray-600 mb-2">Media</label>
                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleImageChange}
                  className="w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                {editingPost ? "Update Post" : "Post"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Delete Profile Confirmation */}
      {deletePrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">
              Type profile name to confirm delete
            </h3>
            <input
              type="text"
              value={typedName}
              onChange={(e) => setTypedName(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 mb-4"
              placeholder="Type profile name"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setDeletePrompt(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteProfile}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FarmerProfile;