import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-science",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdScience {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 11.33 18 18H6l5-6.67V6h2m2.96-2H8.04c-0.42 0-0.650.48-0.390.81L9 6.5v4.17L3.2 18.4c-0.490.66-0.02 1.60.8 1.6h16c0.82 0 1.29-0.940.8-1.6L15 10.67V6.5l1.35-1.69c0.26-0.330.03-0.81-0.39-0.81z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdScience;
