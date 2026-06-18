import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-victoriametrics",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiVictoriametrics {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.89 3.08C0.24 1.54 4.850.01 11.96 0h0.08c7.120.01 11.72 1.54 10.07 3.08 0 0-6.17 5.66-8.3 7.47-0.40.35-1.080.61-1.770.62h-0.08c-0.68-0.01-1.36-0.27-1.77-0.62-2.13-1.82-8.3-7.47-8.3-7.47Zm20.55 2.77V8.58c0 0.3-0.110.7-0.320.89-1.33 1.22-6.47 5.93-8.32 7.5-0.40.35-1.080.61-1.770.62h-0.07c-0.68-0.01-1.36-0.27-1.77-0.61-1.85-1.58-6.99-6.28-8.32-7.5-0.2-0.19-0.32-0.58-0.32-0.88V5.85c1.96 1.79 7.16 6.51 8.64 7.760.40.35 1.080.61 1.770.62h0.07c0.68-0.01 1.36-0.27 1.77-0.62 1.47-1.26 6.68-5.97 8.64-7.76Zm0 6.42v2.73c0 0.3-0.110.7-0.320.89-1.33 1.22-6.47 5.93-8.32 7.5-0.40.35-1.080.61-1.770.62h-0.07c-0.68-0.01-1.36-0.27-1.77-0.62-1.85-1.58-6.99-6.28-8.32-7.5-0.2-0.19-0.32-0.58-0.32-0.88v-2.73c1.96 1.79 7.16 6.51 8.64 7.760.40.35 1.080.61 1.770.62h0.07c0.68-0.01 1.36-0.27 1.77-0.61 1.47-1.26 6.68-5.98 8.64-7.76Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiVictoriametrics;
