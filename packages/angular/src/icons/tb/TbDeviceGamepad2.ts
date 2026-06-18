import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-device-gamepad-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDeviceGamepad2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.01 4.23a2.3 2.3 0 0 1 -3.92 -2.03l1.63 -8.17a5 5 0 0 1 4.9 -4.02h3.4"}],["path",{"d":"M14 15l4.07 4.28a2.3 2.3 0 0 0 3.93 -2.02l-1.6 -8.23"}],["path",{"d":"M8 9v2"}],["path",{"d":"M7 10h2"}],["path",{"d":"M14 10h2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDeviceGamepad2;
