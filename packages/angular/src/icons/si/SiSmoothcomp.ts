import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-smoothcomp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSmoothcomp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.34 0C2.85 0 0 2.84 0 6.34v11.32C0 21.16 2.84 24 6.34 24h11.32C21.16 24 24 21.16 24 17.66V6.34C24 2.85 21.16 0 17.66 0Zm0 2.15h11.32c2.31 0 4.19 1.88 4.19 4.19v11.32c0 2.31-1.88 4.19-4.19 4.19H6.34c-2.31 0-4.19-1.88-4.19-4.19V6.34c0-2.31 1.88-4.19 4.19-4.19zM7.06 5.64c-0.76 0-1.380.62-1.38 1.38v10c0 0.760.62 1.38 1.38 1.38h10c0.76 0 1.38-0.62 1.38-1.38V7.02c0-0.37-0.14-0.72-0.41-0.98a1.37 1.37 0 0 0-0.98-0.4Zm0.77 2.15h8.47v8.47H7.83Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSmoothcomp;
