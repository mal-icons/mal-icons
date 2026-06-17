import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-hooded-assassin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiHoodedAssassin {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M332.03 66.13c-28.81-0.01-55.44 14.15-67.88 40.65 20.79 1.74 16 55.07 16 55.07-11.81 16.69-24.73 33.19-36.59 50.15 0 0-99.05 132.28-178.38 168.03-28.05 22.59-33.3 36.53-44.14 52.65-4.88 9.54 9.26 14.32 11.7 13.2 22.73-10.46 25.18-20.87 47.07-35.67 12.81-5.03 23.84-15.9 31.85-11.05 34.96 20.86 107.56 44.28 118.27 38.71 17.86-9.26-5.78-43.58 16.17-89.06 31.97-3.35 58.92-0.88 88.33-12.09 3.48 50.28 10.11 54.59 6.77 107.09l71.2 1.050.7-14.61-41.81-11.1c11.53-56.05 11.82-79 4.67-128-0.96-6.62-53.75-8.27-81.01-3.79 24.45-24.2 40.27-45.24 47.51-68.44l0.030.19c7.64 15.92 30.08 33.96 35.34 37.13 27.7 11.05 38.21 7.98 62.96 3.89 4.91-0.78 27.47 24.54 44.81 9.6 2.64-20.24 16.52-20.37-4.94-32.71-4.85-2.73-27.06 7.46-31.42 6.9-20.21-2.48-30.95-5.21-58.45-12.7-10.23-13.19-32.68-56.14-55.43-59.74 6.54-14.15 28.23-53.11 73.66-66.24-20.94-26.54-49.92-39.06-76.99-39.07zm82.41 46.72c-46.66 19.52-58.27 50.4-58.27 50.4l9.92 7.64s9.65-4.76 48.35-58.04zm23.04 160.01l-4.66 11.42c5.23-0.08 10.430.47 15.33 1.61-12.77 30.86-23.94 59.64-28.18 93.09l-0.91 7.56 4.86-5.89c20.81-25.67 32.3-55.25 44.95-85.78 4.2 2.66 8.24 5.89 12.07 9.35l4.78-11.37-20.52-8.53-31.77 66.58 24.06-69.71-20.02-8.32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiHoodedAssassin;
