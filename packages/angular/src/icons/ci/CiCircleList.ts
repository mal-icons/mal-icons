import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-circle-list",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiCircleList {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Circle List"}],["path",{"d":"M20.44,6.06h-9a0.50.5,0,0,1,0-1h9a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M20.44,12.5h-9a0.50.5,0,0,1,0-1h9a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M20.44,18.93h-9a0.50.5,0,1,1,0-1h9a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M5.56,8.06a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,5.56,8.06Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,5.56,4.06Z"}],["path",{"d":"M5.56,14.5a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,5.56,14.5Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,5.56,10.5Z"}],["path",{"d":"M5.56,20.94a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,5.56,20.94Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,5.56,16.94Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiCircleList;
