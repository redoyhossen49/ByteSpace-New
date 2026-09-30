export const courseTabs = ["About", "Lessons", "Reviews"] as const;
export type CourseTab = (typeof courseTabs)[number];
