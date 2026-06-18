import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-key",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbKey {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.56 3.84l3.6 3.6a2.88 2.88 0 0 1 0 4.07l-2.64 2.64a2.88 2.88 0 0 1 -4.07 0l-0.3 -0.3l-6.56 6.56a2 2 0 0 1 -1.24 0.58l-0.17 0.01h-1.17a1 1 0 0 1 -0.99 -0.88l-0.01 -0.12v-1.17a2 2 0 0 1 0.47 -1.28l0.12 -0.13l0.41 -0.41h2v-2h2v-2l2.14 -2.14l-0.3 -0.3a2.88 2.88 0 0 1 0 -4.07l2.64 -2.64a2.88 2.88 0 0 1 4.07 0"}],["path",{"d":"M15 9h0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbKey;
