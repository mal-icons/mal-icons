import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-v8",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiV8 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.83 6c0-0.160.01-0.320.02-0.480.02-0.210.07-0.40.11-0.6l-0.69-1.38H0l2.18 3.82h1.53l2.1 3.98a6.53 6.53 0 0 1 1.73-2.74A5.12 5.12 0 0 1 6.83 6zM10.37 19.66L12 22.64l1.64-2.97c-0.530.14-1.080.23-1.640.23s-1.1-0.1-1.63-0.23zM17.73 3.55l-0.72 1.26c0.060.240.110.480.130.73a5.15 5.15 0 0 1-0.68 3.07 6.57 6.57 0 0 1 1.73 2.75l2.1-3.98h1.53L24 3.55h-6.27z M17.85 12.01a6 6 0 0 0-2.07-3.31A4.64 4.64 0 0 0 12 1.36 4.64 4.64 0 0 0 7.36 6a4.62 4.62 0 0 0 0.87 2.7A5.99 5.99 0 0 0 6 13.36a6.01 6.01 0 0 0 3.81 5.59 6.02 6.02 0 0 0 4.380 6.01 6.01 0 0 0 3.66-6.94zM12 4.23c1.13 0 2.050.92 2.05 2.05a2.05 2.05 0 0 1-4.09 0c0-1.130.92-2.04 2.05-2.04zm0 11.46a2.32 2.32 0 0 1 0-4.64c1.28 0 2.32 1.04 2.32 2.32S13.28 15.68 12 15.68z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiV8;
