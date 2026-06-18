import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-kaios",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiKaios {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.340a3.67 3.67 0 0 0-3.65 3.67 3.67 3.67 0 0 0 3.67 3.67 3.67 3.67 0 1 0-0.03-7.35zM4.620.16a2.75 2.75 0 0 0-2.75 2.75v18.17a2.75 2.75 0 1 0 5.49 0V2.91A2.75 2.75 0 0 0 4.620.16zm6.95 7.21a2.73 2.73 0 0 0-2.24 4.29l7.81 11.15a2.73 2.73 0 1 0 4.47-3.13L13.81 8.53a2.73 2.73 0 0 0-2.23-1.16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiKaios;
