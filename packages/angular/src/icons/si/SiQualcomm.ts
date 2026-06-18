import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-qualcomm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiQualcomm {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C6.23 0 1.58 4.49 1.58 10.47c0 6 4.65 10.47 10.42 10.470.98 0 1.93-0.13 2.84-0.38l1.13 2.92c0.120.320.350.520.770.52h1.8c0.43 0 0.75-0.280.55-0.83l-1.47-3.82c2.89-1.82 4.8-5.04 4.8-8.89C22.42 4.49 17.77 0 12 0m4.54 16.56l-1.32-3.42c-0.12-0.28-0.35-0.55-0.85-0.55h-1.72c-0.43 0-0.770.28-0.570.83l1.73 4.49c-0.570.15-1.180.22-1.820.22-4.22 0-7.22-3.32-7.22-7.66C4.78 6.14 7.78 2.82 12 2.82s7.22 3.32 7.22 7.66c0 2.54-1.02 4.7-2.69 6.09"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiQualcomm;
