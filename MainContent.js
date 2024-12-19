import React from "react";
import students from "../json"; // Import the mock data

function MainContent() {
  return (
    <div className="main-content p-4">
      <div className="filters flex gap-4 mb-4">
        <select className="filter p-2 border rounded-md">
          <option>AY 2024-25</option>
        </select>
        <select className="filter p-2 border rounded-md">
          <option>CBSE 9</option>
        </select>
      </div>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Student Name</th>
            <th className="border p-2">Cohort</th>
            <th className="border p-2">Courses</th>
            <th className="border p-2">Date Joined</th>
            <th className="border p-2">Last Login</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border p-2">{student.name}</td>
              <td className="border p-2">{student.cohort}</td>
              <td className="border p-2">{student.courses}</td>
              <td className="border p-2">{student.dateJoined}</td>
              <td className="border p-2">{student.lastLogin}</td>
              <td className="border p-2 text-center">
                <span
                  className={`inline-block w-4 h-4 rounded-full ${
                    student.status === "active"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                ></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MainContent;
