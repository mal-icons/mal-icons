import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-abstract-062",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAbstract062 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m247.33,24.08-41.86,8.23v138.06l-39.8-5.29v-124.84l-144.67,28.49 6.76,95.18 219.58,41.42v-181.24zm17.33,0v181.24l219.58-41.42 6.76-95.17-144.67-28.49v124.84l-39.95,5.29v-138.06l-41.71-8.22zm-235.59,157.6 3.97,55.52 165.09,45.83v96.64l-160.09-70.21 5.29,73.88 204.01,104.43v-264.96l-218.26-41.12zm454.14,0-218.55,41.27v264.96l204.3-104.58 5.14-73.73-159.8,70.06v-96.64l164.94-45.82 3.97-55.52z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAbstract062;
