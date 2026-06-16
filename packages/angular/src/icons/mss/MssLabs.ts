import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-labs",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssLabs {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-80q-83 0-141.5-58.5T280-280v-360h-80v-240h560v240h-80v360q0 83-58.5 141.5T480-80ZM260-700h440v-120H260v120Zm220 560q51 0 88.5-31t48.5-79H480v-60h140v-60H480v-60h140v-60H480v-60h140v-90H340v360q0 58.33 40.83 99.17Q421.67-140 480-140ZM260-700v-120 120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssLabs;
