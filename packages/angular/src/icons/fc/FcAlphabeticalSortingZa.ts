import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-alphabetical-sorting-za",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcAlphabeticalSortingZa {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["path",{"fill":"#2196F3","d":"M16.8,40h-5.3l-1.1,3H6.9l5.7-15.2h2.9L21.1,43h-3.2L16.8,40z M12.2,37.3H16l-1.9-5.7L12.2,37.3z"}],["path",{"fill":"#2196F3","d":"M12.4,17.7H20v2.5H8.4v-1.9L16,7.5H8.4V5h11.4v1.7L12.4,17.7z"}],["polygon",{"fill":"#546E7A","points":"38,33 38,5 34,5 34,33 28,33 36,43 44,33"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcAlphabeticalSortingZa;
