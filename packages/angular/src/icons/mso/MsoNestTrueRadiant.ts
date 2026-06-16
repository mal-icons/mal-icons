import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-nest-true-radiant",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoNestTrueRadiant {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M232.77-120Q186-120 153-152.67 120-185.33 120-232v-408h60v408q0 22.1 15.5 37.05Q211-180 233.07-180t37-14.95Q285-209.9 285-232v-495q0-47.08 32.94-80.04 32.94-32.96 80-32.96t79.56 32.96Q510-774.08 510-727v495q0 22.1 15.5 37.05Q541-180 563.07-180t37-14.95Q615-209.9 615-232v-495q0-47.08 32.94-80.04 32.94-32.96 80-32.96t79.56 32.96Q840-774.08 840-727v407h-60v-407q0-22-14.93-37.5t-37-15.5q-22.07 0-37.57 15.5T675-727v495q0 46.67-32.73 79.33Q609.53-120 562.77-120 516-120 483-152.67 450-185.33 450-232v-495q0-22-14.93-37.5t-37-15.5q-22.07 0-37.57 15.5T345-727v495q0 46.67-32.73 79.33Q279.53-120 232.77-120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoNestTrueRadiant;
