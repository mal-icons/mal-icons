import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-ffmpeg",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFfmpeg {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.72 17.91V6.5l-0.53-0.49L9.05 18.52l-1.29-0.06L24 1.53l-0.33-0.95-11.93 1-5.75 6.6v-0.23l4.7-5.39-1.38-0.77-9.110.77v2.85l1.910.46v0.01l0.19-0.01-0.560.66v10.6c0.61-0.13 1.22-0.24 1.83-0.36L14.12 5.22l0.83-0.04L0 21.44l9.670.82 1.35-0.77 6.82-6.74v2.15l-5.72 5.57 11.260.950.35-0.94v-3.16l-3.29-0.18c0.43-0.40.86-0.82 1.28-1.23z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFfmpeg;
