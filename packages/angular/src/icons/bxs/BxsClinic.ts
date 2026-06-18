import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-clinic",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsClinic {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.74 12.33-9-10c-0.38-0.42-1.11-0.42-1.49 0l-9 10a11 0 0 0-0.17 1.08c0.160.360.520.590.910.59h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a11 0 0 0 0.74-1.67zM16 15h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsClinic;
