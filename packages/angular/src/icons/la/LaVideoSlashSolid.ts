import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-video-slash-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaVideoSlashSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 3.72 2.28 L 2.28 3.72 L 28.28 29.72 L 29.72 28.28 L 24 22.56 L 24 20.63 L 30 23.63 L 30 8.38 L 24 11.38 L 24 8 L 9.44 8 Z M 2 8 L 2 24 L 20 24 L 18 22 L 4 22 L 4 10 L 6 10 L 4 8 Z M 11.44 10 L 22 10 L 22 20.56 Z M 28 11.63 L 28 20.38 L 24 18.38 L 24 13.63 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaVideoSlashSolid;
