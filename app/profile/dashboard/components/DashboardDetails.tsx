// CF
"use client";

import React, { useEffect, useState } from "react";
import getProfile from "@/lib/getDashboard";
import Image from "next/image";
import Link from "next/link";

export const DashboardDetails = () => {
  const [profile, setProfile] = useState<GetDashboardResponse | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await getProfile();
      setProfile(profileData);
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <div className="container py-5">
        <p>Loading...</p>
      </div>
    );
  }

  if (
    !profile.profile[0]?.name &&
    !profile.profile[0]?.description &&
    !profile.profile[0]?.description
  ) {
    return (
      <div className="container py-5 d-flex justify-content-center">
        <div style={{ width: "30%" }}>
          <h6>You&apos;ve no profile</h6>
          <Link href="/profile/create-profile" className="btn btn-primary">
            Create a profile
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container py-5 ">
        <Image
          src={profile.profile[0]?.picture}
          width={200}
          height={200}
          alt="profile picture"
          className="rounded-circle"
        />
        <br />
        <h5>Name</h5>
        {profile.profile[0]?.name}
        <h5 className="mt-3">About</h5>
        {profile.profile[0]?.description}
      </div>
    );
  }
};
