import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-laravelhorizon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLaravelhorizon {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.49 3.52C15.8-1.17 8.2-1.17 3.52 3.51A11.96 11.96 0 0 0 0 12a11.98 11.98 0 0 0 4.2 9.13h0.01a12 12 0 0 0 16.27-0.64c4.69-4.68 4.69-12.280-16.97zM16 14c-4 0-4-4-8-4-2.5 0-3.44 1.57-4.76 2.74H3.23a8.8 8.8 0 0 1 17.54-1.48c-1.33 1.18-2.27 2.74-4.77 2.74z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLaravelhorizon;
