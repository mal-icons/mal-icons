import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-transparency",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTransparency {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 6.5a6.5 6.5 0 0 1 12.35-2.85 6.5 6.5 0 1 1-8.69 8.69A6.5 6.5 0 0 1 0 6.5m5.14 6.36a5.5 5.5 0 1 0 7.71-7.71 6.5 6.5 0 0 1-7.71 7.71m-0.73-1.27q0.550.23 1.140.33l-1.47-1.47q0.10.60.33 1.14m2.610.39a5.5 5.5 0 0 0 1.17-0.24L4.37 7.91a6 6 0 0 0-0.3 1.12zm2.16-0.67q0.45-0.250.84-0.58L5.42 6.13a6 6 0 0 0-0.590.83zm1.55-1.28q0.33-0.390.58-0.84L6.95 4.83a6 6 0 0 0-0.830.59l4.6 4.6Zm1.01-1.82q0.18-0.560.24-1.17L9.03 4.08q-0.580.1-1.120.3l3.82 3.82Zm0.19-2.64a5.5 5.5 0 0 0-0.33-1.14 5.5 5.5 0 0 0-1.14-0.33z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTransparency;
