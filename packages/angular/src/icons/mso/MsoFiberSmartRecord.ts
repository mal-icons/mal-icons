import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-fiber-smart-record",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoFiberSmartRecord {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M360-200q-117 0-198.5-81.5T80-480q0-117 81.5-198.5T360-760q117 0 198.5 81.5T640-480q0 117-81.5 198.5T360-200Zm0-280Zm285 273v-60q78-14 126.5-75.5T820-483q0-79-49-140t-126-75v-60q102 16 168.5 94T880-483q0 103-66.5 181T645-207Zm-285-53q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoFiberSmartRecord;
