import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-odido",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiOdido {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.92 15.08a3.08 3.08 0 1 0 0-6.15 3.08 3.08 0 0 0 0 6.15m-17.85 0a3.08 3.08 0 1 0 0-6.15 3.08 3.08 0 0 0 0 6.15m3.69 0a3.08 3.08 0 0 0 0-6.15zm10.46 0a3.08 3.08 0 0 1 0-6.15zm-3.69-6.15h-3.08v6.15h3.08z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiOdido;
