import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-delete-back-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDeleteBackFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.53 3H21C21.55 3 22 3.45 22 4V20C22 20.55 21.55 21 21 21H6.53C6.2 21 5.89 20.83 5.7 20.55L0.37 12.55C0.15 12.22 0.15 11.78 0.37 11.45L5.7 3.45C5.89 3.17 6.2 3 6.53 3ZM16 11H9V13H16V11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDeleteBackFill;
