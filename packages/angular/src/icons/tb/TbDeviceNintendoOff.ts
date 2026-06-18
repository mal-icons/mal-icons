import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-device-nintendo-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDeviceNintendoOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.71 4.72a4 4 0 0 0 -1.71 3.28v8a4 4 0 0 0 4 4h3v-10m0 -4v-2h-2"}],["path",{"d":"M14 10v-6h3a4 4 0 0 1 4 4v8c0 0.31 -0.04 0.61 -0.1 0.9m-1.62 2.39a3.98 3.98 0 0 1 -2.28 0.71h-3v-6"}],["path",{"d":"M5.5 8.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDeviceNintendoOff;
