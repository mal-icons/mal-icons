import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-emoji-angry-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEmojiAngryFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.05 4.28a0.50.5 0 0 1 0.67-0.22l2 1a0.50.5 0 0 1 0.170.76c0.070.210.110.440.110.69C7 7.33 6.55 8 6 8s-1-0.67-1-1.5c0-0.410.11-0.780.28-1.05l-1.01-0.5a0.50.5 0 0 1-0.22-0.67zm0.23 8.16a0.50.5 0 0 1-0.18-0.68A4.5 4.5 0 0 1 8 9.5a4.5 4.5 0 0 1 3.9 2.250.50.5 0 1 1-0.870.5A3.5 3.5 0 0 0 8 10.5a3.5 3.5 0 0 0-3.03 1.750.50.5 0 0 1-0.680.18M10 8c-0.55 0-1-0.67-1-1.5 0-0.250.04-0.480.11-0.69a0.50.5 0 0 1 0.17-0.76l2-1a0.50.5 0 1 1 0.450.89l-1.010.5c0.180.270.280.640.28 1.05 0 0.83-0.45 1.5-1 1.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEmojiAngryFill;
