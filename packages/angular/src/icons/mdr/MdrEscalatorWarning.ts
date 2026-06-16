import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-escalator-warning",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrEscalatorWarning {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.5 2c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2zm9 7.5c0 0.830.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5S17.83 8 17 8s-1.50.67-1.5 1.5zm3 2.5h-2.84c-0.580.01-1.140.32-1.450.86l-0.92 1.32L9.72 8a2.02 2.02 0 0 0-1.71-1H5c-1.1 0-2 0.9-2 2v5c0 0.550.45 1 1 1h0.5v6c0 0.550.45 1 1 1h3c0.55 0 1-0.45 1-1v-9.39l2.24 3.89c0.180.310.510.50.870.5h1.1c0.33 0 0.63-0.160.82-0.43l0.47-0.67V21c0 0.550.45 1 1 1h2c0.55 0 1-0.45 1-1v-4c0.55 0 1-0.45 1-1v-2.5c0-0.82-0.67-1.5-1.5-1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrEscalatorWarning;
