import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-party-mode",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPartyMode {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-266q72 0 121-50.5T650-440q0-5-0.5-8t-2.5-8h-60q-1 5 1 8t2 8q0 45-33 79.5T480-326H351q18 27 53.5 43.5T480-266ZM310-416h55q1-5 3-12t2-12q0-44 32.5-75t77.5-31h131q-23-27-57.5-43.5T480-606q-73 0-121.5 47T310-440q0 5 0.5 12t-0.5 12ZM80-120v-633h207l73-87h240l73 87h207v633H80Zm60-60h680v-513H140v513Zm340-257Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPartyMode;
