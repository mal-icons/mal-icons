import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-stagetimer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiStagetimer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.13 2.64c0 0.820.66 1.48 1.46 1.64a7.83 7.83 0 0 1 6.2 7.67c0 4.33-3.5 7.83-7.81 7.83a7.77 7.77 0 0 1-3.93-1.06c-0.72-0.42-1.66-0.37-2.210.25l-0.790.91c-0.550.63-0.49 1.590.2 2.05A11.95 11.95 0 0 0 11.98 24C18.62 24 24 18.61 24 11.95 24 5.86 19.50.83 13.640.01c-0.83-0.12-1.520.57-1.52 1.41v1.22ZM2.01 15.38c-0.80.27-1.24 1.14-0.87 1.890.260.520.55 1.020.87 1.490.470.69 1.450.75 2.090.2l0.92-0.8c0.64-0.550.69-1.50.26-2.22l-0.04-0.06c-0.42-0.73-1.28-1.16-2.08-0.89l-1.160.39Zm-0.32-1.38c-0.810.16-1.6-0.37-1.66-1.2-0.04-0.57-0.04-1.14 0-1.710.06-0.830.85-1.36 1.66-1.2l1.170.23c0.810.16 1.320.96 1.31 1.79v0.07c00.83-0.5 1.63-1.31 1.79l-1.170.23Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiStagetimer;
