import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-assist-walker",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAssistWalker {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"12.5","cy":"4.5","r":"2"}],["path",{"d":"m19.77 17.72-0.64-6.37A1.49 1.49 0 0 0 17.64 10H16c-1.5-0.02-2.86-0.54-3.76-1.44l-2-1.98A1.95 1.95 0 0 0 8.83 6c-0.51 0-1.020.2-1.410.59L4.08 9.91c-0.530.68-0.51 1.57-0.21 2.13l1.43 2.8-2.55 3.26a1 1 0 0 0 0.17 1.4c0.440.34 1.070.26 1.41-0.17l2.56-3.29c0.33-0.420.47-0.950.41-1.48l-0.07-0.530.770.72V19c0 0.550.45 1 1 1s1-0.45 1-1v-4.29c0-0.53-0.21-1.04-0.59-1.41l-1.53-1.53 2.36-2.36c0.940.94 1.72 1.82 3.59 2.32l-0.75 7.46c-0.040.440.30.830.750.830.38 0 0.7-0.290.75-0.66l0.33-2.84h3.18l0.14 1.22c-0.440.26-0.730.74-0.73 1.28 0 0.830.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5c0-0.56-0.29-1.04-0.73-1.3zM15.09 15l0.41-3.5h2l0.41 3.5h-2.82z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAssistWalker;
