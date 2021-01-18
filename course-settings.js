const courseSettings = {
  language: "en",
  name: "Java Programming",
  siteUrl: "https://programming-f20.mooc.fi",
  subtitle: "A course on learning Java",
  slug: "java-programming-f20",
  tmcCourse: "java-1-f2020",
  quizzesId: "2df6bcae-b5b4-4c73-9f0e-397c9dd0de50",
  tmcOrganization: "hy",
  bannerPath: "banner.svg",
  sidebarEntries: [
    {
      title: "About the course",
      path: "/",
    },
    {
      title: "Support and assistance",
      path: "/support-and-assistance",
    },
    {
      title: "Grading and exams",
      path: "/grading-and-exams",
    },
    {
      title: "Frequently asked questions",
      path: "/faq",
    },
    {
      title: "Exam 19.1",
      path: "exam",
    },
    { separator: true, title: "Java Programming I" },
  ],
  sidebarFuturePages: [
  ],
  splitCourses: false,
  useNewPointsVisualization: false
}

module.exports = {
  default: courseSettings,
}
