import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-ghost",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxGhost {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2c-4.96 0-9 4.04-9 9v8h0.05c0.25 1.69 1.69 3 3.45 3 1.17 0 2.07-0.42 2.67-1.17a3.99 3.99 0 0 0 5.67-0.01c0.60.76 1.5 1.19 2.66 1.19 1.93 0 3.5-1.57 3.5-3.5V11c0-4.96-4.04-9-9-9zm7 16.5c0 0.83-0.67 1.5-1.5 1.5-0.45 0-1.5 0-1.5-2v-1h-2v1c0 1.1-0.9 2-2 2s-2-0.9-2-2v-1H8v1c0 1.85-0.77 2-1.5 2-0.83 0-1.5-0.67-1.5-1.5V11c0-3.86 3.14-7 7-7s7 3.14 7 7v7.5z"}],["circle",{"cx":"9","cy":"10","r":"2"}],["circle",{"cx":"15","cy":"10","r":"2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxGhost;
