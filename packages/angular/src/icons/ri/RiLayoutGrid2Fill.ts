import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-layout-grid-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiLayoutGrid2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3C2.45 3 2 3.45 2 4V8L7.5 8V3H3ZM9.5 3V8H14.5V3H9.5ZM16.5 3V8H22V4C22 3.45 21.55 3 21 3H16.5ZM22 10H16.5V14H22V10ZM22 16H16.5V21H21C21.55 21 22 20.55 22 20V16ZM14.5 21V16H9.5V21H14.5ZM7.5 21V16H2V20C2 20.55 2.45 21 3 21H7.5ZM2 14H7.5V10L2 10V14ZM9.5 10H14.5V14H9.5V10Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiLayoutGrid2Fill;
