export interface Tasks {
  id: string;
  title: string;
  description: string;
  status: EStatus;
}

export enum EStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
}
