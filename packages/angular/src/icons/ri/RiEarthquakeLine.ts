import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-earthquake-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiEarthquakeLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 21C4.49 21 4.06 20.61 4.01 20.12L4 20V11H1L11.33 1.61C11.68 1.29 12.2 1.27 12.57 1.53L12.67 1.61L23 11H20V20C20 20.51 19.61 20.94 19.12 20.99L19 21H5ZM12 3.7L6 9.16V19L10.36 19L11.75 17.5L8 14L13 11L10.5 9L13.5 6L13 9L15.5 11L11.5 14L15 17L13.75 19L18 19V9.16L12 3.7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiEarthquakeLine;
