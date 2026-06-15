import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-link-previous",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrLinkPrevious {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M2,12 L22,12 M13,3 L22,12 L13,21","transform":"matrix(-1 0 0 1 24 0)"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrLinkPrevious;
