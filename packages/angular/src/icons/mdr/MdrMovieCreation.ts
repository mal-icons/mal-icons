import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-movie-creation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrMovieCreation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m18 4 1.82 3.64c0.080.16-0.040.36-0.220.36h-1.98c-0.38 0-0.73-0.21-0.89-0.55L15 4h-2l1.82 3.64c0.080.16-0.040.36-0.220.36h-1.98c-0.38 0-0.73-0.21-0.89-0.55L10 4H8l1.82 3.64c0.080.16-0.040.36-0.220.36H7.62c-0.38 0-0.73-0.21-0.9-0.55L5 4H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V5c0-0.55-0.45-1-1-1h-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrMovieCreation;
