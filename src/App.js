import { useEffect, useState } from "react";
import { ActionButton, Button, InfoBar, LabelValue, ShiftDetails, ShiftDetailsWithTime } from "./components";
import Loader from "./components/Loader";
import ModalLoader from "./components/ModalLoader";
//import EmployeeRequestDetails from "./components/EmployeeRequestDetails";
import OffcanvasComponent from "./components/Offcanvas";
import PageMessageInfo from "./components/PageMessageInfo";
import ProfilePictures from "./components/ProfilePictures";
import SearchInput from "./components/SearchBar";

// const details ={
//     employeeKey: 'Y48WoLQUOuI%3d',
//     employeeFullName: 'John Doe',
//     employeeEmail: 'John.Doe@acsicorp.com',
//     encryptedEmployeeEmail: 'yZARysNb2+Em1dVGXKUYRGby6f0O1UJ7OV1roF1tr1s=',
//     conflictType: 'global daily hours met or exceeded',
//     startTime: '1900-01-01T00:00:00',
//     endTime: '1900-01-01T00:00:00',
//     deptKey: 'aPOv5y%2bLEsA%3d',
//     deptName: 'Message Test 2',
//     companyName: 'SubItUp',
//     requestedOn: '2025-01-07T11:14:56.16',
//     requestedTimeDuration: '14 days 1 hour',
//     dailyHours: 3,
//     calculatedDailyHours: 2.5,
//     weeklyHours: 6,
//     calculatedWeeklyHours: 3.5,
//     shiftCount: 0,
//     isViewAccessOnCalculatedWage: true,
//     hourlyWage: 0,
//     calculatedWage: 0,
//     priorityRank: 1,
//     availabilityStatus: 'No Preference'
//   }

function App() {
    const [show, setShow] = useState(true);
    const [showCanvas, setShowCamvas] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
    return (
      <div className="App" style={{ padding: "20px" }}>
        <div className="action-button-container" style={{ margin: "10px" }}>
          <ActionButton
            backgroundColor="#4CAF50"
            icon="check"
            onClick={() => {}}
          />
        </div>
  
        <div className="button-container" style={{ margin: "10px" }}>
          <Button onClick={() => {}} size="md" type="primary">
            Primary
          </Button>
        </div>
        <div className="button-container" style={{ margin: "10px" }}>
          <Button onClick={() => {}} size="md" type="decline">
            Decline
          </Button>
        </div>
        <div className="button-container" style={{ margin: "10px" }}>
          <Button onClick={() => {}} size="md" type="approve">
            Approve
          </Button>
        </div>
        <div className="button-container" style={{ margin: "10px" }}>
          <InfoBar icon="bell" type="info">
            This is an informational message.
          </InfoBar>
        </div>
        <div className="button-container" style={{ margin: "10px" }}>
          <InfoBar icon="thumbsup" type="success">
            This is an informational message.
          </InfoBar>
        </div>
        <div className="button-container" style={{ margin: "10px" }}>
          <LabelValue
            label="Shift Begins in"
            labelColorClass="medium-grey"
            value="2 days 12 hours"
            valueColorClass="dark-red"
          />
        </div>
        <div className="button-container" style={{ margin: "10px" }}>
          <ShiftDetailsWithTime
            date="2024/10/10"
            duration="8 hours"
            endTime="2024-10-10T18:00:00"
            positionColor="#FF5733"
            positionName="Manager"
            shiftColor="#4CAF50"
            shiftTitle="Morning Shift"
            startTime="2024-10-10T15:00:00"
          />
        </div>
        <div className="button-container" style={{ margin: "10px" }}>
          <ShiftDetails
            positionColor="#FF5733"
            positionName="Manager"
            shiftColor="#4CAF50"
            shiftTitle="Morning Shift"
          />
        </div>
        <div className="button-container" style={{ margin: "10px" }}>
            <Loader/>
        </div>
        <div className="button-container" style={{ margin: "10px" }}>
            <ModalLoader show={show}/>
        </div>
        {/* <div className="button-container" style={{ margin: "10px" , width:"max-content" }}>
            <EmployeeRequestDetails details = {details} type='drop'
                    handleApprove={''}
                    handleDecline={''}/>
        </div> */}
        <div className="button-container" style={{ margin: "10px" }}>
            <Button onClick={() => setShowCamvas(true)} size="md" type="primary">Open OffCanvas</Button>
                <OffcanvasComponent type="primary" title="OFFCANVAS" isOpen={showCanvas} onClose={() => setShowCamvas(false)}></OffcanvasComponent>
        </div>
        <div className="button-container" style={{ margin: "10px" }}>
            <PageMessageInfo type="warning" label="" text="There are no pending request for selected departments"/>
        </div>
        <div className="button-container" style={{ margin: "10px" }}>
            <ProfilePictures imageUrls={['./profilepictures' , './profilepictures' , './profilepictures', './profilepictures', './profilepictures']} dimensions={50} requestedCount={5}/>
        </div>
        <div className="button-container" style={{ margin: "10px" }}>
            <SearchInput />
        </div>
      </div>
    );
  }
  
  export default App;