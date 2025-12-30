// app/recruit/page.tsx
"use client";

import { useState } from "react";
import RecruitHero from "../components/RecruitHero";
import RecruitJobs from "../components/RecruitJobs";
import ApplicationForm from "../components/ApplicationForm";
import RecruitProcess from "../components/RecruitProcess";

export default function RecruitPage() {
  const [selectedJob, setSelectedJob] = useState<string>("");

  return (
    <main className="pt-24 pb-20">
      <RecruitHero />
      <RecruitJobs onSelectJob={setSelectedJob} />
      <ApplicationForm selectedJob={selectedJob} />
      <RecruitProcess />
    </main>
  );
}
