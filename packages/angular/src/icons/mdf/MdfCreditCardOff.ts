import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-credit-card-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfCreditCardOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.9 21.9 2.1 2.10.69 3.51l1.55 1.55c-0.150.28-0.230.6-0.230.94L2 18c0 1.110.89 2 2 2h13.17l3.31 3.31 1.42-1.41zM4 12V8h1.17l4 4H4zm2.83-8H20c1.11 0 2 0.89 2 2v12c0 0.34-0.080.66-0.230.94L14.83 12H20V8h-9.17l-4-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfCreditCardOff;
