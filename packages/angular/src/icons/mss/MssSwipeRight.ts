import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-swipe-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSwipeRight {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M424-80 184-320l39-57 137 37v-370h60v450l-124-33 153 153h291v-310h60v370H424Zm63-290v-200h60v200h-60Zm126 0v-160h60v160h-60ZM80-700q49-105 152.5-162.5T470-920q103 0 196 34.5T840-787v-93h40v180H700v-40h133q-79-69-171.02-104.5Q569.97-880 470-880q-115 0-204.5 46T125-700H80Zm498 435Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSwipeRight;
