import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-archive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsArchive {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.7 5.29-3-3A11 0 0 0 18 2H6a11 0 0 0-0.710.29L2.3 5.29A0.990.99 0 0 0 2 6V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a0.990.99 0 0 0-0.3-0.71zM6.41 4h11.17l1 1H5.41l1-1zM17 13v1H7v-4h2v2h6v-2h2v3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsArchive;
