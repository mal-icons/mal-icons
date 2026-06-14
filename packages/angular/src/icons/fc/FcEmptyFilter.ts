import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-empty-filter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcEmptyFilter {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["polygon",{"fill":"#FFCC80","points":"29,23 19,23 7,9 41,9"}],["polygon",{"fill":"#FFCC80","points":"29,38 19,44 19,23 29,23"}],["path",{"fill":"#FFCC80","d":"M41.5,9h-35C5.7,9,5,8.3,5,7.5v0C5,6.7,5.7,6,6.5,6h35C42.3,6,43,6.7,43,7.5v0C43,8.3,42.3,9,41.5,9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcEmptyFilter;
