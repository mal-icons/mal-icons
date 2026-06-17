import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-aubergine",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAubergine {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M81.16 19.22c-9.98 17.95-11.65 41.48-8.47 63.62 1.68 11.69 4.66 23.05 9.19 33-10.98-2.33-22.86-6.74-35.25-12.06l19.62 36.47c-14.54-7.02-29.41-5.08-43.59-0.31 31.98 20.98 18.4 38.79-3.09 59.16 10-2.09 20.2-6.65 29.34-9.72-5.81 19.47-6.53 42.410.22 67.81 53.11 199.91 223.06 260.35 345.31 221.38 80.27-25.58 108.82-99.86 95.34-161.94-6.74-31.04-23.74-59.45-49.87-77.62-26.13-18.17-61.31-25.6-102.09-15.47h-0.03c-35.65 8.89-64.88 12.25-86 6.53-21.12-5.72-35.55-19.17-45-49.84-3.63-11.8-8.86-21.88-15.28-30.16-0.96-18.36 6.62-32.63 21.13-43.59-20.59-4.36-40.97-6.69-58.69 16.31 5.41-13.44-0.73-37.85-12.84-44.9-7.47 26-20.42 37.08-36.87 39.34-5.93-8.93-10.95-22.56-13.03-37.03-2.75-19.15-0.53-39.57 6.31-51.88L81.16 19.22zm74.13 125.62l3.22 1.31c12.98 6.57 24.08 18.93 30.44 39.56 10.7 34.74 31.14 55.11 57.97 62.37 14.84 4.02 31.19 4.42 49.06 2.44-105.22 87.71 83.95 233.89 175.12 125.66-8.69 36.32-34.73 69.42-82.34 84.59-112.23 35.78-270.73-17.07-321.56-208.4-6.91-26.02-5.13-47.92 1.84-65.28 5.14 1.72 8.95 6.42 10.85 16.06 17.38-13.67 29.66-28.08 31.41-43.97 17.52 0 35.05 2.9 52.56 14.22 1.27-10.08-0.18-19.73-8.56-28.56z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAubergine;
