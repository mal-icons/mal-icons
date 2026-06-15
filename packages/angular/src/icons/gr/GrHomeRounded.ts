import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-home-rounded",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrHomeRounded {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke":"currentColor","stroke-width":"2","d":"M1 22V9.76a2 2 0 1.85-1.64l9.57-6.72a1 1 0 11.15 0l9.57 6.72A2 2 0 123 9.76V22a1 1 0 1-1 1h-5.33a1 1 0 1-1-1v-5.67a1 1 0 0-1-1H9.33a1 1 0 0-1 1V22a1 1 0 1-1 1H2a1 1 0 1-1-1z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrHomeRounded;
