import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-tuxedocomputers",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTuxedocomputers {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m13.96 11.13 4.6 7.44h-3.51l-2.94-4.92-4.33 6.37L24 19.97c-0.070.73-0.14 1.45-0.21 2.17-12.390.05-7.540.11-19.930.11l7.19-10.22-4.06-6.67h3.5l2.39 4.1 3.49-5.51C5.2 3.89 11.17 3.99 0 3.96L0.22 1.8c12.39-0.01 7.5-0.05 19.89-0.05z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTuxedocomputers;
