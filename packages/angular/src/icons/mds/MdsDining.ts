import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-dining",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsDining {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 2H2v20h20V2zm-11 8.3c0 0.93-0.64 1.71-1.5 1.93V19H8v-6.77c-0.86-0.22-1.5-1-1.5-1.93V6h1v3h0.75V6h1v3H10V6h1v4.3zm4.58 2.29-0.080.03V19H14v-6.38l-0.08-0.04c-0.97-0.47-1.67-1.7-1.67-3.18 0-1.88 1.13-3.4 2.5-3.4 1.38 0 2.5 1.53 2.5 3.41 0 1.48-0.7 2.71-1.67 3.18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsDining;
