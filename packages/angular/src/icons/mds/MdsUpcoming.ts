import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-upcoming",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsUpcoming {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.16 7.26-1.41-1.41-3.56 3.55 1.41 1.41s3.45-3.52 3.56-3.55zM11 3h2v5h-2zm-4.6 7.81L7.81 9.4 4.26 5.84 2.84 7.26c0.110.03 3.56 3.55 3.56 3.55zM22 12h-7c0 1.66-1.34 3-3 3s-3-1.34-3-3H2v9h20v-9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsUpcoming;
