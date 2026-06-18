import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-zoom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlZoom {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.98 7.51v6.74c0.01 1.52 1.36 2.75 3.01 2.75h10.69c0.3 0 0.55-0.220.55-0.5v-6.74c-0.01-1.52-1.36-2.75-3.01-2.74H2.53c-0.3 0-0.550.22-0.550.5zm14.94 2.63 4.42-2.96c0.38-0.290.68-0.220.680.31v9.04c0 0.6-0.360.53-0.680.31L16.92 13.87v-3.73z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlZoom;
