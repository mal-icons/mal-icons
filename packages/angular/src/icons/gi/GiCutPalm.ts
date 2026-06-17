import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-cut-palm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCutPalm {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M320.98 18.7c-0.5-0.01-0.98-0.01-1.460.01-1.360.09-2.040.27-3.060.4L220.38 169.8c1.53 6.57 3.09 13.04 4.78 19.23l-18.03 4.93c-9.07-33.21-15.03-70.99-26.54-94.73-5.76-11.87-12.47-19.7-20.62-23.25-6.71-2.92-15.48-3.28-27.630.6 17.26 50.1 24.18 102.38 33.49 143.83 4.93 21.96 10.62 40.81 18.21 54.32 7.59 13.51 16.32 21.48 29.11 24.63l-4.46 18.15c-18.37-4.51-31.72-17.22-40.94-33.62-4.19-7.46-7.68-15.74-10.73-24.67-30.79 33.74-75.13 70.58-137.6 98.47v135.72h140.44c22.44-42.52 44.63-79.1 66.23-105.74 22.48-27.71 44.39-46.06 68.25-46.47l-0.190.01 2.99-0.11-28.43-81.85 21.16-7.06-33.67-79.03 68.99 92.84-27.9 7.52 31.3 66.41 149.42-5.56c4.27-5.49 7.61-14.58 8.1-23.910.47-8.97-1.77-17.21-5.07-22.17l-119.5 3.42c0.14-8.21-0.4-16.46-1.55-24.63l130.18-45.3c2.5-6.4 2.67-15.490-24.11-2.58-8.33-7.59-15.26-12.38-18.79l-130.13 43.94c-3.5-8.29-7.59-16.23-12.18-23.69l108.24-77.54c0.02-6.1-2.63-14.56-7.79-21.48-5.36-7.2-12.65-12.41-19.1-14.17l-109.4 79.31c-6.44-5.68-13.27-10.51-20.36-14.32L358.24 39.23c-2.26-4.45-6.89-9.4-13.26-13.22-7.39-4.44-16.57-7.18-24.01-7.31zm-8.97 336.23c-3.66 51.05-31.82 66.58-31.82 95.01 0 14.12 15.5 26.68 31.82 26.68 15.96 0 32.46-12.49 32.46-27.36 0-29.61-27.88-43.21-32.46-94.34z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCutPalm;
