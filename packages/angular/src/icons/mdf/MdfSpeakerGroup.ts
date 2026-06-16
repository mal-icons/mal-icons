import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-speaker-group",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfSpeakerGroup {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.2 1H9.8C8.81 1 8 1.81 8 2.8v14.4c0 0.990.81 1.79 1.8 1.79l8.40.01c0.99 0 1.8-0.81 1.8-1.8V2.8c0-0.99-0.81-1.8-1.8-1.8zM14 3c1.1 0 2 0.89 2 2s-0.9 2-2 2-2-0.89-2-2 0.9-2 2-2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"}],["circle",{"cx":"14","cy":"12.5","r":"2.5"}],["path",{"d":"M6 5H4v16a2 2 0 0 0 2 2h10v-2H6V5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfSpeakerGroup;
