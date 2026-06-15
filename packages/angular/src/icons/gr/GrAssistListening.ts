import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-assist-listening",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrAssistListening {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M11,21 C11.76,21.67 12.42,22 13,22 C15,22 16,21 16,19 C16,17.67 16.67,16.33 18,15 C19.27,13.73 20,11.93 20,10 C20,6.13 16.87,3 13,3 C9.13,3 6,6.13 6,10 M17,10 C17,7.79 15.21,6 13,6 C10.79,6 9,7.79 9,10 M3,20 L8,14 L9,18 L14,12"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrAssistListening;
