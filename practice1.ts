type Student = {
  id: number;
  name: string;
  grades: number[];
};

const students: Student[] = [
  { id: 1, name: "田中", grades: [85, 90, 78] },
  { id: 2, name: "鈴木", grades: [92, 86, 98] },
  { id: 3, name: "佐藤", grades: [76, 88, 82] },
];

// 課題: 各学生の平均点を計算し、平均点が85点以上の学生の名前を配列で返す関数を作成してください。
const filterStudentsByAverageGrade = (
  threshold: number,
  students: Student[]
): string[] => {
  if (!students || students.length === 0) {
    return [];
  }

  return students
    .map((student) => ({
      ...student,
      avarages:
        student.grades.reduce((acc, cur) => acc + cur) / student.grades.length,
    }))
    .filter((student) => student.avarages >= threshold)
    .map((student) => student.name);
};

console.log(filterStudentsByAverageGrade(85, students));

const getHighPerformingStudents = (
  threshold: number,
  students: Student[]
): string[] => {
  if (!students || students.length === 0) {
    return [];
  }

  return students.reduce((acc: string[], student) => {
    const average =
      student.grades.reduce((sum, grade) => sum + grade, 0) /
      student.grades.length;
    if (average >= threshold) {
      acc.push(student.name);
    }
    return acc;
  }, []);
};
