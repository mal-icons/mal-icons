import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-quiz",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfQuiz {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 6H2v14c0 1.10.9 2 2 2h14v-2H4V6z"}],["path",{"d":"M20 2H8c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm-5.99 13c-0.59 0-1.05-0.47-1.05-1.05 0-0.590.47-1.04 1.05-1.040.59 0 1.040.45 1.04 1.04-0.010.58-0.45 1.05-1.04 1.05zm2.5-6.17c-0.630.93-1.23 1.21-1.56 1.81-0.130.24-0.180.4-0.18 1.18h-1.52c0-0.41-0.06-1.080.26-1.650.41-0.73 1.18-1.16 1.63-1.80.48-0.680.21-1.94-1.14-1.94-0.88 0-1.320.67-1.5 1.23l-1.37-0.57C11.51 5.96 12.52 5 13.99 5c1.23 0 2.080.56 2.51 1.260.370.610.58 1.730.01 2.57z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfQuiz;
