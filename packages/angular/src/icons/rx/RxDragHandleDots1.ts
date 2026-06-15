import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-drag-handle-dots-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxDragHandleDots1 {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"4.5","cy":"2.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"4.5","cy":"4.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"4.5","cy":"6.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"4.5","cy":"8.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"4.5","cy":"10.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"4.5","cy":"12.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"6.5","cy":"2.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"6.5","cy":"4.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"6.5","cy":"6.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"6.5","cy":"8.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"6.5","cy":"10.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"6.5","cy":"12.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"8.5","cy":"2.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"8.5","cy":"4.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"8.5","cy":"6.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"8.5","cy":"8.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"8.5","cy":"10.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"8.5","cy":"12.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"10.5","cy":"2.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"10.5","cy":"4.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"10.5","cy":"6.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"10.5","cy":"8.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"10.5","cy":"10.5","r":"0.6","fill":"currentColor"}],["circle",{"cx":"10.5","cy":"12.5","r":"0.6","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxDragHandleDots1;
