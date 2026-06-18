import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-runkit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRunkit {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.97 14.8a3 3 0 1-1.47 3.02l-9 5.2a3 3 0 1-3 0l-9-5.2a3 3 0 1-1.47-3.02l1.32-7.2a3 3 0 1.98-1.82 2.96 2.96 0 1.49-0.35l7.55-4.37a3.01 3.01 0 13.280.02l7.53 4.35c0.10.050.190.10.280.17a3 3 0 11.19 2zm-9.54-10.77l-7.72 1.59c-0.430.08-0.510.64-0.140.86l5.6 3.23c0.230.130.50.070.63-0.19l1.58-3.60.53-1.22c0.16-0.35-0.11-0.75-0.5-0.67z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRunkit;
