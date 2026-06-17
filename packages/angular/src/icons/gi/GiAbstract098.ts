import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-abstract-098",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAbstract098 {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m115,21v94h-94v94h94v94h-94v94h94v94h94v-94h94v94h94v-94h94v-94h-94v-94h94v-94h-94v-94h-94v94h-94v-94h-94zm141,148.93c47.55,0 86.07,38.52 86.07,86.07s-38.52,86.07-86.07,86.07-86.07-38.52-86.07-86.07 38.52-86.07 86.07-86.07zm0,29.96c-30.98,0-56.11,25.13-56.11,56.11s25.13,56.11 56.11,56.11 56.11-25.13 56.11-56.11-25.13-56.11-56.11-56.11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAbstract098;
