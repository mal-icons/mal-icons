import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-menu-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgMenuLeft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 6C2 5.45 2.45 5 3 5H11C11.55 5 12 5.45 12 6C12 6.54 11.55 6.99 11 6.99H3C2.45 6.99 2 6.54 2 6Z","fill":"currentColor"}],["path",{"d":"M2 12C2 11.45 2.45 11 3 11H21C21.55 11 22 11.45 22 12C22 12.55 21.55 12.99 21 12.99H3C2.45 12.99 2 12.55 2 12Z","fill":"currentColor"}],["path",{"d":"M3 17.01C2.45 17.01 2 17.46 2 18C2 18.55 2.45 19 3 19H15C15.55 19 16 18.55 16 18C16 17.46 15.55 17.01 15 17.01H3Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgMenuLeft;
