import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-hdd",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxHdd {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.98 13.82-1.85-10.18A2 2 0 0 0 18.17 2H5.84a2 2 0 0 0-1.97 1.64l-1.85 10.180.020c-0.010.06-0.040.11-0.040.18v5c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2v-5c0-0.06-0.02-0.12-0.04-0.18l0.020zM5.84 4h12.33l1.64 9H4.2l1.64-9zM4 19v-4h16l0 4H4z"}],["path",{"d":"M17 16h2v2h-2zm-3 0h2v2h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxHdd;
