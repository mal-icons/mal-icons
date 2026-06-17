import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-8-circle-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Bs_8CircleFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-5.03 1.8c0-1.25-0.94-1.84-1.65-1.99v-0.06c0.6-0.19 1.34-0.72 1.34-1.78 0-1.23-1.08-2.12-2.65-2.12s-2.660.9-2.66 2.12c0 1.040.71 1.59 1.33 1.78v0.07c-0.70.15-1.650.73-1.65 2 0 1.39 1.19 2.34 2.95 2.34 1.77 0 2.99-0.96 2.99-2.35Zm-4.35-3.71c0 0.740.59 1.25 1.38 1.25s1.38-0.52 1.38-1.25c0-0.73-0.58-1.23-1.38-1.23s-1.380.5-1.38 1.23Zm-0.28 3.65c0 0.840.72 1.41 1.66 1.410.94 0 1.66-0.57 1.66-1.41 0-0.84-0.71-1.42-1.66-1.42-0.94 0-1.660.58-1.66 1.42"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Bs_8CircleFill;
