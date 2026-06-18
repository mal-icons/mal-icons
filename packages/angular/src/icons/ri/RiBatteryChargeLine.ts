import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-battery-charge-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiBatteryChargeLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 19H3C2.45 19 2 18.55 2 18V6C2 5.45 2.45 5 3 5H9.63L8.46 7H4V17H8V19ZM12.38 19L13.54 17H18V7H14V5H19C19.55 5 20 5.45 20 6V18C20 18.55 19.55 19 19 19H12.38ZM21 9H23V15H21V9ZM12 11H15L10 19V13H7L12 5V11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiBatteryChargeLine;
