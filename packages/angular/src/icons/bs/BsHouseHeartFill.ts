import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-house-heart-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsHouseHeartFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.29 1.5a1 1 0 0 1 1.41 0L11 3.79V2.5a0.50.5 0 0 1 0.5-0.5h1a0.50.5 0 0 1 0.50.5v3.29l2.35 2.35a0.50.5 0 0 1-0.710.71L8 2.21 1.35 8.85a0.50.5 0 1 1-0.71-0.71z"}],["path",{"d":"m14 9.29-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5zm-6-0.81c1.66-1.67 5.83 1.25 0 5.02-5.82-3.76-1.66-6.69 0-5.02"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsHouseHeartFill;
