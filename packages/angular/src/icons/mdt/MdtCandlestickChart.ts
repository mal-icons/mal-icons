import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-candlestick-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtCandlestickChart {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 4H7v2H5v12h2v2h2v-2h2V6H9V4zm0 12H7V8h2v8z"}],["path",{"d":"M7 8h2v8H7zm8 2h2v3h-2z","opacity":".3"}],["path",{"d":"M19 8h-2V4h-2v4h-2v7h2v5h2v-5h2V8zm-2 5h-2v-3h2v3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtCandlestickChart;
