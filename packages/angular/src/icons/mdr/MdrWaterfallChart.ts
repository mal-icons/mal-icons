import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-waterfall-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrWaterfallChart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.5 4c0.83 0 1.50.67 1.5 1.5v13c0 0.83-0.67 1.5-1.5 1.5s-1.5-0.67-1.5-1.5v-13c0-0.830.67-1.5 1.5-1.5zm-15 9c0.83 0 1.50.67 1.5 1.5v4c0 0.83-0.67 1.5-1.5 1.5S3 19.33 3 18.5v-4c0-0.830.67-1.5 1.5-1.5zm11-9c0.83 0 1.50.67 1.5 1.5S16.33 7 15.5 7 14 6.33 14 5.5 14.67 4 15.5 4zm-4 1c0.83 0 1.50.67 1.5 1.5v1c0 0.83-0.67 1.5-1.5 1.5S10 8.33 10 7.5v-1c0-0.830.67-1.5 1.5-1.5zm-3 5c0.83 0 1.50.67 1.5 1.5v1c0 0.83-0.67 1.5-1.5 1.5S7 13.33 7 12.5v-1c0-0.830.67-1.5 1.5-1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrWaterfallChart;
