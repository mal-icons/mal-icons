import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-barefoot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBarefoot {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M44.16 19.47c40.24 103.67 45.06 254.21 5.22 367.28-28.32 80.38 9.55 105.94 66.25 105.94l31.370.28c63.57-40.22 127.15-23.41 190.72 1.81l110.78 1.03c77.71 0 54.11-80.83-18.59-69.12L278.53 349.5C212.12 277.39 222.04 85.35 241.41 20l-197.25-0.53z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBarefoot;
