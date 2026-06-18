import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-pie-chart-alt-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsPieChartAlt2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 2.05V11h8.95c-0.47-4.72-4.23-8.48-8.95-8.95zm4.97 17.95c2.19-1.64 3.69-4.14 3.98-7h-8.18l4.2 7z"}],["path",{"d":"M11 12V2.05C5.95 2.56 2 6.82 2 12c0 5.51 4.49 10 10 10a9.93 9.93 0 0 0 4.26-0.96s-5.25-8.91-5.25-9.03A0.020.02 0 0 0 11 12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsPieChartAlt2;
