import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-nearby-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssNearbyOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m733-315-54-54 112-112-313-313-112 112-54-55 167-167 420 423-166 166ZM479-59 57-482l169-169L58-820l42-42L864-98l-42 42-174-174L479-59Zm-1-109 115-115-45-45-70 70-223-223 70-70-45-45-115 115 313 313Zm156-246L411-637l67-67 223 223-67 67Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssNearbyOff;
