import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-info-card-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiInfoCardFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 5C1 4.45 1.45 4 2 4H22C22.55 4 23 4.45 23 5V19C23 19.55 22.55 20 22 20H2C1.45 20 1 19.55 1 19V5ZM9 8H7V10H9V8ZM7 13V16H9V11H6V13H7ZM13 9V11H19V9H13ZM18 13H13V15H18V13Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiInfoCardFill;
