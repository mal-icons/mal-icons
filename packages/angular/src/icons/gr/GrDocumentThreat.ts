import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-document-threat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrDocumentThreat {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M5,7 L5,1 L19.5,1 L23,4.5 L23,23 L17,23 M18,1 L18,6 L23,6 M9,23 C11.76,23 14,20.76 14,18 C14,15.24 11.76,13 9,13 C6.24,13 4,15.24 4,18 C4,20.76 6.24,23 9,23 Z M9,11 C9,11 9,10 9,9 C9,8 9,7 11,7 C13,7 13,8 13,9 C13,10 13,11 15,11 C17,11 17,11 17,11 M8,11 L10,11 L10,13 L8,13 L8,11 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrDocumentThreat;
