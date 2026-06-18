import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-threedotjs",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiThreedotjs {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.38 0a0.270.27 0 0 0-0.260.33l2.89 11.72a0.270.27 0 0 0 0.010.04l2.89 11.71a0.270.27 0 0 0 0.450.13L23.8 7.15a0.270.27 0 0 0-0.11-0.45l-5.78-1.67a0.270.27 0 0 0-0.12-0.04L6.38 1.72a0.270.27 0 0 0-0.14-0.04L0.460.01A0.270.27 0 0 0 0.38 0zm0.370.65L5.71 2.08 1.99 5.66zM6.61 2.34l4.86 1.4-3.65 3.52zm-0.520.12l1.22 4.93-4.88-1.4zm6.28 1.54l4.88 1.4-3.66 3.53zm-0.520.13l1.21 4.9-4.85-1.39zm6.3 1.53l4.95 1.42-3.71 3.57zm-0.520.12l1.22 4.93-4.88-1.4zm-15.430.7l4.96 1.42-3.73 3.59zM8.05 8.15l4.88 1.4-3.66 3.53zm-0.520.14l1.24 5.02-4.96-1.43zm6.27 1.54l4.97 1.43-3.73 3.59zm-0.520.13l1.24 5.01-4.96-1.43zm-9.63 2.44l4.87 1.41-3.66 3.52zm5.85 1.69l4.86 1.4-3.65 3.51zm-0.540.04l1.21 4.93-4.87-1.4zm-3.9 4.02l5.04 1.44-3.78 3.64z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiThreedotjs;
