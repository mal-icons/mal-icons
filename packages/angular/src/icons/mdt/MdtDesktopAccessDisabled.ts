import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-desktop-access-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtDesktopAccessDisabled {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.41 1.69 0 3.1l1 0.99V16c0 1.10.89 2 1.99 2H10v2H8v2h8v-2h-2v-2h0.9l6 6 1.41-1.41-20.9-20.9zM2.99 16V6.09L12.9 16H2.99zM4.55 2l2 2H21v12h-2.45l2 2h0.44c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2H4.55z"}],["path",{"d":"M2.99 6.09V16h9.91zM6.55 4l12 12H21V4z","opacity":".3"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtDesktopAccessDisabled;
