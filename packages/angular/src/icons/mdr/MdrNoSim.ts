import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-no-sim",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrNoSim {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.09 4.44a11 0 0 0 0 1.41l2.03 2.03-0.120.13V19c0 1.10.9 2 2 2h10c0.35 0 0.68-0.10.97-0.26l1.17 1.17a11 0 1 0 1.41-1.41L4.5 4.44a11 0 0 0-1.41 0zM19 16.11V5c0-1.1-0.9-2-2-2h-6.99L7.95 5.06 19 16.11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrNoSim;
