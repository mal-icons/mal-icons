import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-play-card-star",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPlayCardStar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2"}],["path",{"d":"M8 6h0.01"}],["path",{"d":"M16 18h0.01"}],["path",{"d":"M11.75 14.11l-1.63 0.85a0.29 0.29 0 0 1 -0.42 -0.31l0.31 -1.81l-1.32 -1.28a0.29 0.29 0 0 1 0.16 -0.5l1.82 -0.26l0.82 -1.64a0.29 0.29 0 0 1 0.53 0l0.81 1.64l1.82 0.26a0.29 0.29 0 0 1 0.16 0.5l-1.32 1.28l0.31 1.81a0.29 0.29 0 0 1 -0.42 0.31l-1.63 -0.85"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPlayCardStar;
