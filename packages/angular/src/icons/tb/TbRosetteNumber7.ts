import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-rosette-number-7",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbRosetteNumber7 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 8h4l-2 8"}],["path",{"d":"M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -0.64l0.7 -0.7a2.2 2.2 0 0 1 3.12 0l0.7 0.7c0.41 0.41 0.97 0.64 1.55 0.64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 0.58 0.23 1.14 0.64 1.55l0.7 0.7a2.2 2.2 0 0 1 0 3.12l-0.7 0.7a2.2 2.2 0 0 0 -0.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 0.64l-0.7 0.7a2.2 2.2 0 0 1 -3.12 0l-0.7 -0.7a2.2 2.2 0 0 0 -1.55 -0.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -0.64 -1.55l-0.7 -0.7a2.2 2.2 0 0 1 0 -3.12l0.7 -0.7a2.2 2.2 0 0 0 0.64 -1.55v-1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbRosetteNumber7;
