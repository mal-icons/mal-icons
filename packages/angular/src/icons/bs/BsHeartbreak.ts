import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-heartbreak",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsHeartbreak {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.87 14.41c13.31-9.32 4.79-16.560.06-13.82L7 3l1.5 4-2 3L8 15a38 38 0 0 0 0.87-0.59m-0.3-1.01-0.97-3.24 1.74-2.61a1 1 0 0 0 0.1-0.91l-1.3-3.47 1.45-1.81c1.86-0.95 4.450 5.2 2.110.69 1.94-0.05 5.52-6.22 9.92m-1.25 1.14a36 36 0 0 1-1.52-1.12C-5.08 4.97 1.84-1.47 6.450.29c0.310.120.620.280.90.48L5.5 3 7 7l-1.5 3zm-2.3-3.06-0.44-1.11a1 1 0 0 1 0.03-0.82l1.31-2.61L4.56 3.35a1 1 0 0 1 0.17-0.99l1.03-1.24c-1.69-0.45-3.70.4-4.46 2.13-0.71 1.63-0.41 4.55 3.71 8.23Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsHeartbreak;
