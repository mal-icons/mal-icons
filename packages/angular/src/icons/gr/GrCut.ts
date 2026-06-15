import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-cut",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrCut {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M23,4 L8,16 L23,4 Z M23,20 L8,8 L23,20 Z M5,9 C6.66,9 8,7.66 8,6 C8,4.34 6.66,3 5,3 C3.34,3 2,4.34 2,6 C2,7.66 3.34,9 5,9 Z M5,21 C6.66,21 8,19.66 8,18 C8,16.34 6.66,15 5,15 C3.34,15 2,16.34 2,18 C2,19.66 3.34,21 5,21 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrCut;
