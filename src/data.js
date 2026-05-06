export const announcements = [
  {
    id: 1,
    title: 'Orientation Week Schedule',
    description: 'Prepare your schedule and join the welcome sessions with your adviser.',
    date: 'May 10, 2026',
  },
  {
    id: 2,
    title: 'Scholarship Seminar',
    description: 'Learn how to qualify for student support programs this semester.',
    date: 'May 12, 2026',
  },
  {
    id: 3,
    title: 'Library Access Update',
    description: 'New digital resources are available through the school library portal.',
    date: 'May 8, 2026',
  },
]

export const documentTypes = ['Certificate of Good Moral', 'Certificate of Registration', 'Certificate of Grades']

export const documentHistory = [
  { id: 1, type: 'COG', date: 'Apr 28, 2026', status: 'Pending' },
  { id: 2, type: 'COR', date: 'Apr 22, 2026', status: 'Processing' },
  { id: 3, type: 'Good Moral', date: 'Apr 12, 2026', status: 'Ready' },
]

export const subjects = [
  {
    id: 1,
    name: 'Calculus III',
    instructor: 'Prof. Reyes',
    schedule: 'Mon / Wed • 10:00 AM',
    classroomLink: '#',
  },
  {
    id: 2,
    name: 'Digital Logic Design',
    instructor: 'Ma’am Santos',
    schedule: 'Tue / Thu • 12:00 PM',
    classroomLink: '#',
  },
  {
    id: 3,
    name: 'Philippine History',
    instructor: 'Mr. Cruz',
    schedule: 'Fri • 8:00 AM',
    classroomLink: '#',
  },
]

export const studentInfo = {
  name: 'Juan Dela Cruz',
  studentId: '2026-14563',
  course: 'BS Information Technology',
  yearLevel: '2nd Year',
  email: 'juan.delacruz@example.edu.ph',
  section: 'IT-2A',
}

export const classroomPreview = {
  title: 'Digital Logic Design',
  summary: 'Review the latest assignment and class announcement for your next lecture.',
  updates: [
    { id: 1, type: 'Assignment', label: 'Project Proposal', detail: 'Submit by Friday, 11:59 PM.' },
    { id: 2, type: 'Announcement', label: 'Lab Room Change', detail: 'Room 402 for this week.' },
  ],
}

export const grades = [
  { id: 1, subject: 'Calculus III', grade: 1.75, units: 3, remark: 'Passed' },
  { id: 2, subject: 'Digital Logic Design', grade: 1.50, units: 3, remark: 'Passed' },
  { id: 3, subject: 'Philippine History', grade: 2.00, units: 3, remark: 'Passed' },
  { id: 4, subject: 'Programming Fundamentals', grade: 1.25, units: 3, remark: 'Passed' },
  { id: 5, subject: 'Web Development Basics', grade: 1.75, units: 3, remark: 'Passed' },
]

export const gradesHistory = [
  {
    semester: '1st Semester 2024-2025',
    grades: [
      { id: 1, subject: 'Calculus I', grade: 2.00, units: 3, remark: 'Passed' },
      { id: 2, subject: 'Physics', grade: 1.75, units: 3, remark: 'Passed' },
      { id: 3, subject: 'English', grade: 2.25, units: 3, remark: 'Passed' },
    ]
  },
  {
    semester: '2nd Semester 2024-2025',
    grades: [
      { id: 4, subject: 'Calculus II', grade: 1.50, units: 3, remark: 'Passed' },
      { id: 5, subject: 'Data Structures', grade: 1.25, units: 3, remark: 'Passed' },
      { id: 6, subject: 'Discrete Math', grade: 2.00, units: 3, remark: 'Passed' },
    ]
  },
  {
    semester: '1st Semester 2025-2026',
    grades: grades
  }
]

export const users = {
  students: [
    { id: 1, name: 'Juan Dela Cruz', email: 'student@csu.edu.ph', password: '123', studentId: '2026-14563', course: 'BS Information Technology', yearLevel: '2nd Year', section: 'IT-2A' },
    { id: 2, name: 'Maria Santos', email: 'maria@csu.edu.ph', password: '123', studentId: '2026-14564', course: 'BS Computer Science', yearLevel: '2nd Year', section: 'CS-2B' },
  ],
  teachers: [
    { id: 1, name: 'Prof. Reyes', email: 'reyes@csu.edu.ph', password: '123', subjects: ['Calculus III', 'Calculus I', 'Calculus II'] },
    { id: 2, name: 'Ma\'am Santos', email: 'santos@csu.edu.ph', password: '123', subjects: ['Digital Logic Design'] },
    { id: 3, name: 'Mr. Cruz', email: 'cruz@csu.edu.ph', password: '123', subjects: ['Philippine History'] },
  ],
  admins: [
    { id: 1, name: 'Admin User', email: 'admin@csu.edu.ph', password: '123' },
  ]
}

export const teacherClasses = [
  {
    teacherId: 1,
    subject: 'Calculus III',
    students: [
      { id: 1, name: 'Juan Dela Cruz', studentId: '2026-14563' },
      { id: 2, name: 'Maria Santos', studentId: '2026-14564' },
    ],
    posts: [
      { id: 1, title: 'Homework Due', content: 'Submit homework by Friday.', date: 'May 5, 2026' },
    ]
  },
  {
    teacherId: 2,
    subject: 'Digital Logic Design',
    students: [
      { id: 1, name: 'Juan Dela Cruz', studentId: '2026-14563' },
    ],
    posts: [
      { id: 1, title: 'Lab Assignment', content: 'Complete the logic gates lab.', date: 'May 4, 2026' },
    ]
  }
]

export const chatMessages = [
  { id: 1, from: 'student', message: 'How do I request a COG?', timestamp: 'May 5, 2026 10:00 AM' },
  { id: 2, from: 'admin', message: 'You can request it from the Documents page.', timestamp: 'May 5, 2026 10:05 AM' },
]
