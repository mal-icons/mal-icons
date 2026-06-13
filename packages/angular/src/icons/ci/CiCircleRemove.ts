import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-circle-remove",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiCircleRemove {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Circle Remove"}],["path",{"d":"M9.53,13.77a0.50.5,0,0,0,0.710.71c0.59-0.59,1.18-1.18,1.77-1.76l1.77,1.76a0.50.5,0,0,0,0.71-0.71c-0.59-0.58-1.18-1.17-1.76-1.760.41-0.420.82-0.82,1.23-1.240.18-0.180.35-0.360.53-0.53a0.50.5,0,0,0-0.71-0.71L12,11.29,10.24,9.53a0.50.5,0,0,0-0.710.71L11.29,12Z"}],["path",{"d":"M12,21.93A9.93,9.93,0,1,1,21.93,12,9.95,9.95,0,0,1,12,21.93ZM12,3.07A8.93,8.93,0,1,0,20.93,12,8.94,8.94,0,0,0,12,3.07Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiCircleRemove;
