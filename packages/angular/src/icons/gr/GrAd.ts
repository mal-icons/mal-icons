import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-ad",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrAd {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M10,10 L14,10 L14,14 L10,14 L10,10 Z M14,18 L10,18 C7.79,18 6,16.21 6,14 L6,10 C6,7.79 7.79,6 10,6 L10,6 L14,6 C16.21,6 18,7.79 18,10 L18,14 M14,22 L10,22 C5.58,22 2,18.42 2,14 L2,10 C2,5.58 5.58,2 10,2 L10,2 L14,2 C18.42,2 22,5.58 22,10 L22,14"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrAd;
