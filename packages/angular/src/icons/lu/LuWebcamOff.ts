import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-webcam-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuWebcamOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 22v-4"}],["path",{"d":"M12.75 7.1a3 3 0 0 1 2.15 2.15"}],["path",{"d":"M12.86 12.87a3 3 0 0 1-3.74-3.73"}],["path",{"d":"M16.57 16.57A8 8 0 0 1 5.43 5.43"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M7 22h10"}],["path",{"d":"M8.48 2.82a8 8 0 0 1 10.71 10.71"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuWebcamOff;
