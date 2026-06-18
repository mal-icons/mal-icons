import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-mingww64",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMingww64 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m 0,9.4 4.19,-4.19 4.19,4.19 -4.19,4.19 z m 0,10.42 4.19,-4.19 4.19,4.19 -4.19,4.19 z m 5.21,-5.21 4.19,-4.19 4.19,4.19 -4.19,4.19 z m 0,-10.42 L 9.4,0 13.58,4.19 9.4,8.37 Z m 5.21,5.21 4.19,-4.19 4.19,4.19 -4.19,4.19 z M 15.63,4.19 19.81,0 l 4.19,4.19 -4.19,4.19 z m -5.21,15.63 4.19,-4.19 4.19,4.19 L 14.6,24 Z m 5.21,-5.21 4.19,-4.19 4.19,4.19 -4.19,4.19 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMingww64;
