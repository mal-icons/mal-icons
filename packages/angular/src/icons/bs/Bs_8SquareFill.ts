import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-8-square-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Bs_8SquareFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.62 6.09c0 0.740.59 1.25 1.38 1.25s1.38-0.52 1.38-1.25c0-0.73-0.58-1.23-1.38-1.23s-1.380.5-1.38 1.23m-0.28 3.64c0 0.840.72 1.41 1.66 1.410.94 0 1.66-0.57 1.66-1.41 0-0.84-0.71-1.42-1.66-1.42-0.94 0-1.660.58-1.66 1.42"}],["path",{"d":"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm8.97 9.8c0 1.39-1.22 2.36-2.99 2.36-1.76 0-2.95-0.95-2.95-2.34 0-1.270.95-1.85 1.65-2v-0.06c-0.62-0.19-1.33-0.74-1.33-1.78 0-1.23 1.09-2.12 2.66-2.12s2.650.9 2.65 2.12c0 1.06-0.74 1.6-1.34 1.78v0.07c0.70.15 1.650.74 1.65 1.99Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Bs_8SquareFill;
