import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-calculator-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCalculatorFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 0.5v2a0.50.5 0 0 0 0.50.5h7a0.50.5 0 0 0 0.5-0.5v-2a0.50.5 0 0 0-0.5-0.5h-7a0.50.5 0 0 0-0.50.5m0 4v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5h-1a0.50.5 0 0 0-0.50.5M4.5 9a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5zM4 12.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5h-1a0.50.5 0 0 0-0.50.5M7.5 6a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5zM7 9.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5h-1a0.50.5 0 0 0-0.50.5m0.5 2.5a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5zM10 6.5v1a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5h-1a0.50.5 0 0 0-0.50.5m0.5 2.5a0.50.5 0 0 0-0.50.5v4a0.50.5 0 0 0 0.50.5h1a0.50.5 0 0 0 0.5-0.5v-4a0.50.5 0 0 0-0.5-0.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCalculatorFill;
