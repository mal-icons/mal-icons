import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-currency-iranian-rial",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCurrencyIranianRial {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 4v9a2 2 0 0 1 -2 2h-1a3 3 0 0 1 -3 -3v-1"}],["path",{"d":"M12 5v8a1 1 0 0 0 1 1h1a2 2 0 0 0 2 -2v-1"}],["path",{"d":"M21 14v1.1a5 5 0 0 1 -3.79 4.85l-0.21 0.05"}],["path",{"d":"M11 18h0.01"}],["path",{"d":"M14 18h0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCurrencyIranianRial;
