import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-map-pin-4-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMapPin4Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 17.94C7.05 17.45 4 14.08 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10C20 14.08 16.95 17.45 13 17.94V21H11V17.94ZM12 16C15.31 16 18 13.31 18 10C18 6.69 15.31 4 12 4C8.69 4 6 6.69 6 10C6 13.31 8.69 16 12 16ZM5 22H19V24H5V22Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMapPin4Line;
