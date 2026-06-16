import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-usb",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtUsb {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 7v4h1v2h-3V5h2l-3-4-3 4h2v8H8v-2.07c0.7-0.37 1.2-1.08 1.2-1.93 0-1.21-0.99-2.2-2.2-2.2S4.8 7.79 4.8 9c0 0.850.5 1.56 1.2 1.93V13c0 1.110.89 2 2 2h3v3.05c-0.710.37-1.2 1.1-1.2 1.95a2.2 2.2 0 0 0 4.4 0c0-0.85-0.49-1.58-1.2-1.95V15h3c1.11 0 2-0.89 2-2v-2h1V7h-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtUsb;
