import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-bounding-box-circles",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBoundingBoxCircles {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M0 2a2 2 0 0 1 3.94-0.5h8.13A2 2 0 1 1 14.5 3.94v8.13a2 2 0 1 1-2.44 2.44H3.94A2 2 0 1 1 1.5 12.06V3.94A2 2 0 0 1 0 2m2.5 1.94v8.13c0.70.18 1.260.73 1.44 1.44h8.13a2 2 0 0 1 1.44-1.44V3.94A2 2 0 0 1 12.06 2.5H3.94A2 2 0 0 1 2.5 3.94M14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBoundingBoxCircles;
