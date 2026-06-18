import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-googlecontaineroptimizedos",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGooglecontaineroptimizedos {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 21.6a9.6 9.6 0 0 1-5.02-1.42L11.28 17.7v-5.4L6.61 9.6v5.42l3.3 1.91-4.15 2.4A9.6 9.6 0 0 1 7.3 3.6v4.8L12 11.14 16.68 8.4 12 5.72 8.69 7.63V2.96a9.6 9.6 0 0 1 12.37 5.64A9.72 9.72 0 0 1 21.67 12v0.08L17.35 9.6l-4.68 2.71v5.41l4.68-2.7v-3.82l4.14 2.4A9.6 9.6 0 0 1 12 21.6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGooglecontaineroptimizedos;
