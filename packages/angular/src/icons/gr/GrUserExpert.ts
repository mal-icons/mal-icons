import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-user-expert",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrUserExpert {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M8,11 C10.76,11 13,8.76 13,6 C13,3.24 10.76,1 8,1 C5.24,1 3,3.24 3,6 C3,8.76 5.24,11 8,11 Z M14.64,15.7 C14.31,14.67 13.75,13.76 13.02,13.02 C11.77,11.76 10.01,11 8,11 C4,11 1,14 1,18 L1,23 L11,23 M12,18.82 L16.19,22 L23,13"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrUserExpert;
