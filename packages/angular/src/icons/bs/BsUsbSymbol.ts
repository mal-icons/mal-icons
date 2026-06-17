import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-usb-symbol",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsUsbSymbol {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"m7.790.31-1.53 2.3A0.250.25 0 0 0 6.47 3H7.5v7.32a2.5 2.5 0 0 0-0.51-0.3L5.91 9.56A1.5 1.5 0 0 1 5 8.18v-0.27a1.5 1.5 0 1 0-1 0v0.27a2.5 2.5 0 0 0 1.52 2.3l1.080.46a1.5 1.5 0 0 1 0.89 1.13 2 2 0 1 0 1.02-0.01v-0.9a1.5 1.5 0 0 1 0.76-1.3l1.48-0.85A2.5 2.5 0 0 0 12 7h0.76a0.250.25 0 0 0 0.25-0.25v-2.5a0.250.25 0 0 0-0.25-0.25h-2.5a0.250.25 0 0 0-0.250.25v2.5c0 0.140.110.250.250.25h0.74a1.5 1.5 0 0 1-0.75 1.14L8.76 8.99a3 3 0 0 0-0.260.17V3h1.03a0.250.25 0 0 0 0.21-0.39L8.210.31a0.250.25 0 0 0-0.42 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsUsbSymbol;
