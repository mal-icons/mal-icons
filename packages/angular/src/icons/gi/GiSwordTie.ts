import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-sword-tie",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSwordTie {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M263.86 19.67c-1.54-0.04-3.120.13-4.660.13-32.84 0-59.58 33.91-59.58 75.92 0 21.27 7.08 40.47 18.1 54.29-68.13 10.57-82.84 105.41-66.65 191.56h23.33l-0.76-78.11 18.69-0.180.94 95.72 9 136.62h109.9l11.48-154.04h0.37l0.77-78.29 18.690.18-0.77 78.11h24.2c18.37-88.46-4.71-178.94-67.09-190.67 11.51-13.88 18.98-33.36 18.98-55.17 0-39.39-23.42-72.02-53.41-75.92-0.5-0.07-1.01-0.11-1.52-0.12zm-202.790.21v18.68H77.53v79.45H21.77v50.32h18.68v-31.64h23.34l-6.44 212.66L87.14 400.7l29.25-51.35-6.02-212.66h22.93v31.64h18.68v-50.32H96.21v-79.45h16.47V19.88h-51.61zm339.23 0v18.68h16.47v79.45h-55.76v50.32h18.68v-31.64h23.34l-6.44 212.66 29.79 51.35 29.25-51.35-6.02-212.66h22.93v31.64h18.68v-50.32h-55.76v-79.45h16.46V19.88h-51.61zm-167.95 66.59h53.39v18.69h-17.35v82.82h57.68v51.74h-18.69v-33.05h-24.04l6.24 220.3-30.26 53.11-30.81-53.11 6.66-220.29H210.7v33.05h-18.69V187.98h57.68v-82.82h-17.35V86.47z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSwordTie;
