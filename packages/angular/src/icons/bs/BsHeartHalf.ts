import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-heart-half",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsHeartHalf {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 2.75v11.05c3.45-2.37 5.37-4.54 6.29-6.360.96-1.890.84-3.360.31-4.38C13.490.88 10.40.28 8.72 2.01zM8 15C-7.33 4.87 3.28-3.04 7.82 1.14q0.090.080.180.17a3 3 0 0 1 0.18-0.17C12.72-3.04 23.33 4.87 8 15"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsHeartHalf;
