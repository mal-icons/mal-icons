import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-bar-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrBarChart {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M229.91-160Q201-160 180.5-180.56 160-201.12 160-230v-300q0-28.87 20.59-49.44Q201.18-600 230.09-600 259-600 279.5-579.44 300-558.87 300-530v300q0 28.88-20.59 49.44Q258.82-160 229.91-160Zm250 0Q451-160 430.5-180.56 410-201.12 410-230v-500q0-28.87 20.59-49.44Q451.18-800 480.09-800 509-800 529.5-779.44 550-758.87 550-730v500q0 28.88-20.59 49.44Q508.82-160 479.91-160Zm250 0Q701-160 680.5-180.56 660-201.12 660-230v-140q0-28.87 20.59-49.44Q701.18-440 730.09-440 759-440 779.5-419.44 800-398.87 800-370v140q0 28.88-20.59 49.44Q758.82-160 729.91-160Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrBarChart;
