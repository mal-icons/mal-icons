import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-pie-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiPieChart {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M290.35 13.21l-11.47 218.98 204.68-78.58a219.24 219.28 0 0 0-193.2-140.4zm-51.39 47.57A219.24 219.28 0 0 0 38.59 206.24a219.24 219.28 0 0 0 77.3 250.92 219.24 219.28 0 0 0 262.49-3.09 219.24 219.28 0 0 0 71.37-252.67l-204.68 78.58 12.24-218.94a219.24 219.28 0 0 0-18.34-0.26z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiPieChart;
