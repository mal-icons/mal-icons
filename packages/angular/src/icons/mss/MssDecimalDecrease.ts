import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-decimal-decrease",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDecimalDecrease {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M626-94 480-240l146-146 42 42-73 74h285v60H595l73 74-42 42ZM80-440v-100h100v100H80Zm300 0q-58 0-99-41t-41-99v-160q0-58 41-99t99-41q58 0 99 41t41 99v160q0 58-41 99t-99 41Zm-0.23-60Q413-500 436.5-523.33 460-546.67 460-580v-160q0-33.33-23.26-56.67Q413.47-820 380.24-820 347-820 323.5-796.67 300-773.33 300-740v160q0 33.33 23.27 56.67Q346.53-500 379.77-500Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDecimalDecrease;
