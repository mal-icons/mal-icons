import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-fence",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsFence {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 12v-2h-2V7l-3-3-2 2-2-2-2 2-2-2-3 3v3H3v2h2v2H3v2h2v4h14v-4h2v-2h-2v-2h2zm-5-5.17 1 1V10h-2V7.83l0.41-0.410.59-0.59zm-4 0 0.590.590.410.41V10h-2V7.83l0.41-0.410.59-0.59zM11 14v-2h2v2h-2zm2 2v2h-2v-2h2zM7 7.83l1-1 0.590.590.410.41V10H7V7.83zM7 12h2v2H7v-2zm0 4h2v2H7v-2zm10 2h-2v-2h2v2zm0-4h-2v-2h2v2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsFence;
