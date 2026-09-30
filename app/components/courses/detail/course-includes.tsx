import {
  PiCertificate,
  PiChatsCircle,
  PiFolderOpen,
  PiVideoCamera,
} from "react-icons/pi";

const includes = [
  { key: "resources", label: "Learning Resources", Icon: PiFolderOpen },
  { key: "videos", label: "Quality Lesson Videos", Icon: PiVideoCamera },
  {
    key: "certificate",
    label: "Certificate of Completion",
    Icon: PiCertificate,
  },
  { key: "consultation", label: "Private Consultation", Icon: PiChatsCircle },
];

/* "This course include" checklist under the enrolment call to action. */
export default function CourseIncludes() {
  return (
    <div>
      <h3 className="text-[16px] font-bold text-neutral-900">
        This course include
      </h3>

      <ul className="mt-4 flex flex-col gap-3">
        {includes.map(({ key, label, Icon }) => (
          <li key={key} className="flex items-center gap-3">
            <span className="text-brand-blue">
              <Icon aria-hidden size={18} />
            </span>
            <span className="text-[15px] text-neutral-700">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
