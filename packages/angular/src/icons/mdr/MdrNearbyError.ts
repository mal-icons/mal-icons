import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-nearby-error",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrNearbyError {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m11.29 8.28-3.01 3.01a11 0 0 0 0 1.41l3.01 3.01c0.390.39 1.020.39 1.41 0l3.01-3.01a11 0 0 0 0-1.41L12.7 8.28a11 0 0 0-1.41 0z"}],["path",{"d":"m10.59 2.59-8.01 8c-0.780.78-0.78 2.05 0 2.83l8.01 8c0.780.78 2.050.78 2.83 0l4.58-4.6V13.2l-6 6L4.79 12 12 4.79l6 6V7.17l-4.58-4.58c-0.78-0.79-2.05-0.79-2.83 0zM20 11v6c0 0.550.45 1 1 1s1-0.45 1-1v-6c0-0.55-0.45-1-1-1s-1 0.45-1 1z"}],["circle",{"cx":"21","cy":"21","r":"1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrNearbyError;
