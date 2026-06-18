import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-charging-pile-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiChargingPile2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 11H19V7H20V4H22V7H23V11H22V18C22 19.66 20.66 21 19 21C17.34 21 16 19.66 16 18V14H14V19H15V21H2V19H3V4C3 3.45 3.45 3 4 3H13C13.55 3 14 3.45 14 4V12H16C17.1 12 18 12.9 18 14V18C18 18.55 18.45 19 19 19C19.55 19 20 18.55 20 18V11ZM9 11V7L5 13H8V17L12 11H9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiChargingPile2Fill;
