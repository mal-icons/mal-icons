import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-eye-closed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxEyeClosed {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M14.76 6.08C15 6.22 15.07 6.53 14.92 6.76C14.48 7.47 13.96 8.11 13.37 8.66L14.57 9.86C14.77 10.06 14.77 10.38 14.57 10.57C14.38 10.77 14.06 10.77 13.86 10.57L12.6 9.31C11.81 9.9 10.91 10.36 9.93 10.65L10.38 12.33C10.45 12.59 10.3 12.87 10.03 12.94C9.76 13.01 9.49 12.85 9.42 12.59L8.96 10.88C8.49 10.96 8 11 7.5 11C7 11 6.51 10.96 6.04 10.88L5.58 12.59C5.51 12.85 5.24 13.01 4.97 12.94C4.7 12.87 4.55 12.59 4.62 12.33L5.07 10.65C4.09 10.36 3.2 9.9 2.4 9.31L1.14 10.57C0.94 10.77 0.62 10.77 0.43 10.57C0.23 10.38 0.23 10.06 0.43 9.86L1.63 8.66C1.04 8.11 0.52 7.47 0.08 6.76C-0.07 6.53 0 6.22 0.24 6.08C0.47 5.93 0.78 6 0.92 6.23C1.4 7 1.99 7.68 2.66 8.24C2.67 8.25 2.68 8.26 2.69 8.27C4.01 9.36 5.66 10 7.5 10C10.31 10 12.66 8.51 14.08 6.23C14.22 6 14.53 5.93 14.76 6.08Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxEyeClosed;
