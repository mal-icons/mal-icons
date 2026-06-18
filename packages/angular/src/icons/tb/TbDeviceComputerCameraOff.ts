import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-device-computer-camera-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDeviceComputerCameraOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.15 6.15a7 7 0 0 0 9.7 9.7m2 -2a7 7 0 0 0 -9.7 -9.69"}],["path",{"d":"M9.13 9.12a3 3 0 0 0 3.74 3.75m2 -2a3 3 0 0 0 -3.74 -3.74"}],["path",{"d":"M8 16l-2.09 3.49a1 1 0 0 0 0.86 1.51h10.47a1 1 0 0 0 0.86 -1.51l-2.09 -3.49"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDeviceComputerCameraOff;
