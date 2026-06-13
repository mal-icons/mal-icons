import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-circle-alert",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiCircleAlert {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Circle Alert"}],["path",{"d":"M12.5,9a0.50.5,0,0,0-1,0h0V13.02a0.50.5,0,0,0,1,0Z"}],["circle",{"cx":"12","cy":"15","r":"0.5"}],["path",{"d":"M12,21.94A9.93,9.93,0,1,1,21.93,12,9.95,9.95,0,0,1,12,21.94ZM12,3.07A8.93,8.93,0,1,0,20.93,12,8.94,8.94,0,0,0,12,3.07Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiCircleAlert;
