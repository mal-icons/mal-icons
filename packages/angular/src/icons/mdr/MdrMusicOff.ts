import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-music-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrMusicOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 9.61V7h2c1.1 0 2-0.9 2-2s-0.9-2-2-2h-3c-0.55 0-1 0.45-1 1v3.61l2 2zM5.12 3.56a11 0 1 0-1.41 1.41l8.29 8.3v0.28c-0.94-0.54-2.1-0.75-3.33-0.32-1.340.48-2.37 1.67-2.61 3.07a4.01 4.01 0 0 0 4.59 4.65c1.96-0.31 3.35-2.11 3.35-4.1v-1.58l5.02 5.02a11 0 1 0 1.41-1.41L5.12 3.56z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrMusicOff;
