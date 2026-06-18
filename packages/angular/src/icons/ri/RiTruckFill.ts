import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-truck-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTruckFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 8H20L23 12.06V18H20.96C20.72 19.7 19.26 21 17.5 21C15.74 21 14.28 19.7 14.04 18H8.96C8.72 19.7 7.26 21 5.5 21C3.74 21 2.28 19.7 2.04 18H1V6C1 5.45 1.45 5 2 5H16C16.55 5 17 5.45 17 6V8ZM17 10V13H21V12.72L18.99 10H17Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTruckFill;
