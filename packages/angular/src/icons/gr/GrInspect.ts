import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-inspect",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrInspect {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M5.5,21 C7.99,21 10,18.99 10,16.5 C10,14.01 7.99,12 5.5,12 C3.01,12 1,14.01 1,16.5 C1,18.99 3.01,21 5.5,21 Z M1,16 L1,7 L1,6.5 C1,4.01 3.01,2 5.5,2 L6,2 M23,16 L23,7 L23,6.5 C23,4.01 20.99,2 18.5,2 L18,2 M18.5,21 C20.99,21 23,18.99 23,16.5 C23,14.01 20.99,12 18.5,12 C16.01,12 14,14.01 14,16.5 C14,18.99 16.01,21 18.5,21 Z M10,17 C10,17 10,15 12,15 C14,15 14,17 14,17"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrInspect;
