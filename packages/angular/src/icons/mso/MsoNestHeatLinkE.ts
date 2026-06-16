import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-nest-heat-link-e",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoNestHeatLinkE {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-0.22-60Q621-140 720.5-239.28q99.5-99.28 99.5-240.5Q820-621 720.72-720.5t-240.5-99.5Q339-820 239.5-720.72t-99.5 240.5Q140-339 239.28-239.5q99.28 99.5 240.5 99.5Zm0.04-200Q422-340 381-381.18q-41-41.18-41-99T381.18-579q41.18-41 99-41T579-578.82q41 41.18 41 99T578.82-381q-41.18 41-99 41Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoNestHeatLinkE;
