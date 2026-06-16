import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-unfold-less-double",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfUnfoldLessDouble {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.58 1.41 15.16 0l-3.17 3.17L8.82 0 7.41 1.41 11.99 6z"}],["path",{"d":"M16.58 6.41 15.16 5l-3.17 3.17L8.82 5 7.41 6.41 11.99 11zM7.42 17.59 8.84 19l3.17-3.17L15.18 19l1.41-1.41L12.01 13z"}],["path",{"d":"M7.42 22.59 8.84 24l3.17-3.17L15.18 24l1.41-1.41L12.01 18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfUnfoldLessDouble;
