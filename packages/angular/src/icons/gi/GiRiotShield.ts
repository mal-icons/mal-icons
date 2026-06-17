import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-riot-shield",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiRiotShield {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M147.72 22l-12 186.06L136 206l20.47 19.28 60.06 4.22-62.72 17.53-19.69-14.19L119.28 462.72c34.19 37.57 246.03 46.01 292.78 1l10.09-156.34-0.50.66-106.28 28.72 108.66-58.59 15.31-237.31c-0.420.05-0.830.08-1.250.13l-17.84-12C342.78 48 262.7 41.09 162.06 26.5c-4.81-1.42-9.6-2.91-14.34-4.5zm35.16 65.88l10.03 1.53c71.27 10.93 142.92 12.91 215.44 1.69l11.56-1.81-0.81 11.69-6.16 87.87-0.47 6.72-6.53 1.69c-75.59 19.37-150.23 19.05-223.19-1.75l-7.28-2.090.53-7.56 6.16-87.870.72-10.1zm17.25 21.38l-4.94 70.09c16.56 4.39 33.17 7.7 49.88 9.91l-44.28-79.91c-0.22-0.03-0.44-0.06-0.66-0.09zm199.5 1.84c-22.02 3-43.94 4.81-65.78 5.59l38.09 68.81c7.59-1.42 15.19-3.04 22.81-4.87l4.88-69.53zM223.75 112.25l43.94 79.31c8.840.65 17.71 1.01 26.59 1.06l-43.09-77.75c-9.16-0.71-18.3-1.59-27.44-2.62zm-11.34 181.66c5.07 11.86 14.75 13.32 25.13 13.25-8.64 17.160.01 19.54 13.1 31.25-22.47-5.5-36.890.28-49.44 22.16-0.34-18.09-6.85-35.86-33.5-45.81 22.11 1.2 42.39-3.12 44.72-20.84zm70.38 48.53c6.36 16.68 20.84 19.92 36.94 10.94-8.65 17.16-9.59 30.1 3.5 41.81-22.47-5.5-32.29-7.15-40.78 8.94-0.34-18.09-14.78-24.43-34.31-29.03 19.98-4.56 33.01-12.25 34.66-32.66zm88.47 70.28c0.34 18.090.94 25.36 19.25 32.28-16.95-1.49-29.38 4.88-34.06 19.47-5.07-11.86-14.75-13.32-25.12-13.25 2.8-8.81 4.74-19.01-3.22-30.22 17.49 3.45 31.430.68 43.16-8.28z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiRiotShield;
