import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-circle-more",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiCircleMore {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Circle More"}],["circle",{"cx":"12","cy":"12","r":"1"}],["circle",{"cx":"16","cy":"12","r":"1"}],["circle",{"cx":"8","cy":"12","r":"1"}],["path",{"d":"M12,21.93A9.93,9.93,0,1,1,21.93,12,9.94,9.94,0,0,1,12,21.93ZM12,3.07A8.93,8.93,0,1,0,20.93,12,8.94,8.94,0,0,0,12,3.07Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiCircleMore;
