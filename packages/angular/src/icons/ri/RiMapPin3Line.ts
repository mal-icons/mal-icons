import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-map-pin-3-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMapPin3Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 19.95C6.5 19.45 3 15.63 3 11C3 6.03 7.03 2 12 2C16.97 2 21 6.03 21 11C21 15.63 17.5 19.45 13 19.95V24H11V19.95ZM12 18C15.87 18 19 14.87 19 11C19 7.13 15.87 4 12 4C8.13 4 5 7.13 5 11C5 14.87 8.13 18 12 18Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMapPin3Line;
