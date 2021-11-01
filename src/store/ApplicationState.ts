import { ParticipantsState } from "./participants/constants";
import { RacesState } from "./races/constants";

interface ApplicationState {
   races: RacesState;
   participants: ParticipantsState;
}

export default ApplicationState;
