import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icon/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-truck",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icon [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icon>`,
})
export class FiTruck {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["rect",{"x":"1","y":"3","width":"15","height":"13"}],["polygon",{"points":"16 8 20 8 23 11 23 16 16 16 16 8"}],["circle",{"cx":"5.5","cy":"18.5","r":"2.5"}],["circle",{"cx":"18.5","cy":"18.5","r":"2.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}
