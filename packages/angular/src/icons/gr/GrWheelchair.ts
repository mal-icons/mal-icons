import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-wheelchair",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrWheelchair {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M10,3 L10,12 L17,12 L19,18 L21,18 M15,9 L9,9 C5.69,9 3,11.69 3,15 C3,18.31 5.69,21 9,21 C12.31,21 15,18.31 15,15 M11,4 C11.55,4 12,3.55 12,3 C12,2.45 11.55,2 11,2 C10.45,2 10,2.45 10,3 C10,3.55 10.45,4 11,4 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrWheelchair;
