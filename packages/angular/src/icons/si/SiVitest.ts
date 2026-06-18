import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-vitest",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiVitest {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.55 23.3a0.610.61 0 0 1-0.890.2L0.25 15.94A0.610.61 0 0 1 0 15.44V6.33c0-0.50.57-0.790.98-0.5l6.36 4.62c0.590.43 1.430.25 1.79-0.39L14.390.7a0.620.62 0 0 1 0.54-0.31h8.46a0.610.61 0 0 1 0.540.92z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiVitest;
