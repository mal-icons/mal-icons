import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-turn-sharp-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrTurnSharpLeft {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M679.83-120Q667-120 658.5-128.62T650-150v-220H310q-24.75 0-42.37-17.62T250-430v-296l-69 69q-9 9-21 9t-21-9q-9-9-9-21t9-21l120-120q5-5 10.13-6.5 5.13-1.5 11-1.5Q286-827 291-825.5q5 1.5 10 6.5l120 120q9 9 9 21t-9 21q-9 9-21 9t-21-9l-69-69v296h340q24.75 0 42.38 17.63T710-370v220q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrTurnSharpLeft;
