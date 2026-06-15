import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-document-pdf",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrDocumentPdf {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M5,9 L5,1 L19.5,1 L23,4.5 L23,23 L4,23 M18,1 L18,6 L23,6 M3,12 L3.25,12 L4.5,12 C6.5,12 6.75,13.25 6.75,14 C6.75,14.75 6.5,16 4.5,16 L3.25,16 L3.25,18 L3,18 L3,12 Z M9.5,18 L9.5,12 C9.5,12 10.45,12 11.21,12 C12.34,12 13.5,12.5 13.5,15 C13.5,17.5 12.34,18 11.21,18 C10.45,18 9.5,18 9.5,18 Z M16.5,19 L16.5,12 L20.5,12 M16.5,15.5 L19.5,15.5"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrDocumentPdf;
