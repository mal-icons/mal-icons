import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-drinks-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDrinks2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.32 2H4V0H8.68L10.68 5H21V7H18.88L18.06 21.06C18.02 21.59 17.59 22 17.06 22H6.94C6.41 22 5.98 21.59 5.94 21.06L5.12 7H3V5H8.52L7.32 2ZM7.12 7L7.3 10.03C9.97 10.14 11.27 10.63 12.36 11.07C13.41 11.49 14.28 11.85 16.59 11.97L16.88 7H7.12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDrinks2Fill;
