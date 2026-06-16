import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-arrow-right-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrArrowRightAlt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M540-263q-9-9-9-21.5t8-20.5l147-147H190q-13 0-21.5-8.5T160-482q0-13 8.5-21.5T190-512h496L538-660q-9-9-8.5-21t9.5-21q9-8 21.5-8t20.5 8l199 199q5 5 7 10t2 11q0 6-2 11t-7 10L582-263q-9 9-21 9t-21-9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrArrowRightAlt;
