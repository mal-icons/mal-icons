import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-map-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxMapAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.45 6.11-6-3a1 1 0 0 0-0.89 0L9 5.88 3.45 3.11A1 1 0 0 0 2 4v13c0 0.380.210.730.550.9l6 3a1 1 0 0 0 0.9 0L15 18.12l5.55 2.78a0.990.99 0 0 0 0.97-0.04c0.3-0.180.48-0.50.48-0.85V7c0-0.38-0.21-0.72-0.55-0.89zM10 7.62l4-2v10.76l-4 2V7.62zm-6-2 4 2v10.76l-4-2V5.62zm16 12.76-4-2V5.62l4 2v10.76z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxMapAlt;
