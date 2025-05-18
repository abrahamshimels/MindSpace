import React, { useState } from "react";
import UserDashBoard from "./UserDashBoard";
import SideBar from "./sideBar";
import MoodTrackerr from "./MoodTrackerr";
import GuidedExercises from "./GuidedExersice";
import Download from "./Download";
import MoodHistory from "./MoodHistory";
function UserSection() {
  const [onDashBoard, setOnDashBoard] = useState(true);
  const [onMood, setOnMood] = useState(false);
  const [download, setDownload] = useState(false);
  const [onExercise, setOnExercise] = useState(false);
  const [moodHistory, setMoodHistory] = useState(false)

  return (
    <div className="m-15 sm:relative">
      <SideBar
        setOnDashBoard={setOnDashBoard}
        setOnMood={setOnMood}
        setDownload={setDownload}
        setOnExercise={setOnExercise}
        setMoodHistory = {setMoodHistory}
      />
      {onDashBoard && <UserDashBoard />}
      {onMood && <MoodTrackerr />}
      {download && <Download />}
      {onExercise && <GuidedExercises />}
      {moodHistory &&<MoodHistory/>}

     { console.log(moodHistory)}
    </div>
  );
}

export default UserSection;
