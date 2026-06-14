import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-grape",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuGrape {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 5V2l-5.89 5.89"}],["circle",{"cx":"16.6","cy":"15.89","r":"3"}],["circle",{"cx":"8.11","cy":"7.4","r":"3"}],["circle",{"cx":"12.35","cy":"11.65","r":"3"}],["circle",{"cx":"13.91","cy":"5.85","r":"3"}],["circle",{"cx":"18.15","cy":"10.09","r":"3"}],["circle",{"cx":"6.56","cy":"13.2","r":"3"}],["circle",{"cx":"10.8","cy":"17.44","r":"3"}],["circle",{"cx":"5","cy":"19","r":"3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuGrape;
