import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-airplay-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiAirplayFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.4 13.53L17.4 20.2C17.57 20.42 17.52 20.73 17.3 20.9C17.21 20.96 17.11 21 17 21H7C6.72 21 6.5 20.78 6.5 20.5C6.5 20.39 6.54 20.29 6.6 20.2L11.6 13.53C11.77 13.31 12.08 13.27 12.3 13.43C12.34 13.46 12.37 13.5 12.4 13.53ZM18 19V17H20V5H4V17H6V19H2.99C2.44 19 2 18.56 2 18V4C2 3.45 2.46 3 2.99 3H21.01C21.56 3 22 3.44 22 4V18C22 18.55 21.54 19 21.01 19H18Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiAirplayFill;
