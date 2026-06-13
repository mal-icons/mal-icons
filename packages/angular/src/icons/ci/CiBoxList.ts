import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-box-list",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiBoxList {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Box List"}],["path",{"d":"M6.56,8.06h-2a1.5,1.5,0,0,1-1.5-1.5v-2a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.56,8.06Zm-2-4a0.50.5,0,0,0-0.50.5v2a0.50.5,0,0,0,0.50.5h2a0.50.5,0,0,0,0.5-0.5v-2a0.50.5,0,0,0-0.5-0.5Z"}],["path",{"d":"M6.56,20.94h-2a1.5,1.5,0,0,1-1.5-1.5v-2a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.56,20.94Zm-2-4a0.50.5,0,0,0-0.50.5v2a0.50.5,0,0,0,0.50.5h2a0.50.5,0,0,0,0.5-0.5v-2a0.50.5,0,0,0-0.5-0.5Z"}],["path",{"d":"M6.56,14.5h-2a1.5,1.5,0,0,1-1.5-1.5V11a1.5,1.5,0,0,1,1.5-1.5h2a1.5,1.5,0,0,1,1.5,1.5v2A1.5,1.5,0,0,1,6.56,14.5Zm-2-4a0.50.5,0,0,0-0.50.5v2a0.50.5,0,0,0,0.50.5h2a0.50.5,0,0,0,0.5-0.5V11a0.50.5,0,0,0-0.5-0.5Z"}],["path",{"d":"M20.44,6.06h-9a0.50.5,0,0,1,0-1h9a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M20.44,12.5h-9a0.50.5,0,0,1,0-1h9a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M20.44,18.93h-9a0.50.5,0,1,1,0-1h9a0.50.5,0,0,1,0,1Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiBoxList;
