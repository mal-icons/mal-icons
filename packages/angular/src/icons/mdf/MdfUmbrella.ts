import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-umbrella",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfUmbrella {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.5 6.92 13 5.77V3.4c0-0.260.22-0.480.5-0.48s0.50.210.50.48V4h2v-0.6C16 2.07 14.88 1 13.5 1S11 2.07 11 3.4v2.37L9.5 6.92 6 6.07l5.05 15.25c0.150.450.550.680.950.68s0.8-0.230.95-0.69L18 6.07l-3.50.85zM13.28 8.5l0.760.580.92-0.23L13 14.8V8.29l0.280.21zm-3.320.590.76-0.580.28-0.22v6.51L9.03 8.86l0.930.23z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfUmbrella;
