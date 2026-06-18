import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-transifex",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTransifex {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m20.07 12.85-2.76-2.76 3.72-3.66a0.330.33 0 0 1 0.470l2.27 2.31a0.330.33 0 0 100.47zm0 0h0zm-9.04-6.43 12.87 12.87c0.130.130.130.34 0 0.47l-2.29 2.29a0.330.33 0 0 1-0.47 0l-5.17-5.17-2.86 2.82c-0.60.59-1.24 1.16-1.97 1.59a7.04 7.04 0 0 1-2.250.83c-2.190.42-4.56-0.05-6.3-1.47A7.07 7.07 0 0 1 0 15.21V2.07a0.330.33 0 0 1 0.33-0.33h3.24a0.330.33 0 0 1 0.330.33v4.13H6.65c0.18 0 0.320.140.320.32v3.62a0.320.32 0 0 1-0.320.32H3.9v4.75c0 1.270.81 2.43 1.99 2.890.750.3 1.620.32 2.40.130.85-0.21 1.48-0.72 2.1-1.32l2.84-2.79-4.94-4.94a0.330.33 0 0 1 0-0.47l2.29-2.29a0.330.33 0 0 1 0.47 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTransifex;
