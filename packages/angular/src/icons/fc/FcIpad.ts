import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-ipad",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcIpad {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["path",{"fill":"#E38939","d":"M8,41V7c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v34c0,2.2-1.8,4-4,4H12C9.8,45,8,43.2,8,41z"}],["path",{"fill":"#FFF3E0","d":"M36,6H12c-0.6,0-1,0.4-1,1v31c0,0.6,0.4,1,1,1h24c0.6,0,1-0.4,1-1V7C37,6.4,36.6,6,36,6z"}],["circle",{"fill":"#A6642A","cx":"24","cy":"42","r":"1.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcIpad;
