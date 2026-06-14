import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-info",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcInfo {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["circle",{"fill":"#2196F3","cx":"24","cy":"24","r":"21"}],["rect",{"x":"22","y":"22","fill":"#fff","width":"4","height":"11"}],["circle",{"fill":"#fff","cx":"24","cy":"16.5","r":"2.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcInfo;
