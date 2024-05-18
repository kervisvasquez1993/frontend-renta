export interface UserData {
    user: {
     email : string,
     name : string
    };
    expires: string;
    data: {
      active: boolean;
      email: string;
      email_verified_at: string | null;
      id: number;
      name: string;
      role: string;
      id_artist: number;
    };
    accessToken: string;
  }