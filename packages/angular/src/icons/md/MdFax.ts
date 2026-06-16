import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-fax",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdFax {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 9h-1V4H8v5h-0.78C6.67 8.39 5.89 8 5 8c-1.66 0-3 1.34-3 3v7c0 1.66 1.34 3 3 3 0.89 0 1.67-0.39 2.22-1H22v-8c0-1.66-1.34-3-3-3zM6 18c0 0.55-0.45 1-1 1s-1-0.45-1-1v-7c0-0.550.45-1 1-1s1 0.45 1 1v7zm4-12h6v3h-6V6zm10 12H8v-7h11c0.55 0 1 0.45 1 1v6z"}],["circle",{"cx":"15","cy":"13","r":"1"}],["circle",{"cx":"18","cy":"13","r":"1"}],["circle",{"cx":"15","cy":"16","r":"1"}],["circle",{"cx":"18","cy":"16","r":"1"}],["path",{"d":"M9 12h4v5H9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdFax;
