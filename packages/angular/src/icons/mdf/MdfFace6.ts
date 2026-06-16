import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-face-6",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfFace6 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8v-0.03c2.31-0.22 3.43-1.59 4.34-3.410.17-0.350.51-0.560.9-0.56h5.53c0.38 0 0.720.210.890.550.9 1.8 1.99 3.19 4.34 3.41v0.03c0 4.42-3.59 8.01-8 8.01z"}],["circle",{"cx":"9","cy":"13","r":"1.25"}],["circle",{"cx":"15","cy":"13","r":"1.25"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfFace6;
