import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-menu-oreos",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgMenuOreos {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 3C5.34 3 4 4.34 4 6H20C20 4.34 18.66 3 17 3H7Z","fill":"currentColor"}],["path",{"d":"M7 11C5.34 11 4 9.66 4 8H20C20 9.66 18.66 11 17 11H7Z","fill":"currentColor"}],["path",{"d":"M7 13C5.34 13 4 14.34 4 16H20C20 14.34 18.66 13 17 13H7Z","fill":"currentColor"}],["path",{"d":"M7 21C5.34 21 4 19.66 4 18H20C20 19.66 18.66 21 17 21H7Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgMenuOreos;
