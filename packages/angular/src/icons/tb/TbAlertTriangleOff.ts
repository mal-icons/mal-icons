import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-alert-triangle-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbAlertTriangleOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 18a1.91 1.91 0 0 0 -0.25 -0.87l-8.11 -13.53a1.91 1.91 0 0 0 -3.27 0l-1.04 1.74m-1.49 2.49l-5.57 9.3a1.91 1.91 0 0 0 1.64 2.87h16.11"}],["path",{"d":"M12 16h0.01"}],["path",{"d":"M3 3l18 18"}],["path",{"d":"M12 7v1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbAlertTriangleOff;
