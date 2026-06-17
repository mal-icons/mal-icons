import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-nut-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsNutFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.58 1a1 1 0 0 0-0.870.5l-3.43 6a1 1 0 0 0 0 0.99l3.43 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 0.87-0.5l3.43-6a1 1 0 0 0 0-0.99l-3.43-6A1 1 0 0 0 11.42 1zm5.02 9.7a3 3 0 1 1-3-5.2 3 3 0 0 1 3 5.2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsNutFill;
