import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-alarm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrAlarm {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M21,13 C21,17.97 16.97,22 12,22 C7.03,22 3,17.97 3,13 C3,8.03 7.03,4 12,4 C16.97,4 21,8.03 21,13 L21,13 Z M5.5,19.5 L2,23 L5.5,19.5 Z M18.5,19.5 L22,23 L18.5,19.5 Z M9,4 C8.29,2.91 6.88,2 5,2 C2.9,2 1,3.9 1,6 C1,7.88 1.91,9.29 3,10 M21,10 C22.09,9.29 23,7.88 23,6 C23,3.9 21.1,2 19,2 C17.12,2 15.71,2.91 15,4 M12,8 L12,13 L15,16"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrAlarm;
