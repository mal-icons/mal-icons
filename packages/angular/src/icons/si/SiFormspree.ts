import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-formspree",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFormspree {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.33 2a2 2 0 0 1 2-2h17.33a2 2 0 0 1 2 2v2.86a2 2 0 0 1-2 2H3.33a2 2 0 0 1-2-2zm0 8.57a2 2 0 0 1 2-2h17.33a2 2 0 0 1 2 2v2.86a2 2 0 0 1-2 2H3.33a2 2 0 0 1-2-2zm2 6.57a2 2 0 0 0-2 2V22a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2.86a2 2 0 0 0-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFormspree;
