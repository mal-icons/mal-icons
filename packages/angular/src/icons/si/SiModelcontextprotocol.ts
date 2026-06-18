import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-modelcontextprotocol",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiModelcontextprotocol {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.85 0a4.16 4.16 0 0 0-2.95 1.22L1.46 10.66a0.840.84 0 0 0 0 1.180.840.84 0 0 0 1.18 0l9.44-9.44a2.49 2.49 0 0 1 3.54 0 2.49 2.49 0 0 1 0 3.54L8.59 12.97l-0.10.1a0.840.84 0 0 0 0 1.180.840.84 0 0 0 1.18 0l0.1-0.1 7.03-7.03a2.49 2.49 0 0 1 3.54 0l0.050.05a2.49 2.49 0 0 1 0 3.54l-8.54 8.54a1.96 1.96 0 0 0 0 2.76l1.75 1.75a0.840.84 0 0 0 1.18 0 0.840.84 0 0 0 0-1.18l-1.75-1.75a0.270.27 0 0 1 0-0.39l8.54-8.54a4.18 4.18 0 0 0 0-5.9l-0.05-0.05a4.16 4.16 0 0 0-2.95-1.22c-0.2 0-0.40.02-0.60.05a4.17 4.17 0 0 0-1.17-3.55A4.16 4.16 0 0 0 13.85 0m0 3.33a0.840.84 0 0 0-0.590.25L6.28 10.56a4.19 4.19 0 0 0 0 5.9 4.19 4.19 0 0 0 5.9 0L19.16 9.48a0.840.84 0 0 0 0-1.180.840.84 0 0 0-1.18 0l-6.98 6.98a2.49 2.49 0 0 1-3.54 0 2.49 2.49 0 0 1 0-3.54l6.98-6.98a0.840.84 0 0 0 0-1.180.840.84 0 0 0-0.59-0.24"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiModelcontextprotocol;
