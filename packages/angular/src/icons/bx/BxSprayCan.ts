import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-spray-can",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxSprayCan {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 2h-4a1 1 0 0 0-1 1v3.81a6 6 0 0 0-3 5.19v0.99L3 13l00.07V21a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9a6 6 0 0 0-3-5.19V3a1 1 0 0 0-1-1zm-3 4V4h2v2h-2zm5 14h-8v-6h8v6zm-8-8c0-2.21 1.79-4 4-4s4 1.79 4 4h-8zm8-9h2v2h-2zM16 3h2v2h-2zm0 3h2v2h-2zm3-3h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxSprayCan;
