import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-biotech",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBiotech {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 19c-1.1 0-2 0.9-2 2h14c0-1.1-0.9-2-2-2h-4v-2h3c1.1 0 2-0.9 2-2h-8c-1.66 0-3-1.34-3-3 0-1.090.59-2.04 1.46-2.56C8.17 9.03 8 8.54 8 8c0-0.210.04-0.420.09-0.62A5.01 5.01 0 0 0 5 12c0 2.76 2.24 5 5 5v2H7z"}],["path",{"d":"M10.56 5.51C11.91 5.54 13 6.64 13 8c0 0.75-0.33 1.41-0.85 1.87l0.250.68c0.190.520.760.79 1.280.60.190.520.760.79 1.280.60.52-0.190.79-0.760.6-1.280.52-0.190.79-0.760.6-1.28L14.1 3.54a11 0 0 0-1.28-0.611 0 0 0-1.28-0.6c-0.520.19-0.790.76-0.6 1.28-0.520.19-0.790.76-0.6 1.28l0.220.61z"}],["circle",{"cx":"10.5","cy":"8","r":"1.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBiotech;
