import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-binance",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandBinance {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 8l2 2l4 -4l4 4l2 -2l-6 -6l-6 6"}],["path",{"d":"M6 16l2 -2l4 4l3.5 -3.5l2 2l-5.5 5.5l-6 -6"}],["path",{"d":"M20 10l2 2l-2 2l-2 -2l2 -2"}],["path",{"d":"M4 10l2 2l-2 2l-2 -2l2 -2"}],["path",{"d":"M12 10l2 2l-2 2l-2 -2l2 -2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandBinance;
