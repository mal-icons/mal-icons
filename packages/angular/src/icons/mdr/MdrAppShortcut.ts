import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-app-shortcut",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAppShortcut {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 18H7V6h10v1h2V3c0-1.1-0.9-2-2-2H7c-1.1 0-2 0.9-2 2v18c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2v-4h-2v1zm3.38-8.380.40.87c0.090.20.370.20.46 0l0.4-0.870.87-0.4c0.2-0.090.2-0.37 0-0.46l-0.87-0.4-0.4-0.87c-0.09-0.2-0.37-0.2-0.46 0l-0.40.87-0.870.4c-0.20.09-0.20.37 0 0.46l0.870.4z"}],["path",{"d":"m15.54 9-0.79 1.75-1.750.79a0.50.5 0 0 0 0 0.91l1.750.790.79 1.76a0.50.5 0 0 0 0.91 0l0.79-1.75 1.76-0.79a0.50.5 0 0 0 0-0.91l-1.75-0.79L16.46 9a0.510.51 0 0 0-0.92 0zm5.23 4.5-0.40.87-0.870.4c-0.20.09-0.20.37 0 0.46l0.870.40.40.87c0.090.20.370.20.46 0l0.4-0.870.87-0.4c0.2-0.090.2-0.37 0-0.46l-0.87-0.4-0.4-0.87a0.260.26 0 0 0-0.46 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAppShortcut;
