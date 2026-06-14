import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-alphabetical-sorting-az",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcAlphabeticalSortingAz {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["polygon",{"fill":"#546E7A","points":"38,33 38,5 34,5 34,33 28,33 36,43 44,33"}],["path",{"fill":"#2196F3","d":"M16.8,17.2h-5.3l-1.1,3H6.9L12.6,5h2.9l5.7,15.2h-3.2L16.8,17.2z M12.2,14.5H16l-1.9-5.7L12.2,14.5z"}],["path",{"fill":"#2196F3","d":"M12.4,40.5H20V43H8.4v-1.9L16,30.3H8.4v-2.5h11.4v1.7L12.4,40.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcAlphabeticalSortingAz;
