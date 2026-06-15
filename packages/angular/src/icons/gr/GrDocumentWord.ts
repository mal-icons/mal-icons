import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-document-word",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrDocumentWord {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M5,9 L5,1 L19.5,1 L23,4.5 L23,23 L4,23 M18,1 L18,6 L23,6 M14,12 L12.5,18.75 L12.25,18.75 L9.5,12 L9,12 L6.25,18.75 L6,18.75 L4.5,12 L4,12 L6,19 L6.5,19 L9,12.5 L9.5,12.5 L12,19 L12.5,19 L14.5,12 L14,12 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrDocumentWord;
