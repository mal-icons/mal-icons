import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-currency-hryvnia",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCurrencyHryvnia {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 7a2.64 2.64 0 0 1 2.56 -2h3.38a2.64 2.64 0 0 1 2.56 2a2.57 2.57 0 0 1 -1.34 2.92l-5.88 2.94a3.34 3.34 0 0 0 -1.78 3.64a3.11 3.11 0 0 0 3.05 2.5h2.89a2.64 2.64 0 0 0 2.56 -2"}],["path",{"d":"M6 10h12"}],["path",{"d":"M6 14h12"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCurrencyHryvnia;
