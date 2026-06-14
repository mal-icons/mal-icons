import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-eye-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiEyeOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 9c1.21 0 2.380.36 3.3 1 1.30.92 2.43 2.12 3.17 3-0.730.87-1.86 2.08-3.17 3-0.910.65-2.08 1-3.3 1s-2.38-0.35-3.3-1c-1.3-0.92-2.43-2.12-3.16-30.73-0.87 1.86-2.08 3.16-2.990.92-0.65 2.09-1 3.3-1m0-2c-1.69 0-3.240.52-4.45 1.37-2.62 1.85-4.55 4.63-4.55 4.63s1.93 2.78 4.55 4.63c1.210.86 2.76 1.37 4.45 1.37s3.24-0.52 4.45-1.37c2.62-1.85 4.55-4.63 4.55-4.63s-1.93-2.78-4.55-4.63c-1.21-0.85-2.76-1.37-4.45-1.37zM12 12c-0.55 0-1 0.45-1 1 0 0.550.45 1 1 1 0.55 0 1-0.45 1-1 0-0.55-0.45-1-1-1zM12 16c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-5c-1.1 0-2 0.9-2 2s0.9 2 2 2 2-0.9 2-2-0.9-2-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiEyeOutline;
