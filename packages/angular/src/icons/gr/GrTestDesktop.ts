import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-test-desktop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrTestDesktop {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M18.22,1 L23,1 L23,19 L1,19 L1,1 L6,1 M17,10 C13,7 11,13 7,10 M5,23 L19,23 L5,23 Z M10,1 L10,5.77 L5,12.96 L5,15 L19,15 L19,12.96 L14,5.77 L14,1 M8,1 L16,1 L8,1 Z M8,23 L16,23 L16,19 L8,19 L8,23 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrTestDesktop;
