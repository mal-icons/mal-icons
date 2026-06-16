import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-mobile-screen-share",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtMobileScreenShare {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 19h10V5H7v14zm5.8-8.28v-1.7L16 12l-3.2 2.99v-1.75c-2.22 0-3.690.68-4.8 2.180.45-2.14 1.69-4.27 4.8-4.7z","opacity":".3"}],["path",{"d":"M17 1H7c-1.1 0-1.990.85-1.99 1.95v18C5.01 22.05 5.9 23 7 23h10c1.1 0 2-0.95 2-2.05V3c0-1.1-0.9-2-2-2zm0 18H7V5h10v14zm-4.2-5.76v1.75L16 12l-3.2-2.98v1.7c-3.110.43-4.35 2.56-4.8 4.7 1.11-1.5 2.58-2.18 4.8-2.18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtMobileScreenShare;
