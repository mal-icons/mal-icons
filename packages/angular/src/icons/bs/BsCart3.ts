import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-cart3",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCart3 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 1.5A0.50.5 0 0 1 0.5 1H2a0.50.5 0 0 1 0.490.38L2.89 3H14.5a0.50.5 0 0 1 0.490.6l-1 5a0.50.5 0 0 1-0.460.4l-9.40.47L4.42 11H13a0.50.5 0 0 1 0 1H4a0.50.5 0 0 1-0.49-0.41L2.01 3.61 1.61 2H0.5a0.50.5 0 0 1-0.5-0.5M3.1 4l0.84 4.48 9.14-0.46L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCart3;
