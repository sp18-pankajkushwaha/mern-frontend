// student data 

 const students = [
  { id: 1, name: "Alice Johnson", age: 19, courses: [ { code: "CS101", grade: 88 }, { code: "PHYS101", grade: 91 }, { code: "ENG301", grade: 85 } ] },
  { id: 2, name: "Benjamin Lee", age: 20, courses: [ { code: "CS102", grade: 76 }, { code: "MATH201", grade: 82 }, { code: "ENG301", grade: 79 } ] },
  { id: 3, name: "Chloe Martinez", age: 18, courses: [ { code: "CS101", grade: 93 }, { code: "CS102", grade: 87 } ] },
  { id: 4, name: "Daniel Kim", age: 21, courses: [ { code: "CS101", grade: 85 }, { code: "PHYS101", grade: 88 }, { code: "MATH201", grade: 80 } ] },
  { id: 5, name: "Ella Zhang", age: 19, courses: [ { code: "CS102", grade: 89 }, { code: "MATH201", grade: 91 } ] },
  { id: 6, name: "Finn O'Brien", age: 20, courses: [ { code: "ENG301", grade: 75 }, { code: "PHYS101", grade: 78 } ] },
  { id: 7, name: "Grace Patel", age: 18, courses: [ { code: "CS101", grade: 90 }, { code: "CS102", grade: 84 }, { code: "ENG301", grade: 86 } ] },
  { id: 8, name: "Henry Thompson", age: 22, courses: [ { code: "PHYS101", grade: 72 }, { code: "CS102", grade: 74 }, { code: "ENG301", grade: 80 } ] },
  { id: 9, name: "Isla Brown", age: 19, courses: [ { code: "MATH201", grade: 89 }, { code: "PHYS101", grade: 91 } ] },
  { id: 10, name: "Jack Wilson", age: 20, courses: [ { code: "CS101", grade: 78 }, { code: "ENG301", grade: 83 } ] },
  { id: 11, name: "Kylie Nguyen", age: 18, courses: [ { code: "CS102", grade: 92 }, { code: "MATH201", grade: 90 }, { code: "PHYS101", grade: 88 } ] },
  { id: 12, name: "Liam Davis", age: 21, courses: [ { code: "CS101", grade: 87 }, { code: "CS102", grade: 85 }, { code: "ENG301", grade: 81 } ] },
  { id: 13, name: "Maya Garcia", age: 19, courses: [ { code: "MATH201", grade: 84 }, { code: "PHYS101", grade: 86 } ] },
  { id: 14, name: "Noah Smith", age: 20, courses: [ { code: "CS101", grade: 91 }, { code: "PHYS101", grade: 89 }, { code: "ENG301", grade: 90 } ] },
  { id: 15, name: "Olivia Chen", age: 18, courses: [ { code: "CS102", grade: 95 }, { code: "MATH201", grade: 92 } ] },
  { id: 16, name: "Parker Lewis", age: 22, courses: [ { code: "PHYS101", grade: 79 }, { code: "ENG301", grade: 76 } ] },
  { id: 17, name: "Quinn Anderson", age: 20, courses: [ { code: "CS101", grade: 84 }, { code: "MATH201", grade: 88 } ] },
  { id: 18, name: "Riley Moore", age: 19, courses: [ { code: "CS102", grade: 90 }, { code: "ENG301", grade: 87 } ] },
  { id: 19, name: "Sophia Taylor", age: 21, courses: [ { code: "CS101", grade: 86 }, { code: "CS102", grade: 89 }, { code: "MATH201", grade: 83 } ] },
  { id: 20, name: "Thomas Evans", age: 20, courses: [ { code: "PHYS101", grade: 85 }, { code: "MATH201", grade: 82 }, { code: "ENG301", grade: 80 } ] },
];


// courses 
const courses = [
  { code:'CS101', title:'Intro to CS',     credits:4, instructorId:100 },
  { code:'CS102', title:'Data Structures', credits:3, instructorId:101 },
  { code:'MATH201', title:'Calculus II',   credits:4, instructorId:102 },
  { code:'PHYS101', title:'Physics I',     credits:4, instructorId:103 },
  { code:'ENG301', title:'English Lit.',   credits:3, instructorId:104 }
];

// instructor 
 const instructors = [
  { id:100, name:'Dr. Smith',   dept:'Computer Science' },
  { id:101, name:'Prof. Lee',    dept:'Computer Science' },
  { id:102, name:'Dr. Gupta',   dept:'Mathematics' },
  { id:103, name:'Dr. Brien', dept:'Physics' },
  { id:104, name:'Prof. Davis', dept:'English' }
];



//Task A: Core Student Utilities

function addStudent(students, newStudent) {
  if (!Array.isArray(students)) throw new Error("students must be an array");
  if (!newStudent || typeof newStudent !== 'object') throw new Error("newStudent must be an object");
  if (!newStudent.id || !newStudent.name || !Array.isArray(newStudent.courses)) {
    throw new Error("newStudent must have id, name, and courses array");
  }
  if (students.some(s => s.id === newStudent.id)) throw new Error("Student with this id already exists");

  return [...students, { ...newStudent }];
}


function removeStudentById(students, id) {
  if (!Array.isArray(students)) throw new Error("students must be an array");
  if (typeof id !== 'number') throw new Error("id must be a number");

  const exists = students.some(student => student.id === id);
  if (!exists) throw new Error(`No student found with given id`);

  return students.filter(student => student.id !== id);
}


function updateStudentName(students, id, newName) {
  if (!Array.isArray(students)) throw new Error("students must be an array");
  if (typeof id !== 'number') throw new Error("id must be a number");
  if (typeof newName !== 'string' || !newName.trim()) {
    throw new Error("newName must be a non-empty string");
  }

  const exists = students.some(student => student.id === id);
  if (!exists) throw new Error(`No student found with given id`);

  return students.map(student =>
    student.id === id ? { ...student, name: newName } : student
  );
}


function getStudentById(students, id) {
  if (!Array.isArray(students)) throw new Error("students must be an array");
  if (typeof id !== 'number') throw new Error("id must be a number");

  const student = students.find(student => student.id === id);
  if (!student) throw new Error(`No student found with given id`);

  return student;
}


function calculateAverageGrade(student) {
  if (!student || typeof student !== 'object' || !Array.isArray(student.courses)) {
    throw new Error("Invalid student object");
  }
  const grades = student.courses.map(course => course.grade).filter(g => typeof g === 'number');
  if (grades.length === 0) return null;

  const total = grades.reduce((sum, g) => sum + g, 0);
  return parseFloat((total / grades.length).toFixed(2));
}


function getHonorRoll(students, threshold) {
  if (!Array.isArray(students)) throw new Error("students must be an array");
  if (typeof threshold !== 'number' || threshold < 0) throw new Error("Invalid threshold");

  return students.filter(student => {
    const avg = calculateAverageGrade(student);
    return avg !== null && avg >= threshold;
  });
}


function getCourseRoster(students, courseCode) {
  if (!Array.isArray(students)) throw new Error("students must be an array");
  if (typeof courseCode !== 'string' || !courseCode.trim()) {
    throw new Error("Invalid course code");
  }

  const roster = [];

  for (const student of students) {
    const course = student.courses.find(c => c.code === courseCode);
    if (course) {
      roster.push({
        id: student.id,
        name: student.name,
        grade: course.grade
      });
    }
  }

  if (roster.length === 0) {
    throw new Error(`No students found for given course code.`);
  }

  return roster;
}


//Calling the functions

const newStudent = {
  id: 21,
  name: "Zoe Harper",
  age: 20,
  courses: [
    { code: "CS101", grade: 91 },
    { code: "ENG301", grade: 88 }
  ]
};

const updatedStudents = addStudent(students, newStudent);
const removeStudent= removeStudentById(students, 8)
const updatedName = updateStudentName(students, 1, "Alice Johnson Jr.");
const student = getStudentById(students, 3);
const avg = calculateAverageGrade(student);
const honorRoll = getHonorRoll(students, 105);
const Roster = getCourseRoster(students, "CS101");


// console.log(JSON.stringify(updatedStudents, null, 2));
// console.log(removeStudent)
// console.log(updatedName)
// console.log(student)
// console.log(avg)
// console.log(honorRoll)
// console.log(Roster)



//B: Loop Based Reporting

async function printStudentSummaries(students) {
  if (!Array.isArray(students)) throw new Error("students must be an array");

  for (const student of students) {
    if (!student.name || typeof student.name !== 'string' || typeof student.age !== 'number') {
      console.warn("Skipping invalid student entry:", student);
      continue;
    }

    try {
      const avg = calculateAverageGrade(student);
      console.log(`Name: ${student.name}, Age: ${student.age}, Average Grade: ${avg ?? 'N/A'}`);
    } catch (err) {
      console.error(`Error calculating grade for ${student.name}:`, err.message);
    }
  }

  return Promise.resolve(); 
}


async function findFirstUnderage(students, ageLimit) {
  if (!Array.isArray(students)) throw new Error("students must be an array");
  if (typeof ageLimit !== 'number' || ageLimit <= 0) throw new Error("Invalid ageLimit");

  for (const student of students) {
    if (typeof student.age === 'number' && student.age < ageLimit) {
      return Promise.resolve(student);
    }
  }

  return Promise.resolve(null); // no one found
}


async function countFailingCourses(students, passMark) {
  if (!Array.isArray(students)) throw new Error("students must be an array");
  if (typeof passMark !== 'number' || passMark < 0 || passMark > 100) {
    throw new Error("Invalid pass mark");
  }

  let failCount = 0;

  for (const student of students) {
    if (!Array.isArray(student.courses)) continue;

    for (const course of student.courses) {
      if (typeof course.grade === 'number' && course.grade < passMark) {
        failCount++;
      }
    }
  }

  return Promise.resolve(failCount);
}

/*
(async () => {
  await printStudentSummaries(students);

  const underage = await findFirstUnderage(students, 19);
  console.log("First underage student:", underage);

  const failingCourses = await countFailingCourses(students, 60);
  console.log("Total failing courses:", failingCourses);
})();

*/

//C. Object Methods & Destructuring

function printCourseStats(students, courses) {
  if (!Array.isArray(students)) throw new Error("students must be an array");
  if (!Array.isArray(courses)) throw new Error("courses must be an array");
  const courseTitleMap = {};
  for (const course of courses) {
    if (course && typeof course.code === 'string' && typeof course.title === 'string') {
      courseTitleMap[course.code] = course.title;
    }
  }

  const courseGradesMap = {};

  for (const student of students) {
    if (!student || typeof student !== 'object' || !Array.isArray(student.courses)) continue;

    for (const { code, grade } of student.courses) {
      if (typeof code !== 'string' || typeof grade !== 'number') continue;

      if (!courseGradesMap[code]) courseGradesMap[code] = [];
      courseGradesMap[code].push(grade);
    }
  }

  for (const [courseCode, grades] of Object.entries(courseGradesMap)) {
    if (!grades.length) continue;

    const min = Math.min(...grades);
    const max = Math.max(...grades);
    const avg = +(grades.reduce((sum, g) => sum + g, 0) / grades.length).toFixed(2);

    const title = courseTitleMap[courseCode] || "Unknown Title";
    console.log(`${courseCode}: ${title} → min=${min}, max=${max}, avg=${avg}`);
  }
}

//printCourseStats(students, courses);

//D. Factory & Closure

function isStudentGradeInRange(students, studentId, min, max) {
  if (!Array.isArray(students)) throw new Error("students must be an array");
  if (typeof studentId !== 'number') throw new Error("studentId must be a number");
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error("min and max must be numbers");
  }
  if (min > max) {
    throw new Error("min must be less than or equal to max");
  }

  const student = students.find(s => s.id === studentId);
  if (!student) return false;

  return student.courses.some(course => 
    typeof course.grade === 'number' && course.grade >= min && course.grade <= max
  );
}

/*
const result = isStudentGradeInRange(students, 5, 85, 90);
console.log(`Student 5 has grade in range 85-90? ${result}`);
*/

//E.Relational-Style Operations

function getCoursesByInstructor(courses, instructorId) {
  if (!Array.isArray(courses)) throw new Error("courses must be an array");
  if (typeof instructorId !== 'number') throw new Error("instructorId must be a number");

  const matchingCourses = courses.filter(course => course.instructorId === instructorId);

  if (matchingCourses.length === 0) {
    throw new Error(`No courses found for instructor with given instructor ID`);
  }

  return matchingCourses.map(({ code, title }) => ({ code, title }));
}


function totalCreditsPerStudent(students, courses) {
  if (!Array.isArray(students) || !Array.isArray(courses)) {
    throw new Error("students and courses must be arrays");
  }

  const courseCreditMap = new Map(
    courses.map(({ code, credits }) => [code, credits])
  );

  return students.map(student => {
    const totalCredits = student.courses.reduce((sum, { code }) => {
      return sum + (courseCreditMap.get(code) || 0);
    }, 0);
    return { id: student.id, name: student.name, totalCredits };
  });
}

function studentTranscript(students, courses, instructors) {
  if (!Array.isArray(students) || !Array.isArray(courses) || !Array.isArray(instructors)) {
    throw new Error("All inputs must be arrays");
  }

  const courseMap = new Map(courses.map(c => [c.code, c]));
  const instructorMap = new Map(instructors.map(i => [i.id, i.name]));

  return students.map(student => {
    const transcript = student.courses.map(({ code, grade }) => {
      const course = courseMap.get(code);
      const instructorName = course ? instructorMap.get(course.instructorId) : "Unknown";

      return {
        course: course ? course.title : code,
        grade,
        instructorName
      };
    });

    return { id: student.id, name: student.name, transcript };
  });
}


function courseAverages(students) {
  if (!Array.isArray(students)) throw new Error("students must be an array");

  const courseGrades = {};

  for (const student of students) {
    for (const { code, grade } of student.courses) {
      if (!courseGrades[code]) courseGrades[code] = [];
      courseGrades[code].push(grade);
    }
  }

  return Object.entries(courseGrades).map(([code, grades]) => {
    const avg = grades.reduce((a, b) => a + b, 0) / grades.length;
    return { course: code, avgGrade: +avg.toFixed(2) };
  });
}


function topStudentsByCourse(students, courseCode, n) {
  if (!Array.isArray(students)) throw new Error("students must be an array");
  if (typeof courseCode !== 'string') throw new Error("courseCode must be a string");
  if (typeof n !== 'number' || n <= 0) throw new Error("n must be a positive number");

  const ranked = [];

  for (const student of students) {
    const course = student.courses.find(c => c.code === courseCode);
    if (course) {
      ranked.push({ id: student.id, name: student.name, grade: course.grade });
    }
  }
  if (ranked.length === 0) {
    throw new Error(`No students found for given course code."`);
  }
  if (n > ranked.length) {
    throw new Error(`Total number of students enrolled in course is less than n.`);
  }
  return ranked
    .sort((a, b) => b.grade - a.grade)
    .slice(0, n);
}


/*
const instructorId = 101;
try {
  const instructorCourses = getCoursesByInstructor(courses, instructorId);
  console.log("Courses by instructor:", instructorCourses);
} catch (err) {
  console.error(err.message);
}
*/


//const creditsPerStudent = totalCreditsPerStudent(students, courses);
//console.log("Total credits per student:", creditsPerStudent);


/*
try {
  const transcripts = studentTranscript(students, courses, instructors);
  console.log("Student transcripts:",JSON.stringify(transcripts, null, 2) );
} catch (err) {
  console.error(err.message);
}
*/

/*
try {
  const averages = courseAverages(students);
  console.log("Course averages:", averages);
} catch (err) {
  console.error(err.message);
}
*/

/*
const courseCode = "CS101";
const topN = 3;

try {
  const topStudents = topStudentsByCourse(students, courseCode, topN);
  console.log(`Top ${topN} students in ${courseCode}:`, topStudents);
} catch (err) {
  console.error(err.message);
}
*/




