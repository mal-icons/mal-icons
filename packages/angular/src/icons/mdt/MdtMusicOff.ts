import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-music-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtMusicOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"10","cy":"17","r":"2","opacity":".3"}],["path",{"d":"M14 7h4V3h-6v4.61l2 2zm-2 3.44L4.41 2.86 3 4.27l9 9v0.28c-0.94-0.54-2.1-0.75-3.33-0.32-1.340.48-2.37 1.67-2.61 3.07a4.01 4.01 0 0 0 4.59 4.65c1.96-0.31 3.35-2.11 3.35-4.1v-1.58L19.73 21l1.41-1.41L12 10.44zM10 19c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtMusicOff;
