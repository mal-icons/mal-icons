import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-smile",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxSmile {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}],["path",{"d":"M14.83 14.83a4.06 4.06 0 0 1-1.270.86 4 4 0 0 1-4.87-1.45l-1.66 1.12a6.06 6.06 0 0 0 1.62 1.62 5.96 5.96 0 0 0 2.150.9 6.04 6.04 0 0 0 2.42 0 5.97 5.97 0 0 0 2.15-0.9c0.31-0.210.61-0.460.89-0.730.27-0.270.52-0.570.73-0.89l-1.66-1.12a4.02 4.02 0 0 1-0.490.59z"}],["circle",{"cx":"8.5","cy":"10.5","r":"1.5"}],["circle",{"cx":"15.49","cy":"10.49","r":"1.49"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxSmile;
