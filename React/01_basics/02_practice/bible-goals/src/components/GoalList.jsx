import ReadGospels from './ReadGospels';
import DailyRosary from './DailyRosary';
import AttendMass from './AttendMass';

export default function GoalList() {
  return (
    <ul>
      <ReadGospels />
      <DailyRosary />
      <AttendMass />
    </ul>
  );
}
