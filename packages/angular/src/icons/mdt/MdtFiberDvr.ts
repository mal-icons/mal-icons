import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-fiber-dvr",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtFiberDvr {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 11.56v-0.89c0-0.76-0.58-1.33-1.33-1.33h-3.11v5.33h1.33v-1.78h1.02l0.76 1.78H20l-0.8-1.87c0.44-0.220.8-0.710.8-1.24zm-1.33 0h-1.78v-0.89h1.78v0.89zM7.11 9.33H4v5.33h3.11c0.76 0 1.33-0.58 1.33-1.33v-2.67c0-0.75-0.57-1.33-1.33-1.33zm0 4H5.33v-2.67h1.78v2.67zm7-4h-1.34l-0.89 3.05L11 9.33H9.66l1.56 5.34h1.33z"}],["path",{"d":"M3 5h18v14H3z","opacity":".3"}],["path",{"d":"M21 3H3c-1.11 0-2 0.89-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5c0-1.11-0.89-2-2-2zm0 16H3V5h18v14z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtFiberDvr;
