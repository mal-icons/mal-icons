import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-circle-info",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiCircleInfo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Circle Info"}],["path",{"d":"M11.5,15a0.50.5,0,0,0,1,0h0V10.98a0.50.5,0,0,0-1,0Z"}],["circle",{"cx":"12","cy":"9","r":"0.5"}],["path",{"d":"M12,2.07A9.93,9.93,0,1,1,2.07,12,9.95,9.95,0,0,1,12,2.07Zm0,18.87A8.93,8.93,0,1,0,3.07,12,8.94,8.94,0,0,0,12,20.93Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiCircleInfo;
