import * as z from 'zod';



export type JobType = {
  id: number;
  title: string;
  category: string;
  income: number;
  createdAt: Date;
 
};

export enum JobStatus {
  item1 = '事務',
  item2 = 'エンジニア',
  item3 = '営業',
  item4 = 'デザイン',
  item5 = 'マーケティング',
  item6 = '財務、経理',
  item7 = '人事',
  item8 =  'カスタマーサポート',
  item9 = '製造',
  item10 = '医療介護',

}

export enum JobIncome {
  item1 = '200',
  item2 = '300',
  item3 = '400',
  item4 = '500',
  item5 = '600',
  item6 = '700',
  item7 = '800',
  item8 =  '900',

}

export enum JobMode {
  FullTime = 'full-time',
  PartTime = 'part-time',
  Internship = 'internship',
}

export const createAndEditJobSchema = z.object({
    position: z.string().min(2, {
      message: 'position must be at least 2 characters.',
    }),
    company: z.string().min(2, {
      message: 'company must be at least 2 characters.',
    }),
    location: z.string().min(2, {
      message: 'location must be at least 2 characters.',
    }),
    status: z.nativeEnum(JobStatus),
    mode: z.nativeEnum(JobMode),
  });
  
  export type CreateAndEditJobType = z.infer<typeof createAndEditJobSchema>;