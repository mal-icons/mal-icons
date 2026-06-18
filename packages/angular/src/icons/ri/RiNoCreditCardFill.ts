import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-no-credit-card-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiNoCreditCardFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.59 21L21.19 22.61L22.61 21.19L2.81 1.39L1.39 2.81L2.12 3.53C2.05 3.67 2 3.83 2 4V7H5.59L9.59 11H2V20C2 20.55 2.45 21 3 21H19.59ZM22 11V17.76L15.24 11H22ZM22 7H11.24L7.24 3H21C21.56 3 22 3.45 22 4V7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiNoCreditCardFill;
