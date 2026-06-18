import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-microphone-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMicrophoneOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3l18 18"}],["path",{"d":"M9 5a3 3 0 0 1 6 0v5a3 3 0 0 1 -0.13 0.87m-2 2a3 3 0 0 1 -3.87 -2.87v-1"}],["path",{"d":"M5 10a7 7 0 0 0 10.85 5.85m2 -2a6.97 6.97 0 0 0 1.15 -3.85"}],["path",{"d":"M8 21l8 0"}],["path",{"d":"M12 17l0 4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMicrophoneOff;
