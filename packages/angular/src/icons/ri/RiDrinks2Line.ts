import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-drinks-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDrinks2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 2H7.32L8.52 5H3V7H5.12L5.94 21.06C5.98 21.59 6.41 22 6.94 22H17.06C17.59 22 18.02 21.59 18.06 21.06L18.88 7H21V5H10.68L8.68 0H4V2ZM7.3 10.03L7.12 7H16.88L16.59 11.97C14.28 11.85 13.42 11.49 12.37 11.07C11.28 10.63 9.97 10.14 7.3 10.03ZM7.42 12.03C9.72 12.15 10.59 12.51 11.64 12.93C12.7 13.36 13.96 13.84 16.47 13.96L16.11 20H7.89L7.42 12.03Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDrinks2Line;
