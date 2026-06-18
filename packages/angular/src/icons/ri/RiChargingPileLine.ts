import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-charging-pile-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiChargingPileLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 19H15V21H2V19H3V4C3 3.45 3.45 3 4 3H13C13.55 3 14 3.45 14 4V12H16C17.1 12 18 12.9 18 14V18C18 18.55 18.45 19 19 19C19.55 19 20 18.55 20 18V11H18C17.45 11 17 10.55 17 10V6.41L15.34 4.76L16.76 3.34L21.71 8.29C21.9 8.49 22 8.74 22 9V18C22 19.66 20.66 21 19 21C17.34 21 16 19.66 16 18V14H14V19ZM5 19H12V5H5V19ZM9 11H12L8 17V13H5L9 7V11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiChargingPileLine;
