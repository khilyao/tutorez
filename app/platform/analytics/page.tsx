"use client";
import { useAppSelector } from "@hooks/reduxHooks";
import { selectCurrentUser } from "@store/api/features/currentUserSlice";
import { useGetStudentsQuery } from "@/lib/store/api/studentApi";

import { useEffect } from "react";
import { Lesson } from "@/types/lessons";
import { SectionCards } from "@/components/section-cards";

const Analytics = () => {
  const { login, percentage } = useAppSelector(selectCurrentUser);
  const { data: students } = useGetStudentsQuery(login);

  const now = new Date();
  const currentMonth = now.getMonth();
  const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;

  const stats = students?.reduce(
    (acc: Record<string, number>, student: any) => {
      student.lessons?.forEach(({ price, duration, date }: Lesson) => {
        const [day, month, year] = date.split(".").map(Number);
        const lessonMonth = month - 1;

        if (lessonMonth === currentMonth) {
          acc.currentMonthAmount =
            (acc.currentMonthAmount || 0) + price * duration;

          acc.currentMonthWorkHours =
            (acc.currentMonthWorkHours || 0) + duration;
        }

        if (lessonMonth === previousMonth) {
          acc.previousMonthAmount =
            (acc.previousMonthAmount || 0) + price * duration;

          acc.previousMonthWorkHours =
            (acc.previousMonthWorkHours || 0) + duration;
        }
      });

      return acc;
    },
    {}
  );

  const data = [
    {
      month: "Поточний місяць",
      amount: stats?.currentMonthAmount || 0,
      workHours: stats?.currentMonthWorkHours,
    },
    {
      month: "Попередній місяць",
      amount: stats?.previousMonthAmount || 0,
      workHours: stats?.previousMonthWorkHours,
    },
  ];
  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards data={data} percentage={percentage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
