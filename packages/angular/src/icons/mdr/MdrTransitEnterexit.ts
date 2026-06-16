import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-transit-enterexit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrTransitEnterexit {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.5 18H8c-1.1 0-2-0.9-2-2V9.5C6 8.67 6.67 8 7.5 8S9 8.67 9 9.5v3.27L14.95 7c0.57-0.55 1.48-0.54 2.040.02s0.56 1.470.01 2.04L11.15 15h3.35c0.83 0 1.50.67 1.5 1.5s-0.67 1.5-1.5 1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrTransitEnterexit;
