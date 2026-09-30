import { categories, levels, type Course } from "./data";

/* Every dropdown treats its first option as the "no filter" default. */
export const ALL = "all";

export const sortDefault = "relevant";

export const priceOptions = [
  { value: ALL, label: "All prices" },
  { value: "under-30", label: "Under $30" },
  { value: "30-plus", label: "$30 & over" },
];

export const levelOptions = [
  { value: ALL, label: "All levels" },
  ...levels.map((level) => ({ value: level, label: level })),
];

export const categoryOptions = [
  { value: ALL, label: "All categories" },
  ...categories.map((category) => ({ value: category, label: category })),
];

export const sortOptions = [
  { value: sortDefault, label: "Most relevant" },
  { value: "rating", label: "Highest rated" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "newest", label: "Newest first" },
];

export function matchesPrice(price: number, filter: string) {
  if (filter === "under-30") return price < 30;
  if (filter === "30-plus") return price >= 30;
  return true;
}

export function filterCourses(
  courses: Course[],
  filters: {
    query: string;
    price: string;
    level: string;
    category: string;
    topic: string;
  },
) {
  const needle = filters.query.trim().toLowerCase();

  return courses.filter((course) => {
    if (needle) {
      const haystack =
        `${course.title} ${course.author} ${course.topic} ${course.category}`.toLowerCase();
      if (!haystack.includes(needle)) return false;
    }
    if (filters.price !== ALL && !matchesPrice(course.price, filters.price)) {
      return false;
    }
    if (filters.level !== ALL && course.level !== filters.level) return false;
    if (filters.category !== ALL && course.category !== filters.category) {
      return false;
    }
    if (filters.topic !== ALL && course.topic !== filters.topic) return false;
    return true;
  });
}

export function sortCourses(courses: Course[], sort: string) {
  const sorted = [...courses];

  if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);
  if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
  if (sort === "newest")
    sorted.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return sorted;
}
