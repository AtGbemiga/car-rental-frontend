type GetDashboardResponse = {
  profile: {
    name: string;
    description: string;
    picture: string;
  }[];
};

type PostProfile = {
  name: string;
  description: string;
  picture: FileList | string;
  [key: string]: string | number | FileList;
};
