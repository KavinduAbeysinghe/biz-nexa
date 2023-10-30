import LockResetIcon from "@mui/icons-material/LockReset";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import ArticleIcon from "@mui/icons-material/Article";
import PersonalTab from "./PersonalTab";
import { TabPanel } from "../../components/tabs/TabPanel";
import { EmploymentTab } from "./EmploymentTab";

export const MyProfile = () => {
  const tabOptions = [
    {
      title: "Personal",
      body: <PersonalTab />,
      active: true,
    },
    {
      title: "Employment",
      body: <EmploymentTab />,
    },
    {
      title: "Settings",
      body: <h1>Settings Tab</h1>,
    },
  ];

  const topButtons = [
    {
      text: "Change Password",
      icon: <LockResetIcon fontSize="small" />,
    },
    {
      text: "Business Card",
      icon: <ContactEmergencyIcon fontSize="small" />,
    },
    {
      text: "Resume",
      icon: <ArticleIcon fontSize="small" />,
    },
  ];

  return (
    <div>
      <h1 className="font-semibold text-lg">My Profile</h1>
      <div className="relative">
        <div className="profile-cover flex relative p-5 bg-blue-950 rounded-xl h-36 bg-cover bg-no-repeat bg-center overflow-hidden opacity-70"></div>
        <div
          className="relative flex flex-col p-5 bg-white rounded-xl z-10 -mt-5 mx-5"
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="grid grid-cols-12 gap-4 lg:gap-0">
            <div className="flex gap-3 col-span-12 lg:col-span-6">
              <img
                src={require("../../assets/images/person.jpg")}
                alt="profile-img"
                className="h-14 w-14 object-cover rounded-full"
              />
              <div>
                <h1 className="font-bold text-blue-950 text-lg">
                  Stephanie Anderson
                </h1>
                <h1 className="text-gray-600 text-sm">
                  Senior Software Engineer
                </h1>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 flex items-center justify-start lg:justify-end">
              <div className="flex gap-3 flex-wrap">
                {topButtons?.map((d: any, index) => (
                  <button
                    key={index}
                    type="button"
                    className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                  >
                    {d?.text}
                    {d?.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <TabPanel options={tabOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};
