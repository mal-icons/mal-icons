import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-pivot-table-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfPivotTableChart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 8h11V5c0-1.1-0.9-2-2-2h-9v5zM3 8h5V3H5c-1.1 0-2 0.9-2 2v3zm2 13h3V10H3v9c0 1.10.9 2 2 2zm8 1-4-4 4-4zm1-9 4-4 4 4zm0.58 6H13v-2h1.58c1.33 0 2.42-1.08 2.42-2.42V13h2v1.58c0 2.44-1.98 4.42-4.42 4.42z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfPivotTableChart;
