import React, { useState } from "react";

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return maxValid >= selected && maxValid >= today;
}

function Search({ data = [], onError = () => {}, onSetList = () => {} }) {
  const [studentName, setStudentName] = useState("");
  const [joiningDate, setDate] = useState("");

  const onCheckStudenName = () => {
    if (studentName === "" || joiningDate === "") return;

    const result = data.filter((item) => {
      return item.name.toLowerCase().includes(studentName.toLowerCase());
    })[0];

    if (!result)
      return onError(`Sorry, ${studentName} is not a verified student!`);

    let isDateValid = checkValidity(joiningDate, result.validityDate);

    if (!isDateValid)
      return onError(`Sorry, ${studentName}'s validity has Expired!`);

    setStudentName('');
    setDate('');
    return onSetList(result);
  };

  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            data-testid="studentName"
            type="text"
            name="name"
            className="mr-30 mt-10"
            value={studentName}
            onChange={(event) => setStudentName(event.target.value)}
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            className="mr-30 mt-10"
            value={joiningDate}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
      </label>
      <button
        type="button"
        data-testid="addBtn"
        className="small mb-0"
        onClick={onCheckStudenName}
      >
        Add
      </button>
    </div>
  );
}

export default Search;
