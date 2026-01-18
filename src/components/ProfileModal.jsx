import { useState } from "react";

function ProfileModal({ user, onClose }) {
  const [name, setName] = useState(user.name);
  const [experience, setExperience] = useState(user.experience);

  const handleSave = () => {
    console.log("Updated:", { name, experience });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">

        <h2 className="text-xl font-semibold mb-4">Profile</h2>

        <div className="space-y-4">

          {/* Email (readonly) */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              value={user.email}
              disabled
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>

          {/* Name */}
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="text-sm text-gray-600">Experience</label>
            <input
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProfileModal;
