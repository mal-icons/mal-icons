import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-usb-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsUsbOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 8h4v4h-1v2c0 0.34-0.080.66-0.230.94L16 13.17V12h-1V8zm-4 0.17 2 2V6h2l-3-4-3 4h2v2.17zM13 16v2.28c0.60.34 1 0.98 1 1.72 0 1.1-0.9 2-2 2s-2-0.9-2-2c0-0.740.4-1.37 1-1.72V16H8c-1.11 0-2-0.89-2-2v-2.28c-0.6-0.34-1-0.98-1-1.72 0-0.590.26-1.130.68-1.49L1.39 4.22 2.8 2.81l18.38 18.38-1.41 1.41-6.6-6.6H13zm-2-2v-0.17l-2.51-2.51c-0.140.16-0.310.29-0.490.4V14h3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsUsbOff;
