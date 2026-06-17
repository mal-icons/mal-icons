import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-basket3-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBasket3Fill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.76 1.07a0.50.5 0 0 1 0.170.69L3.38 6h9.23L10.07 1.76a0.50.5 0 1 1 0.86-0.51L13.78 6H15.5a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5H0.5a0.50.5 0 0 1-0.5-0.5v-1A0.50.5 0 0 1 0.5 6h1.72L5.07 1.24a0.50.5 0 0 1 0.69-0.17zM2.47 15.430.94 9h14.11l-1.52 6.43a0.750.75 0 0 1-0.730.57H3.2a0.750.75 0 0 1-0.73-0.57z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBasket3Fill;
