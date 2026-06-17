import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-bandaged",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBandaged {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M243.47 20.94c-0.430-0.78 0-1.060.03-24.63 2.65-45.48 20.25-54.03 44.41l111.81-18C288.27 31.26 269.77 21 249.1 21c-2.41 0-4.34-0.07-5.62-0.06zm66.09 43.87L184.41 84.94c-0.1 1.6-0.19 3.21-0.19 4.84 0 12.11 3.08 23.39 8.34 33.22l121.31-29.94c0.05-1.080.09-2.180.09-3.28 0-8.85-1.58-17.25-4.41-24.97zm0.41 48.44L204.5 139.28c0.210.220.410.450.630.66l13.06 13.03-18.22 2.81c-11.08 1.72-20.27 5.5-28.12 11.03l179.13 21.03c-2.53-4.08-5.32-7.86-8.38-11.25-10.39-11.52-23.76-19.22-43-21.69l-18.47-2.34 12.91-13.41c6.95-7.2 12.48-16.03 15.94-25.91zm-154.94 70.41c-7.15 9.81-12.79 21.86-17.12 35.38l170.75-17.34-153.62-18.03zM363 214.97l-230.22 23.37c-4.68 21.51-6.83 45.06-7.75 67.91l248.06-28.81c-1.21-19.3-3.54-38.3-8.03-55.31-0.64-2.43-1.33-4.82-2.06-7.16zm10.97 81.19L136.81 323.72l186.16 22.910.37-4.590.69-8.62h50.38c-0.01-12-0.05-24.57-0.44-37.25zm-195.28 51.53l6.31 70.44 130.44 23.09 6.06-75.94-142.81-17.59zm8.06 89.75l4.91 54.5h119.72l2.56-32-127.19-22.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBandaged;
