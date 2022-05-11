export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products
}

export class TopPageModel {
    _id: string;
    firstLevelCategory: TopLevelCategory;
    secondCategory: string;
    title: string;
    category: string;
    work?: {
        count: number;
        juniorSalary: number;
        middleSalary: number;
        seniorSalary: number;
    };
    advantages: {
        title: string;
        description: string;
    }[];
    seoText: string;
    tagsTitle: string;
    tags: string[];
}
