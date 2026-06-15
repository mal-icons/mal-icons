import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-user-add",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrUserAdd {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M5,24 L5,19 M11,24 L11,19 M1,24 L1,18 C1,13.03 4.13,11 8,11 C11.87,11 15,13 15,18 L15,24 M8,11 C10.76,11 13,8.76 13,6 C13,3.24 10.76,1 8,1 C5.24,1 3,3.24 3,6 C3,8.76 5.24,11 8,11 Z M16,11 L24,11 M20,7 L20,15"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrUserAdd;
