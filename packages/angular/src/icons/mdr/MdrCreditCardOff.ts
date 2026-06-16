import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-credit-card-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCreditCardOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.19 21.19 2.81 2.81a11 0 0 0-1.41 0C1 3.2 1 3.83 1.39 4.22l0.840.84c-0.140.28-0.220.6-0.220.94L2 18c0 1.110.89 2 2 2h13.17l2.61 2.61c0.390.39 1.020.39 1.41 0 0.39-0.390.39-1.03 0-1.42zM4 12V8h1.17l4 4H4zm2.83-8H20c1.11 0 2 0.89 2 2v12c0 0.34-0.080.66-0.230.94L14.83 12H20V8h-9.17l-4-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCreditCardOff;
