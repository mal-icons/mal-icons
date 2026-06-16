import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-tune",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrTune {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 18c0 0.550.45 1 1 1h5v-2H4c-0.55 0-1 0.45-1 1zM3 6c0 0.550.45 1 1 1h9V5H4c-0.55 0-1 0.45-1 1zm10 14v-1h7c0.55 0 1-0.45 1-1s-0.45-1-1-1h-7v-1c0-0.55-0.45-1-1-1s-1 0.45-1 1v4c0 0.550.45 1 1 1s1-0.45 1-1zM7 10v1H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h3v1c0 0.550.45 1 1 1s1-0.45 1-1v-4c0-0.55-0.45-1-1-1s-1 0.45-1 1zm14 2c0-0.55-0.45-1-1-1h-9v2h9c0.55 0 1-0.45 1-1zm-5-3c0.55 0 1-0.45 1-1V7h3c0.55 0 1-0.45 1-1s-0.45-1-1-1h-3V4c0-0.55-0.45-1-1-1s-1 0.45-1 1v4c0 0.550.45 1 1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrTune;
