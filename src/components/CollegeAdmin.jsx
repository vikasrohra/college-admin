import {
  TabItem,
  Tabs,
  Button,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput,
} from "flowbite-react";
import { useEffect, useRef, useState } from "react";

const CollegeAdmin = () => {
  const tabsRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  // Subjects
  const [openSubjectModal, setSubjectOpenModal] = useState(false);
  const [subjectName, setSubjectName] = useState("");
  const [maxScore, setMaxScore] = useState(100);
  const [subjectList, setSubjectList] = useState(null);
  // Students
  const [studentList, setStudentList] = useState(null);
  const [studentFName, setStudentFName] = useState("");
  const [studentLName, setStudentLName] = useState("");
  const [openStudentModal, setOpenStudentModal] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("subjects")) {
      const subjects = JSON.parse(localStorage.getItem("subjects"));
      setSubjectList(subjects);
    }

    if (localStorage.getItem("students")) {
      const students = JSON.parse(localStorage.getItem("students"));
      setStudentList(students);
    }
  }, []);

  function onCloseSubjectModal() {
    setSubjectOpenModal(false);
    setSubjectName("");
    setMaxScore(100);
  }

  function onCloseStudentModal() {
    setOpenStudentModal(false);
    setStudentFName("");
    setStudentLName("");
  }

  const handleSubjectAddClick = () => {
    let subjects = null;
    subjects = localStorage.getItem("subjects");
    if (!subjects) {
      localStorage.setItem(
        "subjects",
        JSON.stringify([{ name: subjectName, maxScore: maxScore }])
      );
      subjects = [{ name: subjectName, maxScore: maxScore }];
    } else {
      subjects = JSON.parse(localStorage.getItem("subjects"));
      subjects.push({ name: subjectName, maxScore: maxScore });
      localStorage.setItem("subjects", JSON.stringify(subjects));
    }
    setSubjectList(subjects);
    onCloseSubjectModal();
  };

  const handleStudentAddClick = () => {
    let students = null;
    students = localStorage.getItem("students");
    if (!students) {
      localStorage.setItem(
        "students",
        JSON.stringify([{ fname: studentFName, lname: studentLName }])
      );
      students = [{ fname: subjectName, lname: maxScore }];
    } else {
      students = JSON.parse(localStorage.getItem("students"));
      students.push({ fname: studentFName, lname: studentLName });
      localStorage.setItem("students", JSON.stringify(students));
    }
    setStudentList(students);
    onCloseStudentModal();
  };

  return (
    <div className="flex flex-col w-full gap-3">
      <Tabs
        aria-label="Default tabs"
        variant="default"
        ref={tabsRef}
        onActiveTabChange={(tab) => setActiveTab(tab)}
      >
        {/* SUBJECTS TAB */}
        <TabItem active title="Subjects">
          <div className="flex flex-col gap-4">
            {/* SUBJECTS */}
            {subjectList?.map((subject) => (
              <div
                key={subject.name}
                className="bg-gray-700 w-full rounded-sm p-4"
              >
                {subject.name}
              </div>
            ))}
          </div>
          {/* ADD ICON */}
          <div className="absolute z-10 right-5 bottom-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12 cursor-pointer"
              onClick={() => setSubjectOpenModal(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          {/* ADD FORM */}
          <Modal
            show={openSubjectModal}
            size="md"
            onClose={onCloseSubjectModal}
            popup
          >
            <ModalHeader />
            <ModalBody>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Add Subject
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name">Subject Name:</Label>
                  </div>
                  <TextInput
                    id="name"
                    placeholder="Enter subject name"
                    value={subjectName}
                    onChange={(event) => setSubjectName(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="maxScore">Max Score:</Label>
                  </div>
                  <TextInput
                    id="maxScore"
                    type="number"
                    required
                    value={maxScore}
                    onChange={(e) => setMaxScore(+e.target.value)}
                  />
                </div>
                <div className="flex justify-center text-sm font-medium text-gray-500 dark:text-gray-300">
                  <Button color="dark" pill onClick={handleSubjectAddClick}>
                    Add
                  </Button>
                </div>
              </div>
            </ModalBody>
          </Modal>
        </TabItem>
        {/* STUDENTS TAB */}
        <TabItem title="Students">
          <div className="flex flex-col gap-4">
            {/* SUBJECTS */}
            {studentList?.map((student) => (
              <div
                key={`${student.fname} ${student.lname}`}
                className="bg-gray-700 w-full rounded-sm p-4"
              >
                {`${student.fname} ${student.lname}`}
              </div>
            ))}
          </div>
          {/* ADD ICON */}
          <div className="absolute z-10 right-5 bottom-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12 cursor-pointer"
              onClick={() => setOpenStudentModal(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          {/* ADD FORM */}
          <Modal
            show={openStudentModal}
            size="md"
            onClose={onCloseStudentModal}
            popup
          >
            <ModalHeader />
            <ModalBody>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Add Student
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="fname">First Name:</Label>
                  </div>
                  <TextInput
                    id="fname"
                    placeholder="First name"
                    value={studentFName}
                    onChange={(event) => setStudentFName(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="lname">Last Name:</Label>
                  </div>
                  <TextInput
                    id="lname"
                    type="text"
                    required
                    value={studentLName}
                    placeholder="Last name"
                    onChange={(e) => setStudentLName(e.target.value)}
                  />
                </div>
                <div className="flex justify-center text-sm font-medium text-gray-500 dark:text-gray-300">
                  <Button color="dark" pill onClick={handleStudentAddClick}>
                    Add
                  </Button>
                </div>
              </div>
            </ModalBody>
          </Modal>
        </TabItem>
      </Tabs>
    </div>
  );
};

export default CollegeAdmin;
