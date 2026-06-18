import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-donut-chart-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDonutChartFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 2.05L11 5.07C7.61 5.56 5 8.47 5 12C5 15.87 8.13 19 12 19C13.57 19 15.02 18.48 16.19 17.61L18.33 19.74C16.61 21.15 14.4 22 12 22C6.48 22 2 17.52 2 12C2 6.81 5.95 2.55 11 2.05ZM21.95 13C21.75 15.01 20.96 16.85 19.74 18.33L17.61 16.19C18.29 15.28 18.76 14.19 18.93 13L21.95 13ZM13 2.05C17.73 2.52 21.48 6.28 21.95 11L18.93 11C18.49 7.93 16.07 5.51 13 5.07L13 2.05Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDonutChartFill;
