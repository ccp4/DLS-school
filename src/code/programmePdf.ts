import { jsPDF } from "jspdf";
import { autoTable } from "jspdf-autotable";

import { days } from "./sessions";

// jspdf-autotable sets this on the document but doesn't declare it
declare module "jspdf" {
  interface jsPDF {
    lastAutoTable: { finalY: number };
  }
}

type SessionType = (typeof days)[number]["sessions"][number]["type"];

// RGB equivalents of the Tailwind colours used on the Programme page
const fillForType: Record<SessionType, [number, number, number]> = {
  Lecture: [209, 250, 229], // emerald-100
  Practical: [252, 231, 243], // pink-100
  Meal: [254, 252, 232], // yellow-50
  Break: [255, 255, 255], // white
  Other: [224, 242, 254], // sky-100
};
const headerFill: [number, number, number] = [7, 89, 133]; // sky-800

export function downloadProgrammePdf() {
  const doc = new jsPDF({ format: "a4" });
  const margin = 15;

  doc.setFontSize(18);
  doc.text(
    "Diamond-CCP4 Data Collection and Structure Solution Workshop 2026",
    margin,
    20,
    {
      maxWidth: doc.internal.pageSize.getWidth() - 2 * margin,
    },
  );
  doc.setFontSize(14);
  doc.text("Programme", margin, 36);

  let y = 42;
  for (const day of days) {
    autoTable(doc, {
      startY: y,
      margin: { left: margin, right: margin },
      head: [[{ content: day.title, colSpan: 4 }]],
      body: day.sessions.map((s) => [
        s.time,
        s.title,
        s.speakers?.map((p) => p.name).join(", ") ?? "",
        s.location?.name ?? "",
      ]),
      theme: "grid",
      rowPageBreak: "avoid",
      headStyles: { fillColor: headerFill, fontSize: 11, halign: "center" },
      styles: { fontSize: 9, lineColor: [220, 220, 220], lineWidth: 0.1 },
      columnStyles: {
        0: { cellWidth: 14 },
        1: { fontStyle: "bold" },
        2: { cellWidth: 50 },
        3: { cellWidth: 32, fontStyle: "italic" },
      },
      didParseCell: (data) => {
        if (data.section === "body") {
          data.cell.styles.fillColor =
            fillForType[day.sessions[data.row.index].type];
        }
      },
    });
    y = doc.lastAutoTable.finalY + 8;
  }

  doc.save("DLS-CCP4-workshop-2026-programme.pdf");
}
