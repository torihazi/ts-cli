type Employee = {
  id: number;
  name: string;
};

type Project = {
  id: string;
  name: string;
  members: Employee[];
};

const projects: Project[] = [
  {
    id: "P1",
    name: "Webサイトリニューアル",
    members: [
      { id: 1, name: "山田" },
      { id: 2, name: "伊藤" },
    ],
  },
  {
    id: "P2",
    name: "モバイルアプリ開発",
    members: [
      { id: 2, name: "伊藤" },
      { id: 3, name: "中村" },
    ],
  },
];

// 課題: 複数のプロジェクトに参加している従業員の名前を配列で返す関数を作成してください。

function findDuplicates<T>(arr: T[]): T[] {
  const seen = new Set<T>();
  const duplicates = new Set<T>();

  for (const item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }

  return Array.from(duplicates);
}

const findEmployeesInMultipleProjects = (projects: Project[]): string[] => {
  const allMemberNames = projects
    // .map((project) => project.members)
    // .flat()
    // .map((member) => member.name);
    .flatMap((project) => project.members.map((member) => member.name));

  return findDuplicates(allMemberNames);
};

console.log(findEmployeesInMultipleProjects(projects));
