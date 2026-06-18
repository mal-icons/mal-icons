import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-diamond",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxDiamond {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.81 3.84A2 2 0 0 0 16.19 3H7.81c-0.64 0-1.250.31-1.670.9l-4 6.58a11 0 0 0 0.11 1.19l9 10a11 0 0 0 1.490l9-10a11 0 0 0 0.11-1.19l-4.04-6.64zM12 19.51 5.25 12h13.51L12 19.51zM4.78 10l3.04-5 8.33-0.06L19.22 10H4.78z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxDiamond;
