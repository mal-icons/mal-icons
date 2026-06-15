import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-halt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrHalt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M8,23 C10,23 13,23 15,23 C18,23 19,21 19,18 L19,6 C19,4 18,4 17.5,4 C17,4 16,4 16,6 C16,8 16,13 16,13 C16,13 16,5 16,4 C16,3 16,2 14.5,2 C13,2 13,3 13,4 C13,5 13,13 13,13 C13,13 13,4 13,3 C13,2 13,1 11.5,1 C10,1 10,2 10,3 L10,13 L10,4 C10,3 10.03,2 8.5,2 C7,2 7,3 7,4 L7,18 L7,14 C7,13 6.45,12 5,12 C5,12 4,12 4,12 C4,12 4,14.04 4,18 C4,21.96 6,23.02 8,23 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrHalt;
