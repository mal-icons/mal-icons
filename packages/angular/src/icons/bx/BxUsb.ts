import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-usb",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxUsb {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 10h1v2h-4V6h2l-3-4-3 4h2v8H7v-2.28c0.6-0.35 1-0.98 1-1.72a2 2 0 0 0-4 0c0 0.740.4 1.38 1 1.72V14c0 1.10.9 2 2 2h4v2.28A1.99 1.99 0 0 0 10 20a2 2 0 0 0 4 0c0-0.74-0.4-1.38-1-1.72V14h4c1.1 0 2-0.9 2-2v-2h1V6h-4v4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxUsb;
