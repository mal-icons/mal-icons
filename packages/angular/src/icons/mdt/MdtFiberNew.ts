import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-fiber-new",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtFiberNew {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.12 14.47V9.53H8.09v2.88L6.03 9.53H5v4.94h1.03v-2.88l2.1 2.88zm4.12-3.9V9.53h-3.3v4.94h3.3v-1.03h-2.06v-0.91h2.06v-1.04h-2.06v-0.92zm0.82-1.04v4.12c0 0.450.370.820.820.82h3.29c0.45 0 0.82-0.370.82-0.82V9.53h-1.03v3.71h-0.92v-2.89h-1.03v2.9h-0.93V9.53h-1.02z"}],["path",{"d":"M4 6h16v12H4z","opacity":".3"}],["path",{"d":"M20 4H4c-1.11 0-1.990.89-1.99 2L2 18c0 1.110.89 2 2 2h16c1.11 0 2-0.89 2-2V6c0-1.11-0.89-2-2-2zm0 14H4V6h16v12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtFiberNew;
