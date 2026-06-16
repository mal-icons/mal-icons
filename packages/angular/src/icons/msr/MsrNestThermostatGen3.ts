import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-nest-thermostat-gen-3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrNestThermostatGen3 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-0.22-60Q621-140 720.5-239.28q99.5-99.28 99.5-240.5Q820-621 720.72-720.5t-240.5-99.5Q339-820 239.5-720.72t-99.5 240.5Q140-339 239.28-239.5q99.28 99.5 240.5 99.5Zm0.22-60q-116 0-198-82t-82-198q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198t-198 82Zm0.18-60Q571-260 635.5-324.68q64.5-64.68 64.5-155.5T635.32-635.5q-64.68-64.5-155.5-64.5T324.5-635.32q-64.5 64.68-64.5 155.5T324.68-324.5q64.68 64.5 155.5 64.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrNestThermostatGen3;
