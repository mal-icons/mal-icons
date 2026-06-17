import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-trash-can",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiTrashCan {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M199 103v50h-78v30h270v-30h-78v-50H199zm18 18h78v32h-78v-32zm-79 80l30.11 286h175.79l30.1-286H138zm62.34 13.38l0.64 8.98 16 224 0.64 8.98-17.96 1.28-0.64-8.98-16-224-0.64-8.98 17.96-1.28zm111.33 0l17.95 1.28-0.64 8.98-16 224-0.64 8.98-17.96-1.280.64-8.98 16-224 0.64-8.98zM247 215h18v242h-18V215z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiTrashCan;
