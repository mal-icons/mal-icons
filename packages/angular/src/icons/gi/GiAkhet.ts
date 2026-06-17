import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-akhet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAkhet {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 108c-65.8 0-119 53.2-119 119s53.2 119 119 119 119-53.2 119-119-53.2-119-119-119zM72 146c-11 0-22.24 5.3-31.3 17.4C31.64 175.5 25 194.5 25 221v218h462V221c0-26.5-6.6-45.5-15.7-57.6C462.2 151.3 451 146 440 146s-22.2 5.3-31.3 17.4c-9.1 12.1-15.7 31.1-15.7 57.6v9c-1.6 74.2-62.4 134-137 134s-135.4-59.8-137-134v-9c0-26.5-6.6-45.5-15.7-57.6C94.24 151.3 83 146 72 146z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAkhet;
