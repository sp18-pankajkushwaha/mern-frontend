#How to run:
1) Clone the repository into your system.
2) In the file studentRecords.js the first section is dataset, followed by tasks A to E.
3) After every task there is function call (Commented).
4) Uncomment the function call that you desire to run and run the file to see output on console log.
5) Although every function has appropriate validation checks, make sure to pass correct arguments inside functions to see correct output.

#Function definitions, Logic and concepts used:

#Task A: Core Student Utilities:

1) function addStudent(students, newStudent) takes two parameters, original student array and newStudent object containing information of new student. The function is using spread syntax to create a new array with all existing students and then add a new student object to the end.

2) function removeStudentById(students, id) takes two parameters , students array and id of the student whose data is to be removed. The function uses Array filter method which return an array which matched the condition student.id !== id. Hence, student with given id is removed.

3) function updateStudentName(students, id, newName) takes three parameters- students array, id whose name is to be updated, newName-updated name. The function uses map method to returns a new array of students where only the student with a specific id has their name updated. 

4) function getStudentById(students, id) uses find method of array which returns the desired student data whose id matches to the given id.

5) function calculateAverageGrade(student) uses map() to extract the grade from each course and then filters out any non-numeric grades using typeof g === 'number'. This ensures that only valid numeric values are used in the calculation. If no numeric grades are found, the function returns null, preventing a divide-by-zero error. If numeric grades exist, it uses reduce() to compute their total sum and then divides that sum by the number of grades to get the average. This average is rounded to two decimal places using .toFixed(2) and then converted back to a number using parseFloat(), as .toFixed() returns a string. 

6) function getHonorRoll(students, threshold) utilizes the above function calculateAverageGrade(student) to calculate the average and then uses array method filter to return an array of students whose average is greater than threshold.

7) function getCourseRoster(students, courseCode) uses for..of to loop over students and find method to get the students whose course code matches to given course code. If the condition is satisfied, the student's information is pushed inside roster array and returned.


#Task B: Loop-Based Reporting

1) function printStudentSummaries(students) iterates over an array of students and, for each valid student, calculates their name, age, and average grade. It uses a for...of loop to traverse the array and a try...catch block to handle any errors that may occur during grade calculation using the calculateAverageGrade function. The function is asynchronous and returns a resolved promise at the end.

2) async function findFirstUnderage(students, ageLimit) searches through a list of students to find and return the first student whose age is below a given ageLimit. It uses a for...of loop to iterate over the array and a conditional check to compare each student's age against the ageLimit. 

3) async function countFailingCourses(students, passMark) uses for..of loop to iterate over students array. It uses a variable failCount to keep count of fail students. Inside the loop every time the condition course, `grade<passMark` is true, failCount increments.

#Task C: Object Methods & Destructuring 

1) function printCourseStats(students, courses) first builds a lookup map (courseTitleMap) to associate course codes with their titles, then iterates over all students and collects numeric grades into a courseGradesMap where each course code maps to an array of grades. After gathering all grades, it uses Object.entries() to loop through each course's grade list, calculates the min and max using Math.min and Math.max, and computes the average using .reduce() and .toFixed(2) for formatting. 

#Task D: Factory and Closure

1) function isStudentGradeInRange uses the .find() method to locate the student object from the array based on the matching ID. If the student is found, it then uses the .some() method to scan through the student's courses and determine if any course grade is a number and lies within the specified range. If at least one such grade exists, it returns true; otherwise, it returns false. 

#Task E:Relational-Style Operations

1) getCoursesByInstructor(courses, instructorId) retrieves a list of courses taught by a specific instructor, identified by their instructorId. It first filters the courses array using .filter() to keep only those course objects where the instructorId matches the given input. Then, it uses .map() to transform the filtered course objects into a simplified format containing only the code and title properties.

2) function totalCreditsPerStudent(students, courses) creates a Map called courseCreditMap that maps each course code to its corresponding credit value using .map() on the courses array. Then, for each student, it uses .reduce() on their list of enrolled courses to sum up the credits by looking up each course code in the Map. If a course code is missing or unmatched, it defaults to 0 using the || operator. Finally, it returns a new array of objects, each containing the student's id, name, and their computed totalCredits. 

3) function studentTranscript(students, courses, instructors)  creates two Map objects: one (courseMap) maps course codes to full course objects, and the other (instructorMap) maps instructor IDs to their names for quick lookup. For each student, it uses .map() to iterate through their enrolled courses, retrieving the course title and corresponding instructor name using these maps.

4) function courseAverages(students) calculates the average grade for each course across all students. It first creates an object courseGrades where each course code maps to an array of grades collected from all students. Using nested for...of loop , it iterates through each student and their courses to create this map. Then, using Object.entries() and .map(), it processes each course's grade list by summing the grades with .reduce(), dividing by the number of entries to get the average, and rounding it to two decimal places using .toFixed(2) followed by a unary + to convert the string back to a number. 

5) function topStudentsByCourse(students, courseCode, n) first initializes an empty array ranked and uses a for...of loop to go through each student. For each student, it uses .find() to check if they are enrolled in the specified course. If found, their id, name, and grade in that course are added to the ranked array. After collecting all relevant students, the function sorts the array in descending order of grades using .sort(), and then extracts the top n students using .slice(0, n). 