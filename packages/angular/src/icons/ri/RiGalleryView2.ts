import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-gallery-view-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiGalleryView2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3C2.45 3 2 3.45 2 4V10C2 10.55 2.45 11 3 11H10C10.55 11 11 10.55 11 10V4C11 3.45 10.55 3 10 3H3ZM4 9V5H9V9H4ZM3 13C2.45 13 2 13.45 2 14V20C2 20.55 2.45 21 3 21H10C10.55 21 11 20.55 11 20V14C11 13.45 10.55 13 10 13H3ZM4 19V15H9V19H4ZM13 4C13 3.45 13.45 3 14 3H21C21.55 3 22 3.45 22 4V10C22 10.55 21.55 11 21 11H14C13.45 11 13 10.55 13 10V4ZM15 5V9H20V5H15ZM14 13C13.45 13 13 13.45 13 14V20C13 20.55 13.45 21 14 21H21C21.55 21 22 20.55 22 20V14C22 13.45 21.55 13 21 13H14ZM15 19V15H20V19H15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiGalleryView2;
