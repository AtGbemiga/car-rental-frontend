"use client";
import React, { useEffect, useState } from "react";
import getProfile from "@/lib/getDashboard";

export default function Profile() {
  const [profile, setProfile] = useState<GetDashboardResponse | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await getProfile();
      setProfile(profileData);
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Profile Root Page <br />
      {profile.profile[0]?.name}
      {profile.profile[0]?.description}
      <img
        src={profile.profile[0]?.pictures}
        width={200}
        height={200}
        alt="jdhbb"
      />
      {/* Render other profile data as needed */}
    </div>
  );
}
