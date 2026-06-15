import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-document-check",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiDocumentCheck {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M10.13 2.25h-4.5c-0.62 0-1.120.5-1.12 1.13v17.25c0 0.620.5 1.13 1.13 1.13h12.75c0.62 0 1.13-0.5 1.13-1.12v-9M10.13 2.25h0.38a9 9 0 0 1 9 9v0.38M10.13 2.25A3.38 3.38 0 0 1 13.5 5.63v1.5c0 0.620.5 1.13 1.13 1.13h1.5a3.38 3.38 0 0 1 3.38 3.38M9 15l2.25 2.25L15 12"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiDocumentCheck;
