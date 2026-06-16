import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-stacked-bar-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrStackedBarChart {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M229.91-160Q201-160 180.5-180.56 160-201.12 160-230v-370h140v370q0 28.88-20.59 49.44Q258.82-160 229.91-160ZM160-660v-70.09Q160-759 180.59-779.5q20.59-20.5 49.5-20.5Q259-800 279.5-779.44 300-758.87 300-730v70H160Zm319.91 500Q451-160 430.5-180.56 410-201.12 410-230v-250h140v250q0 28.88-20.59 49.44Q508.82-160 479.91-160ZM410-540v-70.09Q410-639 430.59-659.5q20.59-20.5 49.5-20.5Q509-680 529.5-659.44 550-638.87 550-610v70H410Zm319.91 380Q701-160 680.5-180.56 660-201.12 660-230v-130h140v130q0 28.88-20.59 49.44Q758.82-160 729.91-160ZM660-420v-70.09Q660-519 680.59-539.5q20.59-20.5 49.5-20.5Q759-560 779.5-539.44 800-518.87 800-490v70H660Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrStackedBarChart;
