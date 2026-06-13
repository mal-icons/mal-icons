import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-bowling-ball-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoBowlingBallOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"256","cy":"256","r":"208","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["circle",{"cx":"288","cy":"200","r":"24","fill":"currentColor"}],["circle",{"cx":"296","cy":"128","r":"24","fill":"currentColor"}],["circle",{"cx":"360","cy":"168","r":"24","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoBowlingBallOutline;
