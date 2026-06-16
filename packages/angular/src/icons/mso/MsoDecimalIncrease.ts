import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-decimal-increase",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDecimalIncrease {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m734-94-42-42 73-74H480v-60h285l-73-74 42-42 146 146L734-94ZM80-440v-100h100v100H80Zm300 0q-58 0-99-41t-41-99v-160q0-58 41-99t99-41q58 0 99 41t41 99v160q0 58-41 99t-99 41Zm360 0q-58 0-99-41t-41-99v-160q0-58 41-99t99-41q58 0 99 41t41 99v160q0 58-41 99t-99 41Zm-360.23-60Q413-500 436.5-523.33 460-546.67 460-580v-160q0-33.33-23.26-56.67Q413.47-820 380.24-820 347-820 323.5-796.67 300-773.33 300-740v160q0 33.33 23.27 56.67Q346.53-500 379.77-500Zm360 0Q773-500 796.5-523.33 820-546.67 820-580v-160q0-33.33-23.26-56.67Q773.47-820 740.24-820 707-820 683.5-796.67 660-773.33 660-740v160q0 33.33 23.27 56.67Q706.53-500 739.77-500Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDecimalIncrease;
