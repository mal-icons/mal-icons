import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-eyeglasses",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEyeglasses {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m2.630.55a3 3 0 0 0-5.580.95H0.5a0.50.5 0 0 0 0 1h0.54A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.960.5h0.54a0.50.5 0 0 0 0-1h-0.54a3 3 0 0 0-5.58-0.95A2 2 0 0 0 8 6c-0.53 0-1.020.21-1.370.55M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEyeglasses;
