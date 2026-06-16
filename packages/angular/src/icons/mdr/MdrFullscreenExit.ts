import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-fullscreen-exit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFullscreenExit {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 16h2v2c0 0.550.45 1 1 1s1-0.45 1-1v-3c0-0.55-0.45-1-1-1H6c-0.55 0-1 0.45-1 1s0.45 1 1 1zm2-8H6c-0.55 0-1 0.45-1 1s0.45 1 1 1h3c0.55 0 1-0.45 1-1V6c0-0.55-0.45-1-1-1s-1 0.45-1 1v2zm7 11c0.55 0 1-0.45 1-1v-2h2c0.55 0 1-0.45 1-1s-0.45-1-1-1h-3c-0.55 0-1 0.45-1 1v3c0 0.550.45 1 1 1zm1-11V6c0-0.55-0.45-1-1-1s-1 0.45-1 1v3c0 0.550.45 1 1 1h3c0.55 0 1-0.45 1-1s-0.45-1-1-1h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFullscreenExit;
