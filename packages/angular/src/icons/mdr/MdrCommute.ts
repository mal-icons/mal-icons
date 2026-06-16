import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-commute",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrCommute {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4H5C3.34 4 2 5.34 2 7v8c0 1.66 1.34 3 3 3l-0.770.77c-0.280.28-0.280.72 0 1s0.720.28 1 0L7 18h2v-5H4.5c-0.28 0-0.5-0.22-0.5-0.5v-6c0-0.280.22-0.50.5-0.5h8c0.28 0 0.50.220.50.5V8h2V7c0-1.66-1.34-3-3-3zM5 14c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1zm15.57-4.34c-0.14-0.4-0.52-0.66-0.97-0.66h-7.19c-0.46 0-0.830.26-0.980.66l-1.42 4.11v5.24c0 0.550.450.99 1 0.99s1-0.45 1-1v-1h8v1a1 1 0 0 0 2 0.01L22 13.77l-1.43-4.11zm-7.80.34h6.48c0.21 0 0.40.140.470.34l0.69 2a0.50.5 0 0 1-0.470.66h-7.85a0.50.5 0 0 1-0.47-0.66l0.69-2c0.05-0.20.24-0.340.46-0.34zM12 16c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm8 0c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrCommute;
