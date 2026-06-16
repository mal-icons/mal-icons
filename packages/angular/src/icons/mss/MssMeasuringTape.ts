import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-measuring-tape",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssMeasuringTape {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M200-160v-340q0-142 99-241t241-99q142 0 241 99t99 241q0 142-99 241t-241 99H200Zm60-60h280q116.31 0 198.15-81.78Q820-383.56 820-499.78 820-616 738.22-698q-81.78-82-198-82Q424-780 342-698.15 260-616.31 260-500v280Zm280-140q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0.24-60Q507-420 483.5-443.26q-23.5-23.26-23.5-56.5Q460-533 483.27-556.5q23.26-23.5 56.5-23.5Q573-580 596.5-556.73q23.5 23.26 23.5 56.5Q620-467 596.74-443.5q-23.26 23.5-56.5 23.5ZM80-160v-200h60v200H80Zm460-340Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssMeasuringTape;
