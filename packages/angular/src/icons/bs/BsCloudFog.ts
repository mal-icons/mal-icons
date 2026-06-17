import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-cloud-fog",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCloudFog {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 13.5a0.50.5 0 0 1 0.5-0.5h9a0.50.5 0 0 1 0 1h-9a0.50.5 0 0 1-0.5-0.5m0 2a0.50.5 0 0 1 0.5-0.5h9a0.50.5 0 0 1 0 1h-9a0.50.5 0 0 1-0.5-0.5m10.41-9.47a5 5 0 0 0-9.5-1A3.5 3.5 0 1 0 3.5 12H13a3 3 0 0 0 0.41-5.97M8.5 3a4 4 0 0 1 3.98 3.560.50.5 0 0 0 0.50.45H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 0.61-4.930.50.5 0 0 0 0.6-0.33A4 4 0 0 1 8.5 3"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCloudFog;
