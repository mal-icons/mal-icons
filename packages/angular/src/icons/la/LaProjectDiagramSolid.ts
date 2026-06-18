import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-project-diagram-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaProjectDiagramSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 3 6 L 3 14 L 8.63 14 L 12 19.91 L 12 27 L 20 27 L 20 19 L 13.78 19 L 10.94 14 L 11 14 L 11 11 L 21 11 L 21 14 L 29 14 L 29 6 L 21 6 L 21 9 L 11 9 L 11 6 L 3 6 z M 5 8 L 9 8 L 9 12 L 5 12 L 5 8 z M 23 8 L 27 8 L 27 12 L 23 12 L 23 8 z M 14.42 21 L 18 21 L 18 25 L 14 25 L 14 21.24 L 14.42 21 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaProjectDiagramSolid;
