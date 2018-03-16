export class Statistics {
  clubTeamsCount: StatisticItem[];
  runnerCategoryCount: StatisticItem[];
  teamCategoryCount: StatisticItem[];
  totalTeamsCount: number;
  completeTeamsCount: number;
  maleRunnerCount: number;
  femaleRunnerCount: number;
}

export class StatisticItem {
  name: string;
  value: number;
}
