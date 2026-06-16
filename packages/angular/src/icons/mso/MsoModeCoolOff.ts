import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-mode-cool-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoModeCoolOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M785 0 510-275v195h-60v-195L301-126l-43-42 180-180-90-90-176 176-44-41 147-147H80v-60h195L41-744l43-43L828-43 785 0Zm8-258L601-450h-91l-60-60v-91L262-789l42-44 146 147v-194h60v194l150-150 42 43-192 192v91h91l189-189 43 42-147 147h194v60H686l148 149-41 43Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoModeCoolOff;
