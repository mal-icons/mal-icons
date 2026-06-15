import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-drag",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrDrag {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M15,5 L17,5 L17,3 L15,3 L15,5 Z M7,5 L9,5 L9,3 L7,3 L7,5 Z M15,13 L17,13 L17,11 L15,11 L15,13 Z M7,13 L9,13 L9,11 L7,11 L7,13 Z M15,21 L17,21 L17,19 L15,19 L15,21 Z M7,21 L9,21 L9,19 L7,19 L7,21 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrDrag;
