import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-wash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssWash {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M710.07-660Q675-660 647.5-687.45T620-750q0-34 21-73.5t69-99.5q48 60 69 99.5t21 73.5q0 35.1-27.43 62.55-27.43 27.45-62.5 27.45ZM760-80H80v-427l374-241 54 54-84 134h376v60H316l91-147-267 174v333h620v60ZM480-360v-60h400v60H480Zm0 140v-60h360v60H480ZM310-333Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssWash;
