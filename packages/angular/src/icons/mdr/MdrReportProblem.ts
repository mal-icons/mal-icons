import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-report-problem",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrReportProblem {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.73 21h18.53c0.77 0 1.25-0.830.87-1.5l-9.27-16a11 0 0 0-1.73 0l-9.27 16c-0.380.670.1 1.50.87 1.5zM13 18h-2v-2h2v2zm-1-4c-0.55 0-1-0.45-1-1v-2c0-0.550.45-1 1-1s1 0.45 1 1v2c0 0.55-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrReportProblem;
