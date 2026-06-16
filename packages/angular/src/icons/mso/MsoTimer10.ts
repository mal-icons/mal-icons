import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-timer-10",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoTimer10 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M535-280h185v-400H535v400Zm0 80q-33.33 0-56.67-23.33Q455-246.67 455-280v-400q0-33.33 23.33-56.67Q501.67-760 535-760h185q33.33 0 56.67 23.33Q800-713.33 800-680v400q0 33.33-23.33 56.67Q753.33-200 720-200H535Zm-280 0v-480h-94v-80h174v560h-80Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoTimer10;
