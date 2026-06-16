import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-browser-not-supported",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtBrowserNotSupported {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 6v10.5l1.95 1.95c0.03-0.150.05-0.30.05-0.45V6c0-1.1-0.9-2-2-2H6.5l2 2H19zM3.22 3.32 1.95 4.59 3 5.64V18c0 1.10.9 2 2 2h12.36l2.06 2.06 1.27-1.27L3.22 3.32zM15 18H5V7.64L15.36 18H15z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtBrowserNotSupported;
