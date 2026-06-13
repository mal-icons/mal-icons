import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-flash-off-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoFlashOffSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["rect",{"x":"240.44","y":"0.03","width":"31.11","height":"511.95","transform":"translate(-106.04 256) rotate(-45)"}],["polygon",{"points":"80 304 224 304 192 496 300.18 366.18 151.82 217.82 80 304"}],["polygon",{"points":"432 208 288 208 320 16 211.82 145.82 360.18 294.18 432 208"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoFlashOffSharp;
