import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-ghostty",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGhostty {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C6.7 0 2.4 4.3 2.4 9.6v11.15c0 1.77 1.45 3.27 3.22 3.25a3.18 3.18 0 0 0 1.96-0.69 1.96 1.96 0 0 1 2.44 0 3.18 3.18 0 0 0 1.980.69c0.75 0 1.44-0.26 1.98-0.690.72-0.56 1.71-0.59 2.42-0.020.590.48 1.360.74 2.180.7 1.71-0.09 3.02-1.54 3.02-3.24V9.6C21.6 4.3 17.3 0 12 0M6.07 6.56a1 1 0 0 1 0.460.13l3.58 2.07v0a0.970.97 0 0 1 0 1.69L6.53 12.51a0.980.98 0 0 1-0.98-1.69L7.67 9.6 5.55 8.38a0.980.98 0 0 1 0.52-1.82m7.44 2.06h4.7a0.980.98 0 1 1 0 1.95h-4.7a0.980.98 0 0 1 0-1.95"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGhostty;
