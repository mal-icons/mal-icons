import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-pdm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPdm {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.440.42a3.12 3.12 0 0 1 3.12 0l7.69 4.44a3.12 3.12 0 0 1 1.56 2.7v8.88a3.12 3.12 0 0 1-1.56 2.7l-7.69 4.44a3.12 3.12 0 0 1-3.12 0l-7.69-4.44a3.12 3.12 0 0 1-1.56-2.7V7.56a3.12 3.12 0 0 1 1.56-2.7Zm3.87 3.32L12.31 2.58a0.620.62 0 0 0-0.62 0l-7.69 4.44a0.620.62 0 0 0-0.310.54v3.77l10.62-6.13Zm2.5 13.64 1.250.73 1.94-1.12a0.620.62 0 0 0 0.31-0.54V7.56a0.620.62 0 0 0-0.31-0.54l-3.2-1.84Zm-2.5-1.44V8.08l-6.8 3.93ZM3.69 14.22v2.22c0 0.220.120.430.310.54l7.69 4.44a0.620.62 0 0 0 0.62 0l3.25-1.88-10.55-6.09Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPdm;
