import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-no-credit-card-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiNoCreditCardLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.59 21L21.19 22.61L22.61 21.19L2.81 1.39L1.39 2.81L2.12 3.53C2.05 3.67 2 3.83 2 4V20C2 20.55 2.45 21 3 21H19.59ZM17.59 19H4V12H10.59L17.59 19ZM6.59 8H4V5.42L6.59 8ZM22 4V17.76L20 15.76V12H16.24L12.24 8H20V5H9.24L7.24 3H21C21.56 3 22 3.45 22 4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiNoCreditCardLine;
