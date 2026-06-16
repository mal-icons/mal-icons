import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-cases",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoCases {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M100-80q-24 0-42-18t-18-42v-459h60v459h609v60H100Zm120-120q-24 0-42-18t-18-42v-518h242v-82q0-24 18-42t42-18h156q24 0 42 18t18 42v82h242v518q0 24-18 42t-42 18H220Zm0-60h640v-458H220v458Zm242-518h156v-82H462v82ZM220-260v-458 458Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoCases;
