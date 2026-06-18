import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-rabbitmq",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRabbitmq {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.04 9.6h-7.68a0.960.96 0 1-0.96-0.96V0.96a0.960.96 0 0-0.96-0.96H10.56a0.960.96 0 0-0.960.96V8.64a0.960.96 0 1-0.960.96H5.76a0.960.96 0 1-0.96-0.96V0.96A0.960.96 0 3.84 0H0.96a0.960.96 0 0-0.960.96v22.08A0.960.96 0 0.97 24h22.07a0.960.96 0 0.96-0.96V10.58a0.960.96 0 0-0.96-0.98zm-3.86 8.15a1.44 1.44 0 1-1.44 1.44h-1.92a1.44 1.44 0 1-1.44-1.44v-1.92a1.44 1.44 0 11.44-1.44h1.92a1.44 1.44 0 11.44 1.44z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRabbitmq;
