import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-taichigraphics",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTaichigraphics {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.34 20.67a1.94 1.94 0 0 0 1.94-1.94 1.94 1.94 0 1 0-3.88 0 1.94 1.94 0 0 0 1.94 1.94zM9.06 12.8a6.86 6.86 0 1 0-2.32-9.67c-0.060.1-0.120.2-0.180.3-0.060.1-0.110.21-0.170.31a6.86 6.86 0 0 0 2.68 9.06zm00h-4.23l-2.11 3.66 2.11 3.67h4.23l2.12-3.67zm0 7.33L6.82 24h4.48Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTaichigraphics;
