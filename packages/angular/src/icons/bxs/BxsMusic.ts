import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-music",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsMusic {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 18.57c2.21 0 4-1.79 4-4V4.43L19 7.7v7.43a3.95 3.95 0 0 0-2-0.56c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7a11 0 0 0-0.66-0.94l-11-4A11 0 0 0 8 3v8.13a3.95 3.95 0 0 0-2-0.56c-2.21 0-4 1.79-4 4s1.79 4 4 4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsMusic;
