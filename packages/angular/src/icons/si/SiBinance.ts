import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-binance",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBinance {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.62 13.92l2.72 2.72-7.35 7.35-7.35-7.35 2.72-2.72 4.64 4.66 4.64-4.66zm4.64-4.64L24 12l-2.72 2.72L18.57 12l2.69-2.72zm-9.270l2.72 2.69-2.72 2.72v0L9.27 12l2.72-2.72zm-9.270L5.41 12l-2.69 2.69L0 12l2.72-2.72zM11.990.01l7.35 7.33-2.72 2.72-4.64-4.64-4.64 4.66-2.72-2.72 7.35-7.35z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBinance;
