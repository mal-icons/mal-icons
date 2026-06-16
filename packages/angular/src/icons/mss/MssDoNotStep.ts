import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-do-not-step",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDoNotStep {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m713-319-42-42 207-207 42 42-207 207Zm-70-70-42-42 165-165-200-200-165 165-42-42 207-207 284 284-207 207ZM806-56 558-304 424-170H30v-163q42-16 75.5-34.5T171-408l58 58 23-23-54-55q8-7 17.5-15.5T234-463l54 54 23-23-56-56q9-11 17.5-22t11.5-21l63 63 23-23L56-805l42-43L848-98l-42 42ZM92-230h307l117-117-104-104-186 186-63-63q-21 12-37.5 20T92-293v63Zm320-221Zm103-66Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDoNotStep;
