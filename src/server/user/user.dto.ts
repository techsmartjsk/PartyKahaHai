interface UserDTO {
  email: string;
  password: string;
  verified: boolean;
  blocked: boolean;
  partyType?: string;
  profileImage?: string;
  phoneNumber?: string;
  role: string;
  govtUID?: string;
  dateOfBirth?: Date;
  gender?: string;
  city?: string;
  state?: string;
  industry?: string;
  company?: string;
  designation?: string;
  chatRooms: string[]; // Assuming chatRooms are represented by their IDs as strings
  hostedParties: string[]; // Assuming party IDs are represented by their IDs as strings
  attendedParties: string[]; // Assuming party IDs are represented by their IDs as strings
  requests: string[]; // Assuming request IDs are represented by their IDs as strings
}

export default UserDTO;
