import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-discourse",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlDiscourse {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.08 3C7.15 3 3 6.96 3 11.84V21l9.07-0.01c4.93 0 8.93-4.11 8.93-8.99C21 7.11 17 3 12.08 3zm3.92 12.86a5.57 5.57 0 0 1-6.1 1.04l-3.590.81 1-3.19a5.44 5.44 0 0 1 0.11-5.41 5.55 5.55 0 0 1 4.75-2.68v0h0.01a5.53 5.53 0 0 1 5.13 3.44 5.44 5.44 0 0 1-1.3 6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlDiscourse;
