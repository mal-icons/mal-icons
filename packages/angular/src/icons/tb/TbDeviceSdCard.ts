import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-device-sd-card",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDeviceSdCard {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 21h10a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2h-6.17a2 2 0 0 0 -1.41 0.59l-3.83 3.83a2 2 0 0 0 -0.59 1.41v10.17a2 2 0 0 0 2 2"}],["path",{"d":"M13 6v2"}],["path",{"d":"M16 6v2"}],["path",{"d":"M10 7v1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDeviceSdCard;
