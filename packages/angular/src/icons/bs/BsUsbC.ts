import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-usb-c",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsUsbC {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.5 7.5a0.50.5 0 0 0 0 1h9a0.50.5 0 0 0 0-1z"}],["path",{"d":"M0 8a3 3 0 0 1 3-3h10a3 3 0 1 1 0 6H3a3 3 0 0 1-3-3m3-2a2 2 0 1 0 0 4h10a2 2 0 1 0 0-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsUsbC;
