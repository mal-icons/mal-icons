import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-play-lesson",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPlayLesson {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 11c0.34 0 0.670.03 1 0.08V4c0-1.1-0.9-2-2-2H5c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h7.26A7 7 0 0 1 18 11zm-10.24-0.45a0.50.5 0 0 1-0.76-0.43V4h5v6.12a0.50.5 0 0 1-0.760.43L9.5 9.5l-1.74 1.05z"}],["path",{"d":"M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-1.25 6.6v-3.2c0-0.390.43-0.630.76-0.42l2.56 1.6c0.310.20.310.65 0 0.85l-2.56 1.6c-0.330.2-0.76-0.04-0.76-0.43z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPlayLesson;
