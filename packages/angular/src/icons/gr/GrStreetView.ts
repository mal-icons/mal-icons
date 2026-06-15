import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-street-view",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrStreetView {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M16,5 C16,7.21 14.21,9 12,9 C9.79,9 8,7.21 8,5 C8,2.79 9.79,1 12,1 C14.21,1 16,2.79 16,5 L16,5 Z M15,23 L15,17 L18,17 L18,15 C18,11.66 15.24,9.03 12,9 C8.79,9.03 6,11.66 6,15 L6,17 L9,17 L9,23 M3.5,23 L20.5,23 L3.5,23 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrStreetView;
