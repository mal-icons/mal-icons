import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-archive-in",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsArchiveIn {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.71 5.29-3-3A11 0 0 0 18 2H6a11 0 0 0-0.710.29L2.29 5.29A11 0 0 0 2 6v13c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V6a0.990.99 0 0 0-0.29-0.71zM6.41 4h11.17l1 1H5.41l1-1zM12 18l-5-5h3v-3h4v3h3l-5 5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsArchiveIn;
