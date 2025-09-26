import { days } from "../code/sessions";

function colourForType(
  type: "Lecture" | "Practical" | "Meal" | "Break" | "Other",
) {
  switch (type) {
    case "Lecture":
      return "bg-emerald-100";
    case "Practical":
      return "bg-pink-100";
    case "Meal":
      return "bg-yellow-50";
    case "Break":
      return "bg-white";
    case "Other":
      return "bg-sky-100";
  }
}

export function Programme() {
  const zoomDays = days.slice(0, 3);
  const otherDays = days.slice(3);

  const renderDays = (daysToRender: typeof days) => (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {daysToRender.map((day) => (
        <div
          className="flex max-w-xs flex-auto flex-col items-stretch"
          key={day.title}
        >
          <h2 className="bg-sky-800 p-2 text-center text-lg font-bold text-white">
            {day.title}
          </h2>
          <table className="w-full">
            <tbody>
              {day.sessions.map((session, idx) => (
                <tr className={colourForType(session.type)} key={idx}>
                  <td className="w-10 px-2 py-1 align-top">{session.time}</td>
                  <td className="px-2 py-1">
                    <p className="font-bold">{session.title}</p>
                    <p className="text-[0.9375rem]">
                      {session.speakers?.map((s) => s.name).join(", ")}
                    </p>
                    <p className="text-sm italic">{session.location?.name}</p>
                  </td>
                  <td className="px-2 py-1">
                    {session.location && (
                      <a href={session.location.link} className="text-lg">
                        <span className="material-symbols-outlined">
                          location_on
                        </span>
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );

  return (
    <main className="flex min-h-screen w-full flex-col pb-40 sm:pb-24">
      <p className="text-center">
        The programme is still being finalised and is subject to change.
      </p>
      <h2 className="mt-6 text-center text-xl font-semibold">Online days</h2>
      {renderDays(zoomDays)}
      {otherDays.length > 0 && (
        <>
          <h2 className="mt-8 text-center text-xl font-semibold">
            On-site workshop{" "}
          </h2>
          {renderDays(otherDays)}
        </>
      )}
    </main>
  );
}
