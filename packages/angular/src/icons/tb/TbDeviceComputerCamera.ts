import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-device-computer-camera",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDeviceComputerCamera {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}],["path",{"d":"M9 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M8 16l-2.09 3.49a1 1 0 0 0 0.86 1.51h10.47a1 1 0 0 0 0.86 -1.51l-2.09 -3.49"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDeviceComputerCamera;
