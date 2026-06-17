import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-fire-bowl",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFireBowl {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M282.34 15.5C205.35 26.1 179.64 117.52 196.47 178.19c21.46 77.36-72.35 84.35-51.88-38.5-27.15 44.28-34.75 83.65-29.28 116.840.020.10.040.190.060.28 6.09 32.67 23.26 58.04 46.6 76.56 14.99 11.9 32.57 20.85 51.25 26.69-59.82-145.11 153.65-144.51 89.59 3.88 20.82-4.82 39.96-13.81 55.31-27 20.46-17.58 34.67-42.43 37.69-76.31 1.43-24.45-2.34-53.2-12.87-86.56-26.74 103.85-85.32 79.05-31.34-53.03-95.86 83.26-108.07-17.42-69.25-105.53zm130.53 258.06c-1.06 6.35-2.47 12.47-4.25 18.31 14.74 5.45 26.48 11.68 34.38 17.94 9.02 7.15 12.5 13.61 12.5 19.28 0 5.67-3.48 12.16-12.5 19.31-9.02 7.15-23.07 14.23-40.84 20.19-35.54 11.92-85.79 19.53-141.25 19.53s-105.67-7.61-141.22-19.53c-17.77-5.96-31.82-13.04-40.84-20.19-9.02-7.15-12.5-13.64-12.5-19.31 0-5.67 3.48-12.13 12.5-19.28 6.89-5.46 16.71-10.87 28.88-15.78-2.56-5.59-4.82-11.41-6.69-17.47-13.49 5.39-24.88 11.55-33.81 18.63-10.75 8.52-18.33 18.99-19.41 30.97h-0.16v9.34c0 44.85 24.79 85.12 63.47 113.63 38.68 28.51 91.44 45.78 149.5 45.78 58.06 0 110.82-17.27 149.5-45.78 38.68-28.51 63.47-68.77 63.47-113.62h-0.06c0.42-2.090.66-4.220.66-6.41 0-13.2-7.94-24.7-19.56-33.91-10.63-8.43-24.76-15.56-41.75-21.62z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFireBowl;
