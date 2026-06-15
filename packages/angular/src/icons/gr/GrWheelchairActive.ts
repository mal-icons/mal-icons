import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-wheelchair-active",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrWheelchairActive {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M7,6 L10,3 L17,6 L17,8 L14,11 M9,22 C12.31,22 15,19.31 15,16 C15,12.69 12.31,10 9,10 C5.69,10 3,12.69 3,16 C3,19.31 5.69,22 9,22 Z M9,17 C9.55,17 10,16.55 10,16 C10,15.45 9.55,15 9,15 C8.45,15 8,15.45 8,16 C8,16.55 8.45,17 9,17 Z M14,12 L19,15 L17,21 M19,4 C19.55,4 20,3.55 20,3 C20,2.45 19.55,2 19,2 C18.45,2 18,2.45 18,3 C18,3.55 18.45,4 19,4 Z M13,10 L17,6 M11,10 L15,6"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrWheelchairActive;
