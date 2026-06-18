import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-coin-stack",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsCoinStack {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 10c3.98 0 8-1.37 8-4s-4.02-4-8-4-8 1.37-8 4 4.02 4 8 4z"}],["path",{"d":"M4 10c0 2.63 4.02 4 8 4s8-1.37 8-4V8c0 2.63-4.02 4-8 4s-8-1.37-8-4v2z"}],["path",{"d":"M4 14c0 2.63 4.02 4 8 4s8-1.37 8-4v-2c0 2.63-4.02 4-8 4s-8-1.37-8-4v2z"}],["path",{"d":"M4 18c0 2.63 4.02 4 8 4s8-1.37 8-4v-2c0 2.63-4.02 4-8 4s-8-1.37-8-4v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsCoinStack;
