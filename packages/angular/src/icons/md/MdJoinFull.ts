import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-join-full",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdJoinFull {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["ellipse",{"cx":"12","cy":"12","rx":"3","ry":"5.74"}],["path",{"d":"M7.5 12c0-0.970.23-4.16 3.03-6.5C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7c0.9 0 1.75-0.19 2.53-0.5-2.8-2.34-3.03-5.53-3.03-6.5zM16 5c-0.9 0-1.750.19-2.530.5 2.8 2.34 3.03 5.53 3.03 6.5 0 0.97-0.23 4.16-3.03 6.50.780.31 1.630.5 2.530.5 3.86 0 7-3.14 7-7s-3.14-7-7-7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdJoinFull;
