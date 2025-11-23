// pages/api/scholarships.js

export default function handler(req, res) {
  const scholarships = [
    {
      id: 1,
      title: "Harvard Graduate Scholarship",
      country: "USA",
      level: "Masters / PhD",
      deadline: "2025-02-10",
      link: "https://www.harvard.edu/scholarships"
    },
    {
      id: 2,
      title: "DAAD Germany Scholarship",
      country: "Germany",
      level: "Masters",
      deadline: "2025-03-12",
      link: "https://www.daad.de"
    },
    {
      id: 3,
      title: "Oxford Clarendon Scholarship",
      country: "UK",
      level: "Masters / PhD",
      deadline: "2025-01-30",
      link: "https://www.ox.ac.uk/clarendon"
    }
  ];

  res.status(200).json({
    status: "success",
    data: scholarships
  });
}
