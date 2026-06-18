import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-bookmark-3-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiBookmark3Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 2H20C20.55 2 21 2.45 21 3V22.28C21 22.55 20.78 22.78 20.5 22.78C20.43 22.78 20.36 22.76 20.3 22.73L12 19.03L3.7 22.73C3.45 22.85 3.16 22.73 3.04 22.48C3.01 22.42 3 22.35 3 22.28V3C3 2.45 3.45 2 4 2ZM12 13.5L14.94 15.05L14.38 11.77L16.76 9.45L13.47 8.98L12 6L10.53 8.98L7.24 9.45L9.62 11.77L9.06 15.05L12 13.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiBookmark3Fill;
