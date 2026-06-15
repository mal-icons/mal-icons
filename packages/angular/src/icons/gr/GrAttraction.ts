import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-attraction",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrAttraction {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M13,2 L14.5,2.5 L13,3 L13,2 Z M14,18 L15,23 L13,23 L14,18 Z M14,16.5 L16,23 L12,23 L14,16.5 Z M12,6 L21,11 L21,13 L3,13 L3,11 L12,6 Z M4.5,13 L19.5,13 C19.5,17.17 21,23 21,23 L3,23 C3,23 4.5,17.17 4.5,13 Z M4.5,13 L19.5,13 C19.5,17.17 21,23 21,23 L3,23 C3,23 4.5,17.17 4.5,13 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrAttraction;
