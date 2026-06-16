import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-sports-martial-arts",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfSportsMartialArts {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m19.8 2-8.2 6.7-1.21-1.04 3.6-2.08L9.41 1 8 2.41l2.74 2.74L5 8.46l-1.19 4.29L6.27 17 8 16l-2.03-3.520.35-1.3L9.5 13l0.5 9h2l0.5-10L21 3.4z"}],["circle",{"cx":"5","cy":"5","r":"2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfSportsMartialArts;
