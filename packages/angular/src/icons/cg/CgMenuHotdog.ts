import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-menu-hotdog",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgMenuHotdog {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 6C5.34 6 4 7.34 4 9H20C20 7.34 18.66 6 17 6H7Z","fill":"currentColor"}],["path",{"d":"M7 18C5.34 18 4 16.66 4 15H20C20 16.66 18.66 18 17 18H7Z","fill":"currentColor"}],["path",{"d":"M3 11C2.45 11 2 11.45 2 12C2 12.55 2.45 13 3 13H21C21.55 13 22 12.55 22 12C22 11.45 21.55 11 21 11H3Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgMenuHotdog;
