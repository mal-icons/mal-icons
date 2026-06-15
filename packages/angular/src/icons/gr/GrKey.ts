import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-key",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrKey {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M10,13 L10,16 L13,16 L13,19 L16,19 L16,21 L18,23 L23,23 L23,19 L12.74,8.74 C12.91,8.19 13,7.6 13,7 C13,3.69 10.31,1 7,1 C3.69,1 1,3.69 1,7 C1,10.31 3.69,13 7,13 C7.88,13 8.72,12.81 9.47,12.47 L10,13 Z M6,7 C5.45,7 5,6.55 5,6 C5,5.45 5.45,5 6,5 C6.55,5 7,5.45 7,6 C7,6.55 6.55,7 6,7 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrKey;
