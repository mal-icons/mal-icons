import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-0-square-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class Bs_0SquareFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 4.95c-1.01 0-1.63 1.09-1.63 2.9v0.31c0 1.810.63 2.9 1.63 2.9s1.62-1.09 1.62-2.89v-0.31c0-1.8-0.62-2.89-1.62-2.89"}],["path",{"d":"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm5.99 12.16c-1.85 0-2.94-1.57-2.94-3.99V7.84c0-2.41 1.1-4 2.97-4 1.86 0 2.94 1.57 2.94 4v0.33c0 2.41-1.1 3.99-2.96 3.99"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default Bs_0SquareFill;
