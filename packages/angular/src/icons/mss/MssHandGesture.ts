import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-hand-gesture",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssHandGesture {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M870-779q0-44-25-77.5T779-890v-50q62 0 101.5 48T920-779h-50ZM220-40q-75 0-127.5-52.65T40-220h50q0 54 38.07 92Q166.14-90 220-90v50Zm124 0L54-468l62-53 164 124v-443h60v558L166-410l209 310h405v-700h60v760H344Zm103-440v-440h60v440h-60Zm167 0v-400h60v400h-60ZM507-290Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssHandGesture;
