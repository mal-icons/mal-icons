import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-hermes",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHermes {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.82 4.52-1.05 4.15h2.17L24 4.52M19.41 14.04h2.17l1.04-4.08h-2.18m-2.41 9.52h2.15l1.06-4.15h-2.16m0.19-5.38H5.55v0.92l3.34 3.16h9.35m2.41-9.52H0v1.12l3.21 3.03H19.6m-8.37 7.58 3.43 3.24h2.21l1.05-4.15h-6.68"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHermes;
