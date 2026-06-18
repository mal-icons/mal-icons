import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-lightbulb-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiLightbulbFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 18H7.94C7.64 16.73 6.3 15.69 5.75 15C4.66 13.63 4 11.89 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10C20 11.89 19.34 13.63 18.24 15C17.69 15.69 16.36 16.73 16.06 18H13V13H11V18ZM16 20V21C16 22.1 15.1 23 14 23H10C8.9 23 8 22.1 8 21V20H16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiLightbulbFill;
