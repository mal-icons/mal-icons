import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-union-jack",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiUnionJack {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M21.58 18L171.02 167.44v3.58h-44.69L18 61.84v25.56l82.98 83.63H18v32h185.02V18h-32v85.44L85.58 18zm286.06 0v185.02H494v-32h-86.77L494 84.24v-64L343.23 171.02h-3.58v-44.69L448.83 18h-25.56l-83.63 82.98V18zM18 309.29v32h85.44L18 426.73v64l149.44-149.44h3.58v44.69L62.15 494h25.56l83.31-82.66V494h32V309.29zm289.64 0V494h32v-85.12L424.77 494h64L339.64 344.88v-3.58h44.69L494 451.83V426.27l-84.31-84.98H494v-32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiUnionJack;
