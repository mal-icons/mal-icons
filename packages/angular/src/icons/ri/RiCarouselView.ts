import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-carousel-view",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCarouselView {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 3H1V5H3V19H1V21H4C4.55 21 5 20.55 5 20V4C5 3.45 4.55 3 4 3ZM7 4C7 3.45 7.45 3 8 3H16C16.55 3 17 3.45 17 4V20C17 20.55 16.55 21 16 21H8C7.45 21 7 20.55 7 20V4ZM9 5V19H15V5H9ZM19 4C19 3.45 19.45 3 20 3H23V5H21V19H23V21H20C19.45 21 19 20.55 19 20V4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCarouselView;
