import {
    Button,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  TabItem,
  Tabs,
  TextInput,
} from "flowbite-react";
import { useRef, useState } from "react";

const Header = () => {
  const tabsRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [openStudentModal, setStudentOpenModal] = useState(true);

  function onCloseStudentModal() {
    setOpenModal(false);
    setEmail("");
  }

  return (
    <div className="flex flex-col gap-3">
      <Tabs
        aria-label="Default tabs"
        variant="default"
        ref={tabsRef}
        onActiveTabChange={(tab) => setActiveTab(tab)}
      >
        <TabItem active title="Subjects">
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Profile tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
          <div className="absolute z-10 right-5 bottom-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12 cursor-pointer"
              onClick={() => setStudentOpenModal(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
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
                  Sign in to our platform
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email">Your email</Label>
                  </div>
                  <TextInput
                    id="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password">Your password</Label>
                  </div>
                  <TextInput id="password" type="password" required />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-primary-700 hover:underline dark:text-primary-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <div className="w-full">
                  <Button>Log in to your account</Button>
                </div>
                <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?&nbsp;
                  <a
                    href="#"
                    className="text-primary-700 hover:underline dark:text-primary-500"
                  >
                    Create account
                  </a>
                </div>
              </div>
            </ModalBody>
          </Modal>
        </TabItem>
        <TabItem title="Students">
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
          <div className="absolute z-10 right-5 bottom-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </TabItem>
      </Tabs>
    </div>
  );
};

export default Header;
