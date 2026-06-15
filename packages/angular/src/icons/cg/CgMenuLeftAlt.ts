import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-menu-left-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgMenuLeftAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 6C4 5.45 4.45 5 5 5H19C19.55 5 20 5.45 20 6C20 6.55 19.55 7 19 7H5C4.45 7 4 6.55 4 6Z","fill":"currentColor"}],["path",{"d":"M4 18C4 17.45 4.45 17 5 17H19C19.55 17 20 17.45 20 18C20 18.55 19.55 19 19 19H5C4.45 19 4 18.55 4 18Z","fill":"currentColor"}],["path",{"d":"M5 11C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13H13C13.55 13 14 12.55 14 12C14 11.45 13.55 11 13 11H5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgMenuLeftAlt;
