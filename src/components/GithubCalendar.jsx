"use client";

import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { SectionWrapper } from "../hoc";
import { styles } from "@/lib/utils/styles";

const GitCalendar = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className={`${styles.sectionHeadText} text-center mb-20`}>
        Github Activity.
      </h2>
      {loading ? (
        <p>loading...</p>
      ) : (
        <GitHubCalendar username="vishnukumarkvs" loading={loading} />
      )}
    </div>
  );
};

export default SectionWrapper(GitCalendar, "git");
