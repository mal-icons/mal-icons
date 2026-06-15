import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-tag",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrTag {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M11.71,22.29 C11.32,22.68 10.69,22.69 10.3,22.3 L1.7,13.7 C1.31,13.31 1.32,12.68 1.71,12.29 L13,1 L23,1 L23,11 L11.71,22.29 Z M6,12 L12,18 M9,9 L15,15 M17,6 C17,5.45 17.45,5 18,5 C18.55,5 19,5.45 19,6 C19,6.55 18.55,7 18,7 C17.45,7 17,6.55 17,6"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrTag;
