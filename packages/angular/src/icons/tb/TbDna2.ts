import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-dna-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDna2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 3v1c-0.01 3.35 -1.68 6.02 -5.01 8.01c-3.33 1.99 3.34 -2 0.01 -0.01c-3.33 1.99 -5 4.66 -5.01 8.01v1"}],["path",{"d":"M17 21.01v-1c-0.01 -3.35 -1.68 -6.02 -5.01 -8.01c-3.33 -1.99 3.34 2 0.01 0.01c-3.33 -1.99 -5 -4.66 -5.01 -8.01v-1"}],["path",{"d":"M7 4h10"}],["path",{"d":"M7 20h10"}],["path",{"d":"M8 8h8"}],["path",{"d":"M8 16h8"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDna2;
