import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-tasks",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrTasks {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M1,3 L23,3 L23,7 L1,7 L1,3 Z M1,10 L23,10 L23,14 L1,14 L1,10 Z M1,17 L23,17 L23,21 L1,21 L1,17 Z M1,4 L16,4 L16,6 L1,6 L1,4 Z M1,11 L6,11 L6,13 L1,13 L1,11 Z M1,18 L11,18 L11,20 L1,20 L1,18 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrTasks;
