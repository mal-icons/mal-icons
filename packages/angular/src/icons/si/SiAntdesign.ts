import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-antdesign",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAntdesign {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.45 6.68c0.51-0.510.51-1.33 0-1.84l-1.87-1.8700c-0.5-0.5-1.35-1.35-2.55-2.55-0.57-0.55-1.49-0.55-2.050.01L0.43 10.98a1.44 1.44 0 0 0 0 2.05l10.55 10.54a1.45 1.45 0 0 0 2.05 0l4.42-4.42c0.51-0.510.51-1.33 0-1.84a1.3 1.3 0 0 0-1.84 0l-3.35 3.35c-0.140.14-0.360.14-0.5 0l-8.43-8.42c-0.14-0.14-0.14-0.36 0-0.5L11.76 3.33c0.01-0.010.02-0.020.03-0.030.14-0.110.33-0.10.460.03l3.35 3.35c0.510.51 1.330.51 1.84 0zm-8.24 5.38a2.85 2.85 0 1 0 5.7 0 2.85 2.85 0 1 0-5.7 0zm14.37-1.03l-3.29-3.28c-0.51-0.51-1.33-0.51-1.840a1.3 1.3 0 0 0 0 1.84l2.22 2.22c0.140.140.140.36 0 0.5l-2.19 2.19a1.3 1.3 0 0 0 0 1.84 1.3 1.3 0 0 0 1.84 0l3.26-3.26a1.45 1.45 0 0 00-2.05Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAntdesign;
