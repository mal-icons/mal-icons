import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-receipt-swiss-franc",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuReceiptSwissFranc {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 11h4"}],["path",{"d":"M10 17V7h5"}],["path",{"d":"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 0.70.2l0.930.6a1.3 1.3 0 0 0 1.4 0l0.93-0.6a1.3 1.3 0 0 1 1.4 0l0.930.6a1.3 1.3 0 0 0 1.4 0l0.93-0.6a1.3 1.3 0 0 1 1.4 0l0.930.6a1.3 1.3 0 0 0 1.4 0l0.93-0.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-0.7-0.2l-0.93-0.6a1.3 1.3 0 0 0-1.4 0l-0.930.6a1.3 1.3 0 0 1-1.4 0l-0.93-0.6a1.3 1.3 0 0 0-1.4 0l-0.930.6a1.3 1.3 0 0 1-1.4 0l-0.93-0.6a1.3 1.3 0 0 0-1.4 0l-0.930.6a1.3 1.3 0 0 1-0.70.2 1 1 0 0 1-1-1z"}],["path",{"d":"M8 15h5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuReceiptSwissFranc;
