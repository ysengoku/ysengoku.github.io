export interface TimelineItem {
  id: number;
  side: "left" | "right";
  image: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
}
