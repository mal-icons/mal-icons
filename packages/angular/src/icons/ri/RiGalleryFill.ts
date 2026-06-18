import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-gallery-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiGalleryFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.41 19C16.63 16.6 15.13 15.11 13.14 13.4C15.02 11.9 17.41 11 20 11V3H21.01C21.56 3 22 3.44 22 3.99V20.01C22 20.56 21.54 21 21.01 21H2.99C2.44 21 2 20.56 2 20.01V3.99C2 3.44 2.46 3 2.99 3H6V1H8V5H4V12C9.22 12 13.66 14.46 15.31 19H17.41ZM18 1V5H10V3H16V1H18ZM16.5 10C15.67 10 15 9.33 15 8.5C15 7.67 15.67 7 16.5 7C17.33 7 18 7.67 18 8.5C18 9.33 17.33 10 16.5 10Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiGalleryFill;
